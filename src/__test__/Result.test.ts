import React from 'react'
import { Result } from "../Utility/ApiClient/Result";

describe('Result', () => {
    test('Ok should return data', () => {
        const expected: string = "OK result";
        var result = Result.OK(expected);
        expect(result.IsOk).toBeTruthy();
        expect(result.Data).toBe(expected);
    })

    test('IsOk should be false when bad response', () => {
        const errorExpected: string = "OK result";
        var result = Result.Bad(errorExpected);
        expect(result.IsOk).toBeFalsy();
        expect(result.IsError).toBeTruthy();
        expect(result.Error).toBe(errorExpected);
    })

})
