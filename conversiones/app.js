
const fs = require('fs');
const conversiones = require('.FrontenNodeJs');

// Realiza pruebas y registra los resultados en pruebaconversiones.txt
function realizarPruebas() {
  const pruebas = [
    {
      nombre: 'convertirCaF',
      gradosCelsius: 50,
    },
    {
      nombre: 'convertirKmsMillas',
      kilometros: 150,
    },
  
  ];

  const resultado = pruebas.map(prueba => {
    const { nombre, ...args } = prueba;
    const resultado = conversiones[nombre](...Object.values(args));
    return `Prueba función: ${nombre}\n${Object.keys(args)[0]} origen: ${args[Object.keys(args)[0]]}\n${nombre === 'convertirKmsMillas' ? 'Millas' : nombre} convertidos: ${resultado}\n-------`;
  });

  fs.writeFileSync('pruebaconversiones.txt', resultado.join('\n'), { flag: 'w' });
  console.log('Pruebas completadas. Los resultados se han registrado en pruebaconversiones.txt');
}

realizarPruebas();
