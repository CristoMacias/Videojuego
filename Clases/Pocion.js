export default class Pocion{
    #nombre;//Nombre de la pocion
    #descripcion; //Descripción de la poción
    #efecto; //Efecto para salud o maná
    #aumento;// Aumento que produce
    #precio // Precio de compra
    #imagen; //Imagen de la poción
    /**
     * Constructor
     * @param {*} nombre Recibe valor de nombre
     * @param {*} descripcion  Recibe valor de descripcion
     * @param {*} efecto  Recibe valor de efecto
     * @param {*} precio  Recibe valor de precio
     * @param {*} aumento  Recibe valor de aumento
     * @param {*} imagen  Recibe valor de imagen
     */
    constructor(nombre,descripcion,efecto,precio,aumento,imagen){
        this.#nombre=nombre,
        this.#descripcion=descripcion,
        this.#efecto=efecto,
        this.#precio=precio,
        this.#aumento=aumento,
        this.#imagen=imagen
    }

    /**
    * Getter para nombre
    * return this.nombre Devuelve el valor de nombre;
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
    * Getter para descripcion
    * @return descripcion Devuelve el valor de descripcion;
    */
    get descripcion() {
       return this.#descripcion;
    }
    
    /**
    * Setter para descripcion
    * @param {*} descripcion Recibe el valor de descripcion para modificar
    */
    set descripcion(descripcion) {
       this.#descripcion = descripcion;
    }
    /**
    * Getter para efecto
    * @return efecto Devuelve el valor de efecto;
    */
    get efecto() {
       return this.#efecto;
    }
    
    /**
    * Setter para efecto
    * @param {*} efecto Recibe el valor de efecto para modificar
    */
    set efecto(efecto) {
       this.#efecto = efecto;
    }

    /**
    * Getter para precio
    * @return precio Devuelve el valor de precio;
    */
    get precio() {
       return this.#precio;
    }
    
    /**
    * Setter para precio
    * @param {*} precio Recibe el valor de precio para modificar
    */
    set precio(precio) {
       this.#precio = precio;
    }
    /**
    * Getter para aumento
    * @return aumento Devuelve el valor de aumento;
    */
    get aumento() {
       return this.#aumento;
    }
    
    /**
    * Setter para aumento
    * @param {*} aumento Recibe el valor de aumento para modificar
    */
    set aumento(aumento) {
       this.#aumento = aumento;
    }

    /**
    * Getter para imagen
    * @return imagen Devuelve el valor de imagen;
    */
    get imagen() {
       return this.#imagen;
    }
    
    /**
    * Setter para imagen
    * @param {*} imagen Recibe el valor de imagen para modificar
    */
    set imagen(imagen) {
       this.#imagen = imagen;
    }
}

