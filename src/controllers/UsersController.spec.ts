import { UserController } from './UserController';
import { UserService } from '../services/UserService';
import { Request } from 'express';
import { makeMockResponse } from '../__mocks__/mockResponse.mock';

describe('UserController', () => {
    //aqui mockamos userService para testar apenas a camada controller
    //com o Partial podemos mockar as propriedades que queremos
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        nameVerify: jest.fn(),        
        getAllUsers: jest.fn()        
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
    it('O usuário nâo pode ser criado caso não informe o email', () => {
        

        const mockRequest = {
            body: {
                name: 'Joao',
                email: ''
            }
        } as Request
        
        const mockResponse = makeMockResponse()
        userController.emailVerify(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(422)
        
    })
    

    it('Verificar se a função getAllusers está sendo chamada', () => {
        const mockRequest = {
            body: {
                name: 'Isaac',
                email: 'isaac@email.com'
            }
        } as Request
        
        const mockResponse = makeMockResponse()
        userController.getAllUsers(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(200)
    })
    it('Rota para deletar usuários', () => { 
        const mockRequest = {
            body: {
                name: 'Reuven',
                email: 'reuven@email.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.deleteUser(mockRequest, mockResponse);
        
        expect(mockResponse.state.status).toBe(200)    
    })
    
})