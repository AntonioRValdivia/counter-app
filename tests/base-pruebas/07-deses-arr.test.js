import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr.js' 

describe('Pruebas en 07-deses-arr.test.js', () => {

    test('debe de retornar un string y un número', () => {

        const [ letters, numbers ] = retornaArreglo(); // ['ABC', 123]
        
        // Cuando conocemos el valor exacto
        expect( letters ).toBe('ABC');
        expect( numbers ).toBe(123);

        // Cuando solo conocemos el tipo de dato
        expect( typeof letters ).toBe('string');
        expect( typeof numbers ).toBe('number');

        expect (letters).toEqual( expect.any(String) );



    });

});