import { ValueObject } from '../../../shared/domain/ValueObject';
import { Result, ResultFactory } from '../../../shared/core/Result';

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
  public static create(maxHp: number): Result<Health> {
    if (this.isValidHp(maxHp)) {
      return ResultFactory.ok<Health>(new Health({ maxHp, currentHp: maxHp }));
    }
    return ResultFactory.fail<Health>('Email address not valid');
  }
}
