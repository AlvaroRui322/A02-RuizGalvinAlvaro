class Estudiante {
    constructor (nombre, edad, notas = []) {
        this.nombre = nombre;
        this.edad = edad;
        this.notas = Array.isArray(notas) ? notas : [];
    }

    agregarNota(nuevaNota) {
        if (typeof nuevaNota === 'number' && nuevaNota >= 0 && nuevaNota <= 10) {
            this.notas.push(nuevaNota);
            console.log(`Nota ${nuevaNota} agregada`);
        } else {
            console.log("Error: La nota debe ser un número entre 0 y 10");
        }
    }

    calcularPromedio() {
        if (this.notas.length === 0) {
            console.log("No hay notas para calcular el promedio");
            return null;
        }
        const suma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        return suma / this.notas.length;
    }

    estaAprobado() {
        const promedio = this.calcularPromedio();
        if (promedio === null) {
            console.log("Si no hay promedio no se puede saber si está aprobado");
            return false;
        }
        return promedio >= 5;
    }
}

const estudiante1 = new Estudiante("Erik", 20);
estudiante1.agregarNota(8);
estudiante1.agregarNota(0);
estudiante1.agregarNota(-1);
estudiante1.agregarNota(5);
estudiante1.agregarNota(11);
estudiante1.agregarNota(10);

console.log(`Promedio de ${estudiante1.nombre} : ${estudiante1.calcularPromedio()}`);
console.log(`${estudiante1.nombre} está aprobado? -> ${estudiante1.estaAprobado()}`);

