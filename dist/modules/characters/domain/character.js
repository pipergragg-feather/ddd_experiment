"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const health_1 = require("./health");
const AggregateRoot_1 = require("../../../shared/domain/AggregateRoot");
const characterCreated_1 = require("./events/characterCreated");
const characterAttacked_1 = require("./events/characterAttacked");
class Character extends AggregateRoot_1.AggregateRoot {
    constructor(props, id) {
        super(props, id);
    }
    get health() {
        return this.props.health;
    }
    get name() {
        return this.props.name;
    }
    get description() {
        return `${this.props.name}, with ${this.props.health.current}/${this.props.health.max}.`;
    }
    attack(character) {
        character.props.health = new health_1.Health({
            current: character.props.health.current - 1,
            max: character.props.health.max,
        });
        character.addDomainEvent(new characterAttacked_1.CharacterAttacked({ character: this, damage: 1, enemyName: character.name }));
    }
    static create(props, id) {
        const character = new Character(Object.assign({}, props));
        character.addDomainEvent(new characterCreated_1.CharacterCreated(character));
        return character;
    }
}
exports.Character = Character;
//# sourceMappingURL=character.js.map