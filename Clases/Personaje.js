
export default class Personaje{
    
    nombre; //Nombre del personaje
    raza;//Raza: Enano,Elfo,Humano,Mago,Orco,
    vida=100;//Vida máxima y vida actual
    mana=100;//Maná máximo, y maná actual
    ataque=100;//Puntos de ataque
    defensa=100;//Puntos de defensa
    magia=100;//Puntos de magia
    resitenciaMagica=100;//Puntos de resistencia mágica
    nivel=0;//Nivel actual
    experiencia=0;//Experiencia
    oro=0; // Total de oro 
    imagen; // Imagen elegida
    
    //Constructor creador de personajes
    constructor(nombre,raza,max,ataque,defensa,magia,resistenciaMagica,imagen){
        this.nombre = nombre;
        this.raza=raza;
        this.vida = {max: max,actual:max};
        this.mana = {max: max, actual: max};
        this.ataque = ataque;
        this.defensa= defensa;
        this.magia=magia;
        this.resistenciaMagica=resistenciaMagica;
        this.imagen=imagen;
    }


}