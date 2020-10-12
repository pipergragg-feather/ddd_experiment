import { ValueObject } from '../../../shared/domain/ValueObject';

export interface HealthProps {
  current: number;
  max: number;
}

export class Health extends ValueObject<HealthProps> {
  get current(): number {
    return this.props.current;
  }
  get max(): number {
    return this.props.max;
  }
  public static create(max: number) {
    return new Health({ max, current: max });
  }
}
