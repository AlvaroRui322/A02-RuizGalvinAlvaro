function isLeapYear(year) {
    return(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function encontrarAniosBisiestos(anio1, anio2) {
    if (anio1 < 2001 || anio1 > 2500 || anio2 < 2001 || anio2 > 2500) {
        console.log("Ambos años deben estar entre 2001 y 2500.");
        return;
    }

    if (anio1 > anio2) {
        [anio1, anio2] = [anio2, anio1];
    }

    const aniosBisiestos = [];

    for (let anio = anio1; anio <= anio2; anio++) {
        if (isLeapYear(anio)) {
            aniosBisiestos.push(anio);
        }
    }

    if (aniosBisiestos.length > 0) {
        console.log(`Años bisiestos entre ${anio1} y ${anio2}: `, aniosBisiestos);
    } else {
        console.log(`No hay años bisiestos entre ${anio1} y ${anio2}`);
    }
}

const anio1 = parseInt(prompt("Introduce el primer año entre 2001 y 2500 : "));
const anio2 = parseInt(prompt("Introduce el segundo año entre 2001 y 2500 : "));

encontrarAniosBisiestos(anio1, anio2);