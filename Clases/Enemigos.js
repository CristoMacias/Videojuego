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
     this.#vida=this.#vida*razas[raza].vida;
     this.#mana = this.#mana*razas[raza].mana;
     this.#ataque = this.#ataque*razas[raza].ataque;
     this.#defensa= this.#defensa*razas[raza].defensa;
     this.#magia=this.#magia*razas[raza].magia;
     this.#resistenciaMagica=this.#resistenciaMagica*razas[raza].resistenciaMagica;
   }

   generarEstadisticasNivel2(raza){
      const razas={ //estadísticas por raza
         enano:{vida:1.70,mana:1.4,ataque:1.5 ,defensa:1.70,magia:1.5,resistenciaMagica:1.7},
         orco:{vida:1.65,mana:1.35,ataque:1.75,defensa:1.5,magia:1.8,resistenciaMagica:1.4},
         humano:{vida:1.55,mana:1.55,ataque:1.55,defensa:1.55,magia:1.55,resistenciaMagica:1.55},
         mago:{vida:1.3,mana:1.8,ataque:1.3,defensa:1.4,magia:1.8,resistenciaMagica:1.75},
         elfo:{vida:1.4,mana:1.7,ataque:1.7,defensa:1.5,magia:1.7,resistenciaMagica:1.5}
     };
     this.#vida=this.#vida*razas[raza].vida;
     this.#mana = this.#mana*razas[raza].mana;
     this.#ataque = this.#ataque*razas[raza].ataque;
     this.#defensa= this.#defensa*razas[raza].defensa;
     this.#magia=this.#magia*razas[raza].magia;
     this.#resistenciaMagica=this.#resistenciaMagica*razas[raza].resistenciaMagica;
   }

   generarEstadisticasNivel3(raza){
      const razas={ //estadísticas por raza
         enano:{vida:2.4,mana:2.1,ataque:2.2 ,defensa:2.4,magia:2.2,resistenciaMagica:2.4},
         orco:{vida:2.35,mana:2.05,ataque:2.45,defensa:2.2,magia:2.5,resistenciaMagica:2.1},
         humano:{vida:2.25,mana:2.25,ataque:2.25,defensa:2.25,magia:2.25,resistenciaMagica:2.25},
         mago:{vida:2,mana:2.5,ataque:2,defensa:2.1,magia:2.5,resistenciaMagica:2.45},
         elfo:{vida:2.1,mana:2.4,ataque:2.4,defensa:2.2,magia:2.4,resistenciaMagica:2.2}
     };
     this.#vida=this.#vida*razas[raza].vida;
     this.#mana = this.#mana*razas[raza].mana;
     this.#ataque = this.#ataque*razas[raza].ataque;
     this.#defensa= this.#defensa*razas[raza].defensa;
     this.#magia=this.#magia*razas[raza].magia;
     this.#resistenciaMagica=this.#resistenciaMagica*razas[raza].resistenciaMagica;
   }

   generarEstadisticasNivel4(raza){
      const razas={ //estadísticas por raza
         enano:{vida:3.3,mana:3,ataque:3.1 ,defensa:3.3,magia:3.1,resistenciaMagica:3.3},
         orco:{vida:3.25,mana:2.95,ataque:3.35,defensa:3.1,magia:3.4,resistenciaMagica:3},
         humano:{vida:3.15,mana:3.15,ataque:3.15,defensa:3.15,magia:3.15,resistenciaMagica:3.15},
         mago:{vida:2.9,mana:3.4,ataque:2.9,defensa:3,magia:3.4,resistenciaMagica:3.35},
         elfo:{vida:3,mana:3.3,ataque:3.3,defensa:3.1,magia:3.3,resistenciaMagica:3.1}
     };
     this.#vida=this.#vida*razas[raza].vida;
     this.#mana = this.#mana*razas[raza].mana;
     this.#ataque = this.#ataque*razas[raza].ataque;
     this.#defensa= this.#defensa*razas[raza].defensa;
     this.#magia=this.#magia*razas[raza].magia;
     this.#resistenciaMagica=this.#resistenciaMagica*razas[raza].resistenciaMagica;
   }

   generarEstadisticasNivel5(raza){
      const razas={ //estadísticas por raza
         enano:{vida:4.5,mana:4.2,ataque:4.3 ,defensa:4.5,magia:4.3,resistenciaMagica:4.5},
         orco:{vida:4.45,mana:4.15,ataque:4.55,defensa:4.3,magia:4.6,resistenciaMagica:4.2},
         humano:{vida:4.35,mana:4.35,ataque:4.35,defensa:4.35,magia:4.35,resistenciaMagica:4.35},
         mago:{vida:4.1,mana:4.6,ataque:4.1,defensa:4.2,magia:4.6,resistenciaMagica:4.55},
         elfo:{vida:4.2,mana:4.5,ataque:4.5,defensa:4.3,magia:4.5,resistenciaMagica:4.3}
     };
     this.#vida=this.#vida*razas[raza].vida;
     this.#mana = this.#mana*razas[raza].mana;
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
    
    convertirJson(){
      return{
         nombre: this.#nombre,
         raza: this.#raza,
         //imagen: this.#imagen,
         vida:this.#vida,
         mana:this.#mana,
         ataque:this.#ataque,
         defensa:this.#defensa,
         magia:this.#magia,
         resistenciaMagica:this.#resistenciaMagica,
         nivel:this.#nivel,
  
      };
    }

   }
