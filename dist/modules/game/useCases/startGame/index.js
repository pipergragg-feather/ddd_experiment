"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initializeCharacter_1 = require("../../../characters/useCases/initializeCharacter");
class StartGame {
    execute(startGameDTO) {
        const character = new initializeCharacter_1.InitializeCharacterUseCase().execute(startGameDTO.character);
        console.log({ character });
    }
}
exports.StartGame = StartGame;
//# sourceMappingURL=index.js.map