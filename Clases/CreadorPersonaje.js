
document.addEventListener('DOMContentLoaded',()=>{
    const personajesGuardados = JSON.parse(loscalStorage.getItem('perosnajes'))|| [];//Cargar loscalStorage con la partida
    const imagenesPersonaje=[ // "Array donde guardamos las imagenes para elegir"
        "./Imagenes/humano.png",
        "./Imagenes/orco.png",
        "./Imagenes/mago.png",
        "./Imagenes/enano.png",
        "./Imagenes/elfo.png"
    ];

});