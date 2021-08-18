'use strict';

//funciones anonimas, no hace falta declarar antes, uno hace el llamado cuando la solicita


function sumar(n1, n2, multiplicar) //aca declare las variables
{
    var suma = n1 + n2;
    multiplicar(suma);
    return suma;
    
};

sumar(5, 7, function(dato) // d => (funcion flecha)
{
    console.log('la suma es' + dato);
    console.log('la multiplicacion es' + dato * 2);
    //esto la verdad no lo usaria

}
);

//la funcione flecha le pasa el dato =>, je dice que ejecute la fucion sumar