import { Character } from '../character';
import { IDomainEvent } from '../../../../shared/domain/events/IDomainEvent';
import { UniqueEntityID } from '../../../../shared/domain/UniqueEntityID';

export class CharacterCreated implements IDomainEvent {
  public dateTimeOccurred: Date;
  public character: Character;

  constructor(character: Character) {
    this.dateTimeOccurred = new Date();
    this.character = character;
  }

  getAggregateId(): UniqueEntityID {
    return this.character.id;
  }
}
