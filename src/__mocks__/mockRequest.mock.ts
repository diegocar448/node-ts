import { Params } from 'express-serve-static-core';
import { Request } from 'express';

//Aqui vamos mockar as class do express Request/Response
export const makeMockRequest = (
    {params, query}: { params?: Params, query?: Params }
    ): Request
    => {
        const request = {
            params: params || {},
            query: query || {}
        } as unknown

        return request as Request;
    }