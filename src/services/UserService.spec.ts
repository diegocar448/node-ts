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
})