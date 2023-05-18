'use strict';

alertMessage();
nombreDeLaFuncion();

/* Inove Coding School
 * Ejemplos de código de clase.
 * Funciones
 */

// Declaración de la función 
function nombreDeLaFuncion() {
    console.log(`Esta es mi primera función!`);
}

// Aplicación
const x = 1;
if (x == 1) {
    nombreDeLaFuncion();
}

// Declaración de una función con ingreso de datos
function cuadrado(x) {
    return x * x;
}

// Aplicación de la función
const numero = 10;
const numeroCuadrado = cuadrado(numero);
console.log("El cuadrado del número ingresado es: " + x * x); // sin template string
console.log(`El cuadrado del número ${numero} es: ${numeroCuadrado}`);  // con template string

function alertMessage() {
    alert("Se llamó a la función alertMessage!");
}
    
function showText(x) {
    alert(x);
}

