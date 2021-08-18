'use strict';

var n1 = prompt('dame una palabra' , 'una');
var n2 = prompt('dame una palabra' , 'otra');

function mostrarConsola(n1, n2)
{
    console.log(n1 + '' + n2);
}

function enDocumento(n1, n2)
{
    document.write(n1 + '' + n2);
}

function mostrar(n1, n2, n3 = false)
{
    if(n3 == false)
    {
        mostrarConsola(n1, n2);
    }
    else
    {
        enDocumento(n1, n2);
    }
}

mostrar(n1, n2, true); //nos da dos datos y si esta en false, lo pone en consola, sino en el documento