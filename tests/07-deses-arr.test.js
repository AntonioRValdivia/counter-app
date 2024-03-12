import retornaArreglo from '../src/base-pruebas/07-deses-arr' 

describe('Pruebas en 07-deses-arr.test.js', () => {

    test('debe de retornar un string y un número', () => {

        const [ letters, numbers ] = retornaArreglo(); // ['ABC', 123]

        // En el caso que sepa el valor exacto
        expect( letters ).toBe('ABC');
        expect( numbers ).toBe(123);

        // En el caso que no sepa el valor exacto pero si el tipo
        expect( typeof letters ).toBe('string');
        expect( typeof numbers ).toBe('number');

        // En el caso que no sepa el valor exacto pero si el tipo
        expect( letters ).toEqual( expect.any(String) );
    });

});