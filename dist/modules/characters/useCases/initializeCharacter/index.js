"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../../domain/character");
const health_1 = require("../../domain/health");
class InitializeCharacterUseCase {
    execute(request) {
        const healthOrError = health_1.Health.create(request.health);
        if ("maxHp" in healthOrError) {
            return character_1.Character.create({
                health: healthOrError,
            });
        }
        else {
            return healthOrError;
        }
    }
}
exports.InitializeCharacterUseCase = InitializeCharacterUseCase;
//# sourceMappingURL=index.js.map