import Arma from './Arma.js';
import Proteccion from './Proteccion.js';
import Pocion from './Pocion.js';

export default class Inventario{
    #armas;
    #defensa;
    #amuletos;
    #pocionesVida;
    #pocionesMana;

    constructor(){
        this.#armas=[];
        this.#defensa=[];
        this.#amuletos=[];
        this.#pocionesVida=[];
        this.#pocionesMana=[];
    }
    /**
     * Método para añadir un objeto al inventario
     * @param {*} objeto Objeto a añadir
     */
    agregarObjeto(objeto){
        if(objeto instanceof Arma && this.#armas.length<5){
            this.#armas.push(objeto);
            alert(`¡Se ha añadido ${objeto.nombre} al inventario!`);
        }else if(objeto instanceof Proteccion && this.#defensa.length<4){
            if(objeto.tipo==="escudo" || objeto.tipo==="armadura"){
                this.#defensa.push(objeto);
                alert(`¡Se ha añadido ${objeto.nombre} al inventario!`);
            }else{
                this.#amuletos.push(objeto);
                alert(`¡Se ha añadido ${objeto.nombre} al inventario!`);
            }
        }else if(objeto instanceof Pocion && (this.#pocionesVida.length<7 && this.#pocionesMana.length<7)){
            if(objeto.efecto==="salud"){
                this.#pocionesVida.push(objeto);
                alert(`¡Se ha añadido ${objeto.nombre} al inventario!`);
            }else{
                this.#pocionesMana.push(objeto);
                alert(`¡Se ha añadido ${objeto.nombre} al inventario!`);
            }
        }else{
            alert(`¡No se ha podido añadido ${objeto.nombre} al inventario porque está lleno!`);
        }
    }


    convertirJson(){
        return{
            armas:this.#armas.length ? this.#armas.map(arma=> arma.convertirJson()) : [],
            defensa:this.#defensa ? this.#defensa.map(defensa=>defensa.convertirJson()) : [],
            amuletos:this.#amuletos.length ? this.#amuletos.map(amuleto=>amuleto.convertirJson()) : [],
            pocionesVida:this.#pocionesVida.length ? this.#pocionesVida.map(pocion=>pocion.convertirJson()) : [],
            pocionesMana:this.#pocionesMana ? this.#pocionesMana.map(pocion=>pocion.convertirJson()) : []
        };
    }

    static reconstruirJson(json){
        const inventario = new Inventario();
        inventario.#armas=json.armas.map(arma=>Arma.reconstruirJson(arma)) ||[] ;
        inventario.#defensa=json.defensa.map(defensa=>Proteccion.reconstruirJson(defensa)) || [] ;
        inventario.#amuletos=json.amuletos.map(amuleto=>Proteccion.reconstruirJson(amuleto)) || [] ;
        inventario.#pocionesVida=json.pocionesVida.map(pocion=>Pocion.reconstruirJson(pocion)) || [];
        inventario.#pocionesMana=json.pocionesMana.map(pocion=>Pocion.reconstruirJson(pocion)) || [];
        return inventario;
    }
    /**
     * Método para quitar un arma del array de armas
     * @param {*} indice Posicion del arma a quitar
     */
    tirarArma(indice){
        this.#armas.splice(indice,1);
    }
    /**
     * Método para quitar una armadura/escudo del array defensa
     * @param {*} indice Posición del armadura/escudo a quitar
     */
    tirarArmadura(indice){
        this.#defensa.splice(indice,1);
    }
    /**
     * Método para quitar un amuleto del array amuletos
     * @param {*} indice Posición del amuleto a quitar
     */
    tirarAmuleto(indice){
        this.amuletos.splice(indice,1);
    }
    /**
     * Método para quitar una pocion de los arrays de pociones
     * @param {*} efecto Recibe el efecto para saber de qué array se quita la pocion
     * @param {*} indice Posicion de la pocion a quitar
     */
    tirarPocion(efecto,indice){
        if(efecto==="salud"){
            this.#pocionesVida.splice(indice,1);
        }else{
            this.#pocionesMana.splice(indice,1);
        }
    }
    /**
    * Getter para armas
    * @return armas Devuelve el valor de armas;
    */
    get armas() {
       return this.#armas;
    }
    
    /**
    * Setter para armas
    * @param {*} arma Recibe el valor de arma para modificar
    */
    set armas(arma) {
       this.#armas = arma;
    }
    /**
    * Getter para defensa
    * @return defensa Devuelve el valor de defensa;
    */
    get defensa() {
       return this.#defensa;
    }
    
    /**
    * Setter para defensa
    * @param {*} proteccion Recibe el valor de proteccion para modificar
    */
    set defensa(proteccion) {
       this.#defensa = proteccion;
    }

    /**
    * Getter para amuletos
    * @return amuletos Devuelve el valor de amuletos;
    */
    get amuletos() {
       return this.#amuletos;
    }
    
    /**
    * Setter para amuletos
    * @param {*} amuleto Recibe el valor de amuleto para modificar
    */
    set amuletos(amuleto) {
       this.#amuletos = amuleto;
    }

    /**
    * Getter para pocionesVida
    * @return pocionesVida Devuelve el valor de pocionesVida;
    */
    get pocionesVida() {
       return this.#pocionesVida;
    }
    
    /**
    * Setter para pocionesVida
    * @param {*} pocionV Recibe el valor de pocionV para modificar
    */
    set pocionesVida(pocionV) {
       this.#pocionesVida = pocionV;
    }

    /**
    * Getter para pocionesMana
    * @return pocionesMana Devuelve el valor de pocionesMana;
    */
    get pocionesMana() {
       return this.#pocionesMana;
    }
    
    /**
    * Setter para pocionesMana
    * @param {*} pocionM Recibe el valor de pocionM para modificar
    */
    set pocionesMana(pocionM) {
       this.#pocionesMana = pocionM;
    }
}