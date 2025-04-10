import Personaje from "./Personaje.js";
import Enemigos from "./Enemigos.js";
import {cambiarCursor} from "./Cursor.js";
document.addEventListener('DOMContentLoaded', () => {

    const jsonpersonaje = JSON.parse(localStorage.getItem('personaje'));
    const personaje = Personaje.reconstruirJson(jsonpersonaje);
    cambiarCursor(personaje.raza);
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
    const spanVidaActualAliado = document.querySelector("#vidaActualAliado");
    const spanVidaActualEnemigo = document.querySelector("#vidaActualEnemigo");
    const spanManaActualAliado = document.querySelector("#manaActualAliado");
    const personajeBarraVida = document.querySelector("#personajeBarraVida");
    const enemigoBarraVida = document.querySelector("#enemigoBarraVida");
    const spanPersonajeVidaMax = document.querySelector("#spanPersonajeVidaMax");
    const spanPersonajeManaMax=document.querySelector("#spanPersonajeManaMax");
    const spanEnemigoVidaMax = document.querySelector("#spanEnemigoVidaMax");
    const personajeBarraMana=document.querySelector("#personajeBarraMana");
    //IMAGENES
    const imagenPersonaje = document.querySelector("#imagenPersonaje");
    const imagenEnemigo = document.querySelector("#imagenEnemigo");

    //Declarar botones
    const botonAtacar = document.querySelector("#botonAtacar");
    const botonDefender = document.querySelector("#botonDefender");
    const botonCritico = document.querySelector("#botonCritico");
    const botonPocion = document.querySelector("#botonPocion");
    const botonHuir = document.querySelector("#botonHuir");

    //Declarar botones de pociones
    const divPociones = document.querySelector("#divPociones");
    const botonPocionSaludPequenha = document.querySelector("#botonPocionSaludPequenha");
    const botonPocionSaludMediana = document.querySelector("#botonPocionSaludMediana");
    const botonPocionSaludGrande = document.querySelector("#botonPocionSaludGrande");
    const botonPocionSaludMilagrosa = document.querySelector("#botonPocionSaludMilagrosa");
    const botonPocionManaPequenha = document.querySelector("#botonPocionManaPequenha");
    const botonPocionManaMediana = document.querySelector("#botonPocionManaMediana");
    const botonPocionManaGrande = document.querySelector("#botonPocionManaGrande");
    const botonPocionManaDivina = document.querySelector("#botonPocionManaDivina");

    //Declarar Superposiciones
    const victoria = document.querySelector("#victoria");
    const derrota = document.querySelector("#derrota");
    const botonFinPartida = document.querySelector("#botonFinPartida");

   
    //Contar total de pociones.
    const hayPocionPequena = personaje.inventario.pocionesVida.some(p => p.nombre === "Poción de Salud Pequeña🍷");
   
    const inventarioPersonaje = personaje.inventario;
    let pocionesVida = inventarioPersonaje.pocionesVida;
    let pocionesMana = inventarioPersonaje.pocionesMana;

    let contadorDefensa = 1;
    let turnos = -1;

    if (personaje) {
        //Mostrar los atributos de personajes
        spanNombreAliado.textContent = " : " + personaje.nombre;
        spanNombreEnemigo.textContent = " : " + enemigo.nombre;
        spanNivelAliado.textContent = " : " + personaje.nivel;
        spanNivelEnemigo.textContent = " : " + enemigo.nivel;
        spanVidaActualAliado.textContent = " : " + Math.round(personaje.vidaActual)+" ";
        spanPersonajeVidaMax.textContent=" "+Math.round(personaje.vidaMaxima);
        spanVidaActualEnemigo.textContent = " : " + Math.round(enemigo.vida)+" ";
        spanEnemigoVidaMax.textContent=" "+Math.round(enemigo.vidaMax);
        spanManaActualAliado.textContent = " : " + Math.floor(personaje.manaActual)+" ";
        spanPersonajeManaMax.textContent=" "+Math.round(personaje.manaMaximo);
        imagenPersonaje.src = personaje.imagen;
        imagenEnemigo.src = enemigo.imagen;

        personajeBarraVida.value=Math.round(personaje.vidaActual);
        personajeBarraVida.max=Math.round(personaje.vidaMaxima);
        personajeBarraMana.value=Math.round(personaje.manaActual);
        personajeBarraMana.max=Math.round(personaje.manaMaximo);
        enemigoBarraVida.value=Math.round(enemigo.vida);
        enemigoBarraVida.max=Math.round(enemigo.vidaMax);
    }

    let contadorCriticoEnemigo = Math.floor(Math.random() * 10);

    /**
     * Método para atacar
     */
    const atacar = function () {
        
        personaje.atacarEnemigo(enemigo);

        actualizarVida();
        controlarTurnos();
        ataqueEnemigo();
        controlarVida();

    }
    botonAtacar.addEventListener("click", atacar);

    /**
     * Funcion para que el enemigo ataque
     */
    function ataqueEnemigo(){
        if(enemigo.vida > 0){
            enemigo.atacar(personaje);
        }
        actualizarVida();
        controlarVida(); 
    }


    /**
     * Método de defender
     */
    const defender = function () {

        if(contadorDefensa > 0){
        turnos = 3;
        personaje.defenderse();
        alert("Has activado la defensa.")
        contadorDefensa--;
        }
        else{
            botonDefender.disabled = true;
            alert("Esta opción solo se puede usar 1 vez por combate");
        }
    }
    botonDefender.addEventListener("click", defender);

    /**
     * Método para dar un golpe crítico
     */
    const golpeCritico = function () {
    
    if(personaje.manaActual > 0 && personaje.manaActual > 39){
            personaje.ataqueCritico(enemigo);
            personaje.manaActual -= 40;
            spanManaActualAliado.textContent = " : " + Math.round(personaje.manaActual);
            actualizarVida();
            controlarTurnos();
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
        
        divPociones.classList.add("tiposPocionesVisto");

        if(!hayPocionPequena){
            botonPocionSaludPequenha.disabled = true;
        }
        
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
        if(turnos>0){
            personaje.dejarDefenderse();
        }
        localStorage.removeItem('enemigo');
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson()));
        
    }
    botonFinPartida.addEventListener("click", volverLobby);


    function actualizarVida(){
        if(enemigo.vida <= 0){
            spanVidaActualEnemigo.textContent = " Eliminado ";   
        }
        else{
            spanVidaActualEnemigo.textContent = ": " + Math.round(enemigo.vida);
            enemigoBarraVida.value = Math.round(enemigo.vida);
            enemigoBarraVida.max = Math.round(enemigo.vidaMax);
            
        }

        if(personaje.vidaActual <= 0){
            spanVidaActualAliado.textContent = " Eliminado ";
        }else{
            spanVidaActualAliado.textContent = " : " + Math.round(personaje.vidaActual);
            personajeBarraVida.value=Math.round(personaje.vidaActual);
        }

    }

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
                botonHuir.disabled = true;
                botonAtacar.disabled = true;
                botonDefender.disabled = true;
                botonCritico.disabled = true;
                botonPocion.disabled = true;
                personaje.vidaActual = personaje.vidaMaxima;
                personaje.inventario.pocionesVida

            }
            else{
                botonAtacar.classList.add("botonesArenaBlock");
                botonDefender.classList.add("botonesArenaBlock");
                botonCritico.classList.add("botonesArenaBlock");
                botonPocion.classList.add("botonesArenaBlock");
                botonHuir.classList.add("botonesArenaBlock");
                botonHuir.disabled = true;
                botonAtacar.disabled = true;
                botonDefender.disabled = true;
                botonCritico.disabled = true;
                botonPocion.disabled = true;
                victoria.style.display = "flex";
                botonFinPartida.style.display = "flex";
                botonHuir.disabled = true;
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
        personaje.ganarOro(100);
    }

    function controlarTurnos(){
        if(turnos > 0){
            turnos--;
        }
        else if(turnos === 0){
            personaje.dejarDefenderse();
            turnos--;
        }
    }

    //BOTONES DE POCIONES

    /**
     * Boton para tomar pociones de vida pequeña
     */
    const tomarPocionPequenha = function () {
        let index = personaje.inventario.pocionesVida.findIndex(p => p.nombre === "Poción de Salud Pequeña🍷");

        if (index !== -1) {
            let pocion = pocionesVida[index];
            personaje.tomarPocion(pocion);
            spanVidaActualAliado.textContent = " : " + Math.round(personaje.vidaActual);
            alert("Poción de salud pequeña usada.");
        } else {
            alert("No quedan más pociones de salud pequeñas.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");
    }
    botonPocionSaludPequenha.addEventListener("click", tomarPocionPequenha);

    /**
     * Pocion para tomar pocion de vida mediana
     */
    const tomarPocionMediana = function () {
        let index = personaje.inventario.pocionesVida.findIndex(p => p.nombre === "Poción de Salud Media🥂");

        if (index !== -1) {
            let pocion = pocionesVida[index];
            personaje.tomarPocion(pocion);
            spanVidaActualAliado.textContent = " : " + Math.round(personaje.vidaActual); 
            alert("Poción de salud mediana usada.");
        } else {
            alert("No quedan más pociones de salud medianas.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");

    }
    botonPocionSaludMediana.addEventListener("click", tomarPocionMediana);

    /**
     * Pocion para tomar pocion de vida grande
     */
    const tomarPocionGrande = function () {
        let index = personaje.inventario.pocionesVida.findIndex(p => p.nombre === "Poción de Salud Grande🍾");

        if (index !== -1) {
            let pocion = pocionesVida[index];
            personaje.tomarPocion(pocion);
            spanVidaActualAliado.textContent = " : " + Math.round(personaje.vidaActual);
            alert("Poción de salud grande usada.");
        } else {
            alert("No quedan más pociones de salud grandes.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");

    }
    botonPocionSaludGrande.addEventListener("click", tomarPocionGrande);

    /**
     * Pocion para tomar pocion de mana vida mmilagrosa
     */
    const tomarPocionMilagrosa = function () {
        let index = personaje.inventario.pocionesVida.findIndex(p => p.nombre === "Poción Milagrosa✨");

        if (index !== -1) {
            let pocion = pocionesVida[index];
            personaje.tomarPocion(pocion);
            spanVidaActualAliado.textContent = " : " + Math.round(personaje.vidaActual);
            alert("Poción de salud milagrosa usada.");
        } else {
            alert("No quedan más pociones de salud milagrosas.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");

    }
    botonPocionSaludMilagrosa.addEventListener("click", tomarPocionMilagrosa);

    /**
     * Tomar pocion de mana pequeña
     */
    const tomarPocionManaPequenha = function () {
        let index = personaje.inventario.pocionesMana.findIndex(p => p.nombre === "Poción de Maná Pequeña🔵");

        if (index !== -1) {
            let pocion = pocionesMana[index];
            personaje.tomarPocion(pocion);
            spanManaActualAliado.textContent = " : " + Math.round(personaje.manaActual);
            alert("Poción de mana pequeña usada.");
        } else {
            alert("No quedan más pociones de mana pequeñas.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");

    }
    botonPocionManaPequenha.addEventListener("click", tomarPocionManaPequenha);

    /**
     * Tomar pocion de mana mediana
     */
    const tomarPocionManaMediana = function () {
        let index = personaje.inventario.pocionesMana.findIndex(p => p.nombre === "Poción de Maná Media🔷");

        if (index !== -1) {
            let pocion = pocionesMana[index];
            personaje.tomarPocion(pocion); 
            spanManaActualAliado.textContent = " : " + Marh.round(personaje.manaActual); 
            alert("Poción de mana mediana usada.");
        } else {
            alert("No quedan más pociones de mana medianas.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");
    
    }
    botonPocionManaMediana.addEventListener("click", tomarPocionManaMediana);

    /**
     * Tomar pocion de mana grande
     */
    const tomarPocionManaGrande = function () {
        let index = personaje.inventario.pocionesMana.findIndex(p => p.nombre === "Poción de Maná Grande🔮");

        if (index !== -1) {
            let pocion = pocionesMana[index];
            personaje.tomarPocion(pocion);
            spanManaActualAliado.textContent = " : " + Math.round(personaje.manaActual);
            alert("Poción de mana grande usada.");
        } else {
            alert("No quedan más pociones de mana grandes.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");
    
    }
    botonPocionManaGrande.addEventListener("click", tomarPocionManaGrande);

   
    const tomarPocionDivina = function () {
        let index = personaje.inventario.pocionesVida.findIndex(p => p.nombre === "Poción de Maná Divina✨");

        if (index !== -1) {
            let pocion = pocionesMana[index];
            personaje.tomarPocion(pocion); 
            spanManaActualAliado.textContent = " : " + Math.round(personaje.manaActual);
            alert("Poción de mana divina usada.");
        } else {
            alert("No quedan más pociones de mana divinas.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");
    
    }
    botonPocionManaDivina.addEventListener("click", tomarPocionDivina);

});