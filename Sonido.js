//Sonido para los botones de enlaces cuando pasa el raton por encima
const sonidoGeneral=document.querySelector("#sonido-general");
const enlaces=document.querySelectorAll("a");
enlaces.forEach(enlace=>{
    enlace.addEventListener('mouseover',()=>{
        sonidoGeneral.play();
    })
});

/*Sonido principal de fondo*/
const botonAudio=document.querySelector("#boton-sonido");
const audioInicio=document.querySelector("#audio-inicio");
/**
* Evento para que se inicie la música al cargar la página
*/
window.addEventListener('load',()=>{
    audioInicio.play();
});
/**
 * Evento para que al hacer click en el boton del sonido se active o se silencie
 */
botonAudio.addEventListener('click',()=>{
    if(audioInicio.muted){
        audioInicio.muted=false;
        botonAudio.textContent="🔊";
        audioInicio.play();
    }else{
        audioInicio.muted=true;
        botonAudio.textContent="🔇";
        audioInicio.play();
    }
});

/*Efectos de sonido para el Inventario */
//Sonido generico al tirar objetos
const botonesTirar=document.querySelectorAll(".botones-tirar");
const sonidoTirar=document.querySelector("#sonido-tirar");
botonesTirar.forEach(boton=>{
    boton.addEventListener('click',()=>{
        sonidoTirar.play();
    });
});
//Sonido al beber pociones
const botonesBeber=document.querySelectorAll(".beber");
const sonidoBeber=document.querySelector("#sonido-beber");

botonesBeber.forEach(boton=>{
    boton.addEventListener('click',()=>{
        sonidoBeber.play();
    });
});
//Sonido generico de equipar ------ CAMBIAR
/*
const botonesEquipar=document.querySelectorAll(".equipar");
const sonidoEquipar=document.querySelector("#sonido-equipar");
botonesEquipar.forEach(boton=>{
    boton.addEventListener('click',()=>{
        sonidoEquipar.play();
    })
});*/
//Sonido al equipar amuletos
const botonAmuleto=document.querySelector("#boton-amuleto-equipar");
const sonidoAmuleto=document.querySelector("#sonido-amuleto");
botonAmuleto.addEventListener('click',()=>{
    sonidoAmuleto.play();
});

//Sonido al equipar armadura
const botonDefensa=document.querySelectorAll(".equipar-defensa");
const sonidoDefensa=document.querySelector("#sonido-defensa");

botonDefensa.forEach(boton=>{
    boton.addEventListener('click',()=>{
        sonidoDefensa.play();
    });
});

const botonArma=document.querySelector("#boton-arma-equipar");
const sonidoArma=document.querySelector("#sonido-arma");
botonArma.addEventListener('click',()=>{
    sonidoArma.play();
});

