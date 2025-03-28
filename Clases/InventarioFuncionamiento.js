import Personaje from './Personaje.js';
import Inventario from './Inventario.js';
document.addEventListener('DOMContentLoaded',()=>{
    //Reconstruir peresonaje
    const jsonpersonaje = JSON.parse(localStorage.getItem('personaje'));//Traer personaje del localstorage
    const personaje=Personaje.reconstruirJson(jsonpersonaje); //Recuperar todos los atributos de personaje
    //Funcion de guardar
    const botonGuardar=document.querySelector("#boton-guardar");
        botonGuardar.addEventListener('click',()=>{
            localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson())); 
    });
    //Titulo personalizado
    const titulo=document.querySelector("#titulo-inventario");
    titulo.textContent="INVENTARIO DE "+ personaje.nombre;
    //Cogemos el inventario en una variable
    const inventario = personaje.inventario;
    //Scamos los arrays del inventario
    const arrayArmas= inventario.armas;
    const arrayDefensa = inventario.defensa;
    const arrayAmuletos = inventario.amuletos;
    const arrayPocionVida = inventario.pocionesVida;
    const arrayPocionMana = inventario.pocionesMana;
    //Sacamos lo que lleva equipado el personaje
    const armaEquipada=personaje.armaEquipada;
    const armaduraEquipada=personaje.armaduraEquipada;
    const amuletoEquipado=personaje.amuletoEquipado;
    //Sacamos los divs de cada objeto para poder controlar que se muestren o se oculten
    const divArmaEquipada=document.querySelector("#arma-equipada");
    const divArmaduraEquipada=document.querySelector("#armadura-equipada");
    const divAmuletoEquipado=document.querySelector("#amuleto-equipado");

    const divArmas=document.querySelector("#cajon-armas");
    const divArmaduras=document.querySelector("#cajon-armaduras");
    const divAMuletos=document.querySelector("#cajon-amuletos");
    const divVida=document.querySelector("#cajon-vida");
    const divMana=document.querySelector("#cajon-mana");

   

    //Variable de los selectores de los atributos del arma
    const imagenArma = document.querySelector("#imagen-arma");
    const nombreArma = document.querySelector("#nombre-arma");
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
    const descripcionAmuleto = document.querySelector("#descripcion-amuleto");
    const aumentoAmuleto=document.querySelector("#aumento-amuleto");
    //Variable de los selectores de atributos de las pociones de vida
    const imagenVida=document.querySelector("#imagen-vida");
    const nombreVida=document.querySelector("#nombre-vida");
    const descripcionVida=document.querySelector("#descripcion-vida");
    const aumentoVida=document.querySelector("#aumento-vida");
    //Variable de los selectores de atributos de las pociones de mana
    const imagenMana=document.querySelector("#imagen-mana");
    const descripcionMana=document.querySelector("#descripcion-mana");
    const nombreMana=document.querySelector("#nombre-mana");
    const aumentoMana=document.querySelector("#aumento-mana");
    
    //Variable con los selectores de el arma equipada
    const imagenArmaEquipada=document.querySelector("#imagen-arma-equipada");
    const nombreArmaEquipada=document.querySelector("#nombre-arma-equipada");
    const descripcionArmaEquipada=document.querySelector("#descripcion-arma-equipada");
    const aumentoArmaEquipada=document.querySelector("#aumento-arma-equipada");
    
    //Variable con los selectores de la armadura equipada
    const imagenArmaduraEquipada=document.querySelector("#imagen-armadura-equipada");
    const nombreArmaduraEquipada = document.querySelector("#nombre-armadura-equipada");
    const descripcionArmaduraEquipada=document.querySelector("#descripcion-armadura-equipada");
    const aumentoArmaduraEquipada=document.querySelector("#aumento-armadura-equipada");

    //Variable con los selectores de los objetos del amuleto equipado
    const imagenAmuletoEquipado=document.querySelector("#imagen-amuleto-equipado");
    const nombreAmuletoEquipado=document.querySelector("#nombre-amuleto-equipado");
    const descripcionAmuletoEquipado=document.querySelector("#descripcion-amuleto-equipado");
    const aumentoAmuletoEquipado=document.querySelector("#aumento-amuleto-equipado");
    /*
   
    */
    
    function comprobarVacios(){
        //Comprobar el array Armas
        if(arrayArmas.length>0){
            divArmas.style.display="block";
            imagenArma.src=arrayArmas[0].imagen;
            nombreArma.textContent=arrayArmas[0].nombre;
            descripcionArma.textContent=arrayArmas[0].descripcion;
            aumentoArma.textContent=arrayArmas[0].aumento;
        }else{
            divArmas.style.display="none";
        }
        //COmprobar el array armadura
        if(arrayDefensa.length>0){
            divArmaduras.style.display="block";
            imagenArmadura.src=arrayDefensa[0].imagen;
            nombreArmadura.textContent=arrayDefensa[0].nombre;
            descripcionArmadura.textContent=arrayDefensa[0].descripcion;
            aumentoArmadura.textContent=arrayDefensa[0].aumento;
        }else{
            divArmaduras.style.display="none";
        }
        //Comprobar el array de amuletos
        if(arrayAmuletos.length>0){
            divAMuletos.style.display="block";
            imagenAmuleto.src=arrayAmuletos[0].imagen;
            nombreAmuleto.textContent=arrayAmuletos[0].nombre;
            descripcionAmuleto.textContent=arrayAmuletos[0].descripcion;
            aumentoAmuleto.textCOntent=arrayAmuletos[0].aumento;
        }else{
            divAMuletos.style.display="none";
        }//Comrobar el array de pociones de vida
        if(arrayPocionVida.length>0){
            divVida.style.display="block";
            imagenVida.src=arrayPocionVida[0].imagen;
            nombreVida.textContent=arrayPocionVida[0].nombre;
            descripcionVida.textContent=arrayPocionVida[0].descripcion;
            aumentoVida.textContent=arrayPocionVida[0].aumento;
        }else{
            divVida.style.display="none";
        }
        //Comprobar el array de pociones de mana
        if(divMana.length>0){
            divMana.style.display="block";
            imagenMana.src=arrayPocionMana[0].imagen;
            nombreMana.textContent=arrayPocionMana[0].nombre;
            descripcionMana.textContent=arrayPocionMana[0].descripcion;
            aumentoMana.textContent=arrayPocionMana[0].aumento;

        }else{
            divMana.style.display="none";
        }
        
    }
    function comprobarEquipados(){
        if(armaEquipada){
            divArmaEquipada.style.display="block"
            imagenArmaEquipada.src=armaEquipada.imagen;
            nombreArmaEquipada.textContent=armaEquipada.nombre;
            descripcionArmaEquipada.textContent=armaEquipada.descripcion;
            aumentoArmaEquipada.textContent=armaEquipada.aumento;
        }else{
            divArmaEquipada.style.display="none";
        }
        if(armaduraEquipada){
            divArmaduraEquipada.style.display="block"
            imagenArmaduraEquipada.src=armaduraEquipada.imagen;
            nombreArmaduraEquipada.textContent=armaduraEquipada.nombre;
            descripcionArmaduraEquipada.textContent=armaduraEquipada.descripcion;
            aumentoArmaduraEquipada.textContent=armaduraEquipada.aumento;
        }else{
            divArmaduraEquipada.style.display="none";
        }
        if(amuletoEquipado){
            divAmuletoEquipado.style.display="block";
            imagenAmuletoEquipado.src=amuletoEquipado.imagen;
            nombreAmuletoEquipado.textContent=amuletoEquipado.nombre;
            descripcionAmuletoEquipado.textContent=amuletoEquipado.descripcion;
            aumentoAmuletoEquipado.textContent=amuletoEquipado.aumento;
        }else{
            divAmuletoEquipado.style.display="none";
        }
    }
    comprobarVacios();
    comprobarEquipados();


    //Botones para lista de armas
    const botonArmaAnterior=document.querySelector("#boton-arma-anterior");
    const botonArmaSiguiente=document.querySelector("#boton-arma-siguiente");
    let indiceArma=0;
    botonArmaAnterior.addEventListener('click',()=>{
        console.log("se puelsa el anterior");
        indiceArma--;
        console.log("se resta del indice");
        if(indiceArma<0){
            console.log("se ha pasado del 0");
            indiceArma=arrayArmas.length-1;
        }
        actualizarArma();
        console.log("se ha actualziado");
    });

    botonArmaSiguiente.addEventListener('click',()=>{
        indiceArma++;
        if(indiceArma>arrayArmas.length-1){
            indiceArma=0;
        }
        actualizarArma();

    });
    /**
     * Función para actualizar el arma que se muestra por pantalla
     */
    function actualizarArma(){
        imagenArma.src=arrayArmas[indiceArma].imagen;
        nombreArma.textContent=arrayArmas[indiceArma].nombre;
        descripcionArma.textContent=arrayArmas[indiceArma].descripcion;
        aumentoArma.textContent=arrayArmas[indiceArma].aumento;
        console.log("se han cambiado los valores dentro de la funcion");
    };

    //Botones para lista de armaduras/escudos

    
    const botonArmaduraAnterior=document.querySelector("#boton-armadura-anterior");
    const botonArmaduraSiguiente=document.querySelector("#boton-armadura-siguiente");
    let indiceArmadura=0;
    botonArmaduraAnterior.addEventListener('click',()=>{
        indiceArmadura--;
        if(indiceArmadura<0){
            indiceArmadura=arrayDefensa.length-1;
        }
        actualizarArmadura();
    });

    botonArmaduraSiguiente.addEventListener('click',()=>{
        indiceArmadura++;
        if(indiceArmadura>arrayDefensa.length-1){
            indiceArmadura=0;
        }
        actualizarArmadura();
    });
    /**
     * Función para actualizar la armadura/escudo que se muestra por pantalla
     */
    function actualizarArmadura(){
        imagenArmadura.src=arrayDefensa[indiceArmadura].imagen;
        nombreArmadura.textContent=arrayDefensa[indiceArmadura].nombre;
        descripcionArmadura.textContemt=arrayDefensa[indiceArmadura].descripcion;
        aumentoArmadura.textContent=arrayDefensa[indiceArmadura].aumento;
    };
    //Botones para lista de amuletos
    

    const botonAmuletoAnterior=document.querySelector("#boton-amuleto-anterior");
    const botonAmuletoSiguiente=document.querySelector("#boton-amuleto-siguiente");
    let indiceAmuleto=0;
    botonAmuletoAnterior.addEventListener('click',()=>{
        indiceAmuleto--;
        if(indiceAmuleto<0){
            indiceAmuleto=arrayAmuletos.length-1;
        }
        actualizarAmuleto();
    });

    botonAmuletoSiguiente.addEventListener('click',()=>{
        indiceAmuleto++;
        if(indiceAmuleto>arrayAmuletos.length-1){
            indiceAmuleto=0;
        }
        actualizarAmuleto();
    });
    /**
     * Función para actualizar el amuleto que se muestra por pantalla
     */
    function actualizarAmuleto(){
        imagenAmuleto.src=arrayAmuletos[indiceAmuleto].imagen;
        nombreAmuleto.textContent=arrayAmuletos[indiceAmuleto].nombre;
        descripcionAmuleto.textContent=arrayAmuletos[indiceAmuleto].descripcion;
        aumentoAmuleto.textCOntent=arrayAmuletos[indiceAmuleto].aumento;
    };

    //Botones para pociones de vida
    

    const botonVidaAnterior=document.querySelector("#boton-vida-anterior");
    const botonVidaSiguiente=document.querySelector("#boton-vida-siguiente");
    let indiceVida=0;
    botonVidaAnterior.addEventListener('click',()=>{
        indiceVida--;
        if(indiceVida<0){
            indiceVida=arrayPocionVida.length-1;
        }
        actualizarPocionVida();
    });

    botonVidaSiguiente.addEventListener('click',()=>{
        indiceVida++;
        if(indiceVida>arrayPocionVida.length-1){
            indiceVida=0;
        }
        actualizarPocionVida();
    });
    /**
     * Función para actualizar la pocion de vida que se muestra por pantalla
     */
    function actualizarPocionVida(){
        
        imagenVida.src=arrayPocionVida[indiceVida].imagen;
        nombreVida.textContent=arrayPocionVida[indiceVida].nombre;
        descripcionVida.textContent=arrayPocionVida[indiceVida].descripcion;
        aumentoVida.textContent=arrayPocionVida[indiceVida].aumento;
    };

    //Botonoes para pociones de mana
    
    const botonManaAnterior=document.querySelector("#boton-mana-anterior");
    const botonManaSiguiente=document.querySelector("#boton-mana-siguiente");
    let indiceMana=0;
    botonManaAnterior.addEventListener('click',()=>{
        indiceMana--;
        if(indiceMana<0){
            indiceMana=arrayPocionMana.length-1;
        }
        actualizarPocionMana();
    });
    botonManaSiguiente.addEventListener('click',()=>{
        indiceMana++;
        if(indiceMana>arrayPocionMana.length-1){
            indiceMana=0;
        }
        actualizarPocionMana();
    });
    /**
     * Función para actualizar la pocion de maná que se muestra por pantalla
     */
    function actualizarPocionMana(){
        imagenMana.src=arrayPocionMana[indiceMana].imagen;
        nombreMana.textContent=arrayPocionMana[indiceMana].nombre;
        descripcionMana.textContent=arrayPocionMana[indiceMana].descripcion;
        aumentoMana.textContent=arrayPocionMana[indiceMana].aumento;
    };

    //Controlar cuando ocultar las tarjetas vascias



    //Funciones para equipar,desequipar y beber
   
    const botonArmaDesequipar=document.querySelector("#boton-arma-desequipar");
    botonArmaDesequipar.addEventListener('click',()=>{
        personaje.quitarArma();
        divArmaEquipada.style.display="none";
    });





    const botonArmaEquipar=document.querySelector("#boton-arma-equipar");
    botonArmaEquipar.addEventListener('click',()=>{
        const arma=arrayArmas[indiceArma];
        personaje.equiparArma(arma);
        divArmaEquipada.style.display="block";
        imagenArmaEquipada.src=arma.imagen;
        nombreArmaEquipada.textContent=arma.nombre;
        descripcionArmaEquipada.textContent=arma.descripcion;
        aumentoArmaEquipada.textContent=arma.aumento;
        
    });
    const botonArmaduraDesequipar=document.querySelector("#boton-armadura-desequipar");
    const botonArmaduraEquipar=document.querySelector("#boton-armadura-equipar");

    botonArmaduraDesequipar.addEventListener('click',()=>{
        personaje.quitarArmadura();
        divArmaduraEquipada.style.display="none";
    });

    botonArmaduraEquipar.addEventListener('click',()=>{
        const armadura=arrayDefensa[indiceArmadura];
        personaje.equiparArmadura(armadura);
        console.log(personaje.armaduraEquipada);
        divArmaduraEquipada.style.display="block";
        imagenArmaduraEquipada.src=armadura.imagen;
        nombreArmaduraEquipada.textContent=armadura.nombre;
        descripcionArmaduraEquipada.textContent=armadura.descripcion;
        aumentoArmaduraEquipada.textContent=armadura.aumento;
    });

    const botonAmuletoDesequipar=document.querySelector("#boton-amuleto-desequipar");
    const botonAmuletoEquipar=document.querySelector("#boton-amuleto-equipar");

    botonAmuletoDesequipar.addEventListener('click',()=>{
        personaje.quitarAmuleto();
        divAmuletoEquipado.style.display="none";
    });

    botonAmuletoEquipar.addEventListener('click',()=>{
        const amuleto=arrayAmuletos[indiceAmuleto];
        personaje.equiparAmuleto(amuleto);
        divAmuletoEquipado.style.display="block";
        imagenAmuletoEquipado.src=amuleto.imagen;
        nombreAmuletoEquipado.textContent=amuleto.nombre;
        descripcionAmuletoEquipado.textContent=amuleto.descripcion;
        aumentoAmuletoEquipado.textContent=amuleto.aumento;
    });

    //Funcionamiento de botones de Tirar los objetod de los arrays

    const botonArmaTirar=document.querySelector("#boton-arma-tirar");
    botonArmaTirar.addEventListener('click',()=>{
        let armaTirar=arrayArmas[indiceArma];
        personaje.tirarObjeto(armaTirar);
        personaje.quitarArma();
        if(arrayArmas.length>0){
             actualizarArma();
             divArmaEquipada.style.display="none";
        }else{
            divArmaEquipada.style.display="none";
            divArmas.style.display="none";
        }
    });
});
