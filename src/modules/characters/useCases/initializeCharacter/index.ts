import { Character } from '../../domain/character';
import { InitializeCharacterDTO } from './InitializeCharacterDTO';
import { Health } from '../../domain/health';

export class InitializeCharacterUseCase {
  public execute(request: InitializeCharacterDTO) {
    const healthOrError = Health.create(request.health)
    return Character.create({
      health: healthOrError,
      name: request.name
    });
  }
}