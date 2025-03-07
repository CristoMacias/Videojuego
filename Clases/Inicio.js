document.addEventListener('DOMContentLoaded', ()=> {

    const continuarPartida = document.querySelector("#continuarPartida");
    const eliminarDatos = document.querySelector("#eliminarDatos");

    
    if(localStorage.length === 0){
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



