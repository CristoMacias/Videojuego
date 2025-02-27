
document.addEventListener('DOMContentLoaded',()=>{
    const personajesGuardados = JSON.parse(loscalStorage.getItem('perosnajes'))|| [];//Cargar loscalStorage con la partida
    const imagenesPersonaje=[ // "Array donde guardamos las imagenes para elegir"
        "./Imagenes/humano.png",
        "./Imagenes/orco.png",
        "./Imagenes/mago.png",
        "./Imagenes/enano.png",
        "./Imagenes/elfo.png"
    ];
    const razas={ //estadísticas por raza
        enano:{vida:1.15,mana:0.9,ataque:1.0 ,defensa:1.15,magia:1.0,resistenciaMagica:1.1},
        orco:{vida:1.15,mana:0.85,ataque:1.25,defensa:1.0,magia:1.3,resistenciaMagica:0.9},
        humanos:{vida:1.05,mana:1.05,ataque:1.05,defensa:1.05,magia:1.05,resistenciaMagica:1.05},
        mago:{vida:0.8,mana:1.3,ataque:0.8,defensa:0.9,magia:1.3,resistenciaMagica:1.25},
        elfo:{vida:0.9,mana:1.2,ataque:1.1,defensa:1.0,magia:1.1,resistenciaMagica:1.0}
    };

    

});