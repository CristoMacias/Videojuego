import Enemigos from "./Enemigos.js";
import Personaje from "./Personaje.js";

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

function elegirNivel(personaje){
    let nivelPersonaje = 5;
    let numeroNivel;
    let bandera = false;
    let escalaNiveles = 10;

    do{

    if(nivelPersonaje < 10){
        numeroNivel = Math.floor(Math.random() * 10);
    }
    else if(nivelPersonaje > escalaNiveles && nivelPersonaje <= escalaNiveles + 10){
        numeroNivel = Math.floor(Math.random() * 10 + escalaNiveles);
        bandera = true;
        
    }
    else{
        escalaNiveles += 10;
    }

    }while(!bandera);

    return numeroNivel;   
      
}
});
