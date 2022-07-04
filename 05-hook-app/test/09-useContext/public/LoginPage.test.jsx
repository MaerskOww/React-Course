import { render, screen, fireEvent } from '@testing-library/react';
import { UserContext } from '../../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../../src/09-useContext/public/LoginPage';

describe('Pruebas en el <LoginPage />', () => {

    test('debde de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

    });

    test('debde de el setUser cuando hace click en el botón', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({"email": "daniel.guasamucaro@gmail.com", "id": 123, "name": "Daniel"});

    });

})