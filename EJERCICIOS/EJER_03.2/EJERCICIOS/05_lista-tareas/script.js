const input = document.getElementById('tarea');
const lista = document.getElementById('lista-tareas');

// 1 y 2. Añadir una tarea con su botón "Eliminar"
function anadirTarea() {
    const texto = input.value.trim();
    if (texto === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = texto;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.classList.add('eliminar');

    li.appendChild(span);
    li.appendChild(botonEliminar);
    lista.appendChild(li);

    input.value = '';
    input.focus();
}

document.getElementById('btn-anadir').addEventListener('click', anadirTarea);

// 3. Delegación de eventos: un único listener en la lista
lista.addEventListener('click', (evento) => {
    if (evento.target.classList.contains('eliminar')) {
        const li = evento.target.parentNode;
        li.remove();
    }
});
