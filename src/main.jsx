import React from 'react'
import ReactDOM from 'react-dom/client';

import './styles.css';

// import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
// import { CounterApp } from "./CounterApp";


ReactDOM.createRoot(document.getElementById('root')).render( 
    <React.StrictMode>                     
        {/* <CounterApp value={ 10 } />    value is a prop   */}
        <FirstApp title='Hola, soy Vegeta' />
    </React.StrictMode>
);