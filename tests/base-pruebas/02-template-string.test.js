import { getSaludo } from '../../src/base-pruebas/02-template-string.js'

    describe('Pruebas en 02-template-string.js', () => {

        test('getSaludo debe retornar Hola Fernando', () => {

            const name = 'Fernando';

            const message = getSaludo( name );

            expect(message).toBe(`Hola ${ name }`); // Comparando el valor exacto
        });
    });