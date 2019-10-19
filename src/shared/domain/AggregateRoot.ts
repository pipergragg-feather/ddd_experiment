export abstract class AggregateRoot<T> extends Entity<T> {
    private _domainEvents: IDomainEvent[] = [];

    get id (): UniqueEntityId {
        return this._id;
    }

    get domainEvents(): IDomainEvent[] {
        return this._domainEvents
    }
}