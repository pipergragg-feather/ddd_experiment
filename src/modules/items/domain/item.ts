import { AggregateRoot } from '../../../shared/domain/AggregateRoot';

export interface ItemProps {
  weight: number;
}
export abstract class Item<T extends ItemProps> extends AggregateRoot<T> {
  abstract itemType: string;
  get weight() {
    return this.props.weight;
  }
}
