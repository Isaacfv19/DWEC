const nuevaLista = () => ({ propietario: 'Ana', productos: ['pan', 'leche'] });

// A) Igualar
const lista1 = nuevaLista();
const igual = lista1;
igual.productos.push('huevos');
console.log('A) original:', lista1.productos);
console.log('A) lista1 === igual:', lista1 === igual);

// B) Copia superficial
const lista2 = nuevaLista();
const superficial = { ...lista2 };
superficial.propietario = 'Luis';
superficial.productos.push('queso');
console.log('B) original:', lista2.propietario, lista2.productos);

// C) Copia profunda
const lista3 = nuevaLista();
const profunda = structuredClone(lista3);
profunda.propietario = 'Marta';
profunda.productos.push('fruta');
console.log('C) original:', lista3);
console.log('C) copia:', profunda);
