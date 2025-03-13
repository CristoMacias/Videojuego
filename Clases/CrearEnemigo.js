import Enemigos from "./Enemigos.js";

const iniciarCombate = document.querySelector("#combate")

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

const razas = ["Orco",
                "Enano",
                "Humano",
                "Mago",
                "Elfo"];

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
    let max = 5;
    let numeroRaza = Math.floor(Math.random() * (max + 1));
    return razas[numeroRaza];
}

/**
 * Función para elegir nombre de manera aleatoria
 * @returns nombre
 */
function elegirNombre(){
    let max = 10;
    let numeroNombre = Math.floor(Math.random() * (max + 1));
    return nombres[numeroNombre];
}

function elegirNivel(){
    let max = 4;
    let numeroNivel = Math.floor(Math.random() * (max + 1));

    return numeroNivel;
}


