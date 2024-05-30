import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp.jsx";

describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtitulo';     // centralizando los valores de las props

    test('debe hacer match con el snapshot', () => { 

        const { container } = render( <FirstApp title={title} /> );
        expect( container ).toMatchSnapshot();

     });

     test('debe mostrar el mensaje "Hola, soy Goku"', () => {

        render( <FirstApp title={title} /> );
        expect( screen.getByText(title) ).toBeTruthy();     // screen renderiza en tiempo real el componente
        // screen.debug();                                  // Para debuggeae el componente

     });

     test('debe de mostrar el titulo en un h1', () => { 
 
        render( <FirstApp title={title} /> );
        expect( screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);

      });

      test('debe mostrar el subitulo enviado por las props', () => { 

        render( 
        <FirstApp
             title={title}
             subtitle={subTitle}
         /> );

         expect( screen.getAllByText(subTitle).length ).toBe(1);

       });
});