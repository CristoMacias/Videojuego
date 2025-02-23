
/**
 * Llamada al id canvas en html
 */
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

// Ajustar tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Creación de array para el almacenamiento de particulas.
const particulas = [];

//Número de particulas existentes
const numParticulas = 150;

// Clase para crear partículas, con sus atributos.
class Particle {

    //Constructor con ancho, alto, radio, velocidad horizontal, velocidad vertical y opacidad del punto.
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radio = Math.random() * 2 + 1;
        this.velocidadHorizontal = (Math.random() - 0.5) * 0.5;
        this.velocidadVertical = (Math.random() - 0.5) * 0.5;
        this.opacidad = Math.random() * 0.5 + 0.3;
    }

    update() {

        //Mueve la particula sumando x e y.
        this.x += this.velocidadHorizontal;
        this.y += this.velocidadVertical;

        // Si salen de los límites, reaparecen en el lado opuesto
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    draw() {

        //Inicia el camino y el dibujo de la particula
        ctx.beginPath();
        //
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacidad})`;
        ctx.fill();
    }
    
}

// Crear partículas
for (let i = 0; i < numParticulas; i++) {
    particulas.push(new Particle());
}

// Animar partículas
function animacion() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particulas.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animacion);
}

// Ajustar tamaño si la ventana cambia
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Iniciar animación
animacion();