const textos = [
  '{"nombre":"Ana","edad":19}',
  "{'nombre':'Luis'}",
  '{"activo":true,}',
  '[1, 2, 3]',
  '{nombre:"Marta"}',
  '{"curso":"2DAW"',
];

const probar = (lista) => {
  for (const texto of lista) {
    try {
      const resultado = JSON.parse(texto);
      console.log(`✔ ${texto} → ${typeof resultado}`);
    } catch (error) {
      console.log(`✘ ${texto} → ${error.name}`);
    }
  }
};

console.log('--- Originales ---');
probar(textos);

const corregidos = [
  '{"nombre":"Ana","edad":19}',
  '{"nombre":"Luis"}',
  '{"activo":true}',
  '[1, 2, 3]',
  '{"nombre":"Marta"}',
  '{"curso":"2DAW"}',
];

console.log('--- Corregidos ---');
probar(corregidos);
