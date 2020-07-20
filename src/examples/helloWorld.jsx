// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello, Platzi Badges!</h1>;

//CreateElement tiene 3 argumentos: que estamos creando, atributos, children equivalente al innertext
// const element = React.createElement('a',{href:'https://platzi.com'},'Ir a platzi')
// const name ='Angel'
// const element = React.createElement(
//     'h1',
//     {},
//     `Hola soy ${name}`
// )

//Llamada a variables con JSX
//Entre las llaves siempre van valores que se puedan evaluar o expresiones
//Cualquier valor false no se va a mostrar entre las llaves
// const sum = () => 3+3
// const jsx = <h1>Hola soy, {sum()}</h1>

const jsx = (
<div>
    <h1>Hola, soy Angel</h1>
    <p>Soy Ingeniero en tics</p>
</div>)



const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container);
