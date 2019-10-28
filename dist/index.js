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
inquirer.prompt([{ type: 'input', name: 'name', message: 'What is your name' }]).then((answers) => {
    new startGame_1.StartGame().execute({
        character: {
            health: 100,
            name: answers.name,
        },
    });
});
//# sourceMappingURL=index.js.map