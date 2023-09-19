/** Ejercicio para esta sesion
 * 
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean
 * 
 * Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 * 
 * Declarar variables que concatenen cadenas de texto
 *      -5 mensajes diferentes en pantalla, sin limite de palabras.
 * 
 * Declarar 5 variables y convertirlas a otro tipo de dato
 * 
 *  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */

var numero1 = 1;
var numero2 = 2;
var numero3 = 3;
var numero4 = 4;
var numero5 = 5;
let num1 = 10;
let num2 = 11;
let num3 = 12;
let num4 = 13;
let num5 = 14;
var isProgramador = true;
var isVerdadero = true;
var isDiaLaboral = false;

//****************************************************************************** */

let suma = numero1 + num1;
let resta = num5 - numero5;
let multiplicacion = numero2 * numero2;
let division = num3 / numero3;

//****************************************************************************** */

var saludo = "Hola";
var nombre = "Yo soy Diana";
var edad = "Tengo 25 años";
var aprendizaje = "Soy ingeniera en computacion y estoy aprendiendo JavaScript";
var numCohorte = "35";
var textCohorte = "El numero de la cohorte es 35";
var lenguaje = "JavaScript";

let mendaje1 = saludo + nombre;
let mensaje2 = nombre + edad;
let mensaje3 = nombre + aprendizaje;
let mensajeCompleto = saludo + nombre + edad + aprendizaje;

//****************************************************************************** */

//De number a String
let num5String = String (num5);
console.log("El tipo es: ",typeof(num5));
console.log("Nuevo valor: ",num5String);

//De String a Number
let comoedad = Number (edad);
console.log("El tipo es: ", typeof(edad));
console.log("Nuevo valor: ",comoedad);

//De Boleean a Number
let isDiaLaboralBoleean = Number(isDiaLaboral);
console.log("El tipo es: ", typeof(isDiaLaboral));
console.log("Nuevo valor: ", isDiaLaboralBoleean);

//De Number a Boleean
let sumaBoolean = Booleanr(suma);
console.log("El tipo es: ", typeof(suma));
console.log("Nuevo valor: ", sumaBoolean);

//De Boolean a String
let isProgramadorString = String(isProgramador);
console.log("El tipo es: ", typeof(isProgramador));
console.log("Nuevo valor: ", isProgramadorString);
