import Enemigos from "./Enemigos.js";
import Personaje from "./Personaje.js";

document.addEventListener('DOMContentLoaded', ()=> {

const iniciarCombate = document.querySelector("#combate");
let numeroRaza = 0;

    const jsonpersonaje = JSON.parse(localStorage.getItem('personaje'));
    const personaje = Personaje.reconstruirJson(jsonpersonaje);

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

const imagenesPersonaje=[ // "Array donde guardamos las imagenes para elegir"
        "./Imagenes/orco.png",
        "./Imagenes/enano.png",
        "./Imagenes/humano.png",
        "./Imagenes/mago.png",
        "./Imagenes/elfo.png"
];


/**
 * Función para crear al enemigo
 */
const subirPersonaje = function (){
    const nombre = elegirNombre();
    const raza = elegirRaza();
    const nivel = elegirNivel();
    const imagen = aplicarImagen();
    const enemigo = new Enemigos(nombre, raza, nivel, imagen);
    localStorage.setItem('enemigo',JSON.stringify(enemigo.convertirJson()));
}
iniciarCombate.addEventListener("click", subirPersonaje);

/**
 * Función para elegir una raza de manera aleatoria
 * @returns 
 */
function elegirRaza(){
    numeroRaza = Math.floor(Math.random() * (razas.length));
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
    let nivelPersonaje = personaje.nivel;
    let numeroNivel;
    let bandera = false;
    let escalaNiveles = 10;

    do{

    if(nivelPersonaje < 10){
        numeroNivel = Math.floor(Math.random() * 10);
            if(numeroNivel == 0){
                numeroNivel = 1;
                bandera = true;
            }
            else{
                bandera = true;
            }
        bandera = true;
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
    function aplicarImagen(){
        return imagenesPersonaje[numeroRaza];
    }

});
