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
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/

function inputData() {
    let myArray = [];
    let input1 = prompt("Ingrese primer numero");
    let num1 = parseFloat(input1);
    let input2 = prompt("Ingreses segundo numero");
    let num2 = parseFloat(input2);
    let input3 = prompt("Ingrese tercer numero");
    let num3 = parseFloat(input3);
    let input4 = prompt("Ingrese cuarto numero");
    let num4 = parseFloat(input4);
    let input5 = prompt("Ingreses quinto numero");
    let num5 = parseFloat(input5);

    myArray.push(num1, num2, num3, num4, num5)

    return myArray
}

let listaNumeros = inputData();

function promedio(listaNumeros) {
    let prom = 0;
    let sum = 0;
    let cont = 0;
    listaNumeros.forEach(e => {
        cont += 1
        sum += e;
        prom = sum / cont;

    });
    console.log("Los datos ingresados son: " + listaNumeros[0], listaNumeros[1], listaNumeros[2], listaNumeros[3], listaNumeros[4]);
    console.log("El promedio de los 5 números es: " + prom);
    alert("Los datos ingresados son: " + "\n" + listaNumeros[0] + "\n" + listaNumeros[1] + "\n" + listaNumeros[2] + "\n" + listaNumeros[3] + "\n" + listaNumeros[4]);
    alert("El promedio de los 5 números es: " + prom);
}