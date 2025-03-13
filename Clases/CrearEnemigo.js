import Enemigos from "./Enemigos.js";

document.addEventListener('DOMContentLoaded', ()=> {

const iniciarCombate = document.querySelector("#combate");

const nombres = ["Malgor", 
                "Zorath", 
                "Krythar", 
                "Gorgoth", 
                "Fendril", 
                "Varkun", 
                "Tharok",
                "Zulgar",
                "Kharaz",
                "Vorath"];

const razas = ["orco",
                "enano",
                "humano",
                "mago",
                "elfo"];

const niveles = [1, 2 , 3 ,4 , 5];

/**
 * Función para crear al enemigo
 */
const subirPersonaje = function (){
    const nombre = elegirNombre();
    const raza = elegirRaza();
    const nivel = elegirNivel();
    const enemigo = new Enemigos(nombre, raza, nivel);
    localStorage.setItem('enemigo',JSON.stringify(enemigo.convertirJson()));
}
iniciarCombate.addEventListener("click", subirPersonaje);

/**
 * Función para elegir una raza de manera aleatoria
 * @returns 
 */
function elegirRaza(){
    let numeroRaza = Math.floor(Math.random() * (razas.length));
    console.log(numeroRaza);
    console.log(razas[numeroRaza]);
    return razas[numeroRaza];
}

/**
 * Función para elegir nombre de manera aleatoria
 * @returns nombre
 */
function elegirNombre(){
    let numeroNombre = Math.floor(Math.random() * (nombres.length));
    console.log(numeroNombre);
    console.log(nombres[numeroNombre]);
    return nombres[numeroNombre];
}

function elegirNivel(){
    let numeroNivel = Math.floor(Math.random() * (niveles.length));
    console.log(numeroNivel);
    console.log(niveles[numeroNivel]);
    return niveles[numeroNivel];
    }
});
