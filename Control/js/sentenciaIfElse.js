// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function edadParaVotar(edad){
    if (edad >= 18) {
        console.log("Si puedo votar")
    } else {
        console.log("No puede votar")
    }
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

function promedioAlumno (calificacion1, calificacion2, calificacion3, calificacion4){
    let promerdio = (calificacion1 + calificacion2 + calificacion3 + calificacion4)/4;
    if (promerdio >= 7) {
        console.log("Aprobado")
    } else {
        console.log("Reprobado")
    }
}

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es primo
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Consideraciones: utilizar la estructura if-else
 */



/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function divisibleAND (numero) {
    let div7 = numero % 7;
    let div8 = numero % 8;
    if (numero != 0 && div7 === 0 && div8 === 0) {
        console.log("Verdadero")
    } else {
        console.log("Falso")
    }
}

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

function divisibleOR (numero){
    let div4 = numero % 4;
    let div9 = numero % 9;
    if(numero != 0){
        if(div4 === 0 || div9 === 0){
            console.log("Verdadero");
        }else{
            console.log("Falso");
        }
    }else{
        console.log("Cualquier numero divisible por 0 es 0");
    }
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function cajeroATM(opcion){
    opcion = opcion.toUpperCase();
    opcion = opcion.toLowerCase();
    if(opcion === "retirar"){
        console.log("Selecciono la opcion de retirar dinero");
    }else if(opcion === "transferencia"){
        console.log("Selecciono la opcion de tranferencia");
    }else if(opcion === "deposito"){
        console.log("Selecciono la opcion de deposito");
    }else if(opcion === "pago"){
        console.log("Selecciono la opcion de pago");
    }else{
        console.log("Opcion no valida");
    }
}

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

function descuentoDiez(precio,codigo) {
    if (codigo === "DESCUENTO10") {
        let precioDescuento = precio - (precio * 0.10);
        console.log("Se aplico el descuento, el precio ahora es de: " + precioDescuento)
    } else {
        console.log("Codigo incorrecto el precio es de: " + precio)
    }
}