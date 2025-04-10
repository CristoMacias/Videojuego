import Personaje from "./Personaje.js";
import {cambiarCursor} from "./Cursor.js";
document.addEventListener('DOMContentLoaded', ()=> {
    //Atributos parte superior
    const spanVidaActual = document.querySelector("#spanVidaActual");
    const spanVidaMax=document.querySelector("#spanVidaMax");
    const spanManaMax=document.querySelector("#spanManaMax");
    const spanManaActual = document.querySelector("#spanManaActual");
    const spanDanio = document.querySelector("#spanDanio");
    const spanTotalDanio=document.querySelector("#total-danio");
    const spanArmadura = document.querySelector("#spanArmadura");
    const spanResistenciaMagica = document.querySelector("#spanResistenciaMagica");
    //Imagen
    const imagen = document.querySelector("#imagen");

    //Atributos parte inferior
    const spanNombre = document.querySelector("#spanNombre");
    const spanRaza = document.querySelector("#spanRaza");
    const spanNivel = document.querySelector("#spanNivel");
    const spanExperiencia = document.querySelector("#spanExperiencia");
    const spanExpMax=document.querySelector("#spanExpMax");
    const spanOro = document.querySelector("#spanOro");
    //Recogemos al personaje del localStorage y lo reconstruimos
    const jsonpersonaje = JSON.parse(localStorage.getItem('personaje'));
    const personaje = Personaje.reconstruirJson(jsonpersonaje);
    cambiarCursor(personaje.raza);//Usamos el cursosr según raza

    //Barras de progress
    const barraVida=document.querySelector("#barra-vida");
    const barraMana=document.querySelector("#barra-mana");
    const barraDanio=document.querySelector("#barra-danio");
    const barraArmadura=document.querySelector("#barra-armadura");
    const barraResistencia=document.querySelector("#barra-resistencia");
    const barraExp=document.querySelector("#barra-experiencia");
    //Mostrar los valores de los span y progress de caracteristicas superiores
    spanVidaActual.textContent = Math.floor(personaje.vidaActual)+" " ;
    spanVidaMax.textContent=" "+Math.floor(personaje.vidaMaxima);
    spanManaActual.textContent = Math.floor(personaje.manaActual)+" ";
    spanManaMax.textContent=" "+Math.floor(personaje.manaMaximo);
    spanDanio.textContent = "ATAQUE: " + Math.floor(personaje.ataque)+" ";
    spanArmadura.textContent = " " + Math.floor(personaje.defensa);
    spanResistenciaMagica.textContent = " "+Math.floor(personaje.resistenciaMagica);
    if(personaje.raza==="mago"|| personaje.raza==="elfo"){
        spanDanio.textContent = "MAGIA: ";
        spanTotalDanio.textContent= Math.floor(personaje.magia);
        barraDanio.value=Math.floor(personaje.magia);
    }else{
        spanDanio.textContent = "ATAQUE: ";
        spanTotalDanio.textContent= " "+Math.floor(personaje.ataque);
        barraDanio.value=Math.floor(personaje.ataque);
    }
    barraVida.value=personaje.vidaActual;
    barraVida.max=personaje.vidaMaxima;
    barraMana.value=personaje.manaActual;
    barraMana.max=personaje.manaMaximo;
    barraArmadura.value=personaje.defensa;
    barraResistencia.value=personaje.resistenciaMagica;

    
    
    //Características inferiores
    spanNombre.textContent = " " + personaje.nombre;
    spanRaza.textContent = " " + personaje.raza.toUpperCase();
    spanNivel.textContent = " " + personaje.nivel;
    spanExperiencia.textContent = Math.floor(personaje.experiencia)+" ";
    spanExpMax.textContent=" "+Math.floor(personaje.experienciaMaxima);
    spanOro.textContent = " " + personaje.oro;
    imagen.src = personaje.imagen;
    barraExp.value=personaje.experiencia;
    barraExp.max=personaje.experienciaMaxima;
    

});
