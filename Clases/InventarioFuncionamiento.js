import Personaje from './Personaje.js';
import Inventario from './Inventario.js';
document.addEventListener('DOMContentLoaded',()=>{
    
    const jsonpersonaje = JSON.parse(localStorage.getItem('personaje'));//Traer personaje del localstorage
    const personaje=Personaje.reconstruirJson(jsonpersonaje); //Recuperar todos los atributos de personaje
    console.log(personaje);
    const titulo=document.querySelector("#titulo-inventario");
    titulo.textContent="INVENTARIO DE "+ personaje.nombre;
    const inventario = personaje.inventario;
    console.log(inventario);
    const arrayArmas= inventario.armas;
    const arrayDefensa = inventario.defensa;
    const arrayAmuletos = inventario.amuletos;
    const arrayPocionVida = inventario.pocionesVida;
    const arrayPocionMana = inventario.pocionesMana;

    const armaEquipada=personaje.armaEquipada;
    console.log(armaEquipada);
    const armaduraEquipada=personaje.armaduraEquipada;
    const amuletoEquipado=personaje.amuletoEquipado;

    
    //Variable de los selectores de los atributos del arma
    const imagenArma = document.querySelector("#imagen-armna");
    const nombrearma = document.querySelector("#nombre-arma");
    const descripcionArma= document.querySelector("#descripcion-arma");
    const aumentoArma = document.querySelector("#aumento-arma");
    //Variables de los selectores de atributos de armadura/escudo
    const imagenArmadura=document.querySelector("#imagen-armadura");
    const nombreArmadura=document.querySelector("#nombre-armadura");
    const descripcionArmadura = document.querySelector("#descripcion-armadura");
    const aumentoArmadura = document.querySelector("#aumento-armadura");
    //Variable de los selectores de atributos de amuletos
    const imagenAmuleto = document.querySelector("#imagen-amuleto");
    const nombreAmuleto=document.querySelector("#nombre-amuleto");
    const descripcionAmuleto = document.querySelector("#descipcion-amuleto");
    const aumentoAmuleto=document.querySelector("#aumento-amuleto");
    //Variable de los selectores de atributos de las pociones de vida
    const imagenVida=document.querySelector("#imagen-vida");
    const nombreVida=document.querySelector("#nombre-vida");
    const descripcionVida=document.querySelector("#descripcion-vida");
    const aumentovida=document.querySelector("#aumento-vida");
    //Variable de los selectores de atributos de las pociones de mana
    const imagenMana=document.querySelector("#imagen-mana");
    const descripcionMana=document.querySelector("#descripcion-mana");
    const nombreMana=document.querySelector("#nombre-mana");
    const aumentoMana=document.querySelector("#aumento-mana");
    
    //Variable con los selectores de los objetos euqipados
    const imagenArmaEquipada=document.querySelector("#imagen-arma-equipada");
    const nombreArmaEquipada=document.querySelector("#nombre-arma-equipada");
    const descripcionArmaEquipada=document.querySelector("#descripcion-arma-equipada");
    const aumentoArmaEquipada=document.querySelector("#aumento-arma-equipada");
    imagenArmaEquipada.src=armaEquipada.arma;
});
