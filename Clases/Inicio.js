document.addEventListener('DOMContentLoaded', ()=> {

    const continuarPartida = document.querySelector("#continuarPartida");
    const eliminarDatos = document.querySelector("#eliminarDatos");

    /**
     * Si existe elemento en el localStorage muestra los botones
     */
    if(!localStorage.getItem("personaje")){
        continuarPartida.classList.add("noPersonaje");
        eliminarDatos.classList.add("noPersonaje");
    }
    else{
        continuarPartida.classList.remove("noPersonaje");
        eliminarDatos.classList.remove("noPersonaje");
    }
    /**
     * Evento para que cuando haga click botón eliminar, elimine al personaje
     */
    eliminarDatos.addEventListener('click',()=>{
        localStorage.removeItem('personaje');
    });

});



