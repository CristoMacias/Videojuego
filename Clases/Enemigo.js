export default class Enemigos{

   #nombre; //Nombre del personaje
   #raza;//Raza: Enano,Elfo,Humano,Mago,Orco,
   #vida=100;//Vida máxima y vida actual
   #mana=100;//Maná máximo, y maná actual
   #ataque=100;//Puntos de ataque
   #defensa=100;//Puntos de defensa
   #magia=100;//Puntos de magia
   #resistenciaMagica=100;//Puntos de resistencia mágica
   #nivel=1;//Nivel actual

    constructor(nombre, raza, nivel){
    this.#nombre = nombre;
    this.#raza = raza;
    this.#nivel = nivel;
    this.#generarEstadisticas(raza, nivel)
    }

    #generarEstadisticas(raza, nivel){

      switch(nivel){
         case 1:
            this.generarEstadisticasNivel1(raza);
            break;

         case 2:
            this.generarEstadisticasNivel2(raza);
            break;

         case 3:
            this.generarEstadisticasNivel3(raza);
            break;

         case 4: 
            this.generarEstadisticasNivel4(raza);
            break;
         
         case 5:
            this.generarEstadisticasNivel5(raza);
            break;

         }
      
      }
   
   generarEstadisticasNivel1(raza){
      const razas={ //estadísticas por raza
         enano:{vida:1.20,mana:0.9,ataque:1.0 ,defensa:1.20,magia:1.0,resistenciaMagica:1.2},
         orco:{vida:1.15,mana:0.85,ataque:1.25,defensa:1.0,magia:1.3,resistenciaMagica:0.9},
         humano:{vida:1.05,mana:1.05,ataque:1.05,defensa:1.05,magia:1.05,resistenciaMagica:1.05},
         mago:{vida:0.8,mana:1.3,ataque:0.8,defensa:0.9,magia:1.3,resistenciaMagica:1.25},
         elfo:{vida:0.9,mana:1.2,ataque:1.2,defensa:1.0,magia:1.2,resistenciaMagica:1.0}
     };
     this.#vida={max: this.#vida*razas[raza].vida, actual: this.#vida*razas[raza].vida };
     this.#mana = {max: this.#mana*razas[raza].mana, actual: this.#mana*razas[raza].mana};
     this.#ataque = this.#ataque*razas[raza].ataque;
     this.#defensa= this.#defensa*razas[raza].defensa;
     this.#magia=this.#magia*razas[raza].magia;
     this.#resistenciaMagica=this.#resistenciaMagica*razas[raza].resistenciaMagica;
   }

   generarEstadisticasNivel2(raza){
      razas={ //estadísticas por raza
         enano:{vida:1.70,mana:1.4,ataque:1.0 ,defensa:1.20,magia:1.0,resistenciaMagica:1.2},
         orco:{vida:1.15,mana:0.85,ataque:1.25,defensa:1.0,magia:1.3,resistenciaMagica:0.9},
         humano:{vida:1.05,mana:1.05,ataque:1.05,defensa:1.05,magia:1.05,resistenciaMagica:1.05},
         mago:{vida:0.8,mana:1.3,ataque:0.8,defensa:0.9,magia:1.3,resistenciaMagica:1.25},
         elfo:{vida:0.9,mana:1.2,ataque:1.2,defensa:1.0,magia:1.2,resistenciaMagica:1.0}
     };
     this.#vida={max: this.#vida*razas[raza].vida, actual: this.#vida*razas[raza].vida };
     this.#mana = {max: this.#mana*razas[raza].mana, actual: this.#mana*razas[raza].mana};
     this.#ataque = this.#ataque*razas[raza].ataque;
     this.#defensa= this.#defensa*razas[raza].defensa;
     this.#magia=this.#magia*razas[raza].magia;
     this.#resistenciaMagica=this.#resistenciaMagica*razas[raza].resistenciaMagica;
   }

   generarEstadisticasNivel3(){
      razas={ //estadísticas por raza
         enano:{vida:1.20,mana:0.9,ataque:1.0 ,defensa:1.20,magia:1.0,resistenciaMagica:1.2},
         orco:{vida:1.15,mana:0.85,ataque:1.25,defensa:1.0,magia:1.3,resistenciaMagica:0.9},
         humano:{vida:1.05,mana:1.05,ataque:1.05,defensa:1.05,magia:1.05,resistenciaMagica:1.05},
         mago:{vida:0.8,mana:1.3,ataque:0.8,defensa:0.9,magia:1.3,resistenciaMagica:1.25},
         elfo:{vida:0.9,mana:1.2,ataque:1.2,defensa:1.0,magia:1.2,resistenciaMagica:1.0}
     };
     this.#vida={max: this.#vida*razas[raza].vida, actual: this.#vida*razas[raza].vida };
     this.#mana = {max: this.#mana*razas[raza].mana, actual: this.#mana*razas[raza].mana};
     this.#ataque = this.#ataque*razas[raza].ataque;
     this.#defensa= this.#defensa*razas[raza].defensa;
     this.#magia=this.#magia*razas[raza].magia;
     this.#resistenciaMagica=this.#resistenciaMagica*razas[raza].resistenciaMagica;
   }

   generarEstadisticasNivel4(raza){
      razas={ //estadísticas por raza
         enano:{vida:1.20,mana:0.9,ataque:1.0 ,defensa:1.20,magia:1.0,resistenciaMagica:1.2},
         orco:{vida:1.15,mana:0.85,ataque:1.25,defensa:1.0,magia:1.3,resistenciaMagica:0.9},
         humano:{vida:1.05,mana:1.05,ataque:1.05,defensa:1.05,magia:1.05,resistenciaMagica:1.05},
         mago:{vida:0.8,mana:1.3,ataque:0.8,defensa:0.9,magia:1.3,resistenciaMagica:1.25},
         elfo:{vida:0.9,mana:1.2,ataque:1.2,defensa:1.0,magia:1.2,resistenciaMagica:1.0}
     };
     this.#vida={max: this.#vida*razas[raza].vida, actual: this.#vida*razas[raza].vida };
     this.#mana = {max: this.#mana*razas[raza].mana, actual: this.#mana*razas[raza].mana};
     this.#ataque = this.#ataque*razas[raza].ataque;
     this.#defensa= this.#defensa*razas[raza].defensa;
     this.#magia=this.#magia*razas[raza].magia;
     this.#resistenciaMagica=this.#resistenciaMagica*razas[raza].resistenciaMagica;
   }

   generarEstadisticasNivel5(raza){
      razas={ //estadísticas por raza
         enano:{vida:1.20,mana:0.9,ataque:1.0 ,defensa:1.20,magia:1.0,resistenciaMagica:1.2},
         orco:{vida:1.15,mana:0.85,ataque:1.25,defensa:1.0,magia:1.3,resistenciaMagica:0.9},
         humano:{vida:1.05,mana:1.05,ataque:1.05,defensa:1.05,magia:1.05,resistenciaMagica:1.05},
         mago:{vida:0.8,mana:1.3,ataque:0.8,defensa:0.9,magia:1.3,resistenciaMagica:1.25},
         elfo:{vida:0.9,mana:1.2,ataque:1.2,defensa:1.0,magia:1.2,resistenciaMagica:1.0}
     };
     this.#vida={max: this.#vida*razas[raza].vida, actual: this.#vida*razas[raza].vida };
     this.#mana = {max: this.#mana*razas[raza].mana, actual: this.#mana*razas[raza].mana};
     this.#ataque = this.#ataque*razas[raza].ataque;
     this.#defensa= this.#defensa*razas[raza].defensa;
     this.#magia=this.#magia*razas[raza].magia;
     this.#resistenciaMagica=this.#resistenciaMagica*razas[raza].resistenciaMagica;
   }


    /**
    * Getter para nombre
    * @return nombre Devuelve el valor de nombre;
    */
    get nombre() {
       return this.#nombre;
    }
    
    /**
    * Setter para nombre
    * @param {*} nombre Recibe el valor de nombre para modificar
    */
    set nombre(nombre) {
       this.#nombre = nombre;
    }

    /**
    * Getter para raza
    * @return raza Devuelve el valor de raza;
    */
    get raza() {
       return this.#raza;
    }

    /**
    * Getter para raza
    * @return raza Devuelve el valor de raza;
    */
    get raza() {
       return this.#raza;
    }
    
    /**
    * Setter para raza
    * @param {*} raza Recibe el valor de raza para modificar
    */
    set raza(raza) {
       this.#raza = raza;
    }

   
    
   }
