"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CharacterAttacked {
    constructor({ character, damage, enemyName }) {
        this.dateTimeOccurred = new Date();
        this.damage = damage;
        this.character = character;
        this.enemyName = enemyName;
    }
    getAggregateId() {
        return this.character.id;
    }
    message() {
        return `${this.damage} done to ${this.enemyName}`;
    }
}
exports.CharacterAttacked = CharacterAttacked;
//# sourceMappingURL=characterAttacked.js.map