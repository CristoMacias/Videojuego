import Arma from "./Arma.js";
import Proteccion from "./Proteccion.js";
import Pocion from "./Pocion.js";

export default class Tienda{
    #armas=[]; //Array que contendrá las armas por raza
    #protecciones=[]; // Objeto que contendrá los arrays de cada tipo de proteccio
    #pociones=[]; //Objeto que contendrá los arrays de los tipos de pocion

    /**
     * Construcot de la tienda
     * @param {*} raza  Recibe como parámetro la raza del personaje para generar las armas correspondientes
     */ 
    constructor(raza){
        this.#armas=this.obtenerArmasPorRaza(raza);
        this.#protecciones={
            escudo:[ //Protecciones tipo Escudo
                new Proteccion("Escudo de Gondor🛡️", "Forjado en Gondor, este escudo proporciona una defensa superior contra los ataques físicos.", "escudo", 10, 250, 1.15, "./Imagenes/Protecciones_Pociones/escudo_gondor.png"),
                new Proteccion("Escudo Dragónico🐉", "Un escudo legendario, forjado con escamas de dragón, que otorga una gran resistencia al fuego y a los golpes.", "escudo", 15, 350, 1.30, "./Imagenes/Protecciones_Pociones/escudo_draconico.png"),
                new Proteccion("Escudo Sombrío🌑", "Envuelto en magia oscura, este escudo absorbe parte del daño recibido y otorga resistencia a las maldiciones.", "escudo", 12, 280, 1.20, "./Imagenes/Protecciones_Pociones/escudo_sombrio.png"),
                new Proteccion("Escudo Celestial✨", "Un escudo bendecido por los dioses, capaz de reflejar parte del daño y aumentar la regeneración del portador.", "escudo", 18, 400, 1.40, "./Imagenes/Protecciones_Pociones/celestial.png")
            ],
            armadura:[ //Protecciones tipo Armadura
                new Proteccion("Armadura Real👑", "Una armadura hecha con los mejores materiales del reino, otorga alta resistencia física.", "armadura", 25, 500, 1.50, "./Imagenes/Protecciones_Pociones/armadura_real.png"),
                new Proteccion("Armadura Dragónica🔥", "Forjada con escamas de dragón, resistente al fuego y a los ataques físicos.", "armadura", 30, 600, 1.60, "./Imagenes/Protecciones_Pociones/Armadura_Dragonica.png"),
                new Proteccion("Armadura Sombría🌑", "Impregnada con magia oscura, reduce el daño recibido y otorga sigilo.", "armadura", 20, 450, 1.40, "./Imagenes/Protecciones_Pociones/Armadura_Sombria.png"),
                new Proteccion("Armadura Celestial✨", "Bendecida por los dioses, mejora la resistencia mágica y la regeneración.", "armadura", 35, 700, 1.75, "./Imagenes/Protecciones_Pociones/Armadura_Celestial.png")
            ],
            amuleto:[//Protecciones tipo Magia
                new Proteccion("Amuleto de Vida💖", "Aumenta la vitalidad del portador y la regeneración de salud.", "amuleto", 5, 200, 1.10, "./Imagenes/Protecciones_Pociones/Amuleto_Oscuro.png"),
                new Proteccion("Amuleto de Fuego🔥", "Otorga resistencia al fuego y potencia ataques ígneos.", "amuleto", 7, 250, 1.20, "./Imagenes/Protecciones_Pociones/Amuleto_Fuego.png"),
                new Proteccion("Amuleto Oscuro🌑", "Absorbe parte del daño oscuro y aumenta la resistencia a maldiciones.", "amuleto", 6, 220, 1.15, "./Imagenes/Protecciones_Pociones/Amuleto_Oscuro.png"),
                new Proteccion("Amuleto Divino✨", "Bendecido por los dioses, otorga regeneración continua y protección mágica.", "amuleto", 8, 300, 1.25, "./Imagenes/Protecciones_Pociones/Amuleto_Divino.png")
            ]
        };
        this.#pociones={
            salud:[//Pociones refeneración Salud
                new Pocion("Poción de Salud Pequeña🍷", "Restaura una pequeña cantidad de salud al instante.", "salud", 50, 5, "./Imagenes/Protecciones_Pociones/Pocion_Salud_Pequenha.png"),
                new Pocion("Poción de Salud Media🥂", "Recupera una cantidad moderada de salud.", "salud", 150, 10, "./Imagenes/Protecciones_Pociones/Pocion_Salud_Mediana.png"),
                new Pocion("Poción de Salud Grande🍾", "Regenera una gran cantidad de salud.", "salud", 300, 20, "./Imagenes/Protecciones_Pociones/Pocion_Salud_Grande.png"),
                new Pocion("Poción Milagrosa✨", "Cura completamente la salud del usuario.", "salud", 1000, 50, "./Imagenes/Protecciones_Pociones/Pocion_Milagrosa.png")
            ],
            mana:[//Pociones regeneración Mana
                new Pocion("Poción de Maná Pequeña🔵", "Recupera una pequeña cantidad de maná.", "mana", 50, 5, "./Imagenes/Protecciones_Pociones/Pocion_Mana_Pequenha.png"),
                new Pocion("Poción de Maná Media🔷", "Recupera una cantidad moderada de maná.", "mana", 150, 10, "./Imagenes/Protecciones_Pociones/Pocion_Mana_Mediana.png"),
                new Pocion("Poción de Maná Grande🔮", "Regenera una gran cantidad de maná.", "mana", 300, 20, "./Imagenes/Protecciones_Pociones/Pocion_Mana_Grande.png"),
                new Pocion("Poción de Maná Divina✨", "Restaura completamente el maná del usuario.", "mana", 1000, 50, "./Imagenes/Protecciones_Pociones/Pocion_Mana_Divina.png")
            ]
        };
    }
    /**
     * Método para devovler el array con las armas según la raza del personaje
     * @param {*} raza Recibe la raza
     * @returns  Devuelve un array con las armas correspondientes  a la raza
     */
    obtenerArmasPorRaza(raza){
        switch(raza){
            case "humano":
            return [   //Armas de Humanos
                new Arma("Espada del Rey Caído 👑⚔️","Una hoja legendaria que brilla con la voluntad de su portador.",100,20,800,6,"humano","./Imagenes/humanos/espada_rey.png"),
                new Arma("Lanza Relámpago ⚡🏹"," Puede arrojarse y volver a la mano del usuario.",100,15,700,5,"humano","./Imagenes/humanos/lanza_relampago.png"),
                new Arma("Maza Bendecida 🛡️🔨","Un arma con poder sagrado que quema a los no-muertos.",115,30,750,6,"humano","./Imagenes/humanos/maza_bendecida.png"),
                new Arma("Ballesta de Triple Disparo 🎯🔫"," Dispara tres proyectiles a la vez, ideal para eliminar múltiples enemigos.",70,10,900,7,"humano","./Imagenes/humanos/ballesta.png"),
                new Arma("Dagas de Sombra 🕶️🗡️","Permiten moverse sin ser visto por breves instantes.",100,15,750,6,"humano","./Imagenes/humanos/dagaSombra.png")
            ];
            case "orco":
            return [//Armas de Orcos
                new Arma("Hacha Sangrienta 🩸🪓","Se vuelve más poderosa con cada golpe que da.",110,15,850,7,"orco","./Imagenes/orcos/hacha_sangrienta.png"),
                new Arma("Maza de Guerra de Cráneos 💀🔨","Hecha con los huesos de enemigos caídos, aterradora en combate.",120,25,950,8,"orco","./Imagenes/orcos/maza_de_guerra.png"),
                new Arma("Espada Serrada 🔪💢","Una espada con dientes afilados que desgarran la carne al cortar.",110,10,750,6,"orco","./Imagenes/orcos/espada_serrada.png"),
                new Arma("Lanza de Colmillos de Bestia 🐺🏹","Hecha con los colmillos de un monstruo gigante, sus heridas son letales.",105,15,800,7,"orco","./Imagenes/orcos/lanza_colmillos.png"),
                new Arma("Garrote de Lava 🌋🔥","Un arma cubierta de roca volcánica que arde al golpear.",150,20,1000,9,"orco","./Imagenes/orcos/garrote_lava.png")
            ];
            case "mago":
            return [    //Armas de Magos
                new Arma("Báculo de Tormentas ⚡🌀","Un bastón que controla truenos y vientos, devastador contra grupos de enemigos.",110,20,750,6,"mago","./Imagenes/magos/baculo_de_tormentas.png"),
                new Arma("Varita de Llamas Eternas 🔥📜","Lanza fuego sin necesidad de palabras mágicas, perfecta para hechiceros agresivos.",105,10,600,5,"mago","./Imagenes/magos/varita_llamas.png"),
                new Arma("Orbe del Vacío ⚫🌌","Una esfera que absorbe energía y la libera como un rayo devastador.",120,10,800,7,"mago","./Imagenes/magos/orbe_del_vacio.png"),
                new Arma("Guantelete de Manipulación del Tiempo ⏳🖐️","Puede ralentizar al enemigo o acelerar al usuario en combate.",0,30,1000,8,"mago","./Imagenes/magos/guantelete.png"),
                new Arma("Espada del Arcano 🌀⚔️","Una espada flotante que se maneja con la mente.",95,20,750,6,"mago","./Imagenes/magos/espada_arcano.png")
            ];
            case "enano":
            return [    //Armas de Enanos
                new Arma("Martillo Rompemontañas 🪨🔨","Un martillo de guerra tan pesado que solo un enano puede levantarlo. Golpea con la fuerza de una avalancha.",120,30,500,5,"enano","./Imagenes/enanos/martillo_rompemontanhas.png"),
                new Arma("Hacha de Tormenta ⚡🪓", "Un hacha con runas grabadas que lanza rayos al impactar. Ideal contra enemigos con armaduras metálicas.",120,15,600,6,"enano","./Imagenes/enanos/hacha_tormenta.png"),
                new Arma("Martillo Lanzarrocas 🏹💥", "Un martillo que puede arrojar pequeños proyectiles de roca al golpear el suelo, afectando a múltiples enemigos a la vez.", 105, 20,450,4,"enano","./Imagenes/enanos/martillo_lanzarrocas.png"),
                new Arma("Escudo-Mandoble 🛡️⚔️","Un escudo grande que esconde una espada oculta en su centro. Puede resistir golpes letales y sorprender con un ataque inesperado.",50,100,700,7,"enano","./Imagenes/enanos/escudo_mandoble.png"),
                new Arma(" Ballesta de Perforación 🎯🔩"," Una ballesta enana que dispara virotes capaces de atravesar armaduras pesadas. Perfecta para eliminar enemigos blindados a distancia.",120,10,550,5,"enano","./Imagenes/enanos/ballesta_perforacion.png")
            ];
            case "elfo":
            return [//Armas de Elfos
                    new Arma("Arco de Luz Lunar 🌙🏹","Un arco que dispara flechas de energía pura en la oscuridad, ideal para combates nocturnos.",110,10,600,5,"elfo","./Imagenes/elfos/arco_luz_lunar.png"),
                    new Arma("Espadas Danzantes 🌿⚔️"," Dos dagas que se pueden lanzar y regresan solas como un búmeran, perfectas para combates rápidos.",70,15,550,4,"elfo","./Imagenes/elfos/espadas_danzantes.png"),
                    new Arma("Lanza del Viento 🍃🌀","Una lanza liviana que se mueve con el aire y permite ataques veloces.",90,20,500,4,"elfo","./Imagenes/elfos/lanza_viento.png"),
                    new Arma("Flechas de Enredaderas 🌱🎯","Flechas que al impactar hacen crecer raíces para atrapar al enemigo.",80,10,450,3,"elfo","./Imagenes/elfos/flecha_enredaderas.png"),
                    new Arma("Bastón de Espíritus del Bosque 🌳✨","Un arma mágica que permite invocar bestias o curar aliados.",50,25,700,6,"elfo","./Imagenes/elfos/baston_espiritus_bosque.png")
                ];
        };


    };

    /**
    * Getter para arma
    * @return arma Devuelve el valor de arma;
    */
    get armas() {
       return this.#armas;
    }
    /**
    * Getter para protecciones
    * @return protecciones Devuelve el valor de protecciones;
    */
    get protecciones() {
       return this.#protecciones;
    }

    /**
    * Getter para pociones
    * @return pociones Devuelve el valor de pociones;
    */
    get pociones() {
       return this.#pociones;
    }


};


