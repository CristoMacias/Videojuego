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


    formulario.addEventListener('submit',(event)=>{
        event.preventDefault();//Para bloquear la actualización automática
        const guardados = JSON.parse(localStorage.getItem('personajes'))|| [];//Cargar loscalStorage con la partida
        const nombre = nombreFormulario.value.trim();
        const raza = creadorSelect.value;
        const indiceRaza= razas.indexOf(raza);
        if(nombre === "" || indiceRaza===-1){
            alert("Ingresa un nombre y elige una raza.");
            return
        }
        const imagen = imagenesPersonaje[indiceRaza];

        const personaje = new Personaje(nombre,raza,imagen);
        guardados.push(personaje);
        localStorage.setItem('personajes',JSON.stringify(guardados));

        alert("Bienvenido a la BATALLA DE LOS 5 PUEBLOS!");
        window.location.href='Lobby.html'
    });
    
    formulario.addEventListener('reset',(event)=>{
        const raza = creadorSelect.value;
        const indiceRaza= razas.indexOf(raza);
        if(indiceRaza===-1){
            elegirImagen.src="./Logo_videojuego.png";
        }
    });

});