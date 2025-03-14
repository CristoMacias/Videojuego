import Personaje from './Personaje.js'
import Inventario from './Inventario.js'
document.addEventListener('DOMContentLoaded',()=>{
    
    const jsonpersonaje = JSON.parse(localStorage.getItem('personaje'));//Traer personaje del localstorage
    const personaje=Personaje.reconstruirJson(jsonpersonaje); //Recuperar todos los atributos de personaje
    const titulo=document.querySelector("#titulo-inventario");
    titulo.textContent="INVENTARIO DE "+ personaje.nombre;
    const inventario = new Inventario();
    inventario=personaje.inventario;
    console.log(personaje.inventario);
    console.log(inventario)

});