import { ValueObject } from '../../../shared/domain/ValueObject'

export interface HealthProps {
    currentHp: number;
    maxHp: number;
}

export class Health extends ValueObject<HealthProps>{
    get currentHp () : number {
        return this.props.currentHp
    }
    get maxHp () : number {
        return this.props.maxHp
    }
}