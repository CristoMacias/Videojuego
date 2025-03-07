import Personaje from "./Personaje.js";
document.addEventListener('DOMContentLoaded',()=>{
    const formulario = document.querySelector("#formulario");
    const nombreFormulario = document.querySelector("#nombre-Formulario");
    const creadorSelect = document.querySelector("#creador");
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
        "mago",
        "enano",
        "elfo"
    ];
    
    const elegirImagen = document.querySelector("#imagen-elegir");
    creadorSelect.addEventListener('change', ()=>{
        let razaElegida = creadorSelect.value;
        
        let indiceRaza = razas.indexOf(razaElegida);
        if(indiceRaza !== -1){
            elegirImagen.src=imagenesPersonaje[indiceRaza];
            
        }else{
            alert("La raza no es válida");
        }
        
    });
     
    /**
     * Evento para que se cree el personaje al ahcer submit
     */
    formulario.addEventListener('submit',(event)=>{
        event.preventDefault();//Para bloquear la actualización automática
        const nombre = nombreFormulario.value.trim();
        const raza = creadorSelect.value;
        const indiceRaza= razas.indexOf(raza);
        if(nombre === "" || indiceRaza===-1){
            alert("Ingresa un nombre y elige una raza.");
            return
        }
        const imagen = imagenesPersonaje[indiceRaza];
        const personaje = new Personaje(nombre,raza,imagen);
        //No se añade, se sobreescribe para que sólo haya 1
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson()));
        alert("Bienvenido a la BATALLA DE LOS 5 PUEBLOS!");
        window.location.href='Lobby.html'; // Una vez creado va a la página del lobby
    });
    //Evento para cambiar a la imagen predeterminada al reiniciar
    formulario.addEventListener('reset',()=>{
        const raza = creadorSelect.value;
        const indiceRaza= razas.indexOf(raza);
        if(indiceRaza===-1){
            elegirImagen.src="./Logo_videojuego.png";
        }
    });

});