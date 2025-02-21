
export default class Personaje{
    
    nombre; //Nombre del personaje
    raza;//Raza: Enano,Elfo,Humano,Mago,Orco,
    vida;//Vida máxima y vida actual
    mana;//Maná máximo, y maná actual
    ataque;//Puntos de ataque
    defensa;//Puntos de defensa
    magia;//Puntos de magia
    resitenciaMagica;//Puntos de resistencia mágica
    nivel;//Nivel actual
    experiencia;//Experiencia
    oro; // Total de oro 
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