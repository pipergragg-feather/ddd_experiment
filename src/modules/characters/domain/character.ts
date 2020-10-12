import { Health } from './health';
import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { UniqueEntityID } from '../../../shared/domain/UniqueEntityID';
import { CharacterCreated } from './events/characterCreated';

interface CharacterProps {
  health: Health;
}

export class Character extends AggregateRoot<CharacterProps> {
  private constructor(props: CharacterProps, id?: UniqueEntityID) {
    super(props, id);
  }
  public get health(){
    return this.props.health
  }
  public static create(props: CharacterProps, id?: UniqueEntityID) {
    const character = new Character({ ...props });

    character.addDomainEvent(new CharacterCreated(character));

    return character;
  }
}
