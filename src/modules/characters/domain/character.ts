import {IHealth} from './health'
interface ICharacterProps {
    health: IHealth;

}

export class Character extends AggregateRoot<ICharacterProps> {
    
}