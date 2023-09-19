/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

// FUNCIONES CON NOMBRE

// Calcula el perimetro de un circulo
function calcularPerimetroCirculo (diametro){
    const pi = 3.1416;
    let perimetroCirculo = pi * diametro;
    return `El perimetro calculado es de: ${perimetroCirculo}`;
}

// Calcula el area de un rectangulo
function calcularAreaRectangulo (largo, ancho){
    let areaRectangulo = largo*ancho;
    console.log("El area calculada es de : " + areaRectangulo)
}

// Calcula el cuadrado de un numero
function calcularCuadradoNumero (numero){
    let cuadradoNumero = numero*numero;
    return 'El cuadrado del numero es: ' + cuadradoNumero;
}

// Calcula la conversion de grados celsius a farenheit
function calcularConversionGrados (gradosCelsius){
    let gradosFarenheit = (gradosCelsius*1.8) + 32;
    return `Los grados Celcius ${gradosCelsius} en Farenheit son: ${gradosFarenheit}`;
}

// Calcula el voltaje
function calcularVoltaje (resistencia, corriente){
    let voltaje = resistencia*corriente;
    console.log('El voltaje calculado es: ' + voltaje + ' volts')
}

// Calcula el volumen de una esfera
function calcularVolumenEsfera (radio){
    let volumenEsfera = (4/3)*3.1416*(radio*radio*radio);
    console.log("El volumen calculado es: " + volumenEsfera)
}


