
document.addEventListener('DOMContentLoaded',()=>{
    //Sonido para los botones de enlaces cuando pasa el raton por encima
    const musicaGeneral=document.querySelector("#sonido-general");
    const sonidoArma=document.querySelector("#sonido-arma");
    const sonidoAmuleto=document.querySelector("#sonido-amuleto");
    const sonidoDefensa=document.querySelector("#sonido-defensa");
    const sonidoBeber=document.querySelector("#sonido-beber");
    const sonidoDesequipar=document.querySelector("#sonido-equipar");
    const sonidoTirar=document.querySelector("#sonido-tirar");
    const audioMusica=document.querySelector("#audio-musica");
    const enlaces=document.querySelectorAll("a");
    const efectos=[];//Array donde guardar los efectos de sonido de la pagina actual
    const botonesLobby=document.querySelectorAll(".botones-arena");
    const imagenMusica=document.querySelector("#imagen-musica");
    const imagenSilenciar=document.querySelector("#imagen-silenciar");
    const imagenPlay = "./Imagenes/botones_sonidos/play.svg";
    const imagenPause = "./Imagenes/botones_sonidos/pause.svg";
    //Llamar a al funcion para comprobar si el id existe
    comprobarAudioAnhadirEfectos(musicaGeneral);
    comprobarAudioAnhadirEfectos(sonidoArma);
    comprobarAudioAnhadirEfectos(sonidoAmuleto);
    comprobarAudioAnhadirEfectos(sonidoBeber);
    comprobarAudioAnhadirEfectos(sonidoDefensa);
    comprobarAudioAnhadirEfectos(sonidoDesequipar);
    comprobarAudioAnhadirEfectos(sonidoTirar);
    let sonidosHabilitados=sessionStorage.getItem('sonidosHabilitados') === 'true';
    let musicaHabilitada=sessionStorage.getItem('musicaHabilitada')==='true';
    function pasarRaton(botones,sonido){
        if(botones && sonido){
            botones.forEach(boton=>{//Iteramos sobre todos los botones de enlac
                boton.addEventListener('mouseover',()=>{//Evento para que cuando pase el botón por encima se escuche el sonido general
                    musicaGeneral.play();
                })
            })
        }
    }
    pasarRaton(enlaces,musicaGeneral);
    pasarRaton(botonesLobby,musicaGeneral)

    
    /**
    * Evento para que se inicie la música al cargar la página
    */
    window.addEventListener('load',()=>{
        actualizarBoton(imagenMusica,musicaHabilitada,imagenPlay,imagenPause);
        actualizarBoton(imagenMusica,sonidosHabilitados,imagenPlay,imagenPause);
        efectos.forEach(sonido=>{
            if(sonido)
            sonido.muted=sonidosHabilitados;
        });
        audioMusica.muted=musicaHabilitada;
        document.querySelector("#audio-musica").play();
    })
    function actualizarBoton(imagen,muted,imagenPlay,imagenPause){
        if(imagen){
            imagen.src=muted ? imagenPause:imagenPlay;
        }

    }
    function botonesSonido(idBoton,imagen,sonidosEfectos,imagenPlay,imagenPause){
        const boton=document.querySelector(idBoton);
        let sonidos=[sonidosEfectos];
        if(Array.isArray(sonidosEfectos)){
            sonidos=sonidosEfectos;
        }
        if(boton && imagen && sonidos && sonidos.length){ 
            boton.addEventListener('click',()=>{
                const muteados=sonidos.every(sonido=> sonido.muted);
                if(muteados){
                    sonidos.forEach(sonido=>{
                        if(sonido){
                            sonido.muted=false;
                            if(sonido===audioMusica){
                                sonido.play();
                                sessionStorage.setItem('musicaHabilitada','false');
                            }else{
                                sessionStorage.setItem('sonidoHabilitados','false');
                            }  
                            
                        }
                    });
                }else{
                    sonidos.forEach(sonido=>{
                        console.log(sonido);
                        if(sonido){
                             sonido.muted=true;
                             if(sonido!==audioMusica){
                                sessionStorage.setItem('sonidosHabilitados','true');
                             }else{
                                sessionStorage.setItem('musicaHabilitada','true');
                             }
                        }
                    })
                }
                imagen.src=muteados ? imagenPlay : imagenPause;
            });
        }
    }

    botonesSonido("#boton-musica",imagenMusica,audioMusica,imagenPlay,imagenPause);
    botonesSonido("#silenciar-botones",imagenSilenciar,efectos,imagenPlay,imagenPause);
    /**
     * Método genérico para reproducir los sonidos sobre selector id
     * @param {*} botonUnico Recibe el boton
     * @param {*} idSonido  Recibe el id del sonido
     */
    function asignarSonidoUnico(botonUnico,idSonido){
        const boton=document.querySelector(botonUnico);
        const sonido=document.querySelector(idSonido);
        if(sonido) { efectos.push(sonido)};
        if(boton && sonido){
            boton.addEventListener('click',()=>{sonido.play()});
        }
    }
    /**
     * Método genérico para reproducir los sonidos sobre selector class
     * @param {*} botonesVarios Recibe el boton
     * @param {*} idSonido  Recibe el id del sonido
     */
    function asignarSonidoVarios(botonesVarios,idSonido){
        const botones=document.querySelectorAll(botonesVarios);
        const sonido=document.querySelector(idSonido);
        if(sonido){efectos.push(sonido)};
        if(botones.length && sonido){
            botones.forEach(boton=>{
                boton.addEventListener('click',()=>sonido.play());
            });
        }

    }

    asignarSonidoUnico("#boton-arma-equipar","#sonido-arma");
    asignarSonidoUnico("#boton-amuleto-equipar","#sonido-amuleto");

    asignarSonidoVarios(".botones-tirar","#sonido-tirar");
    asignarSonidoVarios(".beber","#sonido-beber");
    asignarSonidoVarios(".desequipar","#sonido-equipar");
    asignarSonidoVarios(".equipar-defensa","#sonido-defensa");
    asignarSonidoVarios(".botonesArena","#musica");

    function comprobarAudioAnhadirEfectos(sonido){
        if(sonido){
            efectos.push(sonido);
        }
    }
});

