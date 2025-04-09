import Personaje from "./Personaje.js";
import {cambiarCursor} from "./Cursor.js";
document.addEventListener('DOMContentLoaded', ()=> {

    //Atributos parte superior
    const spanVida = document.querySelector("#spanVida");
    const spanMana = document.querySelector("#spanMana");
    const spanDanioFisico = document.querySelector("#spanDanioFisico");
    const spanArmadura = document.querySelector("#spanArmadura");
    const spanOro = document.querySelector("#spanOro");

    //Imagen
    const imagen = document.querySelector("#imagen");

    //Atributos parte inferior
    const spanNombre = document.querySelector("#spanNombre");
    const spanRaza = document.querySelector("#spanRaza");
    const spanNivel = document.querySelector("#spanNivel");
    const spanExperiencia = document.querySelector("#spanExperiencia");
    const spanPoderMagico = document.querySelector("#spanPoderMagico")
    const spanResistenciaMagica = document.querySelector("#spanResistenciaMagica")

    const jsonpersonaje = JSON.parse(localStorage.getItem('personaje'));
    const personaje = Personaje.reconstruirJson(jsonpersonaje);
    cambiarCursor(personaje.raza);
    if(personaje){
        //TODO: Añadir vida y mana maximos

    if(personaje.raza === "elfo" || personaje.raza === "mago"){
        spanVida.textContent = "VIDA: " + Math.floor(personaje.vidaActual);
        spanMana.textContent = "MANA: " + Math.floor(personaje.manaActual);
        spanArmadura.textContent ="ARMADURA: " + Math.floor(personaje.defensa);
        spanPoderMagico.textContent = "PODER MÁGICO: " + Math.floor(personaje.magia);
        spanResistenciaMagica.textContent = "RESISTENCIA MÁGICA: " + Math.floor(personaje.resistenciaMagica);
    }
    else{
        spanVida.textContent = "VIDA: " + Math.floor(personaje.vidaActual);
        spanMana.textContent = "MANA: " + Math.floor(personaje.manaActual);
        spanDanioFisico.textContent = "DAÑO FÍSICO: " + Math.floor(personaje.ataque);
        spanArmadura.textContent = "ARMADURA: " + Math.floor(personaje.defensa);
        spanResistenciaMagica.textContent = "RESISTENCIA MÁGICA: " + Math.floor(personaje.resistenciaMagica);
    }

    spanNombre.textContent = " : " + personaje.nombre;
    spanRaza.textContent = " : " + personaje.raza;
    spanNivel.textContent = " : " + personaje.nivel;
    spanExperiencia.textContent = " : " + personaje.experiencia; 
    spanOro.textContent = " : " + personaje.oro;

    imagen.src = personaje.imagen;
    }
});
