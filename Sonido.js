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

