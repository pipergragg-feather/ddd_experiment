import { Character } from '../../domain/character';
import { UseCase } from '../../../../shared/core/UseCase';
import { InitializeCharacterDTO } from './InitializeCharacterDTO';
import { Health } from '../../domain/health';
import { Result, left, Either, ResultFactory } from '../../../../shared/core/Result';

type Response = Either<
  Result<any>,
  Result<void>
>
export class InitializeCharacterUseCase implements UseCase<InitializeCharacterDTO, Response> {
  public execute(request: InitializeCharacterDTO): Response {
    const healthOrError = Health.create(request.health);
    const dtoResult = ResultFactory.combine([healthOrError]);
    
    if (dtoResult.isFailure) {
      return left(ResultFactory.fail<void>(dtoResult.error));
    }
    const health: Health = healthOrError.getValue()
    const characterOrError: Result<Character> = Character.create({
        health
    })

    if(characterOrError.isFailure){
      return left(ResultFactory.fail<Character>(characterOrError.error.toString()))
    }
    
  }
}
