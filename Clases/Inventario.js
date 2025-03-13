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
        console.log("llega a inventario");
        if(objeto instanceof Arma && this.#armas.length<5){
            this.#armas.push(objeto);
            alert(`¡Se ha añadido ${objeto.nombre} al inventario!`);
        }else if(objeto instanceof Proteccion && this.#armas.length<5){
            if(objeto.tipo==="escudo" || objeto.tipo==="armadura"){
                this.#defensa.push(objeto);
                alert(`¡Se ha añadido ${objeto.nombre} al inventario!`);
            }else{
                this.#amuletos.push(objeto);
                alert(`¡Se ha añadido ${objeto.nombre} al inventario!`);
            }
        }else if(objeto instanceof Pocion && this.#pocionesVida<7){
            if(objeto.tipo==="salud"){
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
    
    /**
     * Método para eliminar un arma del inventario
     * @param {arma} arma Arma a eliminar
     */
    eliminarArma(arma){
        if(arma===null){
            alert(`El inventario está vacío, no hay nada que borrar.`);
        }else{
            this.#armas.splice(arma);
            alert(`¡El arma ${arma.nombre} se ha eliminado del inventario!`)
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