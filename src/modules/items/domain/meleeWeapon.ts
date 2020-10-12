import { Item, ItemProps } from './item';

interface MeleeWeaponProps extends ItemProps {
  damage: number;
}
export class MeleeWeapon extends Item<MeleeWeaponProps> {
  constructor(props: MeleeWeaponProps) {
    super(props);
  }
  itemType: 'MeleeWeapon';
  get damage() {
    return this.props.damage;
  }
  get speed() {
    return 100 / this.weight;
  }
}
