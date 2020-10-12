import { Character } from '../character';
import { IDomainEvent } from '../../../../shared/domain/events/IDomainEvent';

export class CharacterAttacked implements IDomainEvent {
  public dateTimeOccurred: Date;
  public damage: number;
  public enemyName: string;
  public character: Character;

  constructor({ character, damage, enemyName }: { character: Character; damage: number; enemyName: string }) {
    this.dateTimeOccurred = new Date();
    this.damage = damage;
    this.character = character;
    this.enemyName = enemyName;
  }
  getAggregateId() {
    return this.character.id;
  }

  message(): string {
    return `${this.damage} done to ${this.enemyName}`;
  }
}
