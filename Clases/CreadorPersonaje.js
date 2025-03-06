import Personaje from "./Personaje";
document.addEventListener('DOMContentLoaded',()=>{
    const personajesGuardados = JSON.parse(localStorage.getItem('personajes'))|| [];//Cargar loscalStorage con la partida
    const imagenesPersonaje=[ // "Array donde guardamos las imagenes para elegir"
        "./Imagenes/humano.png",
        "./Imagenes/orco.png",
        "./Imagenes/mago.png",
        "./Imagenes/enano.png",
        "./Imagenes/elfo.png"
    ];
    const razas=[
        "humano",
        "orco",
        "omago",
        "enano",
        "elfo"
    ];
    const elegirRaza = document.querySelector("#elegir-raza");
    const elegirImagen = document.querySelector("#imagen-elegir");

    elegirRaza.addEventListener('change',function(){
        const razaSeleccion = elegirRaza.value;
        advert("Raza seleccionada: ",razaSeleccion);
        const indiceRaza = razas.indexOf(razaSeleccion);
        if(imagenesPersonaje[indiceRaza]){
            elegirImagen.src = imagenesPersonaje[indiceRaza];
        }
    });
    
    

});