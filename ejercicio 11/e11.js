function lanzarDados() {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    return dado1 + dado2;
}

function simularLanzamiento(numLanzamientos) {
    const resultados = Array(13).fill(0);

    for (let i = 0; i < numLanzamientos; i++) {
        const resultado = lanzarDados();
        resultados[resultado]++;
    }

    return resultados;
}

const numLanzamientos = 36000;
const conteoResultados = simularLanzamientos(numLanzamientos);

console.log("Resultados de 36000 lanzamientos de dos dados: ");
for (let i = 2; i <= 12; i++) {
    console.log(`Resultado ${i}: ${conteoResultados[i]} veces`)
}

