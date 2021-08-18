'use strict';

var global = 'variable global';

function mostrarConsola()
{
    var variable_funtion = 'variable dentro de la funcion';
    console.log(global);
    console.log(variable_funtion);
}

mostrarConsola();

console.log(variable_funtion); //esto no me lo va a mostrar porque fue declarada dentro de la funcion, afuera no existe, la otra que esta afuera, si