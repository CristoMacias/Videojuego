import Personaje from './Personaje.js';
import {cambiarCursor} from "./Cursor.js";
document.addEventListener('DOMContentLoaded',()=>{
    //Reconstruir peresonaje
    const jsonpersonaje = JSON.parse(localStorage.getItem('personaje'));//Traer personaje del localstorage
    const personaje=Personaje.reconstruirJson(jsonpersonaje); //Recuperar todos los atributos de personaje
    cambiarCursor(personaje.raza);//Llamada al metodo de cambiarCursor para cambiar el cursor en funcion de la raza
    //Funcion de guardar
    const botonGuardar=document.querySelector("#boton-guardar");
    botonGuardar.addEventListener('click',()=>{
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson())); 
    });
    const botonDesequiparTodo=document.querySelector("#boton-desequipar");
    botonDesequiparTodo.addEventListener('click',()=>{
        personaje.desequiparTodo();
        divArmaEquipada.style.display="none";
        divArmaduraEquipada.style.display="none";
        divAmuletoEquipado.style.display="none";
    });
    //Titulo personalizado
    const titulo=document.querySelector("#titulo-inventario");
    titulo.textContent="INVENTARIO DE "+ personaje.nombre;
    //Cogemos el inventario en una variable
    let inventario = personaje.inventario;
    //Scamos los arrays del inventario
    let arrayArmas= inventario.armas;
    let arrayDefensa = inventario.defensa;
    let arrayAmuletos = inventario.amuletos;
    let arrayPocionVida = inventario.pocionesVida;
    let arrayPocionMana = inventario.pocionesMana;
    //Sacamos lo que lleva equipado el personaje
    let armaEquipada=personaje.armaEquipada;
    let armaduraEquipada=personaje.armaduraEquipada;
    let amuletoEquipado=personaje.amuletoEquipado;
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

    //Variable mostrar total pociones
    const totalArmas=document.querySelector("#total-armas");
    const totalDefensa=document.querySelector("#total-defensa");
    const totalAmuletos=document.querySelector("#total-amuletos");
    const totalPocionVida=document.querySelector("#total-pociones-vida");
    const totalPocionMana=document.querySelector("#total-pociones-mana");

    //Variables de estadisticas del jugador
    const imagenPersonaje=document.querySelector("#imagen-personaje");
    const spanVidaActual=document.querySelector("#span-vida-actual");
    const spanVidaMax=document.querySelector("#span-vida-max")
    const spanManaActual=document.querySelector("#span-mana-actual");
    const spanManaMax=document.querySelector("#span-mana-max");
    const spanDanio=document.querySelector("#span-danio");
    const spanDefensa =document.querySelector("#span-defensa");
    const spanResistencia=document.querySelector("#span-resistencia");
   
    //Variables con el DOM de las barras
    const barraVida=document.querySelector("#barra-vida");
    const barraMana=document.querySelector("#barra-mana");
    const barraDanio=document.querySelector("#barra-danio");
    const barraDefensa=document.querySelector("#barra-defensa");
    const barraResistencia=document.querySelector("#barra-resistencia");
    
    /**
     * Método para comprobar si los arrays de inventarios están vacios,y si es así no mostrarlos.
     */
    function comprobarVacios(){
        //Comprobar el array Armas
        if(arrayArmas.length>0){
            divArmas.style.display="block";
            imagenArma.src=arrayArmas[0].imagen;
            nombreArma.textContent=arrayArmas[0].nombre;
            descripcionArma.textContent=arrayArmas[0].descripcion;
            aumentoArma.textContent=arrayArmas[0].aumento;
            totalArmas.textContent=arrayArmas.length;
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
            totalDefensa.textContent=arrayDefensa.length;
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
            totalAmuletos.textContent=arrayAmuletos.length;
        }else{
            divAMuletos.style.display="none";
        }//Comrobar el array de pociones de vida
        if(arrayPocionVida.length>0){
            divVida.style.display="block";
            let pocion=arrayPocionVida[0];
            imagenVida.src=pocion.imagen;
            nombreVida.textContent=pocion.nombre;
            descripcionVida.textContent=pocion.descripcion;
            aumentoVida.textContent=pocion.aumento;
            totalPocionVida.textContent=arrayPocionVida.length;
        }else{
            divVida.style.display="none";
        }
        //Comprobar el array de pociones de mana
        if(arrayPocionMana.length>0){
            divMana.style.display="block";
            imagenMana.src=arrayPocionMana[0].imagen;
            nombreMana.textContent=arrayPocionMana[0].nombre;
            descripcionMana.textContent=arrayPocionMana[0].descripcion;
            aumentoMana.textContent=arrayPocionMana[0].aumento;
            totalPocionMana.textContent=arrayPocionMana.length;

        }else{
            divMana.style.display="none";
        }
        
    }
    //Métodod para comprobar si tienes armas equipadas y msotrarlas,si no no las muestra
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
    actualizarEstadisticas();


    //Botones para lista de armas
    const botonArmaAnterior=document.querySelector("#boton-arma-anterior");
    const botonArmaSiguiente=document.querySelector("#boton-arma-siguiente");
    let indiceArma=0;
    //Evento para cambiar el arma en el carrousel al anterior en el array
    botonArmaAnterior.addEventListener('click',()=>{
        indiceArma--;
        if(indiceArma<0){
            indiceArma=arrayArmas.length-1;
        }
        actualizarArma();
    });
    //Evento para cambiar el arma en el carrousel al siguiente en el array
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
        totalPocionVida.textContent=arrayPocionVida.length;
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
        totalPocionMana.textContent=arrayPocionMana.length;
    };

    //Funciones para equipar,desequipar y beber
    const botonArmaDesequipar=document.querySelector("#boton-arma-desequipar");
    //Evento para desequipar un arma,que se quite del inventario y no se vea el div
    botonArmaDesequipar.addEventListener('click',()=>{
        personaje.quitarArma();
        armaEquipada=personaje.armaEquipada;
        divArmaEquipada.style.display="none";
        actualizarEstadisticas();

    });
    const botonArmaEquipar=document.querySelector("#boton-arma-equipar");
    //Evento para equipar un arma , se añada al inventario y se muestre
    botonArmaEquipar.addEventListener('click',()=>{
        let arma=arrayArmas[indiceArma];
        personaje.equiparArma(arma);
        armaEquipada=personaje.armaEquipada;
        divArmaEquipada.style.display="block";
        imagenArmaEquipada.src=arma.imagen;
        nombreArmaEquipada.textContent=arma.nombre;
        descripcionArmaEquipada.textContent=arma.descripcion;
        aumentoArmaEquipada.textContent=arma.aumento;
        actualizarEstadisticas();

    });
    const botonArmaduraDesequipar=document.querySelector("#boton-armadura-desequipar");
    const botonArmaduraEquipar=document.querySelector("#boton-armadura-equipar");
    botonArmaduraDesequipar.addEventListener('click',()=>{
        personaje.quitarArmadura();
        armaduraEquipada=personaje.armaduraEquipada;
        divArmaduraEquipada.style.display="none";
        actualizarEstadisticas();

    });

    botonArmaduraEquipar.addEventListener('click',()=>{
        let armadura=arrayDefensa[indiceArmadura];
        personaje.equiparArmadura(armadura);
        armaduraEquipada=personaje.armaduraEquipada;
        divArmaduraEquipada.style.display="block";
        imagenArmaduraEquipada.src=armadura.imagen;
        nombreArmaduraEquipada.textContent=armadura.nombre;
        descripcionArmaduraEquipada.textContent=armadura.descripcion;
        aumentoArmaduraEquipada.textContent=armadura.aumento;
        actualizarEstadisticas();

    });

    const botonAmuletoDesequipar=document.querySelector("#boton-amuleto-desequipar");
    const botonAmuletoEquipar=document.querySelector("#boton-amuleto-equipar");

    botonAmuletoDesequipar.addEventListener('click',()=>{
        personaje.quitarAmuleto();
        amuletoEquipado=personaje.amuletoEquipado;
        divAmuletoEquipado.style.display="none";
        actualizarEstadisticas();
    });

    botonAmuletoEquipar.addEventListener('click',()=>{
        let amuleto=arrayAmuletos[indiceAmuleto];
        personaje.equiparAmuleto(amuleto);
        amuletoEquipado=personaje.amuletoEquipado;
        divAmuletoEquipado.style.display="block";
        imagenAmuletoEquipado.src=amuleto.imagen;
        nombreAmuletoEquipado.textContent=amuleto.nombre;
        descripcionAmuletoEquipado.textContent=amuleto.descripcion;
        aumentoAmuletoEquipado.textContent=amuleto.aumento;
        actualizarEstadisticas();

    });

    //Funcionamiento de botones de Tirar los objetod de los arrays

        //Tirar Armas
    const botonArmaTirar=document.querySelector("#boton-arma-tirar");
    botonArmaTirar.addEventListener('click',()=>{
        let armaEquipada=personaje.armaEquipada;//Recogemos el arma que está equipada
        let armaTirar=arrayArmas[indiceArma];//Recogemos el arma a tirar segun el indice que del ararma que se muestre
        personaje.tirarObjeto(armaTirar,indiceArma);//Tiramos el arma
        if(armaEquipada!==null && armaEquipada.nombre===armaTirar.nombre){//Comprobamos si el arma equipada es la misma que la que queremos tirar
            personaje.quitarArma();//Si lo es, quitamos el arma equipada
            divArmaEquipada.style.display="none";//Ocultamos el div de equipada
            actualizarEstadisticas();//ACtualizamos las estadisticas para que desaparezca el aumento
        }  
        indiceArma--;//Restamos al indice de armas
        if(indiceArma<0){//Si es negativo la dehamos en 0
            indiceArma=0;
        }
        if(arrayArmas.length>0){//Si sigue habiendo armas se sigue mostrando
             actualizarArma();//Se actualizan las caracteristicas
        }else{//Si ya no hay ocultamos los divs
            divArmaEquipada.style.display="none";
            divArmas.style.display="none";
        }
    });

        //Tirar armadura
    const botonArmaduraTirar=document.querySelector("#boton-armadura-tirar");
    botonArmaduraTirar.addEventListener('click',()=>{
        let armaduraEquipada=personaje.armaduraEquipada;
        let armaduraTirar=arrayDefensa[indiceArmadura];
        personaje.tirarObjeto(armaduraTirar,indiceArmadura);
        if(armaduraEquipada!== null && armaduraEquipada.nombre===armaduraTirar.nombre){
            personaje.quitarArmadura();
            divArmaduraEquipada.style.display="none";
            actualizarEstadisticas();

        }
        indiceArmadura--;
        if(indiceArmadura<0){
            indiceArmadura=0;
        }
        if(arrayDefensa.length>0){
            actualizarArmadura();
        }else{
            divArmaduraEquipada.style.display="none";
            divArmaduras.style.display="none";
        }
    });

    const botonAmuletoTirar=document.querySelector("#boton-amuleto-tirar");
    botonAmuletoTirar.addEventListener('click',()=>{
        let amuletoEquipado=personaje.amuletoEquipado;
        let amuletoTirar=arrayAmuletos[indiceAmuleto];
        personaje.tirarObjeto(amuletoTirar,indiceAmuleto);
        if(amuletoEquipado !==null && amuletoEquipado.nombre===amuletoTirar.nombre){
            personaje.quitarAmuleto();
            divAmuletoEquipado.style.display="none";
            actualizarEstadisticas();

        }
        indiceAmuleto--;
        if(indiceAmuleto<0){
            indiceAmuleto=0;
        }
        if(arrayAmuletos.length>0){
            actualizarAmuleto();
        }else{
            divAmuletoEquipado.style.display="none";
            divAMuletos.style.display="none";
        }
    });


    const botonPocionBeberVida=document.querySelector("#boton-beber-vida");
    //Evemto para beber pocion de vida
    botonPocionBeberVida.addEventListener('click',()=>{
        let pocionBeber = arrayPocionVida[indiceVida];//AObtenemos la pocion abeber
        personaje.tomarPocion(pocionBeber);//El personaje bebe la poción
        indiceVida--;//Restamos indice del array de pociones vida
        if(indiceVida<0){//Si es negativo igualamos a 0
            indiceVida=0;
        }
        if(arrayPocionVida.length>0){//Si sigue habiendo mostramos
            actualizarPocionVida();//Actuazliamos
        }else{
            divVida.style.display="none";//Si no se quita el div de pociones
        }
        actualizarEstadisticas();//Actualizamos 

    });

    const botonBeberMana=document.querySelector("#boton-beber-mana");
    botonBeberMana.addEventListener('click',()=>{
        let pocionBeber=arrayPocionMana[indiceMana];
        personaje.tomarPocion(pocionBeber);
        indiceMana--;
        if(indiceMana<0){
            indiceMana=0;
        }
        if(arrayPocionMana.length>0){
            actualizarPocionMana();
        }else{
            divMana.style.display="none";
        }
        actualizarEstadisticas();

    });

    //Añadir tarjeta de personaje

    //Método para actualizar la trjte de personaje con la sestadisiticas
    function actualizarEstadisticas(){
        imagenPersonaje.src=personaje.imagen;

        spanVidaActual.textContent=Math.round(personaje.vidaActual);
        spanVidaMax.textContent=Math.round(personaje.vidaMaxima);
        barraVida.value=Math.round(personaje.vidaActual);
        barraVida.max=Math.round(personaje.vidaMaxima);

        spanManaActual.textContent=Math.round(personaje.manaActual);
        spanManaMax.textContent=Math.round(personaje.manaMaximo);
        barraMana.value=Math.round(personaje.manaActual);
        barraMana.max=Math.round(personaje.manaMaximo);
        if(personaje.raza==="mago" || personaje.raza==="elfo"){//En funcion e la raza mostramos  magia o ataque
            spanDanio.textContent="MAGIA: "+Math.round(personaje.magia);
            barraDanio.value=Math.round(personaje.magia);
        }else{
            spanDanio.textContent="ATAQUE: "+Math.round(personaje.ataque);
            barraDanio.value=Math.round(personaje.ataque);
        }
        spanDefensa.textContent=Math.round(personaje.defensa);
        barraDefensa.value=Math.round(personaje.defensa);

        spanResistencia.textContent=Math.round(personaje.resistenciaMagica);
        barraResistencia.value=Math.round(personaje.resistenciaMagica);
                
    }
    function sonidoArma(){//Funcion para meter un sonido u otro en funcion de la raza
        const sourceArma=document.querySelector("#sonido-arma");
        if(personaje.raza==="elfo" || personaje.raza==="mago"){
            sourceArma.src="Sonidos/Inventario/equiparMagia.mp3";
        }else{
            sourceArma.src="Sonidos/Inventario/equiparArma.mp3";
        }
    }
    sonidoArma();
});
