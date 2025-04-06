import Tienda from './Tienda.js';
import Personaje from './Personaje.js';
import Arma from './Arma.js';
import Pocion from './Pocion.js';
document.addEventListener('DOMContentLoaded',()=>{
    const jsonpersonaje = JSON.parse(localStorage.getItem('personaje'));//Traer personaje del localstorage
    const personaje=Personaje.reconstruirJson(jsonpersonaje); //Recuperar todos los atributos de personaje
    const tienda = new Tienda(personaje.raza); // Para controlar las armas disponibles para comprar

    const armas=tienda.armas;//Array con las armas
    const protecciones=tienda.protecciones; //Array con las protecciones
    const pociones=tienda.pociones;//Array con las pociones
    const escudos=protecciones.escudo;//Array con los escudos
    const armaduras=protecciones.armadura;//Array con las armaduras
    const amuletos=protecciones.amuleto; //Array con los amuletos
    const pocionesVida=pociones.salud; //Array con las pociones de vida
    const pocionesMana=pociones.mana; //Array con las pociones de maná

    const armaCero=armas[0];
    const escudoCero=escudos[0];
    const armaduraCero=armaduras[0];
    const amuletoCero=amuletos[0];
    const vidaCero=pocionesVida[0];
    const manaCero=pocionesMana[0];

    const prefArma="arma";
    const prefEscudo="escudo";
    const prefArmadura="armadura";
    const prefAmuleto="amuleto"
    const prefVida="vida";
    const prefMana="mana";

    const comprarArma=document.querySelector("#comprar-arma");
    const comprarEscudo=document.querySelector("#comprar-escudo");
    const comprarArmadura=document.querySelector("#comprar-armadura");
    const comprarAmuleto=document.querySelector("#comprar-amuleto");
    const comprarVida=document.querySelector("#comprar-vida");
    const comprarMana=document.querySelector("#comprar-mana");

    const spanCompraArma=document.querySelector("#span-comprar-arma");
    const spanCompraArmadura=document.querySelector("#span-comprar-armadura");
    const spanCompraEscudo=document.querySelector("#span-comprar-escudo");
    const spanCompraAmuleto=document.querySelector("#span-comprar-amuleto");
    
    mostrarObjeto(vidaCero,prefVida);
    mostrarObjeto(manaCero,prefMana);
    //Carrousel Armas 
    const anteriorBotonArma=document.querySelector("#boton-anterior-arma");
    const siguienteBotonArma=document.querySelector("#boton-siguiente-arma");
    let indiceArma=0;
    comprobarDisponibilidadObjeto(armaCero,spanCompraArma,comprarArma,prefArma);
     //Evento para elegir la opcion anterior
    anteriorBotonArma.addEventListener('click',()=>{
        indiceArma--;
        if(indiceArma<0){//evitamos que se salga del array
            indiceArma=0;
        }
       // mostrarObjeto(armas[indiceArma],prefArma);
        comprobarDisponibilidadObjeto(armas[indiceArma],spanCompraArma,comprarArma,prefArma);
    });
   
    //Evento para elegir la opcion siguiente
    siguienteBotonArma.addEventListener('click',()=>{
        indiceArma++;
        if(indiceArma>armas.length-1){//evitamos que se salga del array
            indiceArma = armas.length-1;
        }
        
       // mostrarObjeto(armas[indiceArma],prefArma);
        comprobarDisponibilidadObjeto(armas[indiceArma],spanCompraArma,comprarArma,prefArma);
    });

     
    //Carrousel Escudos
    const anteriorBotonEscudos=document.querySelector("#boton-anterior-escudo");
    const siguienteBotonEscudos=document.querySelector("#boton-siguiente-escudo");
    let indiceEscudo=0;
    comprobarDisponibilidadObjeto(escudoCero,spanCompraEscudo,comprarEscudo,prefEscudo);
     //Evento para elegir la opcion anterior
    anteriorBotonEscudos.addEventListener('click',()=>{
        indiceEscudo--;
        if(indiceEscudo<0){//evitamos que se salga del array
            indiceEscudo=0;
        }
       // mostrarObjeto(escudos[indiceEscudo],prefEscudo);    
        comprobarDisponibilidadObjeto(escudos[indiceEscudo],spanCompraEscudo,comprarEscudo,prefEscudo);
    });
    //Evento para elegir la opcion siguiente
    siguienteBotonEscudos.addEventListener('click',()=>{
        indiceEscudo++;
        if(indiceEscudo>escudos.length-1){//evitamos que se salga del array
            indiceEscudo=escudos.length-1;
        }
       // mostrarObjeto(escudos[indiceEscudo],prefEscudo);        
        comprobarDisponibilidadObjeto(escudos[indiceEscudo],spanCompraEscudo,comprarEscudo,prefEscudo);
    });

    //Carrousel Armaduras
    const anteriorBotonArmaduras=document.querySelector("#boton-anterior-armadura");
    const siguienteBotonArmaduras=document.querySelector("#boton-siguiente-armadura");
    let indiceArmadura=0;
    comprobarDisponibilidadObjeto(armaduraCero,spanCompraArmadura,comprarArmadura,prefArmadura);
     //Evento para elegir la opcion anterior
    anteriorBotonArmaduras.addEventListener('click',()=>{
        indiceArmadura--;
        if(indiceArmadura<0){//evitamos que se salga del array
            indiceArmadura=0;
        }
       // mostrarObjeto(armaduras[indiceArmadura],prefArmadura);
        comprobarDisponibilidadObjeto(armaduras[indiceArmadura],spanCompraArmadura,comprarArmadura,prefArmadura);
    });
    //Evento para elegir la opcion siguiente
    siguienteBotonArmaduras.addEventListener('click',()=>{
        indiceArmadura++;
        if(indiceArmadura>armaduras.length-1){//evitamos que se salga del array
            indiceArmadura = armaduras.length-1;
        }
      //  mostrarObjeto(armaduras[indiceArmadura],prefArmadura);
        comprobarDisponibilidadObjeto(armaduras[indiceArmadura],spanCompraArmadura,comprarArmadura,prefArmadura);
    });
    //Carrousel Amuletos
    const anteriorBotonAmuletos=document.querySelector("#boton-anterior-amuleto");
    const siguienteBotonAmuletos=document.querySelector("#boton-siguiente-amuleto");
    let indiceAmuleto=0;
    comprobarDisponibilidadObjeto(amuletoCero,spanCompraAmuleto,comprarAmuleto,prefAmuleto);
     //Evento para elegir la opcion anterior
    anteriorBotonAmuletos.addEventListener('click',()=>{
        indiceAmuleto--;
        if(indiceAmuleto<0){//evitamos que se salga del array
            indiceAmuleto=0;
        }
       // mostrarObjeto(amuletos[indiceAmuleto],prefAmuleto);
        comprobarDisponibilidadObjeto(amuletos[indiceAmuleto],spanCompraAmuleto,comprarAmuleto,prefAmuleto);
    });
    //Evento para elegir la opcion siguiente
    siguienteBotonAmuletos.addEventListener('click',()=>{
        indiceAmuleto++;
        if(indiceAmuleto>amuletos.length-1){//evitamos que se salga del array
            indiceAmuleto=amuletos.length-1;
        }
       // mostrarObjeto(amuletos[indiceAmuleto],prefAmuleto);
        comprobarDisponibilidadObjeto(amuletos[indiceAmuleto],spanCompraAmuleto,comprarAmuleto,prefAmuleto);
    });
    //Carrousel de pociones de vida
    const anteriorBotonVida=document.querySelector("#boton-anterior-vida");
    const siguienteBotonVida=document.querySelector("#boton-siguiente-vida");
    let indiceVida=0;
     //Evento para elegir la opcion anterior
    anteriorBotonVida.addEventListener('click',()=>{
        indiceVida--;
        if(indiceVida<0){//evitamos que se salga del array
            indiceVida=0;
        }
        mostrarObjeto(pocionesVida[indiceVida],prefVida);
    });
    //Evento para elegir la opcion siguiente
    siguienteBotonVida.addEventListener('click',()=>{
       indiceVida++;
       if(indiceVida>pocionesVida.length-1){//evitamos que se salga del array
        indiceVida=pocionesVida.length-1;
       } 
       mostrarObjeto(pocionesVida[indiceVida],prefVida);
    });

    //Carrousel de pociones de maná
    const anteriorBotonMana=document.querySelector("#boton-anterior-mana");
    const siguienteBotonMana=document.querySelector("#boton-siguiente-mana");
    let indiceMana=0;
    //Evento para elegir la opcion anterior
    anteriorBotonMana.addEventListener('click',()=>{
        indiceMana--;
        if(indiceMana<0){//evitamos que se salga del array
            indiceMana=0;
        }
        mostrarObjeto(pocionesMana[indiceMana],prefMana);
    });
    //Evento para elegir la opcion siguiente
    siguienteBotonMana.addEventListener('click',()=>{
        indiceMana++;
        if(indiceMana>pocionesMana.length-1){//evitamos que se salga del array
            indiceMana=pocionesMana.length-1;
        }
        mostrarObjeto(pocionesMana[indiceMana],prefMana);
    });
    //Comprar armas

    comprarArma.addEventListener('click',()=>{
        const armaComprar=armas[indiceArma];
        //Comprobar que el personaje tenga suficiente dinero para comprar el arma
        if(personaje.oro>armaComprar.precio-1){
            personaje.comprarTienda(armaComprar);//Añadimos el arma
        }else{ //Se muestra un mensaje dicneod que no tiene suficiente oro
            alert(`¡No tiene oro suficiente!`);
        }
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson())); //Añadimos el personaje al localstorage para que se guarde el arma
    });

    
    comprarEscudo.addEventListener('click',()=>{
        const escudoComprar=escudos[indiceEscudo];
        //Comprobar que el personaje tenga suficiente dinero para comprar el arma
        if(personaje.oro>escudoComprar.precio-1){
            personaje.comprarTienda(escudoComprar);//Añadimos el arma
        }else{ //Se muestra un mensaje dicneod que no tiene suficiente oro
            alert(`¡No tiene oro suficiente!`);
        }
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson())); //Añadimos el personaje al localstorage para que se guarde el arma
  
    });

    
    comprarArmadura.addEventListener('click',()=>{
        const armaduraComprar=armaduras[indiceArmadura];
        //Comprobar que el personaje tenga suficiente dinero para comprar el arma
        if(personaje.oro>armaduraComprar.precio-1){
            personaje.comprarTienda(armaduraComprar);//Restamos el oro del arma al oro del personaje
        }else{ //Se muestra un mensaje dice que no tiene suficiente oro
            alert(`¡No tiene oro suficiente!`);
        }
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson())); //Añadimos el personaje al localstorage para que se guarde el arma
    });

   
    comprarAmuleto.addEventListener('click',()=>{
        const amuletoComprar=amuletos[indiceAmuleto];
        //Comprobar que el personaje tenga suficiente dinero para comprar el arma
        if(personaje.oro>amuletoComprar.precio-1){
            personaje.comprarTienda(amuletoComprar);//Restamos el oro del arma al oro del personaje
        }else{ //Se muestra un mensaje dicneod que no tiene suficiente oro
            alert(`¡No tiene oro suficiente!`);
        }
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson())); //Añadimos el personaje al localstorage para que se guarde el arma  
    });

    comprarVida.addEventListener('click',()=>{
        const vidaComprar=pocionesVida[indiceVida];
       
        //Comprobar que elvidapersonaje tenga suficiente dinero para comprar el arma
        if(personaje.oro>vidaComprar.precio-1){
            personaje.comprarTienda(vidaComprar);//Restamos el oro del arma al oro del personaje
        }else{ //Se muestra un mensaje dicneod que no tiene suficiente oro
            alert(`¡No tiene oro suficiente!`);
        }
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson())); //Añadimos el personaje al localstorage para que se guarde el arma
    });


    
    comprarMana.addEventListener('click',()=>{
        const manaComprar=pocionesMana[indiceMana];
        //Comprobar que el personaje tenga suficiente dinero para comprar el arma
        if(personaje.oro>manaComprar.precio-1){
            personaje.comprarTienda(manaComprar);//Restamos el oro del arma al oro del personaje
        }else{ //Se muestra un mensaje dicneod que no tiene suficiente oro
            alert(`¡No tiene oro suficiente!`);
        }
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson())); //Añadimos el personaje al localstorage para que se guarde el arma
    });

  
    //Intento de REFACTORIZACION DE COGIDO PARA NO REPETIR Y TENER UNA FUNCION DE CADA FUNCION PARA TODO

    /**
     * Función única para mostrar todos los objetos
     * @param {*} objeto Recibe el objeto que quiere mostrar
     * @param {*} prefijo  Recibe el prefijo del tipo de objeto para escoger el id del dom
     */
    function mostrarObjeto(objeto,prefijo){
        document.querySelector(`#imagen-${prefijo}`).src=objeto.imagen;
        document.querySelector(`#nombre-${prefijo}`).textContent=objeto.nombre;
        document.querySelector(`#descripcion-${prefijo}`).textContent=objeto.descripcion;
        document.querySelector(`#precio-${prefijo}`).textContent=objeto.precio;
        if(objeto instanceof Arma || objeto instanceof Pocion){
            document.querySelector(`#aumento-${prefijo}`).textContent=objeto.aumento;
        }else if(objeto.tipo==="amuleto"){
            document.querySelector(`#resistenciaMagica-${prefijo}`).textContent=objeto.aumento;
        }else{
            document.querySelector(`#defensa-${prefijo}`).textContent=objeto.aumento;
        }
        if(objeto.nivel!==undefined){
            document.querySelector(`#nivel-${prefijo}`).textContent=objeto.nivel;
        }
        
    }



     //Limitar compra de armas,armaduras,escudos y amuletos según los niveles

    /**
     * Función única para las armas,escudos,armaduras y amuletos para comprobar si el personaje puede comprarlos. Si el nivel del objeot es superior al nivel del arma, se bloquea el boton de compra, cambiando a estado bloqueado y disabled en true
     * @param {*} objeto Recibe el objeto a comprobar
     * @param {*} spanCompra  Recibe el span de compra del objeto
     * @param {*} botonCompra Recibe el boton de compra
     */
    function comprobarDisponibilidadObjeto(objeto,spanCompra,botonCompra,prefijo){
        if(objeto.nivel>personaje.nivel){
            spanCompra.textContent="BLOQUEADO 🔒";
            botonCompra.disabled=true;
            bloquearObjeto(objeto,prefijo);
        }else{
            spanCompra.textContent="COMPRAR";
            botonCompra.disabled=false;
            mostrarObjeto(objeto,prefijo);
        }
    }

    function bloquearObjeto(objeto,prefijo){
        document.querySelector(`#imagen-${prefijo}`).src="./Imagenes/bloqueo_objetos.png";
        document.querySelector(`#nombre-${prefijo}`).textContent="???";
        document.querySelector(`#descripcion-${prefijo}`).textContent="???";
        document.querySelector(`#precio-${prefijo}`).textContent="???";
        if(objeto instanceof Arma || objeto instanceof Pocion){
            document.querySelector(`#aumento-${prefijo}`).textContent="???";
        }else if(objeto.tipo==="amuleto"){
            document.querySelector(`#resistenciaMagica-${prefijo}`).textContent="???";
        }else{
            document.querySelector(`#defensa-${prefijo}`).textContent="???";
        }
        if(objeto.nivel!==undefined){
            document.querySelector(`#nivel-${prefijo}`).textContent="???";
        }
        
    }

    
    
});
