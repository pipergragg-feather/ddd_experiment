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
const initializeCharacter_1 = require("./modules/characters/useCases/initializeCharacter");
const gameLoop = async () => {
    const startGameResult = new startGame_1.Game().start({
        character: {
            health: 100,
            name: 'stuven',
        },
    });
    if (startGameResult.constructor.name === 'Error') {
        process.exit(1);
    }
    let enemies = [];
    while (startGameResult.character.health.current > 0) {
        if (enemies.length === 0) {
            enemies = [
                new initializeCharacter_1.InitializeCharacterUseCase().execute({ health: 20, name: 'monk1' }),
                new initializeCharacter_1.InitializeCharacterUseCase().execute({ health: 20, name: 'monk2' }),
            ];
        }
        const choices = enemies.map((monk) => {
            return monk.props.name;
        });
        const enemyDescriptions = enemies.map((monk) => {
            return monk.description;
        }).join(', ');
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
//# sourceMappingURL=index.js.map