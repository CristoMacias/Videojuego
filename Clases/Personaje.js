
export default class Personaje{
    
    nombre;
    raza;
    vida;
    mana;
    ataque;
    defensa;
    magia;
    resitenciaMagica;
    nivel;
    experiencia;
    oro;

    constructor(nombre,raza,max,max,ataque,defensa,magia,resitenciaMagica){
        this.nombre = nombre;
        this.raza=raza;
        this.vida = {max: 150,actual:max};
        this.mana = {max: 60, actual: max};
        thia.ataque = 90;
    }
}