"use strict"

const busqueda = document.getElementById("busqueda");
const texto = document.getElementById("texto");
const contar = document.getElementById("contar");
const cargar = document.getElementById("cargar");
const contarvocales = document.getElementById("contarvocales");
const contarconsonantes = document.getElementById("contarconsonantes");
const contarpalabras = document.getElementById("contarpalabras");
const invertir = document.getElementById("invertir");
const palindromo = document.getElementById("palindromo");
const salida = document.getElementById("salida");
const borrar = document.getElementById("borrar");


contar.addEventListener("click", function() {
    const count = contarBusqueda(texto.value, busqueda.value);
    salida.innerHTML = `La palabra "${busqueda.value}" se repite ${count} veces.`;
});

cargar.addEventListener("click", cargaAPI);

contarvocales.addEventListener("click", function() {
    const count = contadorVocales(texto.value);
    salida.innerHTML = `Hay ${count} Vovales.`;
});

contarconsonantes.addEventListener("click", function() {
    const count = contadorConsonantes(texto.value);
    salida.innerHTML = `Hay ${count} Consonantes.`;
});

contarpalabras.addEventListener("click", function() {
    const count = contadorPalabras(texto.value);
    salida.innerHTML = `Hay ${count} Palabras.`;
});

invertir.addEventListener("click", function() {
    const textoInvertido = invertirCadena(texto.value);
    texto.value = textoInvertido;
});

palindromo.addEventListener("click", function() {
    const resultadoPalindromo = comprobarPalindromo(texto.value);
    if (resultadoPalindromo) {
        salida.innerHTML = "Sí, es un palíndromo";
    } else {
        salida.innerHTML = "No, no es un palíndromo";
    }
});

borrar.addEventListener("click", function() {
    borra();
});