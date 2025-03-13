import Tienda from './Tienda.js';
import Proteccion from './Proteccion.js';
import Arma from './Arma.js';

document.addEventListener('DOMContentLoaded',()=>{
    const personaje = JSON.parse(localStorage.getItem('personaje'));
    const tienda = new Tienda(personaje.raza); // Para controlar las armas disponibles para comprar
    const armas=tienda.armas;//Array con las armas
    const protecciones=tienda.protecciones; //Array con las protecciones
    const pociones=tienda.pociones;//Array con las pociones
    const escudos=protecciones.escudo;//Array con los escudos
    const armaduras=protecciones.armadura;//Array con las armaduras
    const amuletos=protecciones.amuleto; //Array con los amuletos
    const pocionesVida=pociones.salud; //Array con las pociones de vida
    const pocionesMana=pociones.mana; //Array con las pociones de maná

    armas[0].mostrarArma();
    escudos[0].mostrarEscudo();
    armaduras[0].mostrarArmadura();
    amuletos[0].mostrarAmuleto();
    pocionesVida[0].mostrarVida();
    pocionesMana[0].mostrarMana();

    //Carrousel Armas //TODO: Comproabar porque no se ven dos armas
    const anteriorBotonArma=document.querySelector("#boton-anterior-arma");
    const siguienteBotonArma=document.querySelector("#boton-siguiente-arma");
    let indiceArma=0;
    anteriorBotonArma.addEventListener('click',()=>{
        indiceArma--;
        if(indiceArma<0){
            indiceArma=0;
        }
        armas[indiceArma].mostrarArma();
        
    });

    siguienteBotonArma.addEventListener('click',()=>{
        indiceArma++;
        if(indiceArma>armas.length-1){
            indiceArma = armas.length-1;
        }
        armas[indiceArma].mostrarArma();
    });


    //Carrousel Escudos
    const anteriorBotonEscudos=document.querySelector("#boton-anterior-escudo");
    const siguienteBotonEscudos=document.querySelector("#boton-siguiente-escudo");
    let indiceEscudo=0;
    anteriorBotonEscudos.addEventListener('click',()=>{
        indiceEscudo--;
        if(indiceEscudo<0){
            indiceEscudo=0;
        }
        escudos[indiceEscudo].mostrarEscudo();
        
    });
    siguienteBotonEscudos.addEventListener('click',()=>{
        indiceEscudo++;
        if(indiceEscudo>escudos.length-1){
            indiceEscudo=escudos.length-1;
        }
        escudos[indiceEscudo].mostrarEscudo();
    });

    //Carrousel Armaduras
    const anteriorBotonArmaduras=document.querySelector("#boton-anterior-armadura");
    const siguienteBotonArmaduras=document.querySelector("#boton-siguiente-armadura");
    let indiceArmadura=0;
    anteriorBotonArmaduras.addEventListener('click',()=>{
        indiceArmadura--;
        if(indiceArmadura<0){
            indiceArmadura=0;
        }
        armaduras[indiceArmadura].mostrarArmadura();
    });
    siguienteBotonArmaduras.addEventListener('click',()=>{
        indiceArmadura++;
        if(indiceArmadura>armaduras.length-1){
            indiceArmadura = armaduras.length-1;
        }
        armaduras[indiceArmadura].mostrarArmadura();
    });
    //Carrousel Amuletos

    const anteriorBotonAmuletos=document.querySelector("#boton-anterior-amuleto");
    const siguienteBotonAmuletos=document.querySelector("#boton-siguiente-amuleto");
    let indiceAmuleto=0;
    anteriorBotonAmuletos.addEventListener('click',()=>{
        indiceAmuleto--;
        if(indiceAmuleto<0){
            indiceAmuleto=0;
        }
        amuletos[indiceAmuleto].mostrarAmuleto();
    });
    siguienteBotonAmuletos.addEventListener('click',()=>{
        indiceAmuleto++;
        if(indiceAmuleto>amuletos.length-1){
            indiceAmuleto=amuletos.length-1;
        }
        amuletos[indiceAmuleto].mostrarAmuleto();
    })
    //Carrousel de pociones de vida
    const anteriorBotonVida=document.querySelector("#boton-anterior-vida");
    const siguienteBotonVida=document.querySelector("#boton-siguiente-vida");
    let indiceVida=0;
    anteriorBotonVida.addEventListener('click',()=>{
        indiceVida--;
        if(indiceVida<0){
            indiceVida=0;
        }
        pocionesVida[indiceVida].mostrarVida();
    });
    siguienteBotonVida.addEventListener('click',()=>{
       indiceVida++;
       if(indiceVida>pocionesVida.length-1){
        indiceVida=pocionesVida.length-1;
       } 
       pocionesVida[indiceVida].mostrarVida();
    });

    //Carrousel de pociones de maná
    const anteriorBotonMana=document.querySelector("#boton-anterior-mana");
    const siguienteBotonoMana=document.querySelector("#boton-siguiente-mana");
    let indiceMana=0;
    anteriorBotonMana.addEventListener('click',()=>{
        indiceMana--;
        if(indiceMana<0){
            indiceMana=0;
        }
        pocionesMana[indiceMana].mostrarMana();
    });
    siguienteBotonoMana.addEventListener('click',()=>{
        indiceMana++;
        if(indiceMana>pocionesMana.length-1){
            indiceMana=pocionesMana.length-1;
        }
        pocionesMana[indiceMana].mostrarMana();
    });

});
