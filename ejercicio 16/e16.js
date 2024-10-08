class Personaje {
    constructor(nombre, raza) {
        this.nombre = nombre;
        this.raza = raza;
        this.nivel = 1;
        this.puntosdeVida = 100;
    }

    atacar(enemigo) {
        const daño = 10;
        enemigo.recibirDaño(daño);
    }

    recibirDaño(daño) {
        this.puntosdeVida -= daño;
        console.log(`${this.nombre} ha recibido ${daño} puntos de daño. Puntos de vida restantes: ${this.puntosdeVida}`);
        
        if (this.puntosdeVida <= 0) {
            this.derrotado();
        }
    }

    recuperarVida() {
        if (this.puntosdeVida < 100) {
            this.puntosdeVida += 20;
            if (this.puntosDeVida > 100) {
                this.puntosdeVida = 100;
            }
            console.logr(`${this.nombre} ha recuperado vida. Puntos de vida actuales: ${this.puntosdeVida}`);
        } else {
            console.log(`${this.nombre} ya tiene la vida máxima`);
        }
    }

    derrotado() {
        console.log(`${this.nombre} ha sido derrotado`);
        alert(`${this.nombre} ha sido derrotado. Restableciendo a su estado inicial`);
        this.nivel = 1;
        this.puntosDeVida = 100;
    }
}

const personajes = [
    new Personaje("Sora", "Humano"),
    new Personaje("Legolas", "Elfo")
];

const personaje1 = personajes[0];
const personaje2 = personajes[1];

personaje1.atacar(personaje2); 
personaje2.atacar(personaje1); 
personaje1.recuperarVida(); 
personaje2.atacar(personaje1);

personaje1.recibirDaño(100); 