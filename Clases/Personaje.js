import Inventario from './Inventario.js';
import Arma from './Arma.js';
import Proteccion from './Proteccion.js';
import Pocion from './Pocion.js';
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
    #nivel=5;//Nivel actual
    #experiencia=0;
    #experienciaMaxima=100;//Experiencia
    #oro=5000; // Total de oro 
    #imagen; // Imagen elegida
    #inventario;
    #armaEquipada;
    #armaduraEquipada;
    #amuletoEquipado;

    /**
     * Constructor personaje
     * @param {*} nombre Recibe el nombre
     * @param {*} raza Recibe la raza
     * @param {*} imagen Recibe la imagen
     * @param {*} arma  Recibe el arma inicial
     */
    constructor(nombre,raza,imagen){
        this.#nombre = nombre;
        this.#raza=raza;
        this.#imagen=imagen;
        this.#nivel;
        this.#experiencia;
        this.#experienciaMaxima;
        this.#oro;
        this.#calcularEstadisticas(raza);
        this.#inventario=new Inventario();
        this.#armaEquipada=null;
        this.#armaduraEquipada = null;
        this.#amuletoEquipado = null;
    }
    /**
     * Método para calcular las estadísticas en función de la raza
     * @param {*} raza raza elegida
     */
    #calcularEstadisticas(raza){
        const razas={ //estadísticas por raza
            enano:{vida:1.20,mana:0.9,ataque:1.0 ,defensa:1.20,magia:0,resistenciaMagica:1.2},
            orco:{vida:1.15,mana:0.85,ataque:1.25,defensa:1.0,magia:0,resistenciaMagica:0.9},
            humano:{vida:1.05,mana:1.05,ataque:1.05,defensa:1.05,magia:0,resistenciaMagica:1.05},
            mago:{vida:0.8,mana:1.3,ataque:0,defensa:0.9,magia:1.3,resistenciaMagica:1.25},
            elfo:{vida:0.9,mana:1.2,ataque:0,defensa:1.0,magia:1.2,resistenciaMagica:1.0}
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
         experienciaMaxima: this.#experienciaMaxima,
         oro: this.#oro,
         inventario:this.#inventario ?  this.#inventario.convertirJson() : {},
         armaEquipada:this.#armaEquipada ?  this.#armaEquipada.convertirJson() : null,
         armaduraEquipada:this.#armaduraEquipada ?  this.#armaduraEquipada.convertirJson() : null,
         amuletoEquipado:this.#amuletoEquipado ?  this.#amuletoEquipado.convertirJson() : null

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
      personaje.#experienciaMaxima=json.experienciaMaxima;
      personaje.#oro=json.oro;
      personaje.#inventario=json.inventario ? Inventario.reconstruirJson(json.inventario) : null ;
      personaje.#armaEquipada=json.armaEquipada ? Arma.reconstruirJson(json.armaEquipada) : null ;
      personaje.#armaduraEquipada=json.armaduraEquipada ? Proteccion.reconstruirJson(json.armaduraEquipada) : null;
      personaje.#amuletoEquipado=json.amuletoEquipado ? Proteccion.reconstruirJson(json.amuletoEquipado) : null;
      return personaje;

    }
    /**
     * Método para comprar un objeto en la tienda y guardarlo en el inventario
     * @param {*} objeto
     */
    comprarTienda(objeto){
      this.#inventario.agregarObjeto(objeto);
    }

   /**
    * Método para añadir oro al personaje
    * @param {*} oro 
    */
   ganarOro(oro){
      this.#oro+=oro;
   }
   /**
    * Método para perder oro
    * @param {*} oro 
    */
   perderOro(oro){
         this.#oro-=oro;
   }
   /**
    * Método para recibir daño y restar la vida al jugador 
    * @param danhoEnemigo Recibe el ataque o magia del enemigo
    * @param esMagico Recibe true o false en funcion
    */
   recibirDanho(danhoEnemigo,esMagico){
      let danho;
      if(esMagico){
         danho = danhoEnemigo-(this.#resistenciaMagica / 2);
         if(danho>0){
            this.#vidaActual-= danho;
         }
      }else{
         danho = danhoEnemigo-(this.#defensa / 2);
         if(danho>0){
            this.#vidaActual-=danho;
         }
      }
   }
   /**
    * Método para atacar el enemigo
    * @param {} enemigo Recibe por parámetro al enemigo al que se ataca
    */
   atacarEnemigo(enemigo){
      let esMagico=false;
      if(this.#raza === "mago" || this.#raza === "elfo"){
         esMagico = true;
         enemigo.recibirDanho(this.#magia, esMagico);
      }else{
         enemigo.recibirDanho(this.#ataque,esMagico);
      }
   }
   /**
    * Método para dar un ataque critico, más poderoso
    * @param {*} enemigo  Recibe por parametro al enemigo al que se ataca
    */
   ataqueCritico(enemigo){
      let esMagico=false;
      if(this.#raza === "mago" || this.#raza === "elfo"){
         esMagico = true;
         enemigo.recibirDanho(parseInt(this.magia *1.30), esMagico);
      }else{
         enemigo.recibirDanho(parseInt(this.#ataque *1.30),esMagico);
      }  
   }
   /**
    * Método para equipar el arma al personaje para el combate
    * @param {Arma} arma Recibe el arma a equipar
    */
   equiparArma(arma){
      let armaAnterior=this.#armaEquipada;
      if(this.#armaEquipada !== null){ //Comprobamos que el arma equipada no esté vacía
         if(this.#raza === "mago" || this.#raza === "elfo"){
            this.magia=this.#magia/armaAnterior.aumento;//Le quitamos el aumento del arma anterior
            this.magia=this.#magia*arma.aumento;//Le añadimos el aumento del arma a equipar
            this.#armaEquipada=arma; //Añadimos el arma al personaje
         }else{
            this.ataque=pthis.#ataque/armaAnterior.aumento;//Le quitamos el aumento del arma anterior
            this.ataque=this.#ataque*arma.aumento;//Le añadimos el aumento del arma a equipar
            this.#armaEquipada=arma; //Añadimos el arma al personaje
         }
      }else{
         if(this.#raza === "mago" || this.#raza === "elfo"){
            this.magia=this.#magia*arma.aumento;
            this.#armaEquipada=arma; //Añadimos el arma al personaje
         }else{
            this.ataque=this.#ataque*arma.aumento; //Le añadimos el aumento del arma a equipar
            this.#armaEquipada=arma; //Añadimos el arma al personaje
         }
      }
   }
   /**
    * Metodo para quitar el arma al perosnaje
    * 
    */
   quitarArma(){
      if(this.#raza === "elfo" || this.#raza === "mago"){
         this.magia=this.#magia/this.#armaEquipada.aumento;
      }else{
         this.#ataque=this.#ataque/this.#armaEquipada.aumento;
      }
      this.#armaEquipada=null;
   }
   /**
    * Método del personaje para equipar con una armadura/escudo que sube la defensa
    * @param {Proteccion} armadura Recibe por parámetro el escudo/armadura
    */
   equiparArmadura(armadura){
      let armaduraAnterior=this.#armaduraEquipada;
      if(this.#armaduraEquipada !== null){
         this.#defensa=this.#defensa/armaduraAnterior.aumento;
         this.#defensa=this.#defensa*armadura.aumento;
         this.#armaduraEquipada=armadura;
      }else{
         this.#defensa=this.#defensa*armadura.aumento;
         this.#armaduraEquipada=armadura;
      }
      
   }
   /**
    * Método para quitar la armadura al personaje
    */
   quitarArmadura(){
      this.#defensa=this.#defensa/this.#armaduraEquipada.aumento;
      this.#armaduraEquipada=null;
   }
   /**
    * Método del personaje para equipar con un amuleto que sube la resistencia mágica
    * @param {Proteccion} amuleto Recibe por parámetro el amuleto
    */
   equiparAmuleto(amuleto){
      let amuletoAnterior = this.#amuletoEquipado;
      if(this.#amuletoEquipado !== null){
         this.#resistenciaMagica=this.#resistenciaMagica/amuletoAnterior.aumento;
         this.#resistenciaMagica=this.#resistenciaMagica*amuleto.aumento;
         this.#amuletoEquipado=amuleto;
      }else{
         this.#resistenciaMagica=this.#resistenciaMagica*amuleto.aumento;
         this.#amuletoEquipado=amuleto;
      }
   }
   /**
    * Método para quitar el amuleto al personaje
    */
   quitarAmuleto(){
      this.#resistenciaMagica=this.#resistenciaMagica/this.#amuletoEquipado.aumento;
      this.#amuletoEquipado=null;
   }
   /**
    * Método para desequipar de golpe el arma y objetos de defensa
    */
   desequiparTodo(){
      if(this.armaEquipada!==null){
         this.quitarArma();
      }
      if(this.armaduraEquipada!==null){
          this.quitarArmadura();
      }if(this.amuletoEquipado!==null){
         this.quitarAmuleto();
      }
   }
   /**
    * Método para que el personaje beba una pocion de salud o de mana
    * @param {Pocion} pocion que tiene la poción: salud o maná
    */
   tomarPocion(pocion){
      if(pocion.efecto==="salud"){
         let posicion  = this.#inventario.pocionesVida.indexOf(pocion);
         this.#vidaActual+=pocion.aumento;
         if(this.#vidaActual>this.#vidaMaxima){
            this.#vidaActual=this.#vidaMaxima;
         }
         this.#inventario.pocionesVida.splice(posicion,1);
      }else{
         let posicion = this.#inventario.pocionesMana.indexOf(pocion);
         this.#manaActual+=pocion.aumento;
         if(this.#manaActual>this.#manaMaximo){
            this.#manaActual=this.#manaMaximo;
         }
         this.#inventario.pocionesMana.splice(posicion,1);
      }
      alert(`Has usado la poción ${pocion.nombre}`);
   }
   /**
    * Método para ganar experiencia
    * @param {*} experienciaGanada Recibe por parámetro la experiencia ganada en el combate
    */
   ganarExperiencia(experienciaGanada){
      if(this.nivel!==100){
         this.#experiencia+=experienciaGanada;
         while(this.#experiencia>=this.#experienciaMaxima){
         this.#experiencia-=this.#experienciaMaxima;
         this.subirNivel();
         this.#experienciaMaxima = this.#experienciaMaxima*1.5;
         }
      }else{
         this.experiencia=this.experienciaMaxima;
      }
   }
   /**
    * Método para subir de nivel y estadísticas
    */
   subirNivel(){
      let aumento=0.15;
      this.#nivel++;
      this.#vidaActual+=this.#vidaActual*aumento;
      this.#vidaMaxima+=this.#vidaMaxima*aumento;
      this.#defensa+=this.#defensa*aumento;
      this.resistenciaMagica+=this.#resistenciaMagica*aumento;
      this.#manaMaximo+=this.#manaMaximo*aumento;
      this.#manaActual+=this.#manaActual * aumento;
      if(this.#raza === "elfo" || this.#raza === "mago"){
         this.#magia+=this.#magia*aumento;
      }else{
         this.#ataque+=this.#ataque*aumento;
      }
   }
   /**
    * Método para tirar objetos del inventario
    * @param {*} objeto Objeto a tirar,pueden ser armas, armaduras/escudos o pociones
    * @param {*} indice Posicion en la que se encuentra del array
    */
   tirarObjeto(objeto,indice){
      if(objeto instanceof Arma){
         this.#inventario.tirarArma(indice);
      }
      else if(objeto instanceof Proteccion){
         if(objeto.tipo=== "amuleto"){
            this.#inventario.tirarAmuleto(indice);
         }else{
            this.#inventario.tirarArmadura(indice);
         }
      }else if(objeto instanceof Pocion){
         this.#inventario.tirarPocion(objeto.efecto,indice); 
      }
   }
   /**
    * Método para aumentar la defensa 
    */
   defenderse(){
      let  aumento=1.5;
      this.#defensa+=this.#defensa*aumento;
      this.#resistenciaMagica+=this.#resistenciaMagica*aumento;
   }
   /**
    * Método para dejar se defenderse
    */
   dejarDefenderse(){
      let aumento=1.5;
      this.#defensa-=this.#defensa/aumento;
      this.#resistenciaMagica-=this.resistenciaMagica/aumento;
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
   /**
   * Getter para experienciaMaxima
   * @return experienciaMaxima Devuelve el valor de experienciaMaxima;
   */
   get experienciaMaxima() {
      return this.#experienciaMaxima;
   }
   
   /**
   * Setter para experienciaMaxima
   * @param {*} experienciaMaxima Recibe el valor de experienciaMaxima para modificar
   */
   set experienciaMaxima(experienciaMaxima) {
      this.#experienciaMaxima = experienciaMaxima;
   }

   /**
   * Getter para armaEquipada
   * @return armaEquipada Devuelve el valor de armaEquipada;
   */
   get armaEquipada() {
      return this.#armaEquipada;
   }

   /**
   * Getter para armaduraEquipada
   * @return armaduraEquipada Devuelve el valor de armaduraEquipada;
   */
   get armaduraEquipada() {
      return this.#armaduraEquipada;
   }
   /**
   * Getter para amuletoEquipado
   * @return amuletoEquipado Devuelve el valor de amuletoEquipado;
   */
   get amuletoEquipado() {
      return this.#amuletoEquipado;
   }

}