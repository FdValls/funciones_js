/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 2. En la función generarInvitados():
 *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
 *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
 *    correctos.
*/

var cant = 0;
var listaNombres = [];

function inputDataCant() {
    cant = parseFloat(prompt("Cuantos nombres de invitados quiere ingresar"));
}

function procesarCantInvitados() {
    console.log(cant);
    // var listaNombres = [];
    if (cant === 0) {
        alert("Cantidad solicitada: " + cant);
    }
    else {
        for (let index = 0; index < cant; index++) {
            let nombre = prompt("Ingrese " + cant + " nombres: ");
            listaNombres.push(nombre);
        }
    }
    console.log(listaNombres)
    mostrarNombresPorConsola();
    mostrarNombresPorAlert();
    return listaNombres;
}

function mostrarNombresPorConsola() {
    console.log("Muestro la lista de nombres ingresados: ")
    listaNombres.forEach(e => {
        console.log(e);
    });
}

function mostrarNombresPorAlert() {
    let msg = "";
    listaNombres.forEach(e => {
        msg += e + "\n";
    });
    alert("Muestro la lista de nombres ingresados: " + "\n" + msg);
}


