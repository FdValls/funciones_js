"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

function generarInvitados() {
    let concat = "";
    let invitado1 = prompt("Ingrese primer nombre");
    let invitado2 = prompt("Ingreses segundo nombre");
    let invitado3 = prompt("Ingrese tercer nombre");
    concat += invitado1+" "+invitado2+" "+invitado3

    return concat;
}

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada
Está función retorna una variable como retorno de salida

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán concatener en una sola variable
tipo texto

La función deberá retornar esta variable con los invitados concatenados
para que luego el sistema use esa variable "invidatos" para imprimir
en consola la lista

*/

// Definir y crear la función antes de esta llamada
let invitados = generarInvitados();
console.log(`Mis invitados: ${invitados}`)