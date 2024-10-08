function diasDelMes(mes) {
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    return diasPorMes[mes - 1];
  }
  
  let mes = parseInt(prompt("Introduce un número entre 1 y 12 para representar un mes:"));
  
  if (mes >= 1 && mes <= 12) {
    const dias = diasDelMes(mes);
    console.log(`El mes ${mes} tiene ${dias} días.`);
  } else {
    console.log("El número ingresado no es válido. Introduce un número entre 1 y 12.");
  }