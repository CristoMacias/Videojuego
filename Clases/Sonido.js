
document.addEventListener('DOMContentLoaded',()=>{
    //Sonido para los botones de enlaces cuando pasa el raton por encima
    const musicaGeneral=document.querySelector("#sonido-general");
    const enlaces=document.querySelectorAll("a");

    const efectos=[];//Array donde guardar los efectos de sonido de la pagina actual
    if(musicaGeneral) efectos.push(musicaGeneral);

    enlaces.forEach(enlace=>{
        enlace.addEventListener('mouseover',()=>{
            musicaGeneral.play();
        })
    });
    

    /*Sonido principal de fondo*/
    const botonAudio=document.querySelector("#boton-musica");
    const audioInicio=document.querySelector("#audio-musica");
    
    /**
    * Evento para que se inicie la música al cargar la página
    */
    window.addEventListener('load',()=>{
        audioInicio.play();
    });
    const imagenPlay="./Imagenes/botones_sonidos/play.svg";
    const imagenPause="./Imagenes/botones_sonidos/pause.svg";
    const img=document.querySelector("#imagen-musica");
    /**
     * Evento para que al hacer click en el boton del sonido se active o se silencie
     */
    botonAudio.addEventListener('click',()=>{
        if(audioInicio.muted){
            audioInicio.muted=false;
            img.src=imagenPlay;
            audioInicio.play();
        }else{
            audioInicio.muted=true;
            img.src=imagenPause;
            audioInicio.play();
        }
    });

    /*Efectos de sonido para el Inventario */
    //Sonido generico al tirar objetos
    const botonesTirar=document.querySelectorAll(".botones-tirar");
    const sonidoTirar=document.querySelector("#sonido-tirar");
    if(sonidoTirar) efectos.push(sonidoTirar);
    if(botonesTirar && sonidoTirar){
            botonesTirar.forEach(boton=>{
            boton.addEventListener('click',()=>{
                sonidoTirar.play();
            });
        });
    }
   
    //Sonido al beber pociones
    const botonesBeber=document.querySelectorAll(".beber");
    const sonidoBeber=document.querySelector("#sonido-beber");
    if(sonidoBeber) efectos.push(sonidoBeber);
    if(botonesBeber&&sonidoBeber){
        botonesBeber.forEach(boton=>{
            boton.addEventListener('click',()=>{
                sonidoBeber.play();
            });
        });
    }
    
    //Sonido generico de equipar ------ CAMBIAR
    
    const botonesEquipar=document.querySelectorAll(".equipar");
    const sonidoEquipar=document.querySelector("#sonido-equipar");
    if(sonidoEquipar) efectos.push(sonidoEquipar);
    if(botonesEquipar&&sonidoEquipar){
            botonesEquipar.forEach(boton=>{
            boton.addEventListener('click',()=>{
                sonidoEquipar.play();
            })
        });
    }
 
    //Sonido al equipar amuletos
    const botonAmuleto=document.querySelector("#boton-amuleto-equipar");
    const sonidoAmuleto=document.querySelector("#sonido-amuleto");
    if(sonidoAmuleto) efectos.push(sonidoAmuleto);
    if(botonAmuleto && sonidoAmuleto){
        botonAmuleto.addEventListener('click',()=>{
            sonidoAmuleto.play();
        });
    }
  

    //Sonido al equipar armadura
    const botonDefensa=document.querySelectorAll(".equipar-defensa");
    const sonidoDefensa=document.querySelector("#sonido-defensa");
    if(sonidoDefensa) efectos.push(sonidoDefensa);
    if(botonDefensa&&sonidoDefensa){
           botonDefensa.forEach(boton=>{
                boton.addEventListener('click',()=>{
                   sonidoDefensa.play();
            });
        });
    }
 

    const botonArma=document.querySelector("#boton-arma-equipar");
    const sonidoArma=document.querySelector("#sonido-arma");
    if(sonidoArma) efectos.push(sonidoArma);
    if(botonArma&&sonidoArma){
         botonArma.addEventListener('click',()=>{
            sonidoArma.play();
         });
    }
   

   
    const silenciarBotones=document.querySelector("#silenciar-botones");
    const imagenSilencio=document.querySelector("#imagen-silenciar");
    silenciarBotones.addEventListener('click',()=>{
        const muteado=efectos.every(sonido=>sonido.muted);
        efectos.forEach(sonido=>{
            sonido.muted=!muteado;
           
        })
        imagenSilencio.src= muteado ? imagenPlay : imagenPause;
    });

});

