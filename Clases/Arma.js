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
            aumento:this.#aumento,
            precio:this.#precio,
            nivel:this.#nivel,
            raza:this.#raza,
            imagen:this.#imagen
        };
    }

    static reconstruirJson(json){
      const arma = new Arma(json.nombre,json.descripcion,json.aumento,json.precio,json.nivel,json.raza,json.imagen);
      return arma;
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