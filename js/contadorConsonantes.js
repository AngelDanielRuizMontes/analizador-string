"use strict"

const contadorConsonantes = palabra => {
    const consonantes = "bcdfghjklmnpqrstvwxyz";
    let cantidadConsonantes = 0;
    for (const letra of palabra) {
        if (consonantes.includes(letra.toLowerCase())) {
            cantidadConsonantes++;
        }
    }
    return cantidadConsonantes;
};