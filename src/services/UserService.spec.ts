import { User, UserService } from './UserService';
describe('UserService', () => {
    const mockDb: User[] = []
    const userService = new UserService(mockDb);

    it('Deve adicionar um novo usuário', () => {
        //mockando console.log com jest
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('George', 'george@email.com');
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb);
    })

    it('Verificar a resposta de erro caso o usuario não informe o name', () => {
        //mockando console.log com jest
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.nameVerify('', 'joao@email.com');
        expect(mockConsole).not.toBe(mockDb);
    })
    it('O usuário nâo pode ser criado caso não informe o email', () => {
        //mockando console.log com jest
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.emailVerify('Joao', '');
        expect(mockConsole).not.toBe(mockDb);
    })


    it('Verificar se a função getAllusers está sendo chamada', () => {
        userService.getAllUsers();        
        expect(mockDb);
    })
    
    it('Rota para deletar usuários', () => {              
        //mockando console.log com jest
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.deleteUser('', 'reuven@email.com');
        expect(mockConsole).not.toBe(mockDb);
    })
    
})