import Personaje from "./Personaje.js";

document.addEventListener('DOMContentLoaded',()=>{

    const jsonpersonaje = JSON.parse(localStorage.getItem('personaje'));
    const personaje = Personaje.reconstruirJson(jsonpersonaje);

    const enemigo = JSON.parse(localStorage.getItem('enemigo'));
    
    
});