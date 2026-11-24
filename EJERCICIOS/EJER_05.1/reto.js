const titulos = {
  1: 'El nombre de la rosa',
  2: 'Cien años de soledad',
  3: 'Fahrenheit 451',
};

const buscarLibro = (id) =>
  new Promise((resolver, rechazar) => {
    setTimeout(() => {
      if (titulos[id]) resolver({ id, titulo: titulos[id] });
      else rechazar(new Error(`No existe ningún libro con id ${id}`));
    }, 500);
  });

const textoIds = '[3, 1, 99, 2]';

let ids;
try {
  ids = JSON.parse(textoIds);
} catch (error) {
  console.log('La lista de ids no es JSON válido:', error.message);
  process.exit(1);
}

const resultados = await Promise.allSettled(ids.map((id) => buscarLibro(id)));

let encontrados = 0;
let noExisten = 0;

resultados.forEach((resultado, i) => {
  if (resultado.status === 'fulfilled') {
    encontrados++;
    console.log(`✔ ${resultado.value.id} · ${resultado.value.titulo}`);
  } else {
    noExisten++;
    console.log(`✘ ${ids[i]} · ${resultado.reason.message}`);
  }
});

console.log(`${encontrados} encontrados y ${noExisten} no existen`);
