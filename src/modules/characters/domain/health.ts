import { ValueObject } from '../../../shared/domain/ValueObject';

export interface HealthProps {
  currentHp: number;
  maxHp: number;
}

export class Health extends ValueObject<HealthProps> {
  get currentHp(): number {
    return this.props.currentHp;
  }
  get maxHp(): number {
    return this.props.maxHp;
  }
  private static isValidHp(maxHp: number) {
    return maxHp > 0;
  }
  public static create(maxHp: number) {
    if (this.isValidHp(maxHp)) {
      return new Health({ maxHp, currentHp: maxHp })
    }
    return new Error('Invalid max hp');
  }
}
