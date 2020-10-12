import inquirer from 'inquirer';
import { AggregateRoot } from '../../../../shared/domain/AggregateRoot';
import { DomainEvents } from '../../../../shared/domain/events/DomainEvents';
import { Character } from '../../../characters/domain/character';
import { CharacterFactory } from '../../../characters/useCases/factories';
import { Map } from '../domain/map';
import { Location } from '../domain/location';

interface GameProps {
  character: Character;
  map: Map;
}

export class Game extends AggregateRoot<GameProps> {
  public static start() {
    const character = new CharacterFactory().create({
      health: 100,
      name: 'stuven',
    });

    return new Game({
      character,
      map: new Map({
        location: new Location({
          name: 'Mount Vesuvius',
          enemies: [],
        }),
      }),
    });
  }
  get isActive() {
    return this.gameState.character.health.current > 0;
  }
  get gameState() {
    return this.props;
  }
  get nextAvailableLocations() {
    return this.gameState.map.nextAvailableLocations;
  }
  get location() {
    return this.gameState.map.location;
  }
  public async gameStep() {
    console.log(`You are at ${this.location.name}.\n`);
    console.log(`You can go to \n ${this.nextAvailableLocations.map((loc) => loc.name).join('\n')}.\n`);
    console.log({ location: this.location });

    console.log(`You see ${this.enemyDescriptions()}.\n`);
    while (this.aliveEnemies.length > 0) {
      await this.fightSequence();
    }
    await this.moveSequence();
  }
  private async moveSequence() {
    const choices = this.nextAvailableLocations.map((nal) => nal.name);

    const answer = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'name',
        message: `\n\nYou can go to \n${choices}\n\n`,
        choices,
      },
    ]);

    const choice = this.nextAvailableLocations.find((choice) => {
      return choice.name === answer.name[0];
    });

    if (!choice) {
      console.log(`Invalid Selection ${JSON.stringify(answer)}`);
      return await this.selectEnemy(this.gameState);
    }

    this.moveTo(choice.name);
  }
  private moveTo(name: string) {
    this.gameState.map.moveTo(name);
  }
  private async fightSequence() {
    const enemy = await this.selectEnemy(this.gameState);
    this.gameState.character.attack(enemy);
    this.dispatchEvents();
    this.aliveEnemies.forEach((enemy) => {
      enemy.attack(this.gameState.character);
      this.dispatchEvents();
    });
  }

  private get aliveEnemies() {
    return this.location.aliveEnemies;
  }
  private get enemies() {
    return this.location.enemies;
  }
  private dispatchEvents() {
    [this, this.gameState.character, ...this.enemies].forEach((aggRoot) => {
      DomainEvents.dispatchEventsForAggregate(aggRoot.id);
    });
  }

  private async selectEnemy(gameState: this['gameState']) {
    const choices = this.aliveEnemies.map((monk) => monk.props.name);

    const answer = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'name',
        message: `\n\nYou see \n${this.enemyDescriptions()}\n\n`,
        choices,
      },
    ]);

    const enemy = this.aliveEnemies.find((enemy) => {
      return enemy.name === answer.name[0];
    });

    if (!enemy) {
      console.log(`Invalid Selection ${JSON.stringify(answer)}`);
      return await this.selectEnemy(gameState);
    }
    return enemy;
  }

  private enemyDescriptions() {
    return this.aliveEnemies.map((enemy) => enemy.description).join('\n');
  }
}
