import { UserService } from '../services/UserService';
import { UserController } from './UserController';
import { Params } from 'express-serve-static-core';
import { Request, Response } from 'express';

describe('UserController', () => {
    //aqui mockamos userService para testar apenas a camada controller
    //com o Partial podemos mockar as propriedades que queremos
    const mockUserService: Partial<UserService> = {}

    //adicionamos o mockUserService para ele não chamar o UserService real
    const userController = new UserController(mockUserService as UserService);

    //Aqui vamos mockar as class do express Request/Response
    const makeMockRequest = (
        {params, query}: { params?: Params, query?: Params }
        ): Request
        => {
            const request = {
                params: params || {},
                query: query || {}
            } as unknown

            return request as Request;
        }
    

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = makeMockRequest({})
        const response = userController.createUser(mockRequest)
    })
})