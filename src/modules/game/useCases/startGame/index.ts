import inquirer from 'inquirer';
import { AggregateRoot } from '../../../../shared/domain/AggregateRoot';
import { DomainEvents } from '../../../../shared/domain/events/DomainEvents';
import { Character } from '../../../characters/domain/character';
import { CharacterFactory } from '../../../characters/useCases/factories';

interface GameProps {
  character: Character;
  enemies: Character[];
}

export class Game extends AggregateRoot<GameProps> {
  public static start() {
    const character = new CharacterFactory().create({
      health: 100,
      name: 'stuven',
    });
    const enemies = [
      new CharacterFactory().create({ health: 20, name: 'Sage Monk' }),
      new CharacterFactory().create({ health: 2, name: 'Junior Monk' }),
    ];
    return new Game({ character, enemies });
  }
  get isActive() {
    return this.gameState.character.health.current > 0;
  }
  get gameState() {
    return this.props;
  }
  public async gameStep() {
    const enemy = await this.findEnemy(this.gameState);
    this.gameState.character.attack(enemy);
    this.dispatchEvents();
    this.aliveEnemies.forEach((enemy) => {
      enemy.attack(this.gameState.character);
      this.dispatchEvents();
    });
  }
  private get aliveEnemies() {
    return this.gameState.enemies.filter((enemy) => enemy.health.current > 0);
  }
  private dispatchEvents() {
    [this, this.gameState.character, ...this.gameState.enemies].forEach((aggRoot) => {
      DomainEvents.dispatchEventsForAggregate(aggRoot.id);
    });
  }

  private async findEnemy(gameState: this['gameState']) {
    const enemies = gameState.enemies;

    const choices = enemies.filter((enemy) => enemy.health.current > 0).map((monk) => monk.props.name);

    const enemyDescriptions = enemies.map((monk) => monk.description).join('\n');

    const answer = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'name',
        message: `\n\nYou see \n${enemyDescriptions}\n\n`,
        choices,
      },
    ]);
    const enemy = enemies.find((enemy) => {
      return enemy.name === answer.name[0];
    });
    if (!enemy) {
      console.log(`Invalid Selection ${JSON.stringify(answer)}`);
      return await this.findEnemy(gameState)
    }
    return enemy;
  }
}
