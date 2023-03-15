import { Request, Response } from 'express';
import { UserService } from '../services/UserService';


export class UserController {
    createUser = (request: Request, response: Response) => {
        const userService = new UserService()
        const user = request.body;

        console.log('controller com name', user.name)
        //operador !! que verifica se é nulo ou indefinido
        // if (user.name ) {
        //     return response.status(400).json({message: "Bad Request: Nome obrigatório"});
        // }

        userService.createUser(user.name, user.email)        
        return response.status(201).json({ message: 'Usuário criado' })         
    }
}