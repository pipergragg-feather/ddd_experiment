"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResultFactory {
    constructor() { }
    static ok(value) {
        return new SuccessfulResult(value);
    }
    static fail(error) {
        return new FailingResult(error);
    }
    static combine(results) {
        for (let result of results) {
            if (result.isFailure) {
                return result;
            }
        }
        return ResultFactory.ok();
    }
}
exports.ResultFactory = ResultFactory;
class FailingResult {
    constructor(error) {
        this.isSuccess = false;
        this.isFailure = true;
        this._error = error;
        Object.freeze(this);
    }
    getValue() {
        throw new Error("Can't get the value of an error result. Use 'errorValue' instead.");
    }
    get error() {
        return this._error;
    }
}
exports.FailingResult = FailingResult;
class SuccessfulResult {
    constructor(value) {
        this.isSuccess = true;
        this.isFailure = false;
        this._value = value;
        Object.freeze(this);
    }
    getValue() {
        return this._value;
    }
    errorValue() {
        throw new Error("Can't get the error of a successful result. Use 'getValue' instead.");
    }
}
exports.SuccessfulResult = SuccessfulResult;
class Left {
    constructor(value) {
        this.value = value;
    }
    isLeft() {
        return true;
    }
    isRight() {
        return false;
    }
}
exports.Left = Left;
class Right {
    constructor(value) {
        this.value = value;
    }
    isLeft() {
        return false;
    }
    isRight() {
        return true;
    }
}
exports.Right = Right;
exports.left = (l) => {
    return new Left(l);
};
exports.right = (a) => {
    return new Right(a);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC9jb3JlL1Jlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQWEsYUFBYTtJQUt4QixnQkFBdUIsQ0FBQztJQUVqQixNQUFNLENBQUMsRUFBRSxDQUFJLEtBQVM7UUFDM0IsT0FBTyxJQUFJLGdCQUFnQixDQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBSSxDQUFJLEtBQWE7UUFDakMsT0FBTyxJQUFJLGFBQWEsQ0FBSSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFzQjtRQUMxQyxLQUFLLElBQUksTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUMxQixJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQ3BCLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7U0FDRjtRQUNELE9BQU8sYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQXZCRCxzQ0F1QkM7QUFDRCxNQUFhLGFBQWE7SUFLeEIsWUFBbUIsS0FBaUI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sUUFBUTtRQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBVyxDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQXBCRCxzQ0FvQkM7QUFDRCxNQUFhLGdCQUFnQjtJQUszQixZQUFtQixLQUFTO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNNLFVBQVU7UUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHFFQUFxRSxDQUFDLENBQUM7SUFDekYsQ0FBQztDQUNGO0FBbkJELDRDQW1CQztBQUlELE1BQWEsSUFBSTtJQUdmLFlBQVksS0FBUTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRjtBQWRELG9CQWNDO0FBRUQsTUFBYSxLQUFLO0lBR2hCLFlBQVksS0FBUTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjtBQWRELHNCQWNDO0FBRVksUUFBQSxJQUFJLEdBQUcsQ0FBTyxDQUFJLEVBQWdCLEVBQUU7SUFDL0MsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFFVyxRQUFBLEtBQUssR0FBRyxDQUFPLENBQUksRUFBZ0IsRUFBRTtJQUNoRCxPQUFPLElBQUksS0FBSyxDQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyJ9