"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AggregateRoot_1 = require("../../../shared/domain/AggregateRoot");
const characterCreated_1 = require("./events/characterCreated");
class Character extends AggregateRoot_1.AggregateRoot {
    constructor(props, id) {
        super(props, id);
    }
    get health() {
        return this.props.health;
    }
    static create(props, id) {
        const character = new Character(Object.assign({}, props));
        character.addDomainEvent(new characterCreated_1.CharacterCreated(character));
        return character;
    }
}
exports.Character = Character;
//# sourceMappingURL=character.js.map