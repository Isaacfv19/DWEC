const esAlumnoValido = (texto) => {
  let datos;
  try {
    datos = JSON.parse(texto);
  } catch (error) {
    return false;
  }
  if (typeof datos !== 'object' || datos === null) return false;
  if (typeof datos.nombre !== 'string' || datos.nombre.trim() === '') return false;
  if (typeof datos.nota !== 'number' || datos.nota < 0 || datos.nota > 10) return false;
  return true;
};

const entradas = [
  '{"nombre":"Ana","nota":8.5}',
  '{"nombre":"Luis","nota":"9"}',
  '{"nombre":"","nota":7}',
  '{"nombre":"Marta","nota":11}',
  '{"nombre":"Pablo","nota":6',
  'null',
];

for (const entrada of entradas) {
  if (esAlumnoValido(entrada)) console.log('✔ aceptado ', entrada);
  else console.log('✘ rechazado', entrada);
}
