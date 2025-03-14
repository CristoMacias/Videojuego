import Personaje from "./Personaje.js";

document.addEventListener('DOMContentLoaded',()=>{

    const jsonpersonaje = JSON.parse(localStorage.getItem('personaje'));
    const personaje = Personaje.reconstruirJson(jsonpersonaje);

    const enemigo = JSON.parse(localStorage.getItem('enemigo'));

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


    if(personaje){
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
    const atacar = function (){
        
        if(enemigo.vida > 0){
        enemigo.vida -= personaje.ataque;
        }

        if(contadorCriticoEnemigo == 4){
            setTimeout(() => {
                personaje.vidaActual -= enemigo.ataque + 50;
                spanVidaAliado.textContent = " : " + personaje.vidaActual; 
                alert("El enemigo te ha atacado");
                }, 500);
        }else{
        setTimeout(() => {
        personaje.vidaActual -= enemigo.ataque
        spanVidaAliado.textContent = " : " + personaje.vidaActual; 
        alert("El enemigo te ha atacado");
        }, 500);
        }
        
    }
    botonAtacar.addEventListener("click", atacar);
    
    /**
     * Método de defender
     */
    const defender = function(){
        console.log("Esta función aun no está implementada.")
    }
    botonDefender.addEventListener("click", defender);

    /**
     * Método para dar un golpe crítico
     */
    const golpeCritico = function(){
        if(enemigo.vida > 0){
            enemigo.vida -= personaje.ataque + 50;
            personaje.manaActual -= 20;
            }
    
            spanVidaEnemigo.textContent = " : " + enemigo.vida;
            mana.textContent = " : " + personaje.manaActual;

            setTimeout(() => {
            personaje.vidaActual -= enemigo.ataque
            spanVidaAliado.textContent = " : " + personaje.vidaActual; 
            alert("El enemigo te ha atacado");
            }, 500);
    }
    botonCritico.addEventListener("click", golpeCritico);

    /**
     * Botón de tomar poción.
     */
    const tomarPocion = function(){
        
    }
    botonPocion.addEventListener("click", tomarPocion)

    const huirDelCombate = function(){
        localStorage.removeItem('enemigo');
    }
    botonHuir.addEventListener("click", huirDelCombate);




});