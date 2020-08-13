import { Result } from "./Result";

export default class Api {

    public static async Get<T>(url: string, init: RequestOptions): Promise<Result<T>> {
        try {
            let result = await fetch(url, {
                ...init,
                method: "Get",
            });
            if (!result.ok) {
                //return Result.OK<T>(<T>data);
            }
            var data = await result.json();
            return Result.OK<T>(<T>data);
        } catch (error) {
            return Result.Bad<T>("");
        }
    }
}


export class RequestOptions {

}

