import inquirer from 'inquirer';
import { Character } from '../../../characters/domain/character';
import { CharacterFactory } from '../../../characters/useCases/factories';
import { InitializeCharacterDTO } from '../../../characters/useCases/factories/InitializeCharacterDTO';

interface StartGameDTO {
  character: InitializeCharacterDTO;
}
interface GameState {
  character: Character;
  enemies: Character[];
}

export class Game {
  gameState: GameState;
  public start(startGameDTO: StartGameDTO) {
    const character = new CharacterFactory().create(startGameDTO.character);
    const enemies = [
      new CharacterFactory().create({ health: 2, name: 'monk1' }),
      new CharacterFactory().create({ health: 2, name: 'monk2' }),
    ];
    this.gameState = { character, enemies };
  }
  get isActive() {
    return this.gameState.character.health.current > 0;
  }
  public async gameStep() {
    const enemy = await this.findEnemy(this.gameState);
    console.log(`You chose to attack ${enemy.name}`);

    this.gameState.character.attack(enemy);
  }
  public async findEnemy(gameState: this['gameState']) {
    const enemies = gameState.enemies;

    const choices = enemies
      .filter((enemy) => {
        return enemy.health.current > 0;
      })
      .map((monk) => {
        return monk.props.name;
      });

    const enemyDescriptions = enemies
      .map((monk) => {
        return monk.description;
      })
      .join('\n');

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
      throw new Error(`Can't find enemy by name ${answer.name} from ${choices.join(', ')}`);
    }
    return enemy;
  }
}
