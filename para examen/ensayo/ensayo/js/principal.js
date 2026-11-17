// Nombre y apellidos: Isaac Fernández Valdés

import { tareasIniciales } from './datos.js';

// ============================================================
// Constantes y elementos de la página (ya definidos: no los cambies)
// ============================================================
const ESTADOS = ['porhacer', 'encurso', 'hecha'];
const LIMITE_HORAS = 40;

const formularioTarea = document.querySelector('#formulario-tarea');
const campoHoras = formularioTarea.elements.horas;
const mensajeFormulario = document.querySelector('#mensaje-formulario');
const buscador = document.querySelector('#buscador');
const botonArchivar = document.querySelector('#boton-archivar');
const tablero = document.querySelector('#tablero');
const listaHoras = document.querySelector('#horas-asignatura');
const progreso = document.querySelector('#progreso');

const columnas = {
  porhacer: document.querySelector('#col-porhacer'),
  encurso: document.querySelector('#col-encurso'),
  hecha: document.querySelector('#col-hecha')
};
const contadores = {
  porhacer: document.querySelector('#num-porhacer'),
  encurso: document.querySelector('#num-encurso'),
  hecha: document.querySelector('#num-hecha')
};

// Se desactiva la validación del navegador: los mensajes los muestras tú (apartado 1)
formularioTarea.noValidate = true;

// Tareas del tablero. Es una copia: los datos originales no se tocan
let tareas = tareasIniciales.map((tarea) => ({ ...tarea }));

// Repinta todo a partir del array de tareas (ya hecha: la usarás en el apartado 4)
const repintar = () => {
  pintarTablero(buscarTareas(tareas, buscador.value));
  pintarResumen(tareas);
};


// ============================================================
// APARTADO 1 · Formulario y validación
// ============================================================

// 1.1 · Devuelve el texto del error de un campo según su `validity` ('' si es válido)
const mensajeDeError = (campo) => {
  const v = campo.validity;
  if (v.valueMissing) return 'Este campo es obligatorio';
  if (v.tooShort) return `Escribe al menos ${campo.minLength} caracteres`;
  if (v.rangeUnderflow || v.rangeOverflow) return `Debe estar entre ${campo.min} y ${campo.max}`;
  if (v.customError) return campo.validationMessage;
  return '';
};

// 1.2 · Muestra u oculta el error de un campo y devuelve si es válido
const validarCampo = (campo) => {
  const mensaje = mensajeDeError(campo);
  campo.nextElementSibling.textContent = mensaje;
  campo.classList.toggle('invalido', mensaje !== '');
  return mensaje === '';
};

// 1.3 · Aplica (o quita) el error personalizado de #horas según el límite de horas pendientes
const comprobarHoras = () => {
  const pendientes = tareas
    .filter((tarea) => tarea.estado !== 'hecha')
    .reduce((suma, tarea) => suma + tarea.horas, 0);
  const escritas = Number(campoHoras.value) || 0;

  if (pendientes + escritas > LIMITE_HORAS) {
    campoHoras.setCustomValidity(
      `Superas el límite de ${LIMITE_HORAS} h pendientes (ahora hay ${pendientes} h)`
    );
  } else {
    campoHoras.setCustomValidity('');
  }
};

// 1.4 · Deja el formulario como recién cargado
const limpiarFormulario = () => {
  formularioTarea.reset();
  campoHoras.setCustomValidity('');
  formularioTarea.querySelectorAll('.error').forEach((error) => {
    error.textContent = '';
  });
  formularioTarea.querySelectorAll('.invalido').forEach((campo) => {
    campo.classList.remove('invalido');
  });
};

// 1.5 · Eventos del formulario (change, input y keydown)
formularioTarea.addEventListener('change', (evento) => {
  comprobarHoras();
  validarCampo(evento.target);
});

formularioTarea.addEventListener('input', (evento) => {
  if (evento.target.classList.contains('invalido')) {
    comprobarHoras();
    validarCampo(evento.target);
  }
});

formularioTarea.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') {
    limpiarFormulario();
  }
});


// ============================================================
// APARTADO 2 · Cálculos con los datos (funciones puras)
// ============================================================

// 2.1 · Tareas cuyo título o asignatura contienen el texto buscado
const buscarTareas = (lista, texto) => {
  const buscado = texto.trim().toLowerCase();
  return lista.filter(
    (tarea) =>
      tarea.titulo.toLowerCase().includes(buscado) ||
      tarea.asignatura.toLowerCase().includes(buscado)
  );
};

// 2.2 · Reparte las tareas en un objeto con una lista por cada estado
const agruparPorEstado = (lista) => {
  return Object.fromEntries(
    ESTADOS.map((estado) => [estado, lista.filter((tarea) => tarea.estado === estado)])
  );
};

// 2.3 · Suma las horas de cada asignatura, de más a menos horas
const horasPorAsignatura = (lista) => {
  const totales = {};
  lista.forEach((tarea) => {
    totales[tarea.asignatura] = (totales[tarea.asignatura] || 0) + tarea.horas;
  });
  return Object.entries(totales)
    .map(([asignatura, horas]) => ({ asignatura, horas }))
    .sort((a, b) => b.horas - a.horas || a.asignatura.localeCompare(b.asignatura));
};


