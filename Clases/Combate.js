import Personaje from "./Personaje.js";
import Enemigos from "./Enemigos.js";

document.addEventListener('DOMContentLoaded', () => {

    const jsonpersonaje = JSON.parse(localStorage.getItem('personaje'));
    const personaje = Personaje.reconstruirJson(jsonpersonaje);

    const jsonenemigo = JSON.parse(localStorage.getItem('enemigo'));
    console.log(jsonenemigo);
    const enemigo = Enemigos.reconstruirJson(jsonenemigo);

   console.log(enemigo);
   console.log(enemigo.vida);
   console.log(enemigo.nombre);
   console.log(enemigo.nivel);

    //Declarar las span para mostrar los nombres
    const spanNombreAliado = document.querySelector("#nombreAliado");
    const spanNombreEnemigo = document.querySelector("#nombreEnemigo");
    const spanNivelAliado = document.querySelector("#nivelAliado");
    const spanNivelEnemigo = document.querySelector("#nivelEnemigo");
    const spanVidaAliado = document.querySelector("#vidaAliado");
    const spanVidaEnemigo = document.querySelector("#vidaEnemigo");
    const mana = document.querySelector("#manaAliado");

    //Declarar botones
    const botonAtacar = document.querySelector("#botonAtacar");
    const botonDefender = document.querySelector("#botonDefender");
    const botonCritico = document.querySelector("#botonCritico");
    const botonPocion = document.querySelector("#botonPocion");
    const botonHuir = document.querySelector("#botonHuir");


    if (personaje) {
        //Mostrar los atributos de personajes
        spanNombreAliado.textContent = " : " + personaje.nombre;
        spanNombreEnemigo.textContent = " : " + enemigo.nombre;
        spanNivelAliado.textContent = " : " + personaje.nivel;
        spanNivelEnemigo.textContent = " : " + enemigo.nivel;
        spanVidaAliado.textContent = " : " + personaje.vidaActual;
        spanVidaEnemigo.textContent = " : " + enemigo.vida;
        mana.textContent = " : " + personaje.manaActual;
    }

    let contadorCriticoEnemigo = Math.floor(Math.random() * 10);

    /**
     * Método para atacar
     */
    /**
     * Método para atacar
     */
    const atacar = function () {
        
        if(personaje.vidaActual > 0 && enemigo.vida > 0){
            personaje.atacarEnemigo(enemigo);
            if(enemigo.vida <= 0){
                spanVidaEnemigo.textContent = " Eliminado ";
            }
            else{
                spanVidaEnemigo.textContent = " : " + enemigo.vida;
            }
            
            if(enemigo.vida > 0){
                enemigo.atacar(personaje);
                if(personaje.vidaActual <= 0){
                    spanVidaAliado.textContent = " Eliminado ";
                }else{
                    spanVidaAliado.textContent = " : " + personaje.vidaActual;
                }
            }
        }
        else{
            alert("Se acabo el combate.")
        }

    }
    botonAtacar.addEventListener("click", atacar);

    /**
     * Método de defender
     */
    const defender = function () {
        console.log("Esta función aun no está implementada.")
    }
    botonDefender.addEventListener("click", defender);

    /**
     * Método para dar un golpe crítico
     */
    const golpeCritico = function () {
        
        if(personaje.vidaActual > 0 && enemigo.vida > 0){
            personaje.ataqueCritico(enemigo);
            if(enemigo.vida <= 0){
                spanVidaEnemigo.textContent = " Eliminado ";
            }
            else{
                spanVidaEnemigo.textContent = " : " + enemigo.vida;
            }
            
            if(enemigo.vida > 0){
                enemigo.atacar(personaje);
                if(personaje.vidaActual <= 0){
                    spanVidaAliado.textContent = " Eliminado ";
                }else{
                    spanVidaAliado.textContent = " : " + personaje.vidaActual;
                }
            }
        }
        else{
            alert("Se acabo el combate.")
        }
    }
    botonCritico.addEventListener("click", golpeCritico);

    /**
     * Botón de tomar poción.
     */
    const tomarPocion = function () {

    }
    botonPocion.addEventListener("click", tomarPocion)

    const huirDelCombate = function () {
        localStorage.removeItem('enemigo');
    }
    botonHuir.addEventListener("click", huirDelCombate);




});