// Ejercicios para esta sesion

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calculadoraSimple(operacion, numero1, numero2){
    operacion = operacion.toUpperCase();
    operacion = operacion.toLowerCase();
    switch (operacion) {
        case "suma" :
            let resultadoSuma = numero1 + numero2;
            console.log("El resultado de la suma es :" + resultadoSuma);
            break;
        case "resta" :
            let resultadoResta = numero1 - numero2;
            console.log("El resultado de la resta es :" + resultadoResta);
            break;
        case "multiplicacion":
            let resultadoMultiplicacion = numero1 * numero2;
            console.log("El resultado de la multiplicacion es :" + resultadoMultiplicacion);
            break;
        case "division":
            let resultadoDivision = numero1 / numero2;
            console.log("El resultado de la division es :" + resultadoDivision);
            break;
        default:
            console.log("No existe esta opcion");
            break;
    }
}

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

function categoriaPeliculas (categoria){
    categoria = categoria.toUpperCase();
    categoria = categoria.toLowerCase();
    switch (categoria) {
        case "accion" :
            console.log("Te recomiendo la pelicula de " + categoria + ": Mad Max: Fury Road");
            break;
        case "drama" :
            console.log("Te recomiendo la pelicula de " + categoria + ": La La Land");
            break;
        case "comedia":
            console.log("Te recomiendo la pelicula de " + categoria + ": Superbad");
            break;
        case "romance":
            console.log("Te recomiendo la pelicula de " + categoria + ": The Notebook");
            break;
        case "suspenso":
            console.log("Te recomiendo la pelicula de " + categoria + ": Gone Girl");
            break;
        case "terror":
            console.log("Te recomiendo la pelicula de " + categoria + ": El Conjuro");
            break;
        default:
            console.log("No existe esta opcion");
            break;
    }
}

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideraciones: utilizar la estructura switch
 */

function divisionDivisas(opcion,pesos) {
    opcion = opcion.toUpperCase();
    opcion = opcion.toLowerCase();
    switch (opcion) {
        case "dolares":
            let aDolares = pesos * 0.059;
            console.log("La conversion de " + pesos + " pesos a dolares estadounidenses es: " + aDolares)
            break;
        case "euros":
            let aEuros = pesos * 0.055;
            console.log("La conversion de " + pesos + " pesos a euros es: " + aEuros)
            break;
        case "yenes":
            let aYenes = pesos * 8.65;
            console.log("La conversion de " + pesos + " pesos a yenes japoneses es: " + aYenes)
            break;
        case "libra":
            let aLibra = pesos * 0.047;
            console.log("La conversion de " + pesos + " pesos a libra esterlina es: " + aLibra)
            break;
        case "franco":
            let aFranco = pesos * 0.053;
            console.log("La conversion de " + pesos + " pesos a franco suizo es: " + aFranco)
            break;
        default:
            console.log("No existe esta conversion")
            break;
    }
}