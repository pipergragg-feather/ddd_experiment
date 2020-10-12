import { InitializeCharacterUseCase } from '../../../characters/useCases/initializeCharacter';
import { InitializeCharacterDTO } from '../../../characters/useCases/initializeCharacter/InitializeCharacterDTO';

interface StartGameDTO {
    character: InitializeCharacterDTO,
}

export class Game {
  public start(startGameDTO: StartGameDTO) {
    const character = new InitializeCharacterUseCase().execute(startGameDTO.character)
    console.log({character})
    return {character};
  }
}