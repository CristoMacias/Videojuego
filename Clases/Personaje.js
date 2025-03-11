
export default class Personaje{
    
    #nombre; //Nombre del personaje
    #raza;//Raza: Enano,Elfo,Humano,Mago,Orco,
    #vida=100;//Vida máxima y vida actual
    #mana=100;//Maná máximo, y maná actual
    #ataque=100;//Puntos de ataque
    #defensa=100;//Puntos de defensa
    #magia=100;//Puntos de magia
    #resistenciaMagica=100;//Puntos de resistencia mágica
    #nivel=1;//Nivel actual
    #experiencia=0;//Experiencia
    #oro=0; // Total de oro 
    #imagen; // Imagen elegida
    
    //Constructor creador de personajes
    constructor(nombre,raza,imagen){
        this.#nombre = nombre;
        this.#raza=raza;
        this.#imagen=imagen;
        this.#nivel;
        this.#experiencia;
        this.#oro;
        this.#calcularEstadisticas(raza);

    }
    /**
     * Método para calcular las estadísticas en función de la raza
     * @param {*} raza raza elegida
     */
    #calcularEstadisticas(raza){
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
    /**
     * Método para convertir los atributos en público y poder convertirlos en JSON
     * y poder guardarlos en el localStorage
     * @returns  Devuelve todos los atributos
     * 
     */
    convertirJson(){
      return{
         nombre: this.#nombre,
         raza: this.#raza,
         imagen: this.#imagen,
         vida:this.#vida,
         mana:this.#mana,
         ataque:this.#ataque,
         defensa:this.#defensa,
         magia:this.#magia,
         resistenciaMagica:this.#resistenciaMagica,
         nivel:this.#nivel,
         experiencia:this.#experiencia,
         oro: this.#oro
      };
    }
    
   /**
   * Getter para nombre
   */
   get nombre() {
      return this.#nombre;
   }
   
   /**
   * Setter para nombre
   * @param {*} nombre
   */
   set nombre(nombre) {
      this.#nombre = nombre;
   }

   /**
   * Getter para raza
   */
   get raza() {
      return this.#raza;
   }
   
    /**
    * Setter para raza
    * @param {*} value
    */
    set raza(value) {
       this.#raza = value;
    }
   /**
   * Getter para vida
   */
   get vida() {
      return this.#vida;
   }
   
   /**
   * Setter para vida
   * @param {*} value
   */
   set vida(value) {
      this.#vida = value;
   }
   /**
   * Getter para mana
   */
   get mana() {
      return this.#mana;
   }
   
   /**
   * Setter para mana
   * @param {*} value
   */
   set mana(value) {
      this.#mana = value;
   }

   /**
   * Getter para ataque
   */
   get ataque() {
      return this.#ataque;
   }
   
  /**
  * Setter para ataque
  * @param {*} value
  */
  set ataque(value) {
     this.#ataque = value;
  }
   /**
   * Getter para defensa
   */
   get defensa() {
      return this.#defensa;
   }
   
  /**
  * Setter para defensa
  * @param {*} value
  */
  set defensa(value) {
     this.#defensa = value;
  }

   /**
   * Getter para magia
   */
   get magia() {
      return this.#magia;
   }
   
   /**
   * Setter para magia
   * @param {*} value
   */
   set magia(value) {
      this.#magia = value;
   }
   /**
   * Getter para resistenciaMagica
   */
   get resistenciaMagica() {
      return this.#resistenciaMagica;
   }
   
   /**
   * Setter para resistenciaMagica
   * @param {*} value
   */
   set resistenciaMagica(value) {
      this.#resistenciaMagica = value;
   }

   /**
   * Getter para nivel
   */
   get nivel() {
      return this.#nivel;
   }
   
   /**
   * Setter para nivel
   * @param {*} value
   */
   set nivel(value) {
      this.#nivel = value;
   }

   /**
   * Getter para experiencia
   */
   get experiencia() {
      return this.#experiencia;
   }
   
  /**
  * Setter para experiencia
  * @param {*} value
  */
  set experiencia(value) {
     this.#experiencia = value;
  }
   /**
   * Getter para oro
   */
   get oro() {
      return this.#oro;
   }
   
   /**
   * Setter para oro
   * @param {*} value
   */
   set oro(value) {
      this.#oro = value;
   }

   /**
   * Getter para imagen
   */
   get imagen() {
      return this.#imagen;
   }

   
}