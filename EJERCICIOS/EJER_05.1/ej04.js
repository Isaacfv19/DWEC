const mascota = {
  nombre: 'Luna',
  edad: 3,
  vacunada: true,
  vacunas: ['rabia', 'moquillo'],
  apodo: undefined,
  fechaAlta: new Date('2026-09-01T10:00:00Z'),
};

// 1. A texto JSON
const texto = JSON.stringify(mascota);
console.log(texto);

// 2. Con sangría de 2 espacios
console.log(JSON.stringify(mascota, null, 2));

// 3. Solo nombre y edad
console.log(JSON.stringify(mascota, ['nombre', 'edad']));

// 4. De vuelta a objeto
const vuelta = JSON.parse(texto);
console.log(vuelta.vacunas[0]);
console.log(typeof vuelta.fechaAlta);
