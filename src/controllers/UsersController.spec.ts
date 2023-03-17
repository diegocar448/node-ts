import { UserController } from './UserController';
import { UserService } from '../services/UserService';
import { Request } from 'express';
import { makeMockResponse } from '../__mocks__/mockResponse.mock';

describe('UserController', () => {
    //aqui mockamos userService para testar apenas a camada controller
    //com o Partial podemos mockar as propriedades que queremos
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        nameVerify: jest.fn()        
    }

    //adicionamos o mockUserService para ele não chamar o UserService real
    const userController = new UserController(mockUserService as UserService);
    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Joaquim',
                email: 'joaquim@eamil.com'
            }
        } as Request
        
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' })
    })

    it('Verificar a resposta de erro caso o usuario não informe o name', () => {
        

        const mockRequest = {
            body: {
                name: '',
                email: 'joao@email.com'
            }
        } as Request
        
        const mockResponse = makeMockResponse()
        userController.nameVerify(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(422)
        
    })
    
})