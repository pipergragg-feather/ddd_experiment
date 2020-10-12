import { Character } from '../character';
import { IDomainEvent } from '../../../../shared/domain/events/IDomainEvent';

export class CharacterAttacked implements IDomainEvent {
  public dateTimeOccurred: Date;
  public damage: number;
  public enemy: Character;
  public character: Character;

  constructor({ character, damage, enemy }: { character: Character; damage: number; enemy: Character }) {
    this.dateTimeOccurred = new Date();
    this.damage = damage;
    this.character = character;
    this.enemy = enemy;
  }
  getAggregateId() {
    return this.character.id;
  }
}
