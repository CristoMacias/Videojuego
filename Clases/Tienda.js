import Arma from "./Arma.js";
import Proteccion from "./Proteccion.js";
import Pocion from "./Pocion.js";
import Personaje from "./Personaje.js";

document.addEventListener('DOMContentLoaded',()=>{
    const personaje = JSON.parse(localStorage.getItem('personaje'));
    const razaPermitida = personaje.raza; // Para controlar las armas disponibles para comprar
    const martilloRompeMontanhas= new Arma("Martillo Rompemontañas 🪨🔨","Un martillo de guerra tan pesado que solo un enano puede levantarlo. Golpea con la fuerza de una avalancha.",120,30,500,5,"enano","./Imagenes/rompemontanhas(1).png");
    const hachaDeTormenta= new Arma("Hacha de Tormenta ⚡🪓", "Un hacha con runas grabadas que lanza rayos al impactar. Ideal contra enemigos con armaduras metálicas.",120,15,600,6,"enano","./Imagenes/rompemontanhas(1).png");
    const martilloLanzarrocas= new Arma("Martillo Lanzarrocas 🏹💥", "Un martillo que puede arrojar pequeños proyectiles de roca al golpear el suelo, afectando a múltiples enemigos a la vez.", 105, 20,450,4,"enano","./Imagenes/rompemontanhas(1).png");
    const escudoMandoble= new Arma("Escudo-Mandoble 🛡️⚔️","Un escudo grande que esconde una espada oculta en su centro. Puede resistir golpes letales y sorprender con un ataque inesperado.",50,100,700,7,"enano","./Imagenes/rompemontanhas(1).png");
    const ballestaDePerforacion=new Arma(" Ballesta de Perforación 🎯🔩"," Una ballesta enana que dispara virotes capaces de atravesar armaduras pesadas. Perfecta para eliminar enemigos blindados a distancia.",120,10,550,5,"enano","./Imagenes/rompemontanhas(1).png");

    const arcoDeLuzLunar=new Arma("Arco de Luz Lunar 🌙🏹","Un arco que dispara flechas de energía pura en la oscuridad, ideal para combates nocturnos.",110,10,600,5,"elfo","./Imagenes/rompemontanhas(1).png");
    const espadasDanzantes=new Arma("Espadas Danzantes 🌿⚔️"," Dos dagas que se pueden lanzar y regresan solas como un búmeran, perfectas para combates rápidos.",70,15,550,4,"elfo","./Imagenes/rompemontanhas(1).png");
    const lanzaDelViento=new Arma("Lanza del Viento 🍃🌀","Una lanza liviana que se mueve con el aire y permite ataques veloces.",90,20,500,4,"elfo","./Imagenes/rompemontanhas(1).png");
    const flechasDeEnredaderas=new Arma("Flechas de Enredaderas 🌱🎯","Flechas que al impactar hacen crecer raíces para atrapar al enemigo.",80,10,450,3,"elfo","./Imagenes/rompemontanhas(1).png");
    const bastonDeEspiritusDelBosque=new Arma("Bastón de Espíritus del Bosque 🌳✨","Un arma mágica que permite invocar bestias o curar aliados.",50,25,700,6,"elfo","./Imagenes/rompemontanhas(1).png");

    const baculoDeTormentas=new Arma("Báculo de Tormentas ⚡🌀","Un bastón que controla truenos y vientos, devastador contra grupos de enemigos.",110,20,750,6,"mago","./Imagenes/rompemontanhas(1).png");
    const varitaDeLlamasEternas=new Arma("Varita de Llamas Eternas 🔥📜","Lanza fuego sin necesidad de palabras mágicas, perfecta para hechiceros agresivos.",105,10,600,5,"mago","./Imagenes/rompemontanhas(1).png");
    const orbeDelVacio=new Arma("Orbe del Vacío ⚫🌌","Una esfera que absorbe energía y la libera como un rayo devastador.",120,10,800,7,"mago","./Imagenes/rompemontanhas(1).png");
    const guanteleteDeManipulacionDelTiempo=new Arma("Guantelete de Manipulación del Tiempo ⏳🖐️","Puede ralentizar al enemigo o acelerar al usuario en combate.",0,30,1000,8,"mago","./Imagenes/rompemontanhas(1).png");
    const espadaDelArcano=new Arma("Espada del Arcano 🌀⚔️","Una espada flotante que se maneja con la mente.",95,20,750,6,"mago","./Imagenes/rompemontanhas(1).png");

    const espadaDelReyCaido=new Arma("Espada del Rey Caído 👑⚔️","Una hoja legendaria que brilla con la voluntad de su portador.",100,20,800,6,"humano","./Imagenes/rompemontanhas(1).png");
    const lanzaRelampago=new Arma("Lanza Relámpago ⚡🏹"," Puede arrojarse y volver a la mano del usuario.",100,15,700,5,"humano","./Imagenes/rompemontanhas(1).png");
    const mazaBendecida=new Arma("Maza Bendecida 🛡️🔨","Un arma con poder sagrado que quema a los no-muertos.",115,30,750,6,"humano","./Imagenes/rompemontanhas(1).png");
    const ballestaDeTripleDisparo=new Arma("Ballesta de Triple Disparo 🎯🔫"," Dispara tres proyectiles a la vez, ideal para eliminar múltiples enemigos.",70,10,900,7,"humano","./Imagenes/rompemontanhas(1).png");
    const dagasDeSombra=new Arma("Dagas de Sombra 🕶️🗡️","Permiten moverse sin ser visto por breves instantes.",100,15,750,6,"humano","./Imagenes/rompemontanhas(1).png");

    const hachaSangrienta=new Arma("Hacha Sangrienta 🩸🪓","Se vuelve más poderosa con cada golpe que da.",110,15,850,7,"orco","./Imagenes/rompemontanhas(1).png");
    const mazaDeGuerraDeCraneos=new Arma(" Maza de Guerra de Cráneos 💀🔨","Hecha con los huesos de enemigos caídos, aterradora en combate.",120,25,950,8,"orco","./Imagenes/rompemontanhas(1).png");
    const espadaSerrada=new Arma("Espada Serrada 🔪💢","Una espada con dientes afilados que desgarran la carne al cortar.",110,10,750,6,"orco","./Imagenes/rompemontanhas(1).png");
    const lanzaDeColmillosDeBestia=new Arma("Lanza de Colmillos de Bestia 🐺🏹","Hecha con los colmillos de un monstruo gigante, sus heridas son letales.",105,15,800,7,"orco","./Imagenes/rompemontanhas(1).png");
    const garroteDeLava=new Arma("Garrote de Lava 🌋🔥","Un arma cubierta de roca volcánica que arde al golpear.",150,20,1000,9,"orco","./Imagenes/rompemontanhas(1).png");


    //PROTECCIONES
    /**
     * Creación de protecciones de tipo escudo
     */
    const escudoGondor= new Proteccion("Escudo de Gondor","Forjado en Gondor, este escudo proporciona una defensa superior contra los ataques físicos.","escudo",10,250,1.15,"./Imagenes/escudo.png");
    
    /**
     * Creación de protecciones de tipo armadura
     */
    const armaduraMithril= new Proteccion ("Armadura de Mithril","Forjada con mithril, el metal más fuerte conocido en la Tierra Media, esta armadura es ligera pero extremadamente resistente a los ataques.","armadura",20,500,1.20,"./Imagenes/escudo.png");
    
    /**
     * Creación de protecciones de tipo amuleto
     */
    const amuletoGaladriel = new Proteccion ("Amuleto de Galadriel","Este amuleto de Galadriel, hecho con la luz de Eärendil, proporciona una gran resistencia a los poderes oscuros y aumenta la resistencia mágica.","amuleto",10,350,1.1,"./Imagenes/escudo.png");

    //POCIONES
    /**
     * Creación de pociones de tipo salud
     */
    const pocionCuracion= new Pocion("Poción de Curación","El elixir de los sanadores élficos, restaura una gran cantidad de salud al beberla.","salud",50,50,"./Imagenes/pocionVida.png");
    /**
     * Creación de pociones de tipo maná
     */
    const pocionEnergiaMagica= new Pocion("Poción de Energia Mágica","El elixir de los magos de Rivendel, recarga rápidamente la energía mágica.",50,50,"./Imagenes/pocionMana.png");
    //Prueba para mostrar un arma
    const imagenArma=document.querySelector("#imagen-arma");
    const nombreArma=document.querySelector("#nombre-arma");
    imagenArma.src=martilloRompeMontanhas.imagen;
    nombreArma.textContent=martilloRompeMontanhas.nombre;
    //Prueba para mostrar un escudo
    const imagenEscudo=document.querySelector("#imagen-escudo");
    const nombreEscudo=document.querySelector("#nombre-escudo");
    imagenEscudo.src=escudoGondor.imagen;
    nombreEscudo.textContent=escudoGondor.nombre;
    //Prueba para mostrar un armadura
    const imagenArmadura=document.querySelector("#imagen-armadura");
    const nombreArmadura=document.querySelector("#nombre-armadura");
    imagenArmadura.src=armaduraMithril.imagen;
    nombreArmadura.textContent=armaduraMithril.nombre;
    //Prueba para mostrar un amuleto
    const imagenAmuleto=document.querySelector("#imagen-amuleto");
    const nombreAmuleto=document.querySelector("#nombre-amuleto");
    imagenAmuleto.src=amuletoGaladriel.imagen;
    nombreAmuleto.textContent=amuletoGaladriel.nombre;
    //Prueba para mostrar un pocion
    const imagenPocion=document.querySelector("#imagen-pocion");
    const nombrePocion=document.querySelector("#nombre-pocion");
    imagenPocion.src=pocionCuracion.imagen;
    nombrePocion.textContent=pocionCuracion.nombre;


});
