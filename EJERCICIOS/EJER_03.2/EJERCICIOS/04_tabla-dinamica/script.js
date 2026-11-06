// 1. Array de objetos
const usuarios = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 30 },
    { nombre: 'Marta', edad: 28 },
    { nombre: 'Pablo', edad: 35 }
];

// 2. Función que recibe el array y construye la tabla
function construirTabla(datos) {
    // 4. DocumentFragment: construimos todo en memoria
    const fragmento = document.createDocumentFragment();

    // 3. Tabla creada con createElement
    const tabla = document.createElement('table');

    // Fila de cabecera con las claves del primer objeto
    const cabecera = document.createElement('tr');
    Object.keys(datos[0]).forEach((clave) => {
        const th = document.createElement('th');
        th.textContent = clave;
        cabecera.appendChild(th);
    });
    tabla.appendChild(cabecera);

    // Una fila por objeto, una celda por propiedad
    datos.forEach((objeto) => {
        const fila = document.createElement('tr');
        Object.values(objeto).forEach((valor) => {
            const celda = document.createElement('td');
            celda.textContent = valor;
            fila.appendChild(celda);
        });
        tabla.appendChild(fila);
    });

    fragmento.appendChild(tabla);

    // 5. Añadimos el fragmento al DOM de una sola vez
    document.getElementById('contenedor-tabla').appendChild(fragmento);
}

construirTabla(usuarios);
