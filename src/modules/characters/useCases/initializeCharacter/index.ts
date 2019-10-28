import { Character } from '../../domain/character';
import { InitializeCharacterDTO } from './InitializeCharacterDTO';
import { Health } from '../../domain/health';

export class InitializeCharacterUseCase {
  public execute(request: InitializeCharacterDTO) {
    const healthOrError = Health.create(request.health)
    if("maxHp" in healthOrError){
      return Character.create({
        health: healthOrError,
      }); 
    }else {
      return healthOrError
    }
  }
}