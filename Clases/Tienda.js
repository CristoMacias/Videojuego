import Arma from "./Arma.js";
import Proteccion from "./Proteccion.js";
import Pocion from "./Pocion.js";
import Personaje from "./Personaje.js";

document.addEventListener('DOMContentLoaded',()=>{
    const personaje = JSON.parse(localStorage.getItem('personaje'));
    console.log(personaje);
    const razaPermitida = personaje.raza; // Para controlar las armas disponibles para comprar

    //LISTADO DE ARMAS

    //Armas de Enanos
    const martilloRompeMontanhas= new Arma("Martillo Rompemontañas 🪨🔨","Un martillo de guerra tan pesado que solo un enano puede levantarlo. Golpea con la fuerza de una avalancha.",120,30,500,5,"enano","./Imagenes/rompemontanhas(1).png");
    const hachaDeTormenta= new Arma("Hacha de Tormenta ⚡🪓", "Un hacha con runas grabadas que lanza rayos al impactar. Ideal contra enemigos con armaduras metálicas.",120,15,600,6,"enano","./Imagenes/rompemontanhas(1).png");
    const martilloLanzarrocas= new Arma("Martillo Lanzarrocas 🏹💥", "Un martillo que puede arrojar pequeños proyectiles de roca al golpear el suelo, afectando a múltiples enemigos a la vez.", 105, 20,450,4,"enano","./Imagenes/rompemontanhas(1).png");
    const escudoMandoble= new Arma("Escudo-Mandoble 🛡️⚔️","Un escudo grande que esconde una espada oculta en su centro. Puede resistir golpes letales y sorprender con un ataque inesperado.",50,100,700,7,"enano","./Imagenes/rompemontanhas(1).png");
    const ballestaDePerforacion=new Arma(" Ballesta de Perforación 🎯🔩"," Una ballesta enana que dispara virotes capaces de atravesar armaduras pesadas. Perfecta para eliminar enemigos blindados a distancia.",120,10,550,5,"enano","./Imagenes/rompemontanhas(1).png");


    //Armas de Elfos
    const arcoDeLuzLunar=new Arma("Arco de Luz Lunar 🌙🏹","Un arco que dispara flechas de energía pura en la oscuridad, ideal para combates nocturnos.",110,10,600,5,"elfo","./Imagenes/rompemontanhas(1).png");
    const espadasDanzantes=new Arma("Espadas Danzantes 🌿⚔️"," Dos dagas que se pueden lanzar y regresan solas como un búmeran, perfectas para combates rápidos.",70,15,550,4,"elfo","./Imagenes/rompemontanhas(1).png");
    const lanzaDelViento=new Arma("Lanza del Viento 🍃🌀","Una lanza liviana que se mueve con el aire y permite ataques veloces.",90,20,500,4,"elfo","./Imagenes/rompemontanhas(1).png");
    const flechasDeEnredaderas=new Arma("Flechas de Enredaderas 🌱🎯","Flechas que al impactar hacen crecer raíces para atrapar al enemigo.",80,10,450,3,"elfo","./Imagenes/rompemontanhas(1).png");
    const bastonDeEspiritusDelBosque=new Arma("Bastón de Espíritus del Bosque 🌳✨","Un arma mágica que permite invocar bestias o curar aliados.",50,25,700,6,"elfo","./Imagenes/rompemontanhas(1).png");

    //Armas de Magos
    const baculoDeTormentas=new Arma("Báculo de Tormentas ⚡🌀","Un bastón que controla truenos y vientos, devastador contra grupos de enemigos.",110,20,750,6,"mago","./Imagenes/rompemontanhas(1).png");
    const varitaDeLlamasEternas=new Arma("Varita de Llamas Eternas 🔥📜","Lanza fuego sin necesidad de palabras mágicas, perfecta para hechiceros agresivos.",105,10,600,5,"mago","./Imagenes/rompemontanhas(1).png");
    const orbeDelVacio=new Arma("Orbe del Vacío ⚫🌌","Una esfera que absorbe energía y la libera como un rayo devastador.",120,10,800,7,"mago","./Imagenes/rompemontanhas(1).png");
    const guanteleteDeManipulacionDelTiempo=new Arma("Guantelete de Manipulación del Tiempo ⏳🖐️","Puede ralentizar al enemigo o acelerar al usuario en combate.",0,30,1000,8,"mago","./Imagenes/rompemontanhas(1).png");
    const espadaDelArcano=new Arma("Espada del Arcano 🌀⚔️","Una espada flotante que se maneja con la mente.",95,20,750,6,"mago","./Imagenes/rompemontanhas(1).png");

    //Armas de Humanos
    const espadaDelReyCaido=new Arma("Espada del Rey Caído 👑⚔️","Una hoja legendaria que brilla con la voluntad de su portador.",100,20,800,6,"humano","./Imagenes/rompemontanhas(1).png");
    const lanzaRelampago=new Arma("Lanza Relámpago ⚡🏹"," Puede arrojarse y volver a la mano del usuario.",100,15,700,5,"humano","./Imagenes/rompemontanhas(1).png");
    const mazaBendecida=new Arma("Maza Bendecida 🛡️🔨","Un arma con poder sagrado que quema a los no-muertos.",115,30,750,6,"humano","./Imagenes/rompemontanhas(1).png");
    const ballestaDeTripleDisparo=new Arma("Ballesta de Triple Disparo 🎯🔫"," Dispara tres proyectiles a la vez, ideal para eliminar múltiples enemigos.",70,10,900,7,"humano","./Imagenes/rompemontanhas(1).png");
    const dagasDeSombra=new Arma("Dagas de Sombra 🕶️🗡️","Permiten moverse sin ser visto por breves instantes.",100,15,750,6,"humano","./Imagenes/rompemontanhas(1).png");

    //Armas de Orcos
    const hachaSangrienta=new Arma("Hacha Sangrienta 🩸🪓","Se vuelve más poderosa con cada golpe que da.",110,15,850,7,"orco","./Imagenes/rompemontanhas(1).png");
    const mazaDeGuerraDeCraneos=new Arma(" Maza de Guerra de Cráneos 💀🔨","Hecha con los huesos de enemigos caídos, aterradora en combate.",120,25,950,8,"orco","./Imagenes/rompemontanhas(1).png");
    const espadaSerrada=new Arma("Espada Serrada 🔪💢","Una espada con dientes afilados que desgarran la carne al cortar.",110,10,750,6,"orco","./Imagenes/rompemontanhas(1).png");
    const lanzaDeColmillosDeBestia=new Arma("Lanza de Colmillos de Bestia 🐺🏹","Hecha con los colmillos de un monstruo gigante, sus heridas son letales.",105,15,800,7,"orco","./Imagenes/rompemontanhas(1).png");
    const garroteDeLava=new Arma("Garrote de Lava 🌋🔥","Un arma cubierta de roca volcánica que arde al golpear.",150,20,1000,9,"orco","./Imagenes/rompemontanhas(1).png");

    //LISTADO DE PROTEECIONES
    //Protecciones tipo Escudo
    const escudoGondor =new Proteccion("Escudo de Gondor🛡️", "Forjado en Gondor, este escudo proporciona una defensa superior contra los ataques físicos.", "escudo", 10, 250, 1.15, "./Imagenes/escudo.png");
    const escudoDraconico =new Proteccion("Escudo Dragónico🐉", "Un escudo legendario, forjado con escamas de dragón, que otorga una gran resistencia al fuego y a los golpes.", "escudo", 15, 350, 1.30, "./Imagenes/escudoDraconico.png");
    const escudoSombrio =new Proteccion("Escudo Sombrío🌑", "Envuelto en magia oscura, este escudo absorbe parte del daño recibido y otorga resistencia a las maldiciones.", "escudo", 12, 280, 1.20, "./Imagenes/escudoSombrio.png");
    const escudoCelestial =new Proteccion("Escudo Celestial✨", "Un escudo bendecido por los dioses, capaz de reflejar parte del daño y aumentar la regeneración del portador.", "escudo", 18, 400, 1.40, "./Imagenes/escudoCelestial.png");

    //Protecciones tipo Armadura
    const armaduraReal =new Proteccion("Armadura Real👑", "Una armadura hecha con los mejores materiales del reino, otorga alta resistencia física.", "armadura", 25, 500, 1.50, "./Imagenes/escudo.png");
    const armaduraDraconica =new Proteccion("Armadura Dragónica🔥", "Forjada con escamas de dragón, resistente al fuego y a los ataques físicos.", "armadura", 30, 600, 1.60, "./Imagenes/armaduraDraconica.png");
    const armaduraSombria =new Proteccion("Armadura Sombría🌑", "Impregnada con magia oscura, reduce el daño recibido y otorga sigilo.", "armadura", 20, 450, 1.40, "./Imagenes/armaduraSombria.png");
    const armaduraCelestial =new Proteccion("Armadura Celestial✨", "Bendecida por los dioses, mejora la resistencia mágica y la regeneración.", "armadura", 35, 700, 1.75, "./Imagenes/armaduraCelestial.png");

    //Protecciones tipo Magia
    const amuletoVida =new Proteccion("Amuleto de Vida💖", "Aumenta la vitalidad del portador y la regeneración de salud.", "amuleto", 5, 200, 1.10, "./Imagenes/oscuro.png");
    const amuletoFuego =new Proteccion("Amuleto de Fuego🔥", "Otorga resistencia al fuego y potencia ataques ígneos.", "amuleto", 7, 250, 1.20, "./Imagenes/amuletoFuego.png");
    const amuletoOscuro =new Proteccion("Amuleto Oscuro🌑", "Absorbe parte del daño oscuro y aumenta la resistencia a maldiciones.", "amuleto", 6, 220, 1.15, "./Imagenes/amuletoOscuro.png");
    const amuletoDivino =new Proteccion("Amuleto Divino✨", "Bendecido por los dioses, otorga regeneración continua y protección mágica.", "amuleto", 8, 300, 1.25, "./Imagenes/amuletoDivino.png");

    //LISTADO DE POCIONES 
    //Pociones refeneración Salud
    const pocionSaludPequenha =new Pocion("Poción de Salud Pequeña🍷", "Restaura una pequeña cantidad de salud al instante.", "salud", 50, 5, "./Imagenes/pocionVida.png");
    const pocionSaludMedia =new Pocion("Poción de Salud Media🥂", "Recupera una cantidad moderada de salud.", "salud", 150, 10, "./Imagenes/pocionSaludMedia.png");
    const pocionSaludGrande =new Pocion("Poción de Salud Grande🍾", "Regenera una gran cantidad de salud.", "salud", 300, 20, "./Imagenes/pocionSaludGrande.png");
    const pocionSaludMilagrosa =new Pocion("Poción Milagrosa✨", "Cura completamente la salud del usuario.", "salud", 1000, 50, "./Imagenes/pocionSaludMilagrosa.png");

    //Pociones regeneración Mana
    const pocionManaPequenha =new Pocion("Poción de Maná Pequeña🔵", "Recupera una pequeña cantidad de maná.", "mana", 50, 5, "./Imagenes/pocionMana.png");
    const pocionManaMedia =new Pocion("Poción de Maná Media🔷", "Recupera una cantidad moderada de maná.", "mana", 150, 10, "./Imagenes/pocionManaMedia.png");
    const pocionManaGrande =new Pocion("Poción de Maná Grande🔮", "Regenera una gran cantidad de maná.", "mana", 300, 20, "./Imagenes/pocionManaGrande.png");
    const pocionManaDivina =new Pocion("Poción de Maná Divina✨", "Restaura completamente el maná del usuario.", "mana", 1000, 50, "./Imagenes/pocionManaDivina.png");


    //Array de armasEnanos
    const armasEnanos=[martilloRompeMontanhas,hachaDeTormenta,martilloLanzarrocas,escudoMandoble,ballestaDePerforacion];
    const armasElfos=[arcoDeLuzLunar,espadasDanzantes,lanzaDelViento,flechasDeEnredaderas,bastonDeEspiritusDelBosque];
    const armasMagos=[baculoDeTormentas,varitaDeLlamasEternas,orbeDelVacio,guanteleteDeManipulacionDelTiempo,espadaDelArcano];
    const armasHumanos=[espadaDelReyCaido,lanzaRelampago,mazaBendecida,ballestaDeTripleDisparo,dagasDeSombra];
    const armasOrcos=[hachaSangrienta, mazaDeGuerraDeCraneos,espadaSerrada,lanzaDeColmillosDeBestia,garroteDeLava];

    const escudos=[escudoGondor,escudoDraconico,escudoSombrio,escudoCelestial];
    const armaduras=[armaduraReal,armaduraDraconica,armaduraSombria,armaduraCelestial];
    const amuletos=[ amuletoVida,amuletoFuego,amuletoOscuro, amuletoDivino];
    const pocionesVida=[pocionSaludPequenha,pocionSaludMedia,pocionSaludGrande,pocionSaludMilagrosa];
    const pocionesMana=[pocionManaPequenha,pocionManaMedia,pocionManaGrande,pocionManaDivina];



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
    imagenArmadura.src=armaduraReal.imagen;
    nombreArmadura.textContent=armaduraReal.nombre;
    //Prueba para mostrar un amuleto
    const imagenAmuleto=document.querySelector("#imagen-amuleto");
    const nombreAmuleto=document.querySelector("#nombre-amuleto");
    imagenAmuleto.src=amuletoVida.imagen;
    nombreAmuleto.textContent=amuletoVida.nombre;
    //Prueba para mostrar un pocion vida
    const imagenPocionVida=document.querySelector("#imagen-pocion-vida");
    const nombrePocionVida=document.querySelector("#nombre-pocion-vida");
    imagenPocionVida.src=pocionSaludPequenha.imagen;
    nombrePocionVida.textContent=pocionSaludPequenha.nombre;

    //Prueba para mostrar un pocion maná
    const imagenPocionMana=document.querySelector("#pocion-mana");
    const nombrePocionMana=document.querySelector("#pocion-mama");
    imagenPocionMana.src=pocionManaPequenha.imagen;
    nombrePocionMana.textContent=pocionManaPequenha.nombre;
});
