"use strict"

//Función Arrow

const solicitud = async url => {
    let resultado = await fetch(url);
    return resultado.json();
}

//Función tradicional

/* async function solicitud(url) {
    let resultado = await fetch(url);
    return resultado.json();
} */