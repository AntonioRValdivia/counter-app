import PropTypes from 'prop-types';      // Importar para validar las props

// const newMessage = {                     // Objlit, no se puede enviar a un componente, salvo atributos separados
//     message: 'Hola Mundo',
//     title: 'Elliot Alderson'
// }

// const getSaludo = () => {         // Por lo general las funciones se declaran fuera del componente
//     return 'Hola Mundo';
// }

export const FirstApp = ( {title, subtitle, name} ) => {      // Se puede desestructurar el objeto props

    // console.log(props);

    return (
    <>                                {/* Fragment, no se renderiza en el DOM */}
        <h1 data-testid="test-title">{ title }</h1>          {/*Recibe el title desde las props en main.jsx*/}
        {/* <code>{ JSON.stringify( newMessage )}</code> */}   {/* Se puede imprimir el obj transformandolo*/}
        <p>{ subtitle }</p>
        <p>{ name }</p>
    </>                               // Fragment, no se renderiza en el DOM
    );
}

FirstApp.propTypes = {     
    title: PropTypes.string.isRequired,        // El title es requerido
    subtitle: PropTypes.string                 // El subtitle es opcional y ambos deben ser string
}

FirstApp.defaultProps = {               // Valores por defecto
    name: 'Elliot Alderson',               
    subtitle: 'No hay subtitulo',
}

// <code> Sirve para darle formato de codigo