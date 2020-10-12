import { Inventory } from '../../domain/character';

export interface InitializeCharacterDTO {
  health: number;
  name: string;
  inventory?: Inventory;
}
