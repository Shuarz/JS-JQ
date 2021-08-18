'use strict';

//parametros rest (sirve para asignarle un numero a la variable que pongamos dentro de la funcion, creando un array)

function listadoPaises(p1, p2, ...p) //estos 3 puntitos son el famoso rest
{
    console.log(p1);
    console.log(p2);
    console.log(p); //dentro de este console me muestra los dos ultimos paises cargados y el codigo no rompe ya que el rest le genera un numero

}


listadoPaises('españa', 'alemania', 'argentina', 'brasil'); 