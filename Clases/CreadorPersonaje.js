import Personaje from "./Personaje.js";
import Arma from "./Arma.js";
import {cambiarCursor} from "./Cursor.js";
document.addEventListener('DOMContentLoaded',()=>{
    const formulario = document.querySelector("#formulario");
    const nombreFormulario = document.querySelector("#nombre-Formulario");
    const creadorSelect = document.querySelector("#creador");
    //Selectores de los span de atributos principales de las armas básicas para mostrar
    const imagenArma1= document.querySelector("#imagen-arma1");
    const nombreArma1=document.querySelector("#nombre-arma1");
    const descripcionArma1=document.querySelector("#descripcion-arma1");
    const aumentoArma1=document.querySelector("#aumento-arma1");
    const imagenArma2=document.querySelector("#imagen-arma2");
    const nombreArma2=document.querySelector("#nombre-arma2");
    const descripcionArma2=document.querySelector("#descripcion-arma2");
    const aumentoArma2=document.querySelector("#aumento-arma2");
    const divArmas=document.querySelector("#elegir-arma");
    const divArma1=document.querySelector("#arma1");
    let armaRadio=document.querySelector('input[name="arma"]:checked');
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
    //Creamos un objeto con los arrays para cada raza donde están las armas iniciales
    const armas={
        humano: [
            new Arma("Hoja del Destino Dorado👑⚔️","Una hoja heredada del mismísimo rey Arturo",1.1,0,1,"humano","./Imagenes/humanos/hoja_destino.png"),
            new Arma("Martillo del Paladín Eterno⚖️🔨","Un arma pesada utilizada por los caballeros de la justicia.",1.1,0,1,"humano","./Imagenes/humanos/martillo_paladin.png")
        ],
        orco: [
            new Arma("Segadora del Infierno🔥🪓","Un arma brutal con un filo forjado en llamas.",1.1,0,1,"orco","./Imagenes/orcos/segadora.png"),
            new Arma("Colmillo del Guerrero","Se fortalece con cada enemigo caido en combate",1.1,0,1,"orco","./Imagenes/orcos/colmillo.png")
        ],
        mago: [
            new Arma("Centro del Firmamento ✨🔮","Canaliza la energía cósmica en poderosos hechizos.",1.1,0,1,"mago","./Imagenes/magos/centro.png"),
            new Arma("Tomo de la Penumbra 📜☠️","Un libro de conjuros prohibidos que renace la vitalidad del enemigo.",1.1,0,1,"mago","./Imagenes/magos/tomo_penumbra.png")
        ],
        enano: [
            new Arma("Martillo del Guardián de Acero 🛡️⚒️","Un martillo colosal capaz de partir la roca con un solo golpe.",1.1,0,1,"enano","./Imagenes/enanos/martillo_guardian.png"),
            new Arma("Hacha de la Furia Terrestre ⛏️🌑","Forjada en las minas más oscuras, esta hacha nunca se desafila.",1.1,0,1,"enano","./Imagenes/enanos/hacha_furia.png")
        ],
        elfo:[
            new Arma("Arco de la Brisa Eterna 🌿🏹","Un arco elegante, imbuido con la energía del atardecer.",1.1,0,1,"elfo","./Imagenes/elfos/arco_brisa.png"),
            new Arma("Filos de la Medianoche 🌙🗡️","Un par de dagas encantadas que se desvanecen en la penumbra.",1.1,0,1,"elfo","./Imagenes/elfos/filos.png")
        ]
    };
    const elegirImagen = document.querySelector("#imagen-elegir");
    creadorSelect.addEventListener('change', ()=>{
        let razaElegida = creadorSelect.value;
        let indiceRaza = razas.indexOf(razaElegida);
        if(indiceRaza !== -1){
            elegirImagen.src=imagenesPersonaje[indiceRaza];
            cambiarCursor(razaElegida);
            divArmas.style.display="flex";
        }else{
            alert("La raza no es válida");
        }
        let arrayArmas=armas[razaElegida];
        let arma1=arrayArmas[0];
        let arma2=arrayArmas[1];
        imagenArma1.src=arma1.imagen;
        nombreArma1.textContent=arma1.nombre;
        descripcionArma1.textContent=arma1.descripcion;
        aumentoArma1.textContent=arma1.aumento;
        imagenArma2.src=arma2.imagen;
        nombreArma2.textContent=arma2.nombre;
        descripcionArma2.textContent=arma2.descripcion;
        aumentoArma2.textContent=arma2.aumento;
        if(armaRadio){
            const armaSeleccionada = armaRadio.id === "radio-arma1" ? "arma1" : "arma2";
            cambiarEstilosSeleccion(armaSeleccionada);
        }
    });


    /**
     * Evento para que se cree el personaje al hacer submit
     */
    formulario.addEventListener('submit',(event)=>{
        event.preventDefault();//Para bloquear la actualización automática
        const nombre = nombreFormulario.value.toUpperCase().trim();
        const raza = creadorSelect.value;
        const indiceRaza= razas.indexOf(raza);
        let armaRadio = document.querySelector('input[name="arma"]:checked');
        divArma1.style.backgroundColor= "rgba(206, 144, 76, 0.1)";
        divArma1.style.border="var(--amarilloFondo) 3px ridge";
        if(nombre === "" || indiceRaza===-1 || !armaRadio){
            alert("Ingresa un nombre, elige una raza y un arma");
            return;
        }

        const valor = armaRadio.value;
        const arma = armas[raza][valor];
  
        const imagen = imagenesPersonaje[indiceRaza];
        const personaje = new Personaje(nombre,raza,imagen);
        personaje.equiparArma(arma);
        personaje.inventario.agregarObjeto(arma);
        //No se añade, se sobreescribe para que sólo haya 1
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson()));
        alert("Bienvenido a la BATALLA DE LOS 5 PUEBLOS!");
        window.location.href='Lobby.html'; // Una vez creado va a la página del lobby
        window.personaje = personaje; // Se guarda el personaje en una variable general para poder recibirla desde otros archivos.

    });
    //Evento para cambiar a la imagen predeterminada al reiniciar
    formulario.addEventListener('reset',()=>{
        const raza = creadorSelect.value;
        const indiceRaza= razas.indexOf(raza);
        if(indiceRaza===-1){
            elegirImagen.src="./Logo_videojuego.png";
            divArmas.style.display="none";
        }
    });

    function cambiarEstilosSeleccion(armaSeleccionada){
        const divArma1=document.querySelector("#arma1");
        const divArma2=document.querySelector("#arma2");

        if (armaSeleccionada === "arma1") {
            divArma1.style.backgroundColor = "rgba(206, 144, 76, 0.1)";
            divArma1.style.border = "var(--amarilloFondo) 3px ridge";
            divArma2.style.backgroundColor = "";
            divArma2.style.border = "";
        } else if (armaSeleccionada === "arma2") {
            divArma2.style.backgroundColor = "rgba(206, 144, 76, 0.1)";
            divArma2.style.border = "var(--amarilloFondo) 3px ridge";
            divArma1.style.backgroundColor = "";
        divArma1.style.border = "";
        }
    }
    const radiosArmas=document.querySelectorAll('input[name="arma"]');
    radiosArmas.forEach(radio=>{
        radio.addEventListener('change',()=>{
            const armaSeleccionada = radio.id === 'radio-arma1' ? "arma1" : "arma2";
            cambiarEstilosSeleccion(armaSeleccionada)
        });
    });

});