import { Item, ItemProps } from './item';

interface MeleeWeaponProps extends ItemProps {
  damage: number;
}
export class MeleeWeapon extends Item {
  constructor(props: MeleeWeaponProps) {
    super(props);
  }
  get speed() {
    return 100 / this.weight;
  }
}
