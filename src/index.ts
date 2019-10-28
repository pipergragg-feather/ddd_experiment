import { StartGame } from './modules/game/useCases/startGame';
import * as inquirer from 'inquirer';

inquirer.prompt([{ type: 'input', name: 'name', message: 'What is your name' }]).then((answers) => {
  new StartGame().execute({
    character: {
      health: 100,
      name: answers.name,
    },
  });
});
