export default class Proteccion{

    #nombre; //Nombre del escudo/armadura
    #descripcion; //Descripción del escudo/armadura
    #tipo; //Tipo si es un escudo/armadura(aumenta defensa) o amuleto (aumenta resistenciaMagica)
    #nivel; //Nivel de la protección
    #precio; //Precio
    #aumento; //Aumento de la defensa o resistenciaMagica
    #imagen; //Imagen de la proteccio

    /**
     * Constructor 
     * @param nombre Recibe valor de nombre
     * @param descripcion Recibe descripción
     * @param tipo Recibe valor de tipo
     * @param nivel Recibe valor de nivel
     * @param precio Recibe valor de precio
     * @param aumento Recibe valor de aumento
     * @param imagen Recibe valor de imagen
     */
    constructor(nombre,descripcion,tipo,nivel,precio,aumento,imagen){
        this.#nombre=nombre,
        this.#descripcion=descripcion,
        this.#tipo=tipo,
        this.#nivel=nivel,
        this.#precio=precio,
        this.#aumento=aumento,
        this.#imagen=imagen
    }

    convertirJson(){
      return{
      nombre: this.#nombre,
      descripcion: this.#descripcion,
      tipo: this.#tipo,
      nivel: this.#nivel,
      precio: this.#precio,
      aumento: this.#aumento,
      imagen: this.#imagen
      };
    }

    static reconstruirJson(json){
      const proteccion= new Proteccion(json.nombre,json.descripcion,json.tipo,json.nivel,json.precio,json.aumento,json.imagen);
      return proteccion;
    }

    /**
     * Método para mostrar en el DOM los atributos de la proteccion de tipo escudo
     */
    mostrarEscudo(){
      document.querySelector("#imagen-escudo").src=this.imagen;
      document.querySelector("#nombre-escudo").textContent=this.nombre;
      document.querySelector("#descripcion-escudo").textContent=this.descripcion;
      document.querySelector("#defensa-escudo").textContent=this.aumento;
      document.querySelector("#precio-escudo").textContent=this.precio;
    }
      /**
     * Método para mostrar en el DOM los atributos de la proteccion de tipo escudo
     */
    mostrarArmadura(){
      document.querySelector("#imagen-armadura").src=this.imagen;
      document.querySelector("#nombre-armadura").textContent=this.nombre;
      document.querySelector("#descripcion-armadura").textContent=this.descripcion;
      document.querySelector("#defensa-armadura").textContent=this.aumento;
      document.querySelector("#precio-armadura").textContent=this.precio;
    }
      /**
     * Método para mostrar en el DOM los atributos de la proteccion de tipo escudo
     */
    mostrarAmuleto(){
      document.querySelector("#imagen-amuleto").src=this.imagen;
      document.querySelector("#nombre-amuleto").textContent=this.nombre;
      document.querySelector("#descripcion-amuleto").textContent=this.descripcion;
      document.querySelector("#resistenciaMagica-amuleto").textContent=this.aumento;
      document.querySelector("#precio-amuleto").textContent=this.precio;
    }


    /**
    * Getter para nombre
    * @return Devuelve el valor de nombre
    */
    get nombre() {
       return this.#nombre;
    }
    
    /**
    * Setter para nombre
    * @param {*} nombre Recibe el nombre a cambiar
    */
    set nombre(nombre) {
       this.#nombre = nombre;
    }

    /**
    * Getter para descripcion
    * @return Devuelve el valor de descripcion
    */
    get descripcion() {
       return this.#descripcion;
    }
    
    /**
    * Setter para descripcion
    * @param {*} descripcion Recibe el valor de descripcion
    */
    set descripcion(descripcion) {
       this.#descripcion = descripcion;
    }

    /**
    * Getter para tipo
    * @return Devuelve el valor de tipo
    */
    get tipo() {
       return this.#tipo;
    }
    
    /**
    * Setter para tipo
    * @param {*} tipo Recibe el tipo a cambiar
    */
    set tipo(tipo) {
       this.#tipo = tipo;
    }
    /**
    * Getter para nivel
    * @return Devuelve el valor de nivel
    */
    get nivel() {
       return this.#nivel;
    }
    
    /**
    * Setter para nivel
    * @param {*} nivel Recibe el nivel a cambiar
    */
    set nivel(nivel) {
       this.#nivel = nivel;
    }
    /**
    * Getter para precio
    * @return Devuelve el valor de precio
    */
    get precio() {
       return this.#precio;
    }
    
    /**
    * Setter para precio
    * @param {*} precio Recibe el precio a cambiar
    */
    set precio(precio) {
       this.#precio = precio;
    }
    /**
    * Getter para aumento
    * @return Devuelve el valor de aumento
    */
    get aumento() {
       return this.#aumento;
    }
    
    /**
    * Setter para aumento
    * @param {*} aumento Recibe el aumento a cambiar
    */
    set aumento(aumento) {
       this.#aumento = aumento;
    }
    /**
    * Getter para imagen
    * @return Devuelve el valor de imagen
    */
    get imagen() {
       return this.#imagen;
    }
    
    /**
    * Setter para imagen
    * @param {*} imagen Recibe el valor para imagen
    */
    set imagen(imagen) {
       this.#imagen = imagen;
    }
}