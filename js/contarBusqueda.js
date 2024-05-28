"use strict"

//Función Arrow

const contarBusqueda = (texto, busqueda) => {
    if (!texto) {
        return 0;
    }
    let palabrasMinusculas = texto.toLowerCase();
    let palabras = palabrasMinusculas.split(/\s+/);
    let count = 0;
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === busqueda) {
            count++;
        }
    }
    return count;
}

//Función tradicional

/* function contarBusqueda(texto, busqueda) {
    if (!texto) {
        return 0;
    }
    let palabras = texto.split(/\s+/);
    let count = 0;
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === busqueda) {
            count++;
        }
    }
    return count;
}; */