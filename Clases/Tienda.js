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
                new Proteccion("Escudo del León Dorado 🦁🛡️", "Un escudo forjado con el oro puro, otorgando una defensa imparable contra todos los ataques físicos.", "escudo", 20, 500, 1.40, "./Imagenes/Protecciones_Pociones/escudo_leon_dorado.png"),
                new Proteccion("Escudo del Guardián Celeste 🌟🛡️", "Bendecido por los cielos, este escudo refleja los ataques mágicos hacia el agresor.", "escudo", 25, 600, 1.50, "./Imagenes/Protecciones_Pociones/escudo_guardian_celeste.png"),
                new Proteccion("Escudo de la Eternidad ⏳🛡️", "Un escudo ancestral que reduce el daño recibido y otorga un buff de regeneración de vida.", "escudo", 18, 450, 1.35, "./Imagenes/Protecciones_Pociones/escudo_eterna.png"),
                new Proteccion("Escudo Celestial✨", "Un escudo bendecido por los dioses, capaz de reflejar parte del daño y aumentar la regeneración del portador.", "escudo", 18, 400, 1.40, "./Imagenes/Protecciones_Pociones/celestial.png")
            ],
            armadura:[ //Protecciones tipo Armadura
                new Proteccion("Armadura Real👑", "Una armadura hecha con los mejores materiales del reino, otorga alta resistencia física.", "armadura", 25, 500, 1.50, "./Imagenes/Protecciones_Pociones/armadura_real.png"),
                new Proteccion("Armadura Dragónica🔥", "Forjada con escamas de dragón, resistente al fuego y a los ataques físicos.", "armadura", 30, 600, 1.60, "./Imagenes/Protecciones_Pociones/Armadura_Dragonica.png"),
                new Proteccion("Armadura Sombría🌑", "Impregnada con magia oscura, reduce el daño recibido y otorga sigilo.", "armadura", 20, 450, 1.40, "./Imagenes/Protecciones_Pociones/Armadura_Sombria.png"),
                new Proteccion("Armadura del Titan 🏋️‍♂️", "Una armadura extremadamente resistente, hecha con el metal más fuerte, aumentando la defensa física enormemente.", "armadura", 40, 800, 1.80, "./Imagenes/Protecciones_Pociones/armadura_titan.png"),
                new Proteccion("Armadura de Fuego Eterno 🔥💀", "Forjada en las entrañas de un volcán, esta armadura proporciona gran resistencia al fuego y ataques físicos.", "armadura", 35, 700, 1.70, "./Imagenes/Protecciones_Pociones/armadura_fuego_eterno.png"),
                new Proteccion("Armadura del Guardián Nocturno 🌙🛡️", "Hecha de materiales de la noche eterna, esta armadura reduce significativamente el daño y otorga invisibilidad temporal.", "armadura", 30, 650, 1.65, "./Imagenes/Protecciones_Pociones/armadura_guardian_nocturno.png"),
                new Proteccion("Armadura Celestial✨", "Bendecida por los dioses, mejora la resistencia mágica y la regeneración.", "armadura", 35, 700, 1.75, "./Imagenes/Protecciones_Pociones/Armadura_Celestial.png")
            ],
            amuleto:[//Protecciones tipo Magia
                new Proteccion("Amuleto de Vida💖", "Aumenta la vitalidad del portador y la regeneración de salud.", "amuleto", 5, 200, 1.10, "./Imagenes/Protecciones_Pociones/Amuleto_Oscuro.png"),
                new Proteccion("Amuleto de Fuego🔥", "Otorga resistencia al fuego y potencia ataques ígneos.", "amuleto", 7, 250, 1.20, "./Imagenes/Protecciones_Pociones/Amuleto_Fuego.png"),
                new Proteccion("Amuleto Oscuro🌑", "Absorbe parte del daño oscuro y aumenta la resistencia a maldiciones.", "amuleto", 6, 220, 1.15, "./Imagenes/Protecciones_Pociones/Amuleto_Oscuro.png"),
                new Proteccion("Amuleto del Corazón de Hierro 💪🔮", "Aumenta la resistencia a los ataques mágicos y mejora la regeneración de salud de forma continua.", "amuleto", 10, 350, 1.30, "./Imagenes/Protecciones_Pociones/amuleto_corazon_jerro.png"),
                new Proteccion("Amuleto del Relámpago ⚡🔮", "Este amuleto otorga gran resistencia a los ataques eléctricos y mejora la potencia de las habilidades de trueno.", "amuleto", 12, 400, 1.35, "./Imagenes/Protecciones_Pociones/amuleto_relampago.png"),
                new Proteccion("Amuleto del Sol Radiante 🌞🔮", "Bendecido por el sol, aumenta la resistencia mágica y permite regeneración de energía durante el combate.", "amuleto", 15, 500, 1.40, "./Imagenes/Protecciones_Pociones/amuleto_sol_radiante.png"),
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
                new Arma("Espada del Rey Caído 👑⚔️","Una hoja legendaria que brilla con la voluntad de su portador.",2.0,800,6,"humano","./Imagenes/humanos/espada_rey.png"),
                new Arma("Lanza Relámpago ⚡🏹"," Puede arrojarse y volver a la mano del usuario.",2.0,700,5,"humano","./Imagenes/humanos/lanza_relampago.png"),
                new Arma("Maza Bendecida 🛡️🔨","Un arma con poder sagrado que quema a los no-muertos.",2.15,750,6,"humano","./Imagenes/humanos/maza_bendecida.png"),
                new Arma("Ballesta de Triple Disparo 🎯🔫"," Dispara tres proyectiles a la vez, ideal para eliminar múltiples enemigos.",1.7,900,7,"humano","./Imagenes/humanos/ballesta.png"),
                new Arma("Dagas de Sombra 🕶️🗡️","Permiten moverse sin ser visto por breves instantes.",2.0,750,6,"humano","./Imagenes/humanos/dagaSombra.png"),
                new Arma("Espada de la Luz Celestial 🌟⚔️", "Un sable forjado con la luz pura, ideal para desintegrar sombras.", 2.0, 850, 6, "humano", "./Imagenes/humanos/celestial.png"),
                new Arma("Arco de la Caza Real 🏹👑", "Un arco impresionante con un alcance letal y una puntería infalible.", 2.1, 700, 5, "humano", "./Imagenes/humanos/arco_caza.png"),
                new Arma("Espada de los Vientos Silenciosos 🌬️⚔️", "Una espada tan ligera que corta como el viento, casi invisible al movimiento.", 1.9, 750, 7, "humano", "./Imagenes/humanos/espada_vientos.png"),
                new Arma("Hoja del Destino Dorado👑⚔️","Una hoja heredada del mismísimo rey Arturo",1.85,0,1,"humano","./Imagenes/humanos/hoja_destino.png"),
                new Arma("Martillo del Paladín Eterno⚖️🔨","Un arma pesada utilizada por los caballeros de la justicia.",1.95,0,1,"humano","./Imagenes/humanos/martillo_paladin.png")
            ];
            case "orco":
            return [//Armas de Orcos
                new Arma("Hacha Sangrienta 🩸🪓","Se vuelve más poderosa con cada golpe que da.",2.10,850,7,"orco","./Imagenes/orcos/hacha_sangrienta.png"),
                new Arma("Maza de Guerra de Cráneos 💀🔨","Hecha con los huesos de enemigos caídos, aterradora en combate.",2.20,950,8,"orco","./Imagenes/orcos/maza_de_guerra.png"),
                new Arma("Espada Serrada 🔪💢","Una espada con dientes afilados que desgarran la carne al cortar.",2.10,750,6,"orco","./Imagenes/orcos/espada_serrada.png"),
                new Arma("Lanza de Colmillos de Bestia 🐺🏹","Hecha con los colmillos de un monstruo gigante, sus heridas son letales.",2.05,800,7,"orco","./Imagenes/orcos/lanza_colmillos.png"),
                new Arma("Garrote de Lava 🌋🔥","Un arma cubierta de roca volcánica que arde al golpear.",2.50,1000,9,"orco","./Imagenes/orcos/garrote_lava.png"),
                new Arma("Hacha del Destructor de Mundos 🌍🪓", "Una enorme hacha que puede cortar montañas y desintegrar todo a su paso.", 2.3, 950, 9, "orco", "./Imagenes/orcos/hacha_destructor.png"),
                new Arma("Mazo del Coloso 🌋💥", "Un mazo gigantesco con una cabeza hecha de una piedra volcánica impenetrable.", 2.4, 1000, 10, "orco", "./Imagenes/orcos/mazo_coloso.png"),
                new Arma("Guantelete de Fuerza Brutal 🖐️💪", "Guanteletes de combate que aumentan la fuerza física de quien los usa.", 2.0, 850, 8, "orco", "./Imagenes/orcos/guantelete_fuerza.png"),
                new Arma("Segadora del Infierno🔥🪓","Un arma brutal con un filo forjado en llamas.",1.90,0,1,"orco","./Imagenes/orcos/segadora.png"),
                new Arma("Colmillo del Guerrero","Se fortalece con cada enemigo caido en combate",1.95,0,1,"orco","./Imagenes/orcos/colmillo.png")
            ];
            case "mago":
            return [    //Armas de Magos
                new Arma("Báculo de Tormentas ⚡🌀","Un bastón que controla truenos y vientos, devastador contra grupos de enemigos.",2.10,750,6,"mago","./Imagenes/magos/baculo_de_tormentas.png"),
                new Arma("Varita de Llamas Eternas 🔥📜","Lanza fuego sin necesidad de palabras mágicas, perfecta para hechiceros agresivos.",2.05,600,5,"mago","./Imagenes/magos/varita_llamas.png"),
                new Arma("Orbe del Vacío ⚫🌌","Una esfera que absorbe energía y la libera como un rayo devastador.",2.20,800,7,"mago","./Imagenes/magos/orbe_del_vacio.png"),
                new Arma("Guantelete de Manipulación del Tiempo ⏳🖐️","Puede ralentizar al enemigo o acelerar al usuario en combate.",0,1000,8,"mago","./Imagenes/magos/guantelete.png"),
                new Arma("Espada del Arcano 🌀⚔️","Una espada flotante que se maneja con la mente.",1.95,750,6,"mago","./Imagenes/magos/espada_arcano.png"),
                new Arma("Cloak of Shadows 🖤🌑", "Una capa que permite al usuario volverse invisible en la oscuridad.", 1.9, 750, 6, "mago", "./Imagenes/magos/cloak_of_shadows.png"),
                new Arma("Báculo de las Estrellas Caídas 🌠🪄", "Un bastón que canaliza la energía de las estrellas en poderosos hechizos.", 2.2, 800, 7, "mago", "./Imagenes/magos/baculo_estrellas.png"),
                new Arma("Círculo del Conjurador Eterno 🔮💀", "Un círculo encantado que permite conjurar hechizos de larga duración y alta potencia.", 2.0, 850, 8, "mago", "./Imagenes/magos/circulo_conjurador.png"),
                new Arma("Centro del Firmamento ✨🔮","Canaliza la energía cósmica en poderosos hechizos.",1.70,0,1,"mago","./Imagenes/magos/centro.png"),
                new Arma("Tomo de la Penumbra 📜☠️","Un libro de conjuros prohibidos que renace la vitalidad del enemigo.",1.75,0,1,"mago","./Imagenes/magos/tomo_penumbra.png")
            ];
            case "enano":
            return [    //Armas de Enanos
                new Arma("Martillo Rompemontañas 🪨🔨","Un martillo de guerra tan pesado que solo un enano puede levantarlo. Golpea con la fuerza de una avalancha.",2.20,500,5,"enano","./Imagenes/enanos/martillo_rompemontanhas.png"),
                new Arma("Hacha de Tormenta ⚡🪓", "Un hacha con runas grabadas que lanza rayos al impactar. Ideal contra enemigos con armaduras metálicas.",2.20,600,6,"enano","./Imagenes/enanos/hacha_tormenta.png"),
                new Arma("Martillo Lanzarrocas 🏹💥", "Un martillo que puede arrojar pequeños proyectiles de roca al golpear el suelo, afectando a múltiples enemigos a la vez.", 2.05,450,4,"enano","./Imagenes/enanos/martillo_lanzarrocas.png"),
                new Arma("Escudo-Mandoble 🛡️⚔️","Un escudo grande que esconde una espada oculta en su centro. Puede resistir golpes letales y sorprender con un ataque inesperado.",1.50,700,7,"enano","./Imagenes/enanos/escudo_mandoble.png"),
                new Arma(" Ballesta de Perforación 🎯🔩"," Una ballesta enana que dispara virotes capaces de atravesar armaduras pesadas. Perfecta para eliminar enemigos blindados a distancia.",2.20,10,550,5,"enano","./Imagenes/enanos/ballesta_perforacion.png"),
                new Arma("Hacha de Hierro Forjado 🔨🛠️", "Un hacha que puede cortar cualquier material con precisión gracias a su metal especial.", 2.1, 600, 6, "enano", "./Imagenes/enanos/hacha_hierro_forjado.png"),
                new Arma("Martillo de la Fuerza Subterránea 🌑⚒️", "Un martillo que se empapó del poder de la tierra, causando terremotos con cada golpe.", 2.3, 750, 8, "enano", "./Imagenes/enanos/martillo_fuerza_subterranea.png"),
                new Arma("Ballesta de Proyectiles de Acero ⚙️🎯", "Una ballesta que dispara virotes de acero como flechas, atravesando cualquier armadura.", 2.0, 650, 7, "enano", "./Imagenes/enanos/ballesta_proyectiles_acero.png"),
                new Arma("Martillo del Guardián de Acero 🛡️⚒️","Un martillo colosal capaz de partir la roca con un solo golpe.",1.95,0,1,"enano","./Imagenes/enanos/martillo_guardian.png"),
                new Arma("Hacha de la Furia Terrestre ⛏️🌑","Forjada en las minas más oscuras, esta hacha nunca se desafila.",1.90,0,1,"enano","./Imagenes/enanos/hacha_furia.png")
            ];
            case "elfo":
            return [//Armas de Elfos
                    new Arma("Arco de Luz Lunar 🌙🏹","Un arco que dispara flechas de energía pura en la oscuridad, ideal para combates nocturnos.",2.10,600,5,"elfo","./Imagenes/elfos/arco_luz_lunar.png"),
                    new Arma("Espadas Danzantes 🌿⚔️"," Dos dagas que se pueden lanzar y regresan solas como un búmeran, perfectas para combates rápidos.",1.70,550,4,"elfo","./Imagenes/elfos/espadas_danzantes.png"),
                    new Arma("Lanza del Viento 🍃🌀","Una lanza liviana que se mueve con el aire y permite ataques veloces.",1.90,500,4,"elfo","./Imagenes/elfos/lanza_viento.png"),
                    new Arma("Flechas de Enredaderas 🌱🎯","Flechas que al impactar hacen crecer raíces para atrapar al enemigo.",1.80,450,3,"elfo","./Imagenes/elfos/flecha_enredaderas.png"),
                    new Arma("Bastón de Espíritus del Bosque 🌳✨","Un arma mágica que permite invocar bestias o curar aliados.",1.50,700,6,"elfo","./Imagenes/elfos/baston_espiritus_bosque.png"),
                    new Arma("Dagas del Alba Mística 🌅🗡️", "Un par de dagas que brillan con el primer rayo del sol y pueden cortar cualquier sombra.", 2.0, 650, 7, "elfo", "./Imagenes/elfos/dagas_alba_mistica.png"),
                    new Arma("Lanza del Guardián del Bosque 🌳⚔️", "Una lanza que puede invocar la fuerza de la naturaleza al ser lanzada.", 2.1, 700, 8, "elfo", "./Imagenes/elfos/lanza_guardian_bosque.png"),
                    new Arma("Arco de los Cielos Azules ☁️🏹", "Un arco que dispara flechas que viajan tan rápido como el viento y se desvanecen al impactar.", 2.0, 750, 6, "elfo", "./Imagenes/elfos/arco_cielos_azules.png"),
                    new Arma("Arco de la Brisa Eterna 🌿🏹","Un arco elegante, imbuido con la energía del atardecer.",1.80,0,1,"elfo","./Imagenes/elfos/arco_brisa.png"),
                    new Arma("Filos de la Medianoche 🌙🗡️","Un par de dagas encantadas que se desvanecen en la penumbra.",1.65,0,1,"elfo","./Imagenes/elfos/filos.png")
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


