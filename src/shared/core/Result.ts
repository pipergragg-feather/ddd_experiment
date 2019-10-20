export type Result<T> = SuccessfulResult<T> | FailingResult<T>;

export class ResultFactory<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error: T | string;

  private constructor() {}

  public static ok<U>(value?: U): SuccessfulResult<U> {
    return new SuccessfulResult<U>(value);
  }

  public static fail<U>(error: string): FailingResult<U> {
    return new FailingResult<U>(error);
  }

  public static combine(results: Result<any>[]): Result<any> {
    for (let result of results) {
      if (result.isFailure) {
        return result;
      }
    }
    return ResultFactory.ok();
  }
}
export class FailingResult<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public _error: T | string;

  public constructor(error: T | string) {
    this.isSuccess = false;
    this.isFailure = true;
    this._error = error;

    Object.freeze(this);
  }

  public getValue() {
    throw new Error("Can't get the value of an error result. Use 'errorValue' instead.");
  }

  public get error(): T {
    return this._error as T;
  }
}
export class SuccessfulResult<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  private _value: T | undefined;

  public constructor(value?: T) {
    this.isSuccess = true;
    this.isFailure = false;
    this._value = value;

    Object.freeze(this);
  }

  public getValue(): T | undefined {
    return this._value;
  }
  public errorValue(): T {
    throw new Error("Can't get the error of a successful result. Use 'getValue' instead.");
  }
}

export type Either<L, A> = Left<L, A> | Right<L, A>;

export class Left<L, A> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  isLeft(): this is Left<L, A> {
    return true;
  }

  isRight(): this is Right<L, A> {
    return false;
  }
}

export class Right<L, A> {
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  isLeft(): this is Left<L, A> {
    return false;
  }

  isRight(): this is Right<L, A> {
    return true;
  }
}

export const left = <L, A>(l: L): Either<L, A> => {
  return new Left(l);
};

export const right = <L, A>(a: A): Either<L, A> => {
  return new Right<L, A>(a);
};
