import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Prueba al template string', () => {
    test('getSaludo debe retornar Hola "Daniel"', () => {
        const name = 'Daniel';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    })
})