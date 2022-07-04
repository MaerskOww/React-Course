import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe de retornar un heroe', () => {
        const id = 1;

        return getHeroeByIdAsync(id)
            .then(h => {
                expect(h).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC',
                });
            });
    });

    test('getHeroeByIdAsync debe de obtener un error si el heroe no existe', () => {
        const id = 100;

        return getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe con el id ${id}`);
            });
    });
});