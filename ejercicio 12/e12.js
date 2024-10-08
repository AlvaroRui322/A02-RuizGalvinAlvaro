function encontrarPares(numero1, numero2) {
    if (numero1 < 1 || numero1 > 100 || numero2 < 1 || numero2 > 100) {
    console.log("Ambos números deben estar entre 1 y 100");
    return;
    }

if (numero1 > numero2) {
    [numero1, numero2] = [numero2, numero1];
}

const pares = [];

for (let i = numero1; i <= numero2; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}

console.log(`Números pares entre ${numero1} y ${numero2}: `, pares);

}

const numero1 = parseInt(prompt("Introduce el primer numero entre 1 y 100 : "));
const numero2 = parseInt(prompt("Introduce el segundo número entre 1 y 100 : "));

encontrarPares(numero1, numero2);