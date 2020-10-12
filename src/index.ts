import { Game } from './modules/game/useCases/startGame';
import * as inquirer from 'inquirer';

const gameLoop = async () => {
  const startGameResult = await inquirer.prompt([{ type: 'input', name: 'name', message: 'What is your name' }]).then((answers) => {
    return new Game().start({
      character: {
        health: 100,
        name: answers.name,
      }
    });
  });

  if(startGameResult.constructor.name === 'Error'){
    process.exit(1)
  }
  
  while (startGameResult.character.health.current > 0) {
    await inquirer.prompt([{type: 'checkbox', name: 'choiceSelection', message: 'You see three monks before you', choices: ['monk1', 'monk2']}]).then((answer) => {
      console.log({answer: answer.choiceSelection})
    })
  } 
}


gameLoop().then(() => {
  process.exit(0)
})