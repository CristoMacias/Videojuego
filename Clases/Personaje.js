import Inventario from './Inventario.js';
export default class Personaje{
    
    #nombre; //Nombre del personaje
    #raza;//Raza: Enano,Elfo,Humano,Mago,Orco,
    #vidaMaxima=100;//Vida máxima y vida actual
    #vidaActual;//Vida acrual
    #manaMaximo=100;//Maná máximo, y maná actual
    #manaActual;//Maná actual
    #ataque=100;//Puntos de ataque
    #defensa=100;//Puntos de defensa
    #magia=100;//Puntos de magia
    #resistenciaMagica=100;//Puntos de resistencia mágica
    #nivel=1;//Nivel actual
    #experiencia=0;//Experiencia
    #oro=80000; // Total de oro 
    #imagen; // Imagen elegida
    #inventario;

    //Constructor creador de personajes
    constructor(nombre,raza,imagen){
        this.#nombre = nombre;
        this.#raza=raza;
        this.#imagen=imagen;
        this.#nivel;
        this.#experiencia;
        this.#oro;
        console.log(this.#raza);
        this.#calcularEstadisticas(raza);
        this.#inventario=new Inventario();
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
        this.#vidaMaxima=this.#vidaMaxima*razas[raza].vida;
        this.#vidaActual=this.#vidaMaxima;
        this.#manaMaximo=this.#manaMaximo*razas[raza].mana;
        this.#manaActual=this.#manaMaximo;
        this.#ataque = this.#ataque*razas[raza].ataque;
        this.#defensa= this.#defensa*razas[raza].defensa;
        this.#magia=this.#magia*razas[raza].magia;
        this.#resistenciaMagica=this.#resistenciaMagica*razas[raza].resistenciaMagica;

    }
    /**
     * Método para convertir los atributos en público y poder convertirlos en JSON
     * y guardarlos en el localStorage
     * @returns  Devuelve todos los atributos
     * 
     */
    convertirJson(){
      return{
         nombre: this.#nombre,
         raza: this.#raza,
         imagen: this.#imagen,
         vidaMaxima:this.#vidaMaxima,
         vidaActual:this.#vidaActual,
         manaMaximo:this.#manaMaximo,
         manaActual:this.#manaActual,
         ataque:this.#ataque,
         defensa:this.#defensa,
         magia:this.#magia,
         resistenciaMagica:this.#resistenciaMagica,
         nivel:this.#nivel,
         experiencia:this.#experiencia,
         oro: this.#oro,
         inventario: this.#inventario.convertirJson()
      };
    }
    static reconstruirJson(json){
      const personaje = new Personaje(json.nombre,json.raza,json.imagen);
      personaje.#nombre=json.nombre;
      personaje.#raza=json.raza;
      personaje.#imagen=json.imagen;
      personaje.#vidaMaxima=json.vidaMaxima;
      personaje.#vidaActual=json.vidaActual;
      personaje.#manaActual=json.manaActual;
      personaje.#manaMaximo=json.manaMaximo;
      personaje.#ataque=json.ataque;
      personaje.#defensa=json.defensa;
      personaje.#magia=json.magia;
      personaje.#resistenciaMagica=json.resistenciaMagica;
      personaje.#nivel=json.nivel;
      personaje.#experiencia=json.experiencia;
      personaje.#oro=json.oro;
      personaje.#inventario=Inventario.reconstruirJson(json.inventario);

      return personaje;

    }
    /**
     * Método para comprar un objeto en la tienda y guardarlo en el inventario
     * @param {*} objeto
     */
    comprarTienda(objeto){
      console.log("Llega a Personaje")
      console.log(objeto.nombre);
      this.#inventario.agregarObjeto(objeto);
    }

       /**
    * Método para añadir oro al personaje
    * @param {*} oro 
    */
   ganarOro(oro){
      this.#oro=this.#oro+oro;
   }
   /**
    * Método para perder oro
    * @param {*} oro 
    */
   perderOro(oro){
      //Comprobar que la resta del oro actual menos el oro a perder sea mayor o igual a 0 
      if(this.#oro-oro>-1){
         this.#oro=this.#oro-oro;
      }else{
         this.#oro=0;
      }
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
   * Getter para vidaMaxima
   * @return vidaMaxima Devuelve el valor de vidaMaxima;
   */
   get vidaMaxima() {
      return this.#vidaMaxima;
   }

   
   /**
   * Setter para vidaMaxima
   * @param {*} vidaMax Recibe el valor de maxima para modificar
   */
   set vidaMaxima(vidaMax) {
      this.#vidaMaxima = vidaMax;
   }
   

   /**
   * Getter para vidaActual
   * @return vidaActual Devuelve el valor de vidaActual;
   */
   get vidaActual() {
      return this.#vidaActual;
   }
   
   /**
   * Setter para vidaActual
   * @param {*} vidaAct Recibe el valor de actual para modificar
   */
   set vidaActual(vidaAct) {
      this.#vidaActual = vidaAct;
   }

   /**
   * Getter para manaMaximo
   * @return manaMaximo Devuelve el valor de manaMaximo;
   */
   get manaMaximo() {
      return this.#manaMaximo;
   }
   
   /**
   * Setter para manaMaximo
   * @param {*} manaMax Recibe el valor de manaMax para modificar
   */
   set manaMaximo(manaMax) {
      this.#manaMaximo = manaMax;
   }

   /**
   * Getter para manaActual
   * @return manaActual Devuelve el valor de manaActual;
   */
   get manaActual() {
      return this.#manaActual;
   }
   
   /**
   * Setter para manaActual
   * @param {*} manaAct Recibe el valor de manaAct para modificar
   */
   set manaActual(manaAct) {
      this.#manaActual = manaAct;
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

   /**
   * Getter para inventario
   * @return inventario Devuelve el valor de inventario;
   */
   get inventario() {
      return this.#inventario;
   }
   
   /**
   * Setter para inventario
   * @param {*} inventario Recibe el valor de inventario para modificar
   */
   set inventario(inventario) {
      this.#inventario = inventario;
   }

   
}