// ============================================================
// APARTADO 3 · Pintar la página
// ============================================================

// 3.1 · Devuelve (sin insertarla) la tarjeta <li> de una tarea
const crearTarjeta = (tarea) => {
  const posicion = ESTADOS.indexOf(tarea.estado);

  const tarjeta = document.createElement('li');
  tarjeta.className = `tarjeta prioridad-${tarea.prioridad}`;
  tarjeta.dataset.id = tarea.id;

  const titulo = document.createElement('strong');
  titulo.className = 'titulo';
  titulo.textContent = tarea.titulo;

  const meta = document.createElement('span');
  meta.className = 'meta';
  meta.textContent = `${tarea.asignatura} · ${tarea.horas} h`;

  const atras = document.createElement('button');
  atras.type = 'button';
  atras.dataset.accion = 'retroceder';
  atras.textContent = '←';
  atras.disabled = posicion === 0;

  const adelante = document.createElement('button');
  adelante.type = 'button';
  adelante.dataset.accion = 'avanzar';
  adelante.textContent = '→';
  adelante.disabled = posicion === ESTADOS.length - 1;

  tarjeta.append(titulo, meta, atras, adelante);
  return tarjeta;
};

// 3.2 · Reparte las tarjetas de lista en las tres columnas y actualiza los contadores
const pintarTablero = (lista) => {
  const grupos = agruparPorEstado(lista);
  ESTADOS.forEach((estado) => {
    columnas[estado].replaceChildren(...grupos[estado].map((tarea) => crearTarjeta(tarea)));
    contadores[estado].textContent = grupos[estado].length;
  });
};

// 3.3 · Pinta el resumen: horas por asignatura y progreso
const pintarResumen = (lista) => {
  const items = horasPorAsignatura(lista).map(({ asignatura, horas }) => {
    const li = document.createElement('li');
    li.textContent = `${asignatura} — ${horas} h`;
    return li;
  });
  listaHoras.replaceChildren(...items);

  const total = lista.length;
  const hechas = lista.filter((tarea) => tarea.estado === 'hecha').length;
  const porcentaje = total === 0 ? 0 : Math.round((hechas / total) * 100);
  progreso.textContent = `Hechas: ${hechas} de ${total} (${porcentaje} %)`;
};


// ============================================================
// APARTADO 4 · Interacción
// ============================================================

// 4.1 · Mueve una tarea `paso` columnas (+1 avanza, -1 retrocede)
const moverTarea = (id, paso) => {
  const tarea = tareas.find((t) => t.id === id);
  if (!tarea) return;

  const nuevaPosicion = ESTADOS.indexOf(tarea.estado) + paso;
  if (nuevaPosicion < 0 || nuevaPosicion >= ESTADOS.length) return;

  tarea.estado = ESTADOS[nuevaPosicion];
};

// 4.2 · Añade una tarea nueva al array y la devuelve
const anadirTarea = (datos) => {
  const id = tareas.reduce((mayor, t) => Math.max(mayor, t.id), 0) + 1;
  const tarea = {
    id,
    titulo: datos.titulo,
    asignatura: datos.asignatura,
    horas: datos.horas,
    estado: 'porhacer',
    prioridad: datos.prioridad
  };
  tareas.push(tarea);
  return tarea;
};

// 4.3 · Elimina del array las tareas hechas y devuelve cuántas eran
const archivarHechas = () => {
  const antes = tareas.length;
  tareas = tareas.filter((tarea) => tarea.estado !== 'hecha');
  return antes - tareas.length;
};

// 4.4 · Eventos del tablero, del buscador y del botón «Archivar hechas», y primer pintado
tablero.addEventListener('click', (evento) => {
  const boton = evento.target.closest('button[data-accion]');
  if (!boton) return;

  const id = Number(boton.closest('.tarjeta').dataset.id);
  moverTarea(id, boton.dataset.accion === 'avanzar' ? 1 : -1);
  repintar();
});

buscador.addEventListener('input', () => {
  repintar();
});

botonArchivar.addEventListener('click', () => {
  archivarHechas();
  repintar();
});

repintar();

// 4.5 · Envío del formulario
formularioTarea.addEventListener('submit', (evento) => {
  evento.preventDefault();

  comprobarHoras();

  // Se validan todos los campos (sin cortar en el primero) para mostrar todos los errores
  const campos = [...formularioTarea.elements].filter((campo) => campo.name);
  campos.forEach((campo) => validarCampo(campo));

  const primerInvalido = campos.find((campo) => campo.classList.contains('invalido'));
  if (primerInvalido) {
    primerInvalido.focus();
    return;
  }

  const titulo = formularioTarea.elements.titulo.value.trim();
  anadirTarea({
    titulo,
    asignatura: formularioTarea.elements.asignatura.value,
    horas: Number(campoHoras.value),
    prioridad: formularioTarea.elements.prioridad.value
  });

  limpiarFormulario();
  repintar();
  mensajeFormulario.textContent = `Tarea añadida: ${titulo}`;
});
