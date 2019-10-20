// https://github.com/stemmlerjs/ddd-forum/blob/master/src/modules/users/domain/user.ts

import { Health } from './health';
import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { UniqueEntityID } from '../../../shared/domain/UniqueEntityID';
interface CharacterProps {
  health: Health;
}

export class Character extends AggregateRoot<CharacterProps> {
  private constructor(props: CharacterProps, id?: UniqueEntityID) {
    super(props, id);
  }
}
