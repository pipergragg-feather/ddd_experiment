"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../../domain/character");
const health_1 = require("../../domain/health");
const Result_1 = require("../../../../shared/core/Result");
class InitializeCharacterUseCase {
    execute(request) {
        const healthOrError = health_1.Health.create(request.health);
        const dtoResult = Result_1.ResultFactory.combine([healthOrError]);
        if (dtoResult.isFailure) {
            return Result_1.left(Result_1.ResultFactory.fail(dtoResult.error));
        }
        const health = healthOrError.getValue();
        const characterOrError = character_1.Character.create({
            health
        });
    }
}
exports.InitializeCharacterUseCase = InitializeCharacterUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jaGFyYWN0ZXJzL3VzZUNhc2VzL2luaXRpYWxpemVDaGFyYWN0ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzREFBbUQ7QUFHbkQsZ0RBQTZDO0FBQzdDLDJEQUFxRjtBQUdyRixNQUFhLDBCQUEwQjtJQUM5QixPQUFPLENBQUMsT0FBK0I7UUFDNUMsTUFBTSxhQUFhLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsTUFBTSxTQUFTLEdBQUcsc0JBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLGFBQUksQ0FBQyxzQkFBYSxDQUFDLElBQUksQ0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN4RDtRQUNELE1BQU0sTUFBTSxHQUFXLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUMvQyxNQUFNLGdCQUFnQixHQUFzQixxQkFBUyxDQUFDLE1BQU0sQ0FBQztZQUN6RCxNQUFNO1NBQ1QsQ0FBQyxDQUFBO0lBRUosQ0FBQztDQUNGO0FBYkQsZ0VBYUMifQ==