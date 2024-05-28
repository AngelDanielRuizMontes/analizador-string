"use strict"

//Función Arrow Optimizada

const invertirCadena = textoInvertido => {
    return textoInvertido.split("").reverse().join("");
}

//Función Arrow

/* const invertirCadena = texto => {
    let caracteres = texto.split("");
    let invertirCaracteres = caracteres.reverse();
    let textoInvertido = invertirCaracteres.join("");
    return textoInvertido;
} */

//Función Tradicional

/* function invertirCadena(texto) {
    let caracteres = texto.split("");
    let invertirCaracteres = caracteres.reverse();
    let textoInvertido = invertirCaracteres.join("");
    return textoInvertido;
} */