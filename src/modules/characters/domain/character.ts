import { Health } from './health';
import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { UniqueEntityID } from '../../../shared/domain/UniqueEntityID';
import { Result, ResultFactory } from '../../../shared/core/Result';
import { Guard } from "../../../shared/core/Guard";
import { CharacterCreated } from './events/characterCreated';

interface CharacterProps {
  health: Health;
}

export class Character extends AggregateRoot<CharacterProps> {
  private constructor(props: CharacterProps, id?: UniqueEntityID) {
    super(props, id);
  }
  public static create (props: CharacterProps, id?: UniqueEntityID): Result<Character> {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      {argument: props.health, argumentName: 'health'}
    ])
    if(!guardResult.succeeded){
      return ResultFactory.fail<Character>(guardResult.message!)
    }
    const character = new Character({...props})

    character.addDomainEvent(new CharacterCreated(character))

    return ResultFactory.ok<Character>(character)
  }
}
