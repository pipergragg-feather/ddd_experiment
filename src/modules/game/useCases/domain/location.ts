import { Entity } from '../../../../shared/domain/Entity';
import { Character } from '../../../characters/domain/character';

export interface LocationProps {
  enemies: Character[];
  name: string;
}

export class Location extends Entity<LocationProps> {
  public get aliveEnemies() {
    return this.enemies.filter((enemy) => enemy.health.current > 0);
  }
  public get name() {
    return this.props.name;
  }
  public get enemies() {
    return this.props.enemies;
  }
}
