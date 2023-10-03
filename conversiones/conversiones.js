
// Función para convertir grados centígrados a fahrenheit
function convertirCaF(gradosCelsius) {
    return (gradosCelsius * 9/5) + 32;
  }
  
  // Función para convertir kilómetros a millas
  function convertirKmsMillas(kilometros) {
    return kilometros * 0.621371;
  }
  
  // Función para convertir kilogramos a libras
  function convertirKgLb(kilogramos) {
    return kilogramos * 2.20462;
  }
  
  // Función para convertir pulgadas a centímetros
  function convertirPulgadasCm(pulgadas) {
    return pulgadas * 2.54;
  }
  
  // Función para convertir pies a pulgadas
  function convertirPiesPulgadas(pies) {
    return pies * 12;
  }
  
  module.exports = {
    convertirCaF,
    convertirKmsMillas,
    convertirKgLb,
    convertirPulgadasCm,
    convertirPiesPulgadas,
  };
  