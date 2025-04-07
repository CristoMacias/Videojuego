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
    let cantidadVidaMedianas = personaje.inventario.pocionesVida.findIndex(p => p.nombre === "Poción de Salud Media🥂").length;
    let cantidadVidaGrandes = personaje.inventario.pocionesVida.findIndex(p => p.nombre === "Poción de Salud Grande🍾").length;
    let cantidadVidaMilagrosa = personaje.inventario.pocionesVida.findIndex(p => p.nombre === "Poción de Maná Pequeña🔵").length;
    let cantidadManaPequenas = personaje.inventario.pocionesMana.findIndex(p => p.nombre === "Poción de Maná Pequeña🔵").length;
    let cantidadManaMedianas = personaje.inventario.pocionesMana.findIndex(p => p.nombre === "Poción de Maná Media🔷").length;
    let cantidadManaGrandes = personaje.inventario.pocionesMana.findIndex(p => p.nombre === "Poción de Maná Grande🔮").length;
    let cantidadManaDivinas = personaje.inventario.pocionesMana.findIndex(p => p.nombre === "Poción de Maná Pequeña🔵").length;
   
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
        spanVidaAliado.textContent = " : " + personaje.vidaActual;
        spanVidaEnemigo.textContent = " : " + enemigo.vida;
        spanManaAliado.textContent = " : " + personaje.manaActual;
    }

    let contadorCriticoEnemigo = Math.floor(Math.random() * 10);

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
            spanManaAliado.textContent = " : " + personaje.manaActual;
            if(enemigo.vida <= 0){
                    spanVidaEnemigo.textContent = " Eliminado ";
            }
            else{
                    spanVidaEnemigo.textContent = " : " + enemigo.vida;
            }
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
                personaje.inventario.pocionesVida
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
            personaje.inventario.pocionesVida.splice(index, 1); 
            personaje.tomarPocion("salud");
            spanVidaAliado.textContent = " : " + personaje.vidaActual;
            alert("Poción de salud pequeña usada.");
        } else {
            alert("No quedan más pociones de salud pequeñas.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");

        localStorage.setItem("personaje", JSON.stringify(personaje.convertirJson()));
    }
    botonPocionSaludPequenha.addEventListener("click", tomarPocionPequenha);

    /**
     * Pocion para tomar pocion de vida mediana
     */
    const tomarPocionMediana = function () {
        let index = personaje.inventario.pocionesVida.findIndex(p => p.nombre === "Poción de Salud Media🥂");

        if (index !== -1) {
            personaje.inventario.pocionesVida.splice(index, 1); 
            personaje.tomarPocion("salud"); 
            spanVidaAliado.textContent = " : " + personaje.vidaActual; 
            alert("Poción de salud mediana usada.");
        } else {
            alert("No quedan más pociones de salud medianas.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");
    
        localStorage.setItem("personaje", JSON.stringify(personaje.convertirJson()));
    }
    botonPocionSaludMediana.addEventListener("click", tomarPocionMediana);

    /**
     * Pocion para tomar pocion de vida grande
     */
    const tomarPocionGrande = function () {
        let index = personaje.inventario.pocionesVida.findIndex(p => p.nombre === "Poción de Salud Grande🍾");

        if (index !== -1) {
            personaje.inventario.pocionesVida.splice(index, 1); 
            personaje.tomarPocion("salud");
            spanVidaAliado.textContent = " : " + personaje.vidaActual;
            alert("Poción de salud grande usada.");
        } else {
            alert("No quedan más pociones de salud grandes.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");
    
        localStorage.setItem("personaje", JSON.stringify(personaje.convertirJson()));
    }
    botonPocionSaludGrande.addEventListener("click", tomarPocionGrande);

    /**
     * Pocion para tomar pocion de mana vida mmilagrosa
     */
    const tomarPocionMilagrosa = function () {
        let index = personaje.inventario.pocionesVida.findIndex(p => p.nombre === "Poción Milagrosa✨");

        if (index !== -1) {
            personaje.inventario.pocionesVida.splice(index, 1); 
            personaje.tomarPocion("salud"); 
            spanVidaAliado.textContent = " : " + personaje.vidaActual;
            alert("Poción de salud milagrosa usada.");
        } else {
            alert("No quedan más pociones de salud milagrosas.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");
    
        localStorage.setItem("personaje", JSON.stringify(personaje.convertirJson()));
    }
    botonPocionSaludMilagrosa.addEventListener("click", tomarPocionMilagrosa);

    /**
     * Tomar pocion de mana pequeña
     */
    const tomarPocionManaPequenha = function () {
        let index = personaje.inventario.pocionesMana.findIndex(p => p.nombre === "Poción de Maná Pequeña🔵");

        if (index !== -1) {
            personaje.inventario.pocionesMana.splice(index, 1);
            personaje.tomarPocion("mana"); 
            spanManaAliado.textContent = " : " + personaje.vidaMana;
            alert("Poción de mana pequeña usada.");
        } else {
            alert("No quedan más pociones de mana pequeñas.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");
    
        localStorage.setItem("personaje", JSON.stringify(personaje.convertirJson()));
    }
    botonPocionManaPequenha.addEventListener("click", tomarPocionManaPequenha);

    /**
     * Tomar pocion de mana mediana
     */
    const tomarPocionManaMediana = function () {
        let index = personaje.inventario.pocionesMana.findIndex(p => p.nombre === "Poción de Maná Media🔷");

        if (index !== -1) {
            personaje.inventario.pocionesMana.splice(index, 1); 
            personaje.tomarPocion("mana"); 
            spanManaAliado.textContent = " : " + personaje.vidaMana; 
            alert("Poción de mana mediana usada.");
        } else {
            alert("No quedan más pociones de mana medianas.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");
    
        
        localStorage.setItem("personaje", JSON.stringify(personaje.convertirJson()));
    }
    botonPocionManaMediana.addEventListener("click", tomarPocionManaMediana);

    /**
     * Tomar pocion de mana grande
     */
    const tomarPocionManaGrande = function () {
        let index = personaje.inventario.pocionesMana.findIndex(p => p.nombre === "Poción de Maná Grande🔮");

        if (index !== -1) {
            personaje.inventario.pocionesMana.splice(index, 1);
            personaje.tomarPocion("mana"); 
            spanManaAliado.textContent = " : " + personaje.vidaMana;
            alert("Poción de mana grande usada.");
        } else {
            alert("No quedan más pociones de mana grandes.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");
    
        
        localStorage.setItem("personaje", JSON.stringify(personaje.convertirJson()));
    }
    botonPocionManaGrande.addEventListener("click", tomarPocionManaGrande);

   
    const tomarPocionDivina = function () {
        let index = personaje.inventario.pocionesVida.findIndex(p => p.nombre === "Poción de Maná Divina✨");

        if (index !== -1) {
            personaje.inventario.pocionesMana.splice(index, 1); 
            personaje.tomarPocion("mana"); 
            spanManaAliado.textContent = " : " + personaje.vidaMana;
            alert("Poción de mana divina usada.");
        } else {
            alert("No quedan más pociones de mana divinas.");
        }
    
        divPociones.classList.replace("tiposPocionesVisto" ,"tiposPocionesOculto");
    
       
        localStorage.setItem("personaje", JSON.stringify(personaje.convertirJson()));
    }
    botonPocionManaDivina.addEventListener("click", tomarPocionDivina);

});