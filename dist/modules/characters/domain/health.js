"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValueObject_1 = require("../../../shared/domain/ValueObject");
const Result_1 = require("../../../shared/core/Result");
class Health extends ValueObject_1.ValueObject {
    get currentHp() {
        return this.props.currentHp;
    }
    get maxHp() {
        return this.props.maxHp;
    }
    static isValidHp(maxHp) {
        return maxHp > 0;
    }
    static create(maxHp) {
        if (this.isValidHp(maxHp)) {
            return Result_1.ResultFactory.ok(new Health({ maxHp, currentHp: maxHp }));
        }
        return Result_1.ResultFactory.fail('Email address not valid');
    }
}
exports.Health = Health;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhbHRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvY2hhcmFjdGVycy9kb21haW4vaGVhbHRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0VBQWlFO0FBQ2pFLHdEQUFvRTtBQU9wRSxNQUFhLE1BQU8sU0FBUSx5QkFBd0I7SUFDbEQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ08sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFhO1FBQ3BDLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ00sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFhO1FBQ2hDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLHNCQUFhLENBQUMsRUFBRSxDQUFTLElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUU7UUFDRCxPQUFPLHNCQUFhLENBQUMsSUFBSSxDQUFTLHlCQUF5QixDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNGO0FBaEJELHdCQWdCQyJ9