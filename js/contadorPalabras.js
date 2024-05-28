"use strict"

//Función Arrow

const contadorPalabras = texto => {
    if (!texto) {
        return 0;
    }
    let palabras = texto.split(/\s+/);
    return palabras.length;
}

//Función tradicional

/* function contadorPalabras(texto, busqueda) {
    if (!texto) {
        return 0;
    }
    let palabras = texto.split(/\s+/);
    return palabras.length;
}; */