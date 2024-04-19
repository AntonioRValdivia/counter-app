import { getImagen } from '../../src/base-pruebas/11-async-await.js';

describe('Pruebas para 11-async-await', () => {

    test('getImagen debe retornar el url', async() => {

        const url = await getImagen();
        expect( typeof url ).toBe('string');

    });

});