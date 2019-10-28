"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("./Entity");
const DomainEvents_1 = require("./events/DomainEvents");
class AggregateRoot extends Entity_1.Entity {
    constructor() {
        super(...arguments);
        this._domainEvents = [];
    }
    get id() {
        return this._id;
    }
    get domainEvents() {
        return this._domainEvents;
    }
    clearEvents() {
        this._domainEvents.splice(0, this._domainEvents.length);
    }
    addDomainEvent(domainEvent) {
        this._domainEvents.push(domainEvent);
        DomainEvents_1.DomainEvents.markAggregateForDispatch(this);
        this.logDomainEventAdded(domainEvent);
    }
    logDomainEventAdded(domainEvent) {
        const thisClass = Reflect.getPrototypeOf(this);
        const domainEventClass = Reflect.getPrototypeOf(domainEvent);
        console.info(`[Domain Event Created]:`, thisClass.constructor.name, '==>', domainEventClass.constructor.name);
    }
}
exports.AggregateRoot = AggregateRoot;
//# sourceMappingURL=AggregateRoot.js.map