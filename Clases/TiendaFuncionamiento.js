import Tienda from './Tienda.js'


document.addEventListener('DOMContentLoaded',()=>{
    const personaje = JSON.parse(localStorage.getItem('personaje'));
    const tienda = new Tienda(personaje.raza); // Para controlar las armas disponibles para comprar
    const armas=tienda.armas;
    console.log(tienda.armas);//Array con las armas
    const protecciones=tienda.protecciones; //Array con las protecciones
    const pociones=tienda.pociones; //Array con las pociones
    const escudos=protecciones[0]; //Array con los escudos
    const armaduras=protecciones[1]; //Array con las armaduras
    const amuletos=protecciones[2]; //Array con los amuletos
    const pocionesVida=pociones[0]; //Array con las pociones de vida
    const pocionesMana=pociones[1]; //Array con las pociones de maná

    const anteriorBoton=document.querySelector("#boton-anterior");
    const siguienteBoton=document.querySelector("#boton-siguiente");
    let indice=0;

    //Probando mostrar y cambiar la vista de armas
    anteriorBoton.addEventListener('click',()=>{
        indice--;
        if(indice<0){
            indice=0;
            
        }
        else{
            imagenArma.src=armas[indice].imagen;
            nombreArma.textContent=armas[indice].nombre;
            descripcionArma.textContent=armas[indice].descripcion;
            danhoArma.textContent=armas[indice].danho;
            precioArma.textContent=armas[indice].precio;
        }
    });

    siguienteBoton.addEventListener('click',()=>{
        indice++;
        imagenArma.src=armas[indice].imagen;
        nombreArma.textContent=armas[indice].nombre;
        descripcionArma.textContent=armas[indice].descripcion;
        danhoArma.textContent=armas[indice].danho;
        precioArma.textContent=armas[indice].precio;
    })





    //Mostrar un arma


 /*   imagenArma.src=martilloRompeMontanhas.imagen;
    nombreArma.textContent=martilloRompeMontanhas.nombre;
    descripcionArma.textContent=martilloRompeMontanhas.descripcion;
    danhoArma.textContent=martilloRompeMontanhas.danho;
    precioArma.textContent=martilloRompeMontanhas.precio;*/
    
    //Mostrar un escudo
    const imagenEscudo=document.querySelector("#imagen-escudo");
    const nombreEscudo=document.querySelector("#nombre-escudo");
    const descripcionEscudo=document.querySelector("#descripcion-escudo");
    const defensaEscudo=document.querySelector("#defensa-escudo");
    const precioEscudo=document.querySelector("#precio-escudo");
    
/*  imagenEscudo.src=escudoGondor.imagen;
    nombreEscudo.textContent=escudoGondor.nombre;
    descripcionEscudo.textContent=escudoGondor.descripcion;
    defensaEscudo.textContent=escudoGondor.aumento;
    precioEscudo.textContent=escudoGondor.precio; */

    //Mostrar un armadura
    const imagenArmadura=document.querySelector("#imagen-armadura");
    const nombreArmadura=document.querySelector("#nombre-armadura");
    const descripcionArmadura=document.querySelector("#descripcion-armadura");
    const defensaArmadura=document.querySelector("#defensa-armadura");
    const precioArmadura=document.querySelector("#precio-armadura");
  /*  imagenArmadura.src=armaduraReal.imagen;
    nombreArmadura.textContent=armaduraReal.nombre;
    descripcionArmadura.textContent=armaduraReal.descripcion;
    defensaArmadura.textContent=armaduraReal.aumento;
    precioArmadura.textContent=armaduraReal.precio;*/

    //Mostrar un amuleto
    const imagenAmuleto=document.querySelector("#imagen-amuleto");
    const nombreAmuleto=document.querySelector("#nombre-amuleto");
    const descripcionAmuleto=document.querySelector("#descripcion-amuleto");
    const resistenciaMagicaAmuleto=document.querySelector("#resistenciaMagica-amuleto");
    const precioAmuleto=document.querySelector("#precio-amuleto");

 /*   imagenAmuleto.src=amuletoVida.imagen;
    nombreAmuleto.textContent=amuletoVida.nombre;
    descripcionAmuleto.textContent=amuletoVida.descripcion;
    resistenciaMagicaAmuleto.textContent=amuletoVida.aumento;
    precioAmuleto.textContent=amuletoVida.precio;*/

    //Mostrarr un pocion vida
    const imagenPocionVida=document.querySelector("#imagen-pocion-vida");
    const nombrePocionVida=document.querySelector("#nombre-pocion-vida");
    const descripcionPocionVida=document.querySelector("#descripcion-pocion-vida");
    const regeneraVida=document.querySelector("#aumento-vida");
    const precioPocionVida=document.querySelector("#precio-vida");

/*  imagenPocionVida.src=pocionSaludPequenha.imagen;
    nombrePocionVida.textContent=pocionSaludPequenha.nombre;
    descripcionPocionVida.textContent=pocionSaludPequenha.descripcion;
    regeneraVida.textContent=pocionSaludPequenha.aumento;
    precioPocionVida.textContent=pocionSaludPequenha.precio;*/

    //Mostrar un pocion maná
    const imagenPocionMana=document.querySelector("#imagen-pocion-mana");
    const nombrePocionMana=document.querySelector("#nombre-pocion-mana");
    const descripcionPocionMana=document.querySelector("#descripcion-pocion-mana");
    const regeneraMana=document.querySelector("#aumento-mana");
    const precioPocionMana=document.querySelector("#precio-arma");

 /*   imagenPocionMana.src=pocionManaPequenha.imagen;
    nombrePocionMana.textContent=pocionManaPequenha.nombre;
    descripcionPocionMana.textContent=pocionManaPequenha.descripcion;
    regeneraMana.textContent=pocionManaPequenha.aumento;
    precioPocionMana.textContent=pocionManaPequenha.precio;*/
});
