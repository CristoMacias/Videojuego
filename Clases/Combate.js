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
    const spanManaAliado = document.querySelector("#manaAliado");

    //Declarar botones
    const botonAtacar = document.querySelector("#botonAtacar");
    const botonDefender = document.querySelector("#botonDefender");
    const botonCritico = document.querySelector("#botonCritico");
    const botonPocion = document.querySelector("#botonPocion");
    const botonHuir = document.querySelector("#botonHuir");

    //Declarar Superposiciones
    const victoria = document.querySelector("#victoria");
    const derrota = document.querySelector("#derrota");
    const botonFinPartida = document.querySelector("#botonFinPartida");


    const inventarioPersonaje = personaje.inventario;
    let pocionesVida = inventarioPersonaje.pocionesVida;

    if (personaje) {
        //Mostrar los atributos de personajes
        spanNombreAliado.textContent = " : " + personaje.nombre;
        spanNombreEnemigo.textContent = " : " + enemigo.nombre;
        spanNivelAliado.textContent = " : " + personaje.nivel;
        spanNivelEnemigo.textContent = " : " + enemigo.nivel;
        spanVidaAliado.textContent = " : " + personaje.vidaActual;
        spanVidaEnemigo.textContent = " : " + enemigo.vida;
        spanManaAliado.textContent = " : " + personaje.manaActual;
    }

    let contadorCriticoEnemigo = Math.floor(Math.random() * 10);

    /**
     * Método para atacar
     */
    /**
     * Método para atacar
     */
    const atacar = function () {
        
        personaje.atacarEnemigo(enemigo);
            if(enemigo.vida <= 0){
                spanVidaEnemigo.textContent = " Eliminado ";
            }
            else{
                spanVidaEnemigo.textContent = " : " + enemigo.vida;
            }
        
        ataqueEnemigo();

        controlarVida();

    }
    botonAtacar.addEventListener("click", atacar);

    function ataqueEnemigo(){
        if(enemigo.vida > 0){
            enemigo.atacar(personaje);
            if(personaje.vidaActual <= 0){
                spanVidaAliado.textContent = " Eliminado ";
            }else{
                spanVidaAliado.textContent = " : " + personaje.vidaActual;
            }
        }  
        controlarVida(); 
    }


    /**
     * Método de defender
     */
    const defender = function () {
        
        personaje

    }
    botonDefender.addEventListener("click", defender);

    /**
     * Método para dar un golpe crítico
     */
    const golpeCritico = function () {
    
    if(personaje.manaActual > 0 && personaje.manaActual > 39){
            personaje.ataqueCritico(enemigo);
            personaje.manaActual -= 40;
            spanManaAliado.textContent = " : " + personaje.manaActual;
            if(enemigo.vida <= 0){
                    spanVidaEnemigo.textContent = " Eliminado ";
            }
            else{
                    spanVidaEnemigo.textContent = " : " + enemigo.vida;
            }
                
            ataqueEnemigo();
    }
    else if(personaje.manaActual < 40){
        alert("No tienes suficiente maná")
    }
    else{
            alert("¡El maná se ha agotado!");
    }
        controlarVida();
       
    }
    botonCritico.addEventListener("click", golpeCritico);

    /**
     * Botón de tomar poción.
     */
    const tomarPocion = function () {
        personaje.tomarPocion(pocionesVida[0]);
        spanVidaAliado.textContent = " : " + personaje.vidaActual;
    }
    botonPocion.addEventListener("click", tomarPocion)

    const huirDelCombate = function () {
        localStorage.removeItem('enemigo');
    }
    botonHuir.addEventListener("click", huirDelCombate);

    /**
     * Botón de volver al Lobby, esto subirá los cambios del aliado.
     */
    const volverLobby = function () {
        localStorage.removeItem('enemigo');
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson()));
    }
    botonFinPartida.addEventListener("click", volverLobby);

    

    function controlarVida(){
        if (personaje.vidaActual <= 0 || enemigo.vida <= 0){
            if(personaje.vidaActual <= 0){
                botonAtacar.classList.add("botonesArenaBlock");
                botonDefender.classList.add("botonesArenaBlock");
                botonCritico.classList.add("botonesArenaBlock");
                botonPocion.classList.add("botonesArenaBlock");
                botonHuir.classList.add("botonesArenaBlock");
                derrota.style.display = "flex";
                botonFinPartida.style.display = "flex";
                personaje.vidaActual = personaje.vidaMaxima;
            }
            else{
                botonAtacar.classList.add("botonesArenaBlock");
                botonDefender.classList.add("botonesArenaBlock");
                botonCritico.classList.add("botonesArenaBlock");
                botonPocion.classList.add("botonesArenaBlock");
                botonHuir.classList.add("botonesArenaBlock");
                victoria.style.display = "flex";
                botonFinPartida.style.display = "flex";
                darExperiencia();
                darOro();
            }

        }
    }

    function darExperiencia(){
        let experienciaGanada = 0;

        if(personaje.nivel === enemigo.nivel || personaje.nivel > enemigo.nivel){
            experienciaGanada = 100;
        }
        else{
            experienciaGanada = (enemigo.nivel - personaje.nivel) * 100;
        }
        

        personaje.ganarExperiencia(experienciaGanada);
        
    }
    function darOro(){
        personaje.oro += 100;
    }


});