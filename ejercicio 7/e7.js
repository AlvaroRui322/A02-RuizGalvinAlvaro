class Animal {
    constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    }

    hablar() {
        return "Este método será sobreescrito"
    }
}

class Perro extends Animal {
    hablar() {
        return "guau";
    }
}

class Gato extends Animal {
    hablar() {
        return "miau";
    }
}

const perro = new Perro("Jorge", 11);
const gato = new Gato("Misifú", 1);

console.log(perro.hablar());
console.log(gato.hablar());