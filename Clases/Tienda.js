import Arma from "./Arma.js";
import Personaje from "./Personaje.js";

document.addEventListener('DOMContentLoaded',()=>{
    const personaje = JSON.parse(localStorage.getItem('personaje'));
    console.log(personaje);
    const razaPermitida = personaje.raza; // Para controlar las armas disponibles para comprar
    const martilloRompeMontanhas= new Arma("Martillo Rompemontañas 🪨🔨","Un martillo de guerra tan pesado que solo un enano puede levantarlo. Golpea con la fuerza de una avalancha.",120,30,500,5,"enano","./Imagenes/rompemontanhas(1).png");
    localStorage.setItem('tienda',JSON.stringify(martilloRompeMontanhas.convertirJson()));
    const prueba=document.querySelector("#prueba-imagen");
    const pruebaN=document.querySelector("#nombre-prueba");
    prueba.src=martilloRompeMontanhas.imagen;
    pruebaN.textContent=martilloRompeMontanhas.nombre;

});
