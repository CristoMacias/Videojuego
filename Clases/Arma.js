export default class Arma{
    #nombre;
    #descripcion;
    #aumento;
    #precio;
    #nivel;
    #raza;
    #imagen;

    constructor(nombre,descripcion,aumento,precio,nivel,raza,imagen){
        this.#nombre=nombre;
        this.#descripcion=descripcion;
        this.#aumento=aumento;
        this.#precio=precio;
        this.#nivel=nivel;
        this.#raza=raza;
        this.#imagen=imagen;
    }

    convertirJson(){
        return{
            nombre: this.#nombre,
            descripcion:this.#descripcion,
            danho:this.#aumento,
            precio:this.#precio,
            nivel:this.#nivel,
            raza:this.#raza,
            imagen:this.#imagen
        }
    }

    
    mostrarArma(){
      document.querySelector("#imagen-arma").src=this.imagen;
      document.querySelector("#nombre-arma").textContent=this.nombre;
      document.querySelector("#descripcion-arma").textContent=this.descripcion;
      document.querySelector("#aumento-arma").textContent=this.aumento;
      document.querySelector("#precio-arma").textContent=this.precio;
   }

    /**
    * Getter para danho
    */
    get aumento() {
       return this.#aumento;
    }
    /**
    * Getter para precio
    */
    get precio() {
       return this.#precio;
    }
    
    /**
    * Getter para nivel
    */
    get nivel() {
       return this.#nivel;
    }

    /**
    * Getter para raza
    */
    get raza() {
       return this.#raza;
    }
    /**
    * Getter para imagen
    */
    get imagen() {
       return this.#imagen;
    }

    /**
    * Getter para nombre
    */
    get nombre() {
       return this.#nombre;
    }

    /**
    * Getter para descripcion
    */
    get descripcion() {
       return this.#descripcion;
    }
    
}