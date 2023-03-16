import { UserService } from './UserService';
describe('UserService', () => {

    const userService = new UserService();

    it('Deve adicionar um novo usuário', () => {
        //mockando console.log com jest
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('George', 'george@email.com');
        expect(mockConsole).toHaveBeenCalled();
    })
})