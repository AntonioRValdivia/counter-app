import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones.js'

describe('Pruebas en 05-funciones.js', () => {

    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( testUser ).toEqual( user ); // Los objetos no se pueden comparar con toBe, se debe usar toEqual
                                    
    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        const name  = 'Antonio';

        const user = getUsuarioActivo( name );

        expect( user ).toStrictEqual({          // toStrictEqual es muy parecido a toEqual
            uid: 'ABC567',
            username: name
        });


    });

});