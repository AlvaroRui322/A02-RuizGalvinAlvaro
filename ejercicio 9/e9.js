function rot13(text) {
    let result = '';
  
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
  
      if (char >= 'A' && char <= 'Z') {
        result += String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
      }

      else if (char >= 'a' && char <= 'z') {
        result += String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97);
      }

      else {
        result += char;
      }
    }
  
    return result;
  }
  
  const textoCodificado = prompt("Introduce el texto codificado en ROT13:");
  const textoDecodificado = rot13(textoCodificado);
  console.log("Texto decodificado:", textoDecodificado);