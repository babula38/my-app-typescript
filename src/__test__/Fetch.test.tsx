import { React } from 'react';
import { wait } from '@testing-library/react';
import Api from '../Utility/ApiClient/Api';

describe('Fetch api call', () => {
    test('should get the result when called', async () => {
        await fetch('https://jsonplaceholder.typicode.com/todos/1',)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(ex => console.log(ex))
        console.log('finished');

    })
    test('Should return when api return value', async () => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
            json: () => mockJsonPromise
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
        const initOptions = {
            MediaType: "application/json"
        };
        let result = await Api.Get("", initOptions);
    })

});
