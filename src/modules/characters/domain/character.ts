import { Health } from './health';
import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { UniqueEntityID } from '../../../shared/domain/UniqueEntityID';
import { CharacterCreated } from './events/characterCreated';
import { CharacterAttacked } from './events/characterAttacked';
import { MeleeWeapon } from '../../items/domain/meleeWeapon';

export interface Inventory {
  weightCapacity: number;
  items: MeleeWeapon[];
}
interface CharacterProps {
  health: Health;
  name: string;
  inventory: Inventory;
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
    return `${this.props.name}, with ${this.props.health.current}/${this.props.health.max}`;
  }

  public attack(character: Character) {
    character.props.health = new Health({
      current: character.props.health.current - this.attackDamage,
      max: character.props.health.max,
    });
    this.addDomainEvent(new CharacterAttacked({ character: this, damage: this.attackDamage, enemy: character }));
  }
  private get attackDamage(){
    return this.weaponDamage || 1;
  }
  private get weaponDamage(){
    return this.weapon?.damage
  }
  private get weapon(){
    return this.props.inventory.items.find((item) => {
      return item.itemType === 'MeleeWeapon'
    })
  }
  public static create(props: CharacterProps, id?: UniqueEntityID) {
    const character = new Character({ ...props });

    character.addDomainEvent(new CharacterCreated(character));

    return character;
  }
}
