import { AggregateRoot } from '../../../shared/domain/AggregateRoot';

export interface ItemProps {
  weight: number;
}
export class Item extends AggregateRoot<ItemProps> {
  get weight() {
    return this.props.weight;
  }
}
