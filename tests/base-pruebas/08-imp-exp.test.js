import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp.js'
import heroes from '../../src/data/heroes.js';

describe('Pruebas en funciones de Héroes', () => {

    test('Debe retornar un héroe por id', () => {
        
        const id = 1;

        const heroe = getHeroeById( id );

        expect( heroe ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById debe retornar undefined si no existe', () => {
        
        const id = 100;
        const hero = getHeroeById(id);

        expect( hero ).toBeFalsy(); // Cuando queremos especificar que lo que regresa es null, undefined, false, 0.
    });

    // Tarea - Debe retornar un arreglo con los heroes de DC
    // Length === 3
    // toEqual al arreglo filtrado

    // Debe retornar un arreglo con los heroes de Marvel
    // Length === 2

    test('Debe retornar un arreglo con los héroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe(3); // Solo hay 3 heroes de DC
    });

    test('Debe ser igual al arreglo filtrado', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect( heroes ).toEqual([          // Tiene que ser idéntico
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]);

        // Another form
        expect ( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner))
    });

    test('Debe retornar un arreglo con 2 heroes', () => {
            
            const owner = 'Marvel';
            const heroes = getHeroesByOwner(owner);
    
            expect( heroes.length ).toBe(2);            // Solo hay 2 heroes de Marvel
    });
});

