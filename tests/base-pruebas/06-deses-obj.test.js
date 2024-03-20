import { usContext } from '../../src/base-pruebas/06-deses-obj.js';

describe('Pruebas en 06-deses-obj.test.js', () => {

    test( 'Debe retornar un objetos', () => {

        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };     

        expect( usContext( persona ) ).toEqual({  
                nombreClave: 'Ironman',
                anios: 45,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
          });
    });

});