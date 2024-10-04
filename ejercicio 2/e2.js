function repetirCadena(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
        return "Error: el parámetro debe ser un número entero no negativo.";
    }
    if (n === 0) {
        return "";
    }
    
    return "bauuuba" + repetirCadena(n - 1);
}

console.log(repetirCadena(5));         
console.log(repetirCadena(-2));        
console.log(repetirCadena(3.5));
console.log(repetirCadena(0));
console.log(repetirCadena(""));