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

    const personaje = JSON.parse(localStorage.getItem('personaje'));

    if(personaje){
        //TODO: Añadir vida y mana maximos
    spanVida.textContent = " : " + personaje.vidaActual;
    spanMana.textContent = " : " + personaje.manaActual;
    spanDanioFisico.textContent = " : " + personaje.ataque;
    spanArmadura.textContent = " : " + personaje.defensa;
    spanPoderMagico.textContent = " : " + personaje.magia;
    spanResistenciaMagica.textContent = " : " + personaje.resistenciaMagica;

    spanNombre.textContent = " : " + personaje.nombre;
    spanRaza.textContent = " : " + personaje.raza;
    spanNivel.textContent = " : " + personaje.nivel;
    spanExperiencia.textContent = " : " + personaje.experiencia; 
    spanOro.textContent = " : " + personaje.oro;

    imagen.src = personaje.imagen;
    
    }
});
