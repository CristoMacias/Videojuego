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
                new Proteccion("Escudo de Gondor🛡️", "Forjado en Gondor, este escudo proporciona una defensa superior contra los ataques físicos.", "escudo", 5, 250, 1.15, "./Imagenes/Protecciones_Pociones/escudo_gondor.png"),
                new Proteccion("Escudo Dragónico🐉", "Un escudo legendario, forjado con escamas de dragón, que otorga una gran resistencia al fuego y a los golpes.", "escudo", 10, 350, 1.30, "./Imagenes/Protecciones_Pociones/escudo_draconico.png"),
                new Proteccion("Escudo Sombrío🌑", "Envuelto en magia oscura, este escudo absorbe parte del daño recibido y otorga resistencia a las maldiciones.", "escudo", 15, 500, 1.20, "./Imagenes/Protecciones_Pociones/escudo_sombrio.png"),
                new Proteccion("Escudo del León Dorado 🦁🛡️", "Un escudo forjado con el oro puro, otorgando una defensa imparable contra todos los ataques físicos.", "escudo", 25, 1000, 1.25, "./Imagenes/Protecciones_Pociones/escudo_leon_dorado.png"),
                new Proteccion("Escudo del Guardián Celeste 🌟🛡️", "Bendecido por los cielos, este escudo refleja los ataques mágicos hacia el agresor.", "escudo", 35, 3000, 1.30, "./Imagenes/Protecciones_Pociones/escudo_guardian_celeste.png"),
                new Proteccion("Escudo de la Eternidad ⏳🛡️", "Un escudo ancestral que reduce el daño recibido y otorga un buff de regeneración de vida.", "escudo", 40, 4550, 1.35, "./Imagenes/Protecciones_Pociones/escudo_eterna.png"),
                new Proteccion("Escudo Celestial✨", "Un escudo bendecido por los dioses, capaz de reflejar parte del daño y aumentar la regeneración del portador.", "escudo", 45, 5000, 1.45, "./Imagenes/Protecciones_Pociones/celestial.png"),

                new Proteccion("Escudo de la Rosa de Acero 🌹🛡️", "Un escudo bello pero letal, resistente como el acero y símbolo de valor.", "escudo", 50, 5500, 1.5, "./Imagenes/Protecciones_Pociones/escudo_rosa_acero.png"),
                new Proteccion("Escudo del Infinito ∞🛡️", "Hecho con materiales de otro plano, absorbe parte del daño y aumenta la energía mágica.", "escudo", 60, 6000, 1.60, "./Imagenes/Protecciones_Pociones/escudo_infinito.png"),
                new Proteccion("Escudo del Guardabosques 🌲🛡️", "Forjado con madera sagrada, este escudo es ligero y otorga velocidad al portador.", "escudo", 65, 6000, 1.65, "./Imagenes/Protecciones_Pociones/escudo_guardabosques.png"),
                new Proteccion("Escudo de Hielo Eterno ❄️🛡️", "Congela brevemente al atacante al recibir golpes, ideal para defensas estratégicas.", "escudo", 70, 7080, 1.758, "./Imagenes/Protecciones_Pociones/escudo_hielo.png"),
                new Proteccion("Escudo del Juicio Final ⚖️🛡️", "Capaz de reflejar los ataques más poderosos, este escudo está reservado para los elegidos.", "escudo", 80, 8000, 1.80, "./Imagenes/Protecciones_Pociones/escudo_juicio.png")
            ],
            armadura:[ //Protecciones tipo Armadura
                new Proteccion("Armadura Real👑", "Una armadura hecha con los mejores materiales del reino, otorga alta resistencia física.", "armadura", 5, 500, 1.50, "./Imagenes/Protecciones_Pociones/armadura_real.png"),
                new Proteccion("Armadura Dragónica🔥", "Forjada con escamas de dragón, resistente al fuego y a los ataques físicos.", "armadura", 10, 1000, 1.60, "./Imagenes/Protecciones_Pociones/Armadura_Dragonica.png"),
                new Proteccion("Armadura Sombría🌑", "Impregnada con magia oscura, reduce el daño recibido y otorga sigilo.", "armadura", 15, 1450, 1.40, "./Imagenes/Protecciones_Pociones/Armadura_Sombria.png"),
                new Proteccion("Armadura del Titan 🏋️‍♂️", "Una armadura extremadamente resistente, hecha con el metal más fuerte, aumentando la defensa física enormemente.", "armadura", 20, 18800, 1.80, "./Imagenes/Protecciones_Pociones/armadura_titan.png"),
                new Proteccion("Armadura de Fuego Eterno 🔥💀", "Forjada en las entrañas de un volcán, esta armadura proporciona gran resistencia al fuego y ataques físicos.", "armadura", 25, 2000, 1.70, "./Imagenes/Protecciones_Pociones/armadura_fuego_eterno.png"),
                new Proteccion("Armadura del Guardián Nocturno 🌙🛡️", "Hecha de materiales de la noche eterna, esta armadura reduce significativamente el daño y otorga invisibilidad temporal.", "armadura", 30, 2950, 1.65, "./Imagenes/Protecciones_Pociones/armadura_guardian_nocturno.png"),
                new Proteccion("Armadura Celestial✨", "Bendecida por los dioses, mejora la resistencia mágica y la regeneración.", "armadura", 35, 3700, 1.75, "./Imagenes/Protecciones_Pociones/Armadura_Celestial.png"),

                new Proteccion("Armadura del Fénix 🔥🕊️", "Revivida de las cenizas, esta armadura otorga defensa y una segunda oportunidad al caer.", "armadura", 40, 4500, 1.78, "./Imagenes/Protecciones_Pociones/armadura_fenix.png"),
                new Proteccion("Armadura de Escarcha❄️", "Esta armadura ralentiza a los enemigos al contacto y protege contra ataques elementales.", "armadura", 45, 5000, 1.55, "./Imagenes/Protecciones_Pociones/armadura_escarcha.png"),
                new Proteccion("Armadura de la Rey de la Noche 👑🌙", "Confeccionada con seda lunar y acero negro, brinda gran defensa y evasión.", "armadura", 55, 6900, 1.65, "./Imagenes/Protecciones_Pociones/armadura_rey_noche.png"),
                new Proteccion("Armadura de Gaia 🌍", "Fusionada con el poder de la tierra, reduce daño físico y mejora la resistencia al veneno.", "armadura", 60, 7200, 1.68, "./Imagenes/Protecciones_Pociones/armadura_gaia.png"),
                new Proteccion("Armadura del Guardián del Abismo 🕳️🛡️", "Absorbe la oscuridad del enemigo y la transforma en fuerza defensiva.", "armadura", 70, 7070, 1.72, "./Imagenes/Protecciones_Pociones/armadura_guardian.png")
            ],
            amuleto:[//Protecciones tipo Magia
                new Proteccion("Amuleto de Vida💖", "Aumenta la vitalidad del portador y la regeneración de salud.", "amuleto", 5, 200, 1.10, "./Imagenes/Protecciones_Pociones/Amuleto_Oscuro.png"),
                new Proteccion("Amuleto de Fuego🔥", "Otorga resistencia al fuego y potencia ataques ígneos.", "amuleto", 10, 250, 1.15, "./Imagenes/Protecciones_Pociones/Amuleto_Fuego.png"),
                new Proteccion("Amuleto Oscuro🌑", "Absorbe parte del daño oscuro y aumenta la resistencia a maldiciones.", "amuleto", 15, 220, 1.15, "./Imagenes/Protecciones_Pociones/Amuleto_Oscuro.png"),
                new Proteccion("Amuleto del Corazón de Hierro 💪🔮", "Aumenta la resistencia a los ataques mágicos y mejora la regeneración de salud de forma continua.", "amuleto", 20, 350, 1.25, "./Imagenes/Protecciones_Pociones/amuleto_corazon_jerro.png"),
                new Proteccion("Amuleto del Relámpago ⚡🔮", "Este amuleto otorga gran resistencia a los ataques eléctricos y mejora la potencia de las habilidades de trueno.", "amuleto", 25, 400, 1.28, "./Imagenes/Protecciones_Pociones/amuleto_relampago.png"),
                new Proteccion("Amuleto del Sol Radiante 🌞🔮", "Bendecido por el sol, aumenta la resistencia mágica y permite regeneración de energía durante el combate.", "amuleto", 30, 500, 1.30, "./Imagenes/Protecciones_Pociones/amuleto_sol_radiante.png"),
                new Proteccion("Amuleto Divino✨", "Bendecido por los dioses, otorga regeneración continua y protección mágica.", "amuleto", 35, 300, 1.35, "./Imagenes/Protecciones_Pociones/Amuleto_Divino.png"),

                new Proteccion("Amuleto de la Luna Azul 🌙🔷", "Potenciado por la energía lunar, mejora la defensa mágica y regenera maná rápidamente.", "amuleto", 40, 320, 1.40, "./Imagenes/Protecciones_Pociones/amuleto_luna_azul.png"),
                new Proteccion("Amuleto del Vacío 🌀", "Canaliza energía del vacío, reduciendo daño mágico y aumentando resistencia al caos.", "amuleto", 50, 420, 1.60, "./Imagenes/Protecciones_Pociones/amuleto_vacio.png"),
                new Proteccion("Amuleto del Espíritu Guardián 👻🔮", "Invoca un espíritu protector que bloquea parte del daño mágico recibido.", "amuleto", 60, 360, 1.70, "./Imagenes/Protecciones_Pociones/amuleto_espiritu_guardian.png"),
                new Proteccion("Amuleto de Luz Divina ✨💎", "Repele maldiciones y proporciona regeneración de vida al recibir daño mágico.", "amuleto", 70, 460, 1.85, "./Imagenes/Protecciones_Pociones/amuleto_luz_divina.png"),
                new Proteccion("Amuleto del Oráculo 🔮👁️", "Permite prever ataques mágicos, otorgando evasión mágica y velocidad de reacción.", "amuleto", 80, 520, 1.90, "./Imagenes/Protecciones_Pociones/amuleto_oraculo.png")
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
                new Arma("Hoja del Destino Dorado👑⚔️","Una hoja heredada del mismísimo rey Arturo",1.85,0,1,"humano","./Imagenes/humanos/hoja_destino.png"),
                new Arma("Martillo del Paladín Eterno⚖️🔨","Un arma pesada utilizada por los caballeros de la justicia.",1.85,0,1,"humano","./Imagenes/humanos/martillo_paladin.png"),
                new Arma("Arco de la Caza Real 🏹👑", "Un arco impresionante con un alcance letal y una puntería infalible.", 2.1, 1000, 5, "humano", "./Imagenes/humanos/arco_caza.png"),
                new Arma("Lanza Relámpago ⚡🏹"," Puede arrojarse y volver a la mano del usuario.",2.0,1500,10,"humano","./Imagenes/humanos/lanza_relampago.png"),
                new Arma("Espada de la Luz Celestial 🌟⚔️", "Un sable forjado con la luz pura, ideal para desintegrar sombras.", 2.1, 1850, 15, "humano", "./Imagenes/humanos/celestial.png"),
                new Arma("Espada del Rey Caído 👑⚔️","Una hoja legendaria que brilla con la voluntad de su portador.",2.15,3000,20,"humano","./Imagenes/humanos/espada_rey.png"),
                new Arma("Maza Bendecida 🛡️🔨","Un arma con poder sagrado que quema a los no-muertos.",2.15,3000,25,"humano","./Imagenes/humanos/maza_bendecida.png"),
                new Arma("Dagas de Sombra 🕶️🗡️","Permiten moverse sin ser visto por breves instantes.",2.1,4500,35,"humano","./Imagenes/humanos/dagaSombra.png"),
                new Arma("Ballesta de Triple Disparo 🎯🔫"," Dispara tres proyectiles a la vez, ideal para eliminar múltiples enemigos.",1.9,4500,45,"humano","./Imagenes/humanos/ballesta.png"),
                new Arma("Espada de los Vientos Silenciosos 🌬️⚔️", "Una espada tan ligera que corta como el viento, casi invisible al movimiento.", 1.9, 4800, 50,"humano", "./Imagenes/humanos/espada_vientos.png"),
                
                new Arma("Mandoble del Honor Perdido ⚔️🕊️", "Empapado en historias de traición y redención.", 2.05, 5020, 55, "humano", "./Imagenes/humanos/mandoble_honor.png"),
                new Arma("Cetro de Comando Imperial 🎖️🔱", "Símbolo de autoridad, permite coordinar tropas mágicamente.", 1.85, 5500, 65, "humano", "./Imagenes/humanos/cetro_imperial.png"),
                new Arma("Espada Rúnica del Inquisidor 🔥🗡️", "Quema con runas antiguas que purifican el mal.", 2.2, 6000, 70, "humano", "./Imagenes/humanos/espada_inquisidor.png"),
                new Arma("Ballesta de Energía Solar 🌞🎯", "Dispara rayos concentrados de luz solar.", 2.0, 6000, 75, "humano", "./Imagenes/humanos/ballesta_solar.png"),
                new Arma("Lanza del Juicio Final ⚖️🔥", "Cae como un relámpago sobre el enemigo culpable.", 2.3, 6200, 80, "humano", "./Imagenes/humanos/lanza_juicio.png")

               
            ];
            case "orco":
            return [//Armas de Orcos
                new Arma("Segadora del Infierno🔥🪓","Un arma brutal con un filo forjado en llamas.",1.85,0,1,"orco","./Imagenes/orcos/segadora.png"),
                new Arma("Colmillo del Guerrero","Se fortalece con cada enemigo caido en combate",1.85,0,1,"orco","./Imagenes/orcos/colmillo.png"),
                new Arma("Espada Serrada 🔪💢","Una espada con dientes afilados que desgarran la carne al cortar.",2.1, 1000, 5,"orco","./Imagenes/orcos/espada_serrada.png"),
                new Arma("Lanza de Colmillos de Bestia 🐺🏹","Hecha con los colmillos de un monstruo gigante, sus heridas son letales.",2.15,1500,10,"orco","./Imagenes/orcos/lanza_colmillos.png"),
                new Arma("Hacha Sangrienta 🩸🪓","Se vuelve más poderosa con cada golpe que da.",2.0, 1850, 15,"orco","./Imagenes/orcos/hacha_sangrienta.png"),
                new Arma("Maza de Guerra de Cráneos 💀🔨","Hecha con los huesos de enemigos caídos, aterradora en combate.",2.15,3000,20,"orco","./Imagenes/orcos/maza_de_guerra.png"),
                new Arma("Guantelete de Fuerza Brutal 🖐️💪", "Guanteletes de combate que aumentan la fuerza física de quien los usa.", 2.15,3000,25, "orco", "./Imagenes/orcos/guantelete_fuerza.png"),
                new Arma("Hacha del Destructor de Mundos 🌍🪓", "Una enorme hacha que puede cortar montañas y desintegrar todo a su paso.", 2.1,4500,35, "orco", "./Imagenes/orcos/hacha_destructor.png"),
                new Arma("Garrote de Lava 🌋🔥","Un arma cubierta de roca volcánica que arde al golpear.",2.5,4500,45,"orco","./Imagenes/orcos/garrote_lava.png"),
                new Arma("Mazo del Coloso 🌋💥", "Un mazo gigantesco con una cabeza hecha de una piedra volcánica impenetrable.", 2.4, 4800, 50, "orco", "./Imagenes/orcos/mazo_coloso.png"),

                new Arma("Mandoble de Ira Pura 💢⚔️", "Un arma tan pesada que vibra con furia constante.", 2.25, 5020, 55, "orco", "./Imagenes/orcos/mandoble_ira.png"),
                new Arma("Hacha Gemela de Sangre y Hueso 💀🩸", "Dos hachas que se cruzan y desgarran todo.", 2.15, 5500, 65, "orco", "./Imagenes/orcos/hacha_gemela.png"),
                new Arma("Martillo de Guerra Maldito 🧿🔨", "Golpea con el peso de antiguas maldiciones.", 2.4, 6000, 70, "orco", "./Imagenes/orcos/martillo_maldito.png"),
                new Arma("Espada Carnicera Infernal 🔥🗡️", "Diseñada para mutilar sin piedad, se alimenta del dolor.", 2.3, 6000, 75, "orco", "./Imagenes/orcos/espada_carnicera.png"),
                new Arma("Cuchillas de Guerra Huracanadas 🌪️🪓", "Crean una tormenta de sangre al girar en combate.", 2.5, 6200, 80, "orco", "./Imagenes/orcos/cuchillas_huracanadas.png")

                
                
            ];
            case "mago":
            return [    //Armas de Magos
                new Arma("Centro del Firmamento ✨🔮","Canaliza la energía cósmica en poderosos hechizos.",1.85,0,1,"mago","./Imagenes/magos/centro.png"),
                new Arma("Tomo de la Penumbra 📜☠️","Un libro de conjuros prohibidos que renace la vitalidad del enemigo.",1.85,0,1,"mago","./Imagenes/magos/tomo_penumbra.png"),
                new Arma("Varita de Llamas Eternas 🔥📜","Lanza fuego sin necesidad de palabras mágicas, perfecta para hechiceros agresivos.",2.05,1000, 5,"mago","./Imagenes/magos/varita_llamas.png"),
                new Arma("Báculo de Tormentas ⚡🌀","Un bastón que controla truenos y vientos, devastador contra grupos de enemigos.",2.10,1500,10,"mago","./Imagenes/magos/baculo_de_tormentas.png"),
                new Arma("Espada del Arcano 🌀⚔️","Una espada flotante que se maneja con la mente.",1.95,1850, 15,"mago","./Imagenes/magos/espada_arcano.png"),
                new Arma("Cloak of Shadows 🖤🌑", "Una capa que permite al usuario volverse invisible en la oscuridad.", 1.9, 3000,20, "mago", "./Imagenes/magos/cloak_of_shadows.png"),
                new Arma("Orbe del Vacío ⚫🌌","Una esfera que absorbe energía y la libera como un rayo devastador.",2.20,3000,25,"mago","./Imagenes/magos/orbe_del_vacio.png"),
                new Arma("Báculo de las Estrellas Caídas 🌠🪄", "Un bastón que canaliza la energía de las estrellas en poderosos hechizos.", 2.2, 4500,35, "mago", "./Imagenes/magos/baculo_estrellas.png"),
                new Arma("Guantelete de Manipulación del Tiempo ⏳🖐️","Puede ralentizar al enemigo o acelerar al usuario en combate.",0,4500,45,"mago","./Imagenes/magos/guantelete.png"),
                new Arma("Círculo del Conjurador Eterno 🔮💀", "Un círculo encantado que permite conjurar hechizos de larga duración y alta potencia.", 2.0, 4800, 50, "mago", "./Imagenes/magos/circulo_conjurador.png"),

                new Arma("Libro del Tiempo Fragmentado 📖⏳", "Manipula el flujo del tiempo durante el combate.", 2.0, 5020, 55, "mago", "./Imagenes/magos/libro_tiempo.png"),
                new Arma("Varita del Eco Místico 🔁🪄", "Duplica hechizos lanzados una vez por combate.", 1.85, 5500, 65, "mago", "./Imagenes/magos/varita_eco.png"),
                new Arma("Báculo de la Aurora Boreal 🌌💫", "Invoca luces que confunden y dañan.", 2.25, 6000, 70, "mago", "./Imagenes/magos/baculo_aurora.png"),
                new Arma("Corona del Archimago 🔮👑", "Potencia la mente del portador y libera energía bruta.", 2.4, 6000, 75, "mago", "./Imagenes/magos/corona_archimago.png"),
                new Arma("Anillo del Vacío Infinito ⭕🖤", "Absorbe energía y la libera como una explosión mágica.", 2.5, 6200, 80, "mago", "./Imagenes/magos/anillo_vacio.png")

                
            ];
            case "enano":
            return [    //Armas de Enanos
                new Arma("Martillo del Guardián de Acero 🛡️⚒️","Un martillo colosal capaz de partir la roca con un solo golpe.",1.85,0,1,"enano","./Imagenes/enanos/martillo_guardian.png"),
                new Arma("Hacha de la Furia Terrestre ⛏️🌑","Forjada en las minas más oscuras, esta hacha nunca se desafila.",1.80,0,1,"enano","./Imagenes/enanos/hacha_furia.png"),
                new Arma("Martillo Lanzarrocas 🏹💥", "Un martillo que puede arrojar pequeños proyectiles de roca al golpear el suelo, afectando a múltiples enemigos a la vez.", 2.05,1000, 5,"enano","./Imagenes/enanos/martillo_lanzarrocas.png"),
                new Arma("Martillo Rompemontañas 🪨🔨","Un martillo de guerra tan pesado que solo un enano puede levantarlo. Golpea con la fuerza de una avalancha.",2.20,1500,10,"enano","./Imagenes/enanos/martillo_rompemontanhas.png"),
                new Arma(" Ballesta de Perforación 🎯🔩"," Una ballesta enana que dispara virotes capaces de atravesar armaduras pesadas. Perfecta para eliminar enemigos blindados a distancia.",2.20,1850, 15,"enano","./Imagenes/enanos/ballesta_perforacion.png"),
                new Arma("Hacha de Tormenta ⚡🪓", "Un hacha con runas grabadas que lanza rayos al impactar. Ideal contra enemigos con armaduras metálicas.",2.20,3000,20,"enano","./Imagenes/enanos/hacha_tormenta.png"),
                new Arma("Hacha de Hierro Forjado 🔨🛠️", "Un hacha que puede cortar cualquier material con precisión gracias a su metal especial.", 2.1, 3000,25, "enano", "./Imagenes/enanos/hacha_hierro_forjado.png"),
                new Arma("Escudo-Mandoble 🛡️⚔️","Un escudo grande que esconde una espada oculta en su centro. Puede resistir golpes letales y sorprender con un ataque inesperado.",1.50,4500,35,"enano","./Imagenes/enanos/escudo_mandoble.png"),
                new Arma("Ballesta de Proyectiles de Acero ⚙️🎯", "Una ballesta que dispara virotes de acero como flechas, atravesando cualquier armadura.", 2.0, 4500,45, "enano", "./Imagenes/enanos/ballesta_proyectiles_acero.png"),
                new Arma("Martillo de la Fuerza Subterránea 🌑⚒️", "Un martillo que se empapó del poder de la tierra, causando terremotos con cada golpe.", 2.3, 4800, 50, "enano", "./Imagenes/enanos/martillo_fuerza_subterranea.png"),

                new Arma("Cañón de Mano Rúnico 💥🔩", "Dispara balas encantadas que explotan al impactar.", 2.3, 5020, 55, "enano", "./Imagenes/enanos/canon_runa.png"),
                new Arma("Hacha del Tajo Retumbante 🪓🔊", "Su golpe emite ondas sónicas que aturden.", 2.2, 5500, 65, "enano", "./Imagenes/enanos/hacha_retumbo.png"),
                new Arma("Martillo Rúnico de Avalancha 🌨️🔨", "Invoca una ola de rocas tras cada golpe.", 2.4, 6000, 70, "enano", "./Imagenes/enanos/martillo_avalancha.png"),
                new Arma("Escudo-Atrapavirotes 🛡️🎯", "Bloquea proyectiles y los redirige mágicamente.", 1.6, 6000, 75, "enano", "./Imagenes/enanos/escudo_atrapavirotes.png"),
                new Arma("Mandoble de Acero Estelar ✨⚔️", "Forjado con metal caído del cielo, irrompible.", 2.5, 6200, 80, "enano", "./Imagenes/enanos/mandoble_estelar.png")

                
               
            ];
            case "elfo":
            return [//Armas de Elfos
                new Arma("Arco de la Brisa Eterna 🌿🏹","Un arco elegante, imbuido con la energía del atardecer.",1.85,0,1,"elfo","./Imagenes/elfos/arco_brisa.png"),
                new Arma("Filos de la Medianoche 🌙🗡️","Un par de dagas encantadas que se desvanecen en la penumbra.",1.85,0,1,"elfo","./Imagenes/elfos/filos.png"),
                new Arma("Flechas de Enredaderas 🌱🎯","Flechas que al impactar hacen crecer raíces para atrapar al enemigo.",1.80,1000, 5,"elfo","./Imagenes/elfos/flecha_enredaderas.png"),
                new Arma("Espadas Danzantes 🌿⚔️"," Dos dagas que se pueden lanzar y regresan solas como un búmeran, perfectas para combates rápidos.",1.70,1500,10,"elfo","./Imagenes/elfos/espadas_danzantes.png"),
                new Arma("Lanza del Viento 🍃🌀","Una lanza liviana que se mueve con el aire y permite ataques veloces.",1.90,1850, 15,"elfo","./Imagenes/elfos/lanza_viento.png"),
                new Arma("Arco de Luz Lunar 🌙🏹","Un arco que dispara flechas de energía pura en la oscuridad, ideal para combates nocturnos.",2.10,3000,20,"elfo","./Imagenes/elfos/arco_luz_lunar.png"),
                new Arma("Arco de los Cielos Azules ☁️🏹", "Un arco que dispara flechas que viajan tan rápido como el viento y se desvanecen al impactar.", 2.0,3000,25, "elfo", "./Imagenes/elfos/arco_cielos_azules.png"),
                new Arma("Bastón de Espíritus del Bosque 🌳✨","Un arma mágica que permite invocar bestias o curar aliados.",1.50,4500,35,"elfo","./Imagenes/elfos/baston_espiritus_bosque.png"),
                new Arma("Dagas del Alba Mística 🌅🗡️", "Un par de dagas que brillan con el primer rayo del sol y pueden cortar cualquier sombra.", 2.0, 4500,45, "elfo", "./Imagenes/elfos/dagas_alba_mistica.png"),
                new Arma("Lanza del Guardián del Bosque 🌳⚔️", "Una lanza que puede invocar la fuerza de la naturaleza al ser lanzada.", 2.1,  4800, 50, "elfo", "./Imagenes/elfos/lanza_guardian_bosque.png"),

                new Arma("Lanza de la Aurora Verde 🌄🍃", "Brilla con la luz del bosque al amanecer.", 2.1, 5020, 55, "elfo", "./Imagenes/elfos/lanza_aurora.png"),
                new Arma("Arco de las Lágrimas del Cielo 🌧️🏹", "Cada flecha cae como una gota que atraviesa todo.", 2.2,5500, 65, "elfo", "./Imagenes/elfos/arco_lluvia.png"),
                new Arma("Espadas de la Danza Etérea 💃⚔️", "Se mueven con una gracia letal, casi sin esfuerzo.", 2.15,6000, 70, "elfo", "./Imagenes/elfos/espadas_etereas.png"),
                new Arma("Dagas del Eclipse Total 🌑🗡️", "Solo se ven bajo la luna llena, pero siempre hieren.", 2.3, 6000, 75, "elfo", "./Imagenes/elfos/dagas_eclipse.png"),
                new Arma("Bastón del Cántico Silvestre 🎼🌿", "Invoca melodías que sanan aliados o dañan enemigos.", 2.0, 6200, 80, "elfo", "./Imagenes/elfos/baston_cantico.png"),

                  
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

