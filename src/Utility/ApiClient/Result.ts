
export class Result<T> {


    private _data?: T;
    private _error?: string;


    public get IsOk(): boolean {
        return this._data != null || this._data != undefined;
    }
    public get IsError(): boolean {
        return this._error != null || this._data != undefined;
    }
    public get Data(): T | undefined | null {
        return this._data;
    }
    public get Error(): string | undefined {
        return this._error;
    }
    private constructor(isError: boolean, data?: T, error?: string) {
        if (!isError)
            this._data = data;
        else
            this._error = error;
    }
    public static OK<T>(data: T): Result<T> {
        return new Result<T>(false, data);
    }


    public static Bad<T>(error: string): Result<T> {
        return new Result<T>(true, undefined, error);
    }
}
