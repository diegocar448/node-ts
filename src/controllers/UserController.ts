import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    userService: UserService

    constructor(
        userService = new UserService()
    ){
        this.userService = userService
    }

    createUser = (request: Request, response: Response) => {        
        const user = request.body;        
        
        if (!user.name ) {
            return response.status(400).json({message: "Bad Request: Nome obrigatório"});
        }

        this.userService.createUser(user.name, user.email)        
        return response.status(201).json({ message: 'Usuário criado' })         
    }

    getAllUsers = (request: Request, response: Response) => {        
        const users = this.userService.getAllUsers()
        return response.status(200).json(users)
    }

    nameVerify = (request: Request, response: Response) => {        
        const user = request.body;        
        
        if (!user.name ) {
            return response.status(422).json({message: "O campo nome é obrigatório"});
        }

        this.userService.nameVerify(user.name, user.email)        
        return response.status(200).json({message: "Essa validação é para quando o campo não for preenchido"});
    }

    emailVerify = (request: Request, response: Response) => {        
        const user = request.body;        
        
        if (!user.email ) {
            return response.status(422).json({message: "O campo email é obrigatório"});
        }

        this.userService.emailVerify(user.name, user.email)        
        return response.status(200).json({message: "Essa validação é para quando o campo email não for preenchido"});
    }
    

    
}