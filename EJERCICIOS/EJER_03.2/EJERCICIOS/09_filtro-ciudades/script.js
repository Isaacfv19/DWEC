// Array de objetos con las ciudades y su país
const ciudades = [
    { ciudad: 'Madrid', pais: 'España' },
    { ciudad: 'Barcelona', pais: 'España' },
    { ciudad: 'Oviedo', pais: 'España' },
    { ciudad: 'París', pais: 'Francia' },
    { ciudad: 'Lyon', pais: 'Francia' },
    { ciudad: 'Roma', pais: 'Italia' },
    { ciudad: 'Milán', pais: 'Italia' },
    { ciudad: 'Lisboa', pais: 'Portugal' }
];

const lista = document.getElementById('lista-ciudades');

// Pintamos la lista <ul> a partir del array
ciudades.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.ciudad} - ${item.pais}`;
    lista.appendChild(li);
});

// Oculta los <li> que no contienen el texto y muestra los que sí
function filtrarPorPais(texto) {
    const buscado = texto.trim().toLowerCase();
    const elementos = document.querySelectorAll('#lista-ciudades li');

    elementos.forEach((li) => {
        const contiene = li.textContent.toLowerCase().includes(buscado);
        li.style.display = contiene ? '' : 'none';
    });
}

// Filtramos mientras se escribe
document.getElementById('filtro').addEventListener('input', (evento) => {
    filtrarPorPais(evento.target.value);
});
