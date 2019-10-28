"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CharacterCreated {
    constructor(character) {
        this.dateTimeOccurred = new Date();
        this.character = character;
    }
    getAggregateId() {
        return this.character.id;
    }
}
exports.CharacterCreated = CharacterCreated;
//# sourceMappingURL=characterCreated.js.map