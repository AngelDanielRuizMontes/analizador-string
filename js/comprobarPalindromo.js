"use strict"

//Función Arrow

const comprobarPalindromo = texto => {
    const sinTildes = texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    let textobase = sinTildes.toLowerCase().replace(/[\W_]/g, '');
    let textoInvertido = textobase.split('').reverse().join(''); 
    return textobase === textoInvertido;
}

//Función Tradicional

/* function comprobarPalindromo(texto) {
    const sinTildes = texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    let textobase = sinTildes.toLowerCase().replace(/[\W_]/g, '');
    let textoInvertido = textobase.split('').reverse().join(''); 
    return textobase === textoInvertido;
} */