document.addEventListener('DOMContentLoaded', ()=> {

    const continuarPartida = document.querySelector("#continuarPartida");
    const eliminarDatos = document.querySelector("#eliminarDatos");
    
    localStorage.setItem("personajes", "Hola");
    //localStorage.splice("personajes", "Hola");

    if(localStorage.length === 1){
        continuarPartida.classList.add("noPersonaje");
        eliminarDatos.classList.add("noPersonaje");
    }
    else{
        continuarPartida.classList.remove("noPersonaje");
        eliminarDatos.classList.remove("noPersonaje");
    }

    

});



