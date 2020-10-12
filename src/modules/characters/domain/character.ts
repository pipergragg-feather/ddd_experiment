import { Health } from './health';
import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { UniqueEntityID } from '../../../shared/domain/UniqueEntityID';
import { CharacterCreated } from './events/characterCreated';
import { CharacterAttacked } from './events/characterAttacked';

interface CharacterProps {
  health: Health;
  name: string;
}

export class Character extends AggregateRoot<CharacterProps> {
  private constructor(props: CharacterProps, id?: UniqueEntityID) {
    super(props, id);
  }
  public get health() {
    return this.props.health;
  }
  public get name() {
    return this.props.name;
  }
  public get description() {
    return `${this.props.name}, with ${this.props.health.current}/${this.props.health.max}.`
  }
  public attack(character: Character) {
    character.props.health = new Health({
      current: character.props.health.current - 1,
      max: character.props.health.max,
    });
    character.addDomainEvent(new CharacterAttacked({ character: this, damage: 1, enemyName: character.name }));
  }
  public static create(props: CharacterProps, id?: UniqueEntityID) {
    const character = new Character({ ...props });

    character.addDomainEvent(new CharacterCreated(character));

    return character;
  }
}
