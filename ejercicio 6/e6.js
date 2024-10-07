function filtrarYTransformar(numeros) {
    if (!Array.isArray(numeros) || !numeros.every(num => typeof num === 'number')) {
        return 'Por favor, ingresa un array válido.';
    }

    const resultado = numeros
    .filter(num => num % 2 !== 0)
    .map(num => num * 2);

    return resultado;
}

const numeros = [1,2,3,4,5,6,7,8,9,10,11];
const resultado = filtrarYTransformar(numeros);
console.log(resultado);