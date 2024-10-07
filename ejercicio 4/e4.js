function aplanarMatriz(matriz) {
    let aplanado = [];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            aplanado.push(matriz[i][j])
        }
    }

    const suma = aplanado.reduce((acumulador, valor) => 
        acumulador + valor, 0);
    const promedio = suma / aplanado.length;

    return { aplanado, promedio };
}

const matriz = [
    [6, 7, 8],
    [20, 32, 11],
    [1, 2, 3]
];
const resultado = aplanarMatriz(matriz);
console.log("Matriz aplanada: ", resultado.aplanado.toString())
console.log("Promedio: ", resultado.promedio);

