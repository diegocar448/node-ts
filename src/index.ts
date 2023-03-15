import express, { Request, Response } from 'express';
import { router } from './routes';

const server = express();

server.use(express.json());
server.use(router)

//criando rota dentro da aplicação (passamos 2 parâmetros a request com os dados da requisiçao e o reponse com o retorno)
server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({ message: 'DioBank API' })
})

//função do express recebendo a porta que vai rodar e a função que vai rodar
server.listen(5000, () => console.log('Server on'))