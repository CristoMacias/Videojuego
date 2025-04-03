import Tienda from './Tienda.js';
import Personaje from './Personaje.js';
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
    const comprar=document.querySelector(".comprar");
    //Cuando se inicia la tienda muestra el primer objeto de cada array
    armas[0].mostrarArma();
    escudos[0].mostrarEscudo();
    armaduras[0].mostrarArmadura();
    amuletos[0].mostrarAmuleto();
    pocionesVida[0].mostrarVida();
    pocionesMana[0].mostrarMana();

    //Carrousel Armas //TODO: Comproabar porque no se ven dos armas
    const anteriorBotonArma=document.querySelector("#boton-anterior-arma");
    const siguienteBotonArma=document.querySelector("#boton-siguiente-arma");
    let indiceArma=0;
     //Evento para elegir la opcion anterior
    anteriorBotonArma.addEventListener('click',()=>{
        indiceArma--;
        if(indiceArma<0){//evitamos que se salga del array
            indiceArma=0;
        }
        armas[indiceArma].mostrarArma();
        
    });
    //Evento para elegir la opcion siguiente
    siguienteBotonArma.addEventListener('click',()=>{
        indiceArma++;
        if(indiceArma>armas.length-1){//evitamos que se salga del array
            indiceArma = armas.length-1;
        }
        armas[indiceArma].mostrarArma();
    });
    //Carrousel Escudos
    const anteriorBotonEscudos=document.querySelector("#boton-anterior-escudo");
    const siguienteBotonEscudos=document.querySelector("#boton-siguiente-escudo");
    let indiceEscudo=0;
     //Evento para elegir la opcion anterior
    anteriorBotonEscudos.addEventListener('click',()=>{
        indiceEscudo--;
        if(indiceEscudo<0){//evitamos que se salga del array
            indiceEscudo=0;
        }
        escudos[indiceEscudo].mostrarEscudo();     
    });
    //Evento para elegir la opcion siguiente
    siguienteBotonEscudos.addEventListener('click',()=>{
        indiceEscudo++;
        if(indiceEscudo>escudos.length-1){//evitamos que se salga del array
            indiceEscudo=escudos.length-1;
        }
        escudos[indiceEscudo].mostrarEscudo();
    });

    //Carrousel Armaduras
    const anteriorBotonArmaduras=document.querySelector("#boton-anterior-armadura");
    const siguienteBotonArmaduras=document.querySelector("#boton-siguiente-armadura");
    let indiceArmadura=0;
     //Evento para elegir la opcion anterior
    anteriorBotonArmaduras.addEventListener('click',()=>{
        indiceArmadura--;
        if(indiceArmadura<0){//evitamos que se salga del array
            indiceArmadura=0;
        }
        armaduras[indiceArmadura].mostrarArmadura();
    });
    //Evento para elegir la opcion siguiente
    siguienteBotonArmaduras.addEventListener('click',()=>{
        indiceArmadura++;
        if(indiceArmadura>armaduras.length-1){//evitamos que se salga del array
            indiceArmadura = armaduras.length-1;
        }
        armaduras[indiceArmadura].mostrarArmadura();
    });
    //Carrousel Amuletos
    const anteriorBotonAmuletos=document.querySelector("#boton-anterior-amuleto");
    const siguienteBotonAmuletos=document.querySelector("#boton-siguiente-amuleto");
    let indiceAmuleto=0;
     //Evento para elegir la opcion anterior
    anteriorBotonAmuletos.addEventListener('click',()=>{
        indiceAmuleto--;
        if(indiceAmuleto<0){//evitamos que se salga del array
            indiceAmuleto=0;
        }
        amuletos[indiceAmuleto].mostrarAmuleto();
    });
    //Evento para elegir la opcion siguiente
    siguienteBotonAmuletos.addEventListener('click',()=>{
        indiceAmuleto++;
        if(indiceAmuleto>amuletos.length-1){//evitamos que se salga del array
            indiceAmuleto=amuletos.length-1;
        }
        amuletos[indiceAmuleto].mostrarAmuleto();
    })
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
        pocionesVida[indiceVida].mostrarVida();
    });
    //Evento para elegir la opcion siguiente
    siguienteBotonVida.addEventListener('click',()=>{
       indiceVida++;
       if(indiceVida>pocionesVida.length-1){//evitamos que se salga del array
        indiceVida=pocionesVida.length-1;
       } 
       pocionesVida[indiceVida].mostrarVida();
    });

    //Carrousel de pociones de maná
    const anteriorBotonMana=document.querySelector("#boton-anterior-mana");
    const siguienteBotonoMana=document.querySelector("#boton-siguiente-mana");
    let indiceMana=0;
    //Evento para elegir la opcion anterior
    anteriorBotonMana.addEventListener('click',()=>{
        indiceMana--;
        if(indiceMana<0){//evitamos que se salga del array
            indiceMana=0;
        }
        pocionesMana[indiceMana].mostrarMana();
    });
    //Evento para elegir la opcion siguiente
    siguienteBotonoMana.addEventListener('click',()=>{
        indiceMana++;
        if(indiceMana>pocionesMana.length-1){//evitamos que se salga del array
            indiceMana=pocionesMana.length-1;
        }
        pocionesMana[indiceMana].mostrarMana();
    });
    //Comprar armas
    const comprarArma=document.querySelector("#comprar-arma");
    comprarArma.addEventListener('click',()=>{
        const armaComprar=armas[indiceArma];
        //Comprobar que el personaje tenga suficiente dinero para comprar el arma
        if(personaje.oro>armaComprar.precio-1){
            personaje.comprarTienda(armaComprar);//Añadimos el arma
          //  personaje.perderOro(armaComprar.precio);//Restamos el oro del arma al oro del personaje
        }else{ //Se muestra un mensaje dicneod que no tiene suficiente oro
            alert(`¡No tiene oro suficiente!`);
        }
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson())); //Añadimos el personaje al localstorage para que se guarde el arma
    });

    const comprarEscudo=document.querySelector("#comprar-escudo");
    comprarEscudo.addEventListener('click',()=>{
        const escudoComprar=escudos[indiceEscudo];
        //Comprobar que el personaje tenga suficiente dinero para comprar el arma
        if(personaje.oro>escudoComprar.precio-1){
            personaje.comprarTienda(escudoComprar);//Añadimos el arma
           // personaje.perderOro(escudoComprar.precio);//Restamos el oro del arma al oro del personaje
        }else{ //Se muestra un mensaje dicneod que no tiene suficiente oro
            alert(`¡No tiene oro suficiente!`);
        }
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson())); //Añadimos el personaje al localstorage para que se guarde el arma
  
    });

    const comprarArmadura=document.querySelector("#comprar-armadura");
    comprarArmadura.addEventListener('click',()=>{
        const armaduraComprar=armaduras[indiceArmadura];
        //Comprobar que el personaje tenga suficiente dinero para comprar el arma
        if(personaje.oro>armaduraComprar.precio-1){
            personaje.comprarTienda(armaduraComprar);//Restamos el oro del arma al oro del personaje
          //  personaje.perderOro(armaduraComprar.precio);
        }else{ //Se muestra un mensaje dice que no tiene suficiente oro
            alert(`¡No tiene oro suficiente!`);
        }
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson())); //Añadimos el personaje al localstorage para que se guarde el arma
    });

    const comprarAmuleto=document.querySelector("#comprar-amuleto");
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

    const comprarVida=document.querySelector("#comprar-vida");
    comprarVida.addEventListener('click',()=>{
        const vidaComprar=pocionesVida[indiceVida];
       console.log(vidaComprar);
        //Comprobar que elvidapersonaje tenga suficiente dinero para comprar el arma
        if(personaje.oro>vidaComprar.precio-1){
            personaje.comprarTienda(vidaComprar);//Restamos el oro del arma al oro del personaje
        }else{ //Se muestra un mensaje dicneod que no tiene suficiente oro
            alert(`¡No tiene oro suficiente!`);
        }
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson())); //Añadimos el personaje al localstorage para que se guarde el arma
    });


    const comprarMana=document.querySelector("#comprar-mana");
    comprarMana.addEventListener('click',()=>{
        const manaComprar=pocionesMana[indiceMana];
        //Comprobar que el personaje tenga suficiente dinero para comprar el arma
        console.log(manaComprar);
        if(personaje.oro>manaComprar.precio-1){
            personaje.comprarTienda(manaComprar);//Restamos el oro del arma al oro del personaje
        }else{ //Se muestra un mensaje dicneod que no tiene suficiente oro
            alert(`¡No tiene oro suficiente!`);
        }
        localStorage.setItem('personaje',JSON.stringify(personaje.convertirJson())); //Añadimos el personaje al localstorage para que se guarde el arma
        });

});
