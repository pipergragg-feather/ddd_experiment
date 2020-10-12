import { Game } from './modules/game/useCases/startGame';
import * as inquirer from 'inquirer';
import { InitializeCharacterUseCase } from './modules/characters/useCases/initializeCharacter';
import { Character } from './modules/characters/domain/character';

const gameLoop = async () => {
  // const startGameResult = await inquirer.prompt([{ type: 'input', name: 'name', message: 'What is your name' }]).then((answers) => {
  const startGameResult = new Game().start({
    character: {
      health: 100,
      name: 'stuven',
    },
  });
  // });

  if (startGameResult.constructor.name === 'Error') {
    process.exit(1);
  }

  let enemies: Character[] = [];

  while (startGameResult.character.health.current > 0) {
    if (enemies.length === 0) {
      enemies = [
        new InitializeCharacterUseCase().execute({ health: 20, name: 'monk1' }),
        new InitializeCharacterUseCase().execute({ health: 20, name: 'monk2' }),
      ];
    }
    const choices = enemies.map((monk) => {
      return monk.props.name;
    });
    const enemyDescriptions = enemies.map((monk) => {
      return monk.description;
    }).join(', ')
    
    await inquirer
      .prompt([
        {
          type: 'checkbox',
          name: 'name',
          message: `You see three monks before you: ${enemyDescriptions}`,
          choices: choices,
        },
      ])
      .then((answer) => {
        console.log(`You chose to attack ${answer.name}`);
        const enemy = enemies.find((enemy) => {
          return enemy.name === answer.name[0];
        });
        if (!enemy) {
          throw new Error(`Can't find enemy by name ${answer.name} from ${choices.join(', ')}`);
        }
        startGameResult.character.attack(enemy);
      });
  }
};

gameLoop().then(() => {
  process.exit(0);
});
