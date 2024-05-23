import { getByTestId, getByText, render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp.jsx";

describe('Pruebas en <FirstApp />', () => {

    // El método render de testing-library sirve par renderizar los componentes como si de un DOM se tratase
    // toMatchSnapshot() es un método que se utiliza para comparar el contenido de un componente con un snapshot previamente guardado
    // El snapshot es un archivo que se genera en la carpeta __snapshots__ y que guarda el contenido del componente en un momento determinado
    // Y es el renderizado del componente en el archivo de test 

    // No es un snapshot del componente en sí, sino del contenido que se renderiza en el momento de la prueba
    // si cambiamos el contenido del componente o los props del archivo de prueba el snapshot cambiará y la prueba fallará
    // Para actualizar el snapshot se puede utilizar el comando npm run test -- -u

    // test('Debe hacer match con el snapshot', () => {

    //     const title = 'Hola, soy Goku';
    //     const {container} = render( <FirstApp title={ title } /> );

    //     expect( container ).toMatchSnapshot();

    // });


    
    test('Debe mostrar el título en un h1', () => {

        const title = 'Hola, soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> ); // getByText() es un método de que busca un texto en el DOM
        expect( getByText(title) ).toBeTruthy();      // toBeTruthy() comprueba si el elemento existe

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title );
        expect( getByTestId('test-title').innerHTML ).toContain( title ); // Se usa el data-testid para encontrar el elemento

    })

    test('Debe mostrar el subtitulo enviado por props', () => {

        const title = 'Hola, soy Goku';
        const subtitle = 'Soy un subtitulo';
        const { getAllByText } = render( 
            <FirstApp
             title={ title }
             subtitle={ subtitle }
            /> 
        ); 


        expect( getAllByText(subtitle).length ).toBe(1);

    })

});