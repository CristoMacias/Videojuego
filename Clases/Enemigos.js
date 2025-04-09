import Personaje from "./Personaje.js";

const maxNiveles = 100;

export default class Enemigos {

   #nombre; //Nombre del personaje
   #raza;//Raza: Enano,Elfo,Humano,Mago,Orco,
   #vida = 100;//Vida máxima y vida actual
   #mana = 100;//Maná máximo, y maná actual
   #ataque; //=100;//Puntos de ataque
   #defensa = 100;//Puntos de defensa
   #magia; //=100;//Puntos de magia
   #resistenciaMagica = 100;//Puntos de resistencia mágica
   #nivel = 1;//Nivel actual
   #imagen;
   #vidaMax = 100;

   constructor(nombre, raza, nivel, imagen) {

      this.#nombre = nombre;
      this.#nivel = nivel;
      this.#raza = raza;
      this.#imagen = imagen;

      if (raza === "mago" || raza === "elfo") {
         this.#magia = 100;
         this.#ataque = 0;
      }
      else {
         this.#ataque = 100;
         this.#magia = 0;
      }

      this.#generarEnemigoAleatorio(raza, nivel);

   }

   #generarEnemigoAleatorio(raza, nivel) {
      let bandera = false;
      let contador = 1;

      const razas = { //estadísticas por raza
         enano: { vida: 1.20, mana: 0.9, ataque: 1.0, defensa: 1.20, magia: 0, resistenciaMagica: 1.2 },
         orco: { vida: 1.15, mana: 0.85, ataque: 1.25, defensa: 1.0, magia: 0, resistenciaMagica: 0.9 },
         humano: { vida: 1.05, mana: 1.05, ataque: 1.05, defensa: 1.05, magia: 0, resistenciaMagica: 1.05 },
         mago: { vida: 0.8, mana: 1.3, ataque: 0, defensa: 0.9, magia: 1.3, resistenciaMagica: 1.25 },
         elfo: { vida: 0.9, mana: 1.2, ataque: 0, defensa: 1.0, magia: 1.2, resistenciaMagica: 1.0 }
      };
      if (nivel != 1) {
         this.#vida = this.#vida * (razas[raza].vida * (nivel * 0.5));
         this.#mana = this.#mana * (razas[raza].mana * (nivel * 0.3));
         this.#ataque = this.#ataque * (razas[raza].ataque * (nivel * 0.4));
         this.#defensa = this.#defensa * (razas[raza].defensa * (nivel * 0.4));
         this.#magia = this.#magia * (razas[raza].magia * (nivel * 0.4));
         this.#resistenciaMagica = this.#resistenciaMagica * (razas[raza].resistenciaMagica * (nivel * 0.4));
         this.#vidaMax = this.#vidaMax * (razas[raza].vida * (nivel * 0.5));
      }
      else{
         this.#vida = this.#vida * razas[raza].vida;
         this.#mana = this.#mana * razas[raza].mana;
         this.#ataque = this.#ataque * razas[raza].ataque;
         this.#defensa = this.#defensa * razas[raza].defensa;
         this.#magia = this.#magia * razas[raza].magia;
         this.#resistenciaMagica = this.#resistenciaMagica * razas[raza].resistenciaMagica;
         this.#vidaMax = this.#vidaMax * razas[raza].vida;
      }
   }

   convertirJson() {
      return {
         nombre: this.#nombre,
         raza: this.#raza,
         imagen: this.#imagen,
         vida: this.#vida,
         vidaMax: this.#vidaMax,
         mana: this.#mana,
         ataque: this.#ataque,
         defensa: this.#defensa,
         magia: this.#magia,
         resistenciaMagica: this.#resistenciaMagica,
         nivel: this.#nivel,

      };
   }

     static reconstruirJson(json){
         const enemigo = new Enemigos(json.nombre, json.raza, json.nivel, json.imagen);
         return enemigo;
   
       }

   //METODOS PARA COMBATE

   atacar(personaje) {
      let esMagico = false;

      if (this.#raza === "mago" || this.#raza === "elfo") {
         esMagico = true;
         personaje.recibirDanho(this.#magia, esMagico);
      }
      else {
         personaje.recibirDanho(this.#ataque, esMagico);
      }
   }

   recibirDanho(danhoPersonaje, esMagico) {

      let danhoTotal;

      if (esMagico) {
         danhoTotal = parseInt(danhoPersonaje - (this.#resistenciaMagica / 2));
         if(danhoTotal>0){
         this.#vida -= danhoTotal;
         }
      }
      else {
         danhoTotal = parseInt(danhoPersonaje - (this.#defensa / 2));
         if(danhoTotal>0){
            this.#vida -= danhoTotal;
         }
         
      }
   }
   ataqueCritico(personaje) {
      let esMagico = false;

      if (raza === mago || raza === elfo) {
         esMagico = true;
         personaje.recibirDanho(this.#magia * 1.30, esMagico);
      }
      else {
         personaje.recibirDanho(this.#ataque * 1.30, esMagico);
      }
   }

   //GETTERS Y SETTERS

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
   
      /**
      * Getter para nivel
      * @return nivel Devuelve el valor de nivel;
      */
      get nivel() {
         return this.#nivel;
      }
   
      /**
      * Getter para vida
      * @return vida Devuelve el valor de vida;
      */
      get vida() {
         return this.#vida;
      }
   
      /**
      * Getter para imagen
      * @return imagen Devuelve el valor de imagen;
      */
      get imagen() {
         return this.#imagen;
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
      * @param {*} value Recibe el valor de value para modificar
      */
      set imagen(value) {
         this.#imagen = value;
      }
   
      /**
      * Getter para vidaMax
      * @return vidaMax Devuelve el valor de vidaMax;
      */
      get vidaMax() {
         return this.#vidaMax;
      }
      /**
      * Getter para vidaMax
      * @return vidaMax Devuelve el valor de vidaMax;
      */
      get vidaMax() {
         return this.#vidaMax;
      }
      
      /**
      * Setter para vidaMax
      * @param {*} value Recibe el valor de value para modificar
      */
      set vidaMax(value) {
         this.#vidaMax = value;
      }

}
