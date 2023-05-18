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

var num1;
var num2;
var num3;
var num4;
var num5;

function inputData() {
    var input1 = prompt("Ingrese primer numero");
    num1 = parseFloat(input1);
    var input2 = prompt("Ingreses segundo numero");
    num2 = parseFloat(input2);
    var input3 = prompt("Ingrese tercer numero");
    num3 = parseFloat(input3);
    var input4 = prompt("Ingrese cuarto numero");
    num4 = parseFloat(input4);
    var input5 = prompt("Ingreses quinto numero");
    num5 = parseFloat(input5);
}

function promedio(num1, num2, num3, num4, num5) {
    let sum = num1 + num2 + num3 + num4 + num5;
    let prom = sum / 5;
    console.log("Los datos ingresados son: " + num1, num2, num3, num4, num5);
    console.log("El promedio de los 5 números es: " + prom);
    alert("Los datos ingresados son: " + "\n" + num1 + "\n" + num2 + "\n" + num3 + "\n" + num4 + "\n" + num5);
    alert("El promedio de los 5 números es: " + prom);
}