import express, { Router, Request, Response } from 'express'
import { UserController } from './controllers/UserController';

const userController = new UserController()

export const router = Router()

router.post('/user', userController.createUser)
router.get('/user', userController.getAllUsers)
router.delete('/user', (request:Request, response: Response) => {
    const user = request.body;
    console.log("Deletando usuario")
    return response.status(200).json({message: 'Usuario deletado'})
})