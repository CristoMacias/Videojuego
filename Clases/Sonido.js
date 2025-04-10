
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
    const sonidoAtaque=document.querySelector("#sonido-ataque");
    const enlaces=document.querySelectorAll("a");
    const efectos=[];//Array donde guardar los efectos de sonido de la pagina actual
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
    comprobarAudioAnhadirEfectos(sonidoAtaque);
    function pasarRaton(botones,sonido){
        if(botones && sonido){
            botones.forEach(boton=>{//Iteramos sobre todos los botones de enlac
                boton.addEventListener('mouseover',()=>{//Evento para que cuando pase el botón por encima se escuche el sonido general
                    musicaGeneral.play();
                })
            })
        }
    }
    //Lmamos a las funciones para activar los sonidos cuando pasen el rato por encima
    pasarRaton(enlaces,musicaGeneral);
    /**
    * Evento para que se inicie la música al cargar la página
    */
    window.addEventListener('load',()=>{
        let sonidosHabilitados=sessionStorage.getItem('sonidosHabilitados') === 'true';
        let musicaHabilitada=sessionStorage.getItem('musicaHabilitada')==='true';
        actualizarBoton(imagenMusica,musicaHabilitada,imagenPlay,imagenPause);
        actualizarBoton(imagenSilenciar,sonidosHabilitados,imagenPlay,imagenPause);
        efectos.forEach(sonido=>{
            if(sonido)
            sonido.muted=sonidosHabilitados;
        });
        audioMusica.muted=musicaHabilitada;
        audioMusica.play();
    })
    /**
     * Método para para actualizar el boton de sonidos segun esté muteado o no
     * @param {*} imagen 
     * @param {*} muted 
     * @param {*} imagenPlay 
     * @param {*} imagenPause 
     */
    function actualizarBoton(imagen,muted,imagenPlay,imagenPause){
        if(imagen){
            imagen.src=muted ? imagenPause:imagenPlay;
        }

    }
    /**
     * Método genérico para activar o desactivar la musica y efectos de los botones. Recibimos el id del boton, el id de la imagne para el icono, los sonidos y las dos imagenes de play y pause
     * @param {*} idBoton 
     * @param {*} imagen 
     * @param {*} sonidosEfectos 
     * @param {*} imagenPlay 
     * @param {*} imagenPause 
     */
    function botonesSonido(idBoton,imagen,sonidosEfectos,imagenPlay,imagenPause){
        const boton=document.querySelector(idBoton);//Recibimos el id del boton 
        let sonidos=[sonidosEfectos];//Creamos array
        if(Array.isArray(sonidosEfectos)){//Si lo que nos viene ya e sun array
            sonidos=sonidosEfectos;//Lo igualamos para que no sea un array de arrays
        }
        if(boton && imagen && sonidos && sonidos.length){ //Comprobamos que existen todos en el DOM
            boton.addEventListener('click',()=>{//Para el evento de click en el boton
                const muteados=sonidos.every(sonido=> sonido.muted); //Recorremos todo el array de sonidos para capturar el muted
                if(muteados){//Si están muteado en true
                    sonidos.forEach(sonido=>{ //Recorremos sonidos
                        if(sonido){//Si sonido existe en el DOM (esto es para controlar lo sonidos en otras páginas ya que esto funciona para todos los html)
                            sonido.muted=false;//Quitamos el muteo
                            if(sonido===audioMusica){ //Controlamos si en concreto es el audio de musica de fondo
                                sonido.play();//Reproducimos la musica
                                sessionStorage.setItem('musicaHabilitada','false');// Añadimos a sesion storage el estado de la musica para que persista entre paginas 
                            }else{
                                sessionStorage.setItem('sonidosHabilitados','false');//Aañadimos a sesion storage el estado de los sonidos para que persista entre paginas
                            }  
                            
                        }
                    });
                }else{//Si no están muteados, los apaga
                    sonidos.forEach(sonido=>{//Recorremos el array de sonidos
                        if(sonido){//Si sonido existe en el DOM
                             sonido.muted=true; //Mutea a true para silenciar
                             if(sonido!==audioMusica){//Si sonido es distinto a la musica de fondo
                                sessionStorage.setItem('sonidosHabilitados','true'); //Añadimos al session storage los sonidos a true muteados
                             }else{
                                sessionStorage.setItem('musicaHabilitada','true');//Añadimos al session stotage la musica a true muteado
                             }
                        }
                    })
                }
                imagen.src=muteados ? imagenPlay : imagenPause;//Cambiamos la imagen según esté reproduciendo o no
            });
        }
    }
    //Llamada a la funcióno para activar o desactivar los sonidos/musica
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
    //Lllamada a las funciones para activar los sonidos en los botones
    asignarSonidoUnico("#boton-arma-equipar","#sonido-arma");
    asignarSonidoUnico("#boton-amuleto-equipar","#sonido-amuleto");
    asignarSonidoUnico("#botonAtacar","#sonido-ataque");

    asignarSonidoVarios(".botones-tirar","#sonido-tirar");
    asignarSonidoVarios(".beber","#sonido-beber");
    asignarSonidoVarios(".desequipar","#sonido-equipar");
    asignarSonidoVarios(".equipar-defensa","#sonido-defensa");
    asignarSonidoVarios(".botonesArena","#musica");
    /**
     * Comprueba que existe el el audio en el DOM para añadirlo al array de sonidos
     * @param {*} sonido 
     */
    function comprobarAudioAnhadirEfectos(sonido){
        if(sonido){
            efectos.push(sonido);
        }
    }
});

