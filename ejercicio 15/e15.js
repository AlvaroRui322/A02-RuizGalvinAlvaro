// Defino la función que verifica si un año es bisiesto
function isLeapYear(year) {
    // Para determinar si un año es bisiesto, verifico las siguientes condiciones:
    // Un año es bisiesto si es divisible por 4 y no es divisible por 100,
    // o si es divisible por 400.
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// A continuación, defino la función que encuentra todos los años bisiestos entre dos años dados
function encontrarAniosBisiestos(anio1, anio2) {
    // Primero, valido que ambos años estén entre 2001 y 2500
    if (anio1 < 2001 || anio1 > 2500 || anio2 < 2001 || anio2 > 2500) {
        // Si alguno de los años está fuera de este rango, imprimo un mensaje de error
        console.log("Ambos años deben estar entre 2001 y 2500."); // Mensaje de error
        return; // Salgo de la función si la validación falla
    }

    // Luego, me aseguro de que anio1 sea menor que anio2
    if (anio1 > anio2) {
        // Si anio1 es mayor, intercambío sus valores
        [anio1, anio2] = [anio2, anio1]; // Intercambiar valores si es necesario
    }

    // Inicializo un array vacío para almacenar los años bisiestos que encuentre
    const aniosBisiestos = [];

    // Ahora, recorro el rango de años desde anio1 hasta anio2
    for (let anio = anio1; anio <= anio2; anio++) {
        // Verifico si el año actual es bisiesto utilizando la función isLeapYear
        if (isLeapYear(anio)) {
            // Si el año es bisiesto, lo agrego al array
            aniosBisiestos.push(anio); // Agregar año bisiesto al array
        }
    }

    // Finalmente, muestro los años bisiestos que encontré
    if (aniosBisiestos.length > 0) {
        // Si hay años bisiestos, imprimo el array de años bisiestos
        console.log(`Años bisiestos entre ${anio1} y ${anio2}: `, aniosBisiestos);
    } else {
        // Si no encontré años bisiestos, imprimo un mensaje indicando eso
        console.log(`No hay años bisiestos entre ${anio1} y ${anio2}`); // Mensaje si no hay años bisiestos
    }
}

// Solicito al usuario que ingrese dos años
const anio1 = parseInt(prompt("Introduce el primer año entre 2001 y 2500 : "));
const anio2 = parseInt(prompt("Introduce el segundo año entre 2001 y 2500 : "));

// Finalmente, llamo a la función para encontrar años bisiestos
encontrarAniosBisiestos(anio1, anio2);