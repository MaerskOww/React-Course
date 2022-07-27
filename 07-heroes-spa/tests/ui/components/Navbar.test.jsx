import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/NavBar';

describe('Pruebas en <Navbar/>', () => {

    const contextValue = {
        logged: true,
        user: {
            id: '123',
            name: 'Daniel'
        },
        loggout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Daniel')).toBeTruthy();

    });

    test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {

        render(

        );

    });

});