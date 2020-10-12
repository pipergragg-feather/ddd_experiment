import { Character } from '../../domain/character';
import { InitializeCharacterDTO } from './InitializeCharacterDTO';
import { Health } from '../../domain/health';
import { MeleeWeapon } from '../../../items/domain/meleeWeapon';

export class CharacterFactory {
  public create(request: InitializeCharacterDTO) {
    const healthOrError = Health.create(request.health);
    return Character.create({
      health: healthOrError,
      name: request.name,
      inventory: {
        weightCapacity: 100,
        items: [new MeleeWeapon({ weight: 2, damage: 5 })],
      },
    });
  }
}
