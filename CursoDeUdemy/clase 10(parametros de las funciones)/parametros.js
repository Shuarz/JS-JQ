'use strict';

var n1= prompt('dime palabra', 'no has dicho nada');

var n2= prompt('dime otra palabra', 'no has dicho nada');

function unirPalabras(n1, n2)
{
    var palabrasUnidas = n1 + '' + n2;

    return palabrasUnidas;
}


var resultado = unirPalabras(n1, n2);
 
console.log(resultado);

//tercer parametro opcional, en el caso que sea un boleano