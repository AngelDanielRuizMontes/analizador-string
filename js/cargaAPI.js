"use strict"

async function cargaAPI() {
    let url = `https://chiquitadas.es/api/quotes/avoleorrr`;
    const resultado = await solicitud(url);
    mostrarAPI(resultado);
};