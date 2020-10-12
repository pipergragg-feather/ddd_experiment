"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const startGame_1 = require("./modules/game/useCases/startGame");
const inquirer = __importStar(require("inquirer"));
const gameLoop = async () => {
    const startGameResult = await inquirer.prompt([{ type: 'input', name: 'name', message: 'What is your name' }]).then((answers) => {
        return new startGame_1.Game().start({
            character: {
                health: 100,
                name: answers.name,
            }
        });
    });
    if (startGameResult.constructor.name === 'Error') {
        process.exit(1);
    }
    while (startGameResult.character.health.current > 0) {
        await inquirer.prompt([{ type: 'checkbox', name: 'choiceSelection', message: 'You see three monks before you', choices: ['monk1', 'monk2'] }]).then((answer) => {
            console.log({ answer: answer.choiceSelection });
        });
    }
};
gameLoop().then(() => {
    process.exit(0);
});
//# sourceMappingURL=index.js.map