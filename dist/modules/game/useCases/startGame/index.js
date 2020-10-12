"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initializeCharacter_1 = require("../../../characters/useCases/initializeCharacter");
class Game {
    start(startGameDTO) {
        const character = new initializeCharacter_1.InitializeCharacterUseCase().execute(startGameDTO.character);
        console.log({ character });
        return { character };
    }
}
exports.Game = Game;
//# sourceMappingURL=index.js.map