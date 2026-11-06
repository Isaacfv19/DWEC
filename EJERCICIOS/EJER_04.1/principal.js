// ==========================================================
// EJER_04.1 · Eventos en JavaScript
// Escribe aquí tus soluciones (módulo ES6).
// - Nombres de variables y funciones en español.
// - Usa addEventListener (no onclick en el HTML).
// ==========================================================

// ---------- Ejercicio 1 · Contador de clics ----------
const valorContador = document.getElementById('valor-contador');
let contador = 0;

function actualizarContador() {
  valorContador.textContent = contador;
  // Rojo si es negativo; si no, se quita el color en línea y vuelve al del CSS
  valorContador.style.color = contador < 0 ? 'var(--rojo)' : '';
}

document.getElementById('boton-sumar').addEventListener('click', () => {
  contador++;
  actualizarContador();
});

document.getElementById('boton-restar').addEventListener('click', () => {
  contador--;
  actualizarContador();
});

document.getElementById('boton-reiniciar').addEventListener('click', () => {
  contador = 0;
  actualizarContador();
});


// ---------- Ejercicio 2 · Tarjeta sensible al ratón ----------
const tarjetaRaton = document.getElementById('tarjeta-raton');
const mensajeRaton = document.getElementById('mensaje-raton');

tarjetaRaton.addEventListener('mouseenter', () => {
  tarjetaRaton.classList.add('activa');
  mensajeRaton.textContent = '¡Estás dentro!';
});

tarjetaRaton.addEventListener('mouseleave', () => {
  tarjetaRaton.classList.remove('activa');
  mensajeRaton.textContent = 'Pasa el ratón por la tarjeta';
});

tarjetaRaton.addEventListener('dblclick', () => {
  tarjetaRaton.textContent = '¡Doble clic!';
});


// ---------- Ejercicio 3 · Espejo de texto ----------
const campoTexto = document.getElementById('campo-texto');
const ecoTexto = document.getElementById('eco-texto');
const caracteresRestantes = document.getElementById('caracteres-restantes');

campoTexto.addEventListener('input', () => {
  const restantes = campoTexto.maxLength - campoTexto.value.length;
  ecoTexto.textContent = campoTexto.value;
  caracteresRestantes.textContent = restantes;
  // Con 5 o menos, el número se pone en naranja (clase 'poco')
  caracteresRestantes.classList.toggle('poco', restantes <= 5);
});


// ---------- Ejercicio 4 · Mover con el teclado ----------
const areaJuego = document.getElementById('area-juego');
const cuadrado = document.getElementById('cuadrado');
const posicionCuadrado = document.getElementById('posicion-cuadrado');
const PASO = 10;
let posicionX = 0;
let posicionY = 0;

function pintarCuadrado() {
  cuadrado.style.left = posicionX + 'px';
  cuadrado.style.top = posicionY + 'px';
  posicionCuadrado.textContent = `Posición: (${posicionX}, ${posicionY})`;
}

document.addEventListener('keydown', (evento) => {
  // Límites: el cuadrado no puede salirse del área
  const maximoX = areaJuego.clientWidth - cuadrado.offsetWidth;
  const maximoY = areaJuego.clientHeight - cuadrado.offsetHeight;

  switch (evento.key) {
    case 'ArrowRight':
      posicionX = Math.min(posicionX + PASO, maximoX);
      break;
    case 'ArrowLeft':
      posicionX = Math.max(posicionX - PASO, 0);
      break;
    case 'ArrowDown':
      posicionY = Math.min(posicionY + PASO, maximoY);
      break;
    case 'ArrowUp':
      posicionY = Math.max(posicionY - PASO, 0);
      break;
    case ' ':
      posicionX = 0;
      posicionY = 0;
      break;
    default:
      return; // otras teclas: no hacemos nada
  }

  // Evita que las flechas y el espacio desplacen la página
  evento.preventDefault();
  pintarCuadrado();
});


// ---------- Ejercicio 5 · Paleta de colores ----------
const paleta = document.getElementById('paleta');
const lienzo = document.getElementById('lienzo');
const nombreColor = document.getElementById('nombre-color');

// Delegación: un solo escuchador en la paleta
paleta.addEventListener('click', (evento) => {
  const muestra = evento.target.closest('.muestra');
  if (!muestra) return; // clic en un hueco de la paleta

  const color = muestra.getAttribute('data-color');
  const nombre = muestra.getAttribute('data-nombre');

  lienzo.style.background = color;
  nombreColor.textContent = nombre;
});


// ---------- Ejercicio 6 · Grupo con foco ----------
// focus y blur NO burbujean; focusin y focusout sí, así que sirven para delegar.
const grupoContacto = document.getElementById('grupo-contacto');
const mensajeFoco = document.getElementById('mensaje-foco');

grupoContacto.addEventListener('focusin', (evento) => {
  grupoContacto.classList.add('activo');
  mensajeFoco.textContent = `Editando: ${evento.target.placeholder}`;
});

grupoContacto.addEventListener('focusout', (evento) => {
  // Si el foco pasa a otro campo del mismo grupo, no salimos del grupo
  if (grupoContacto.contains(evento.relatedTarget)) return;

  grupoContacto.classList.remove('activo');
  mensajeFoco.textContent = 'Ningún campo activo';
});


// ---------- Ejercicio 7 · Burbuja y captura ----------
// a) PREDICCIÓN (fase de burbuja) al pulsar la caja interna:
//    Interna → Media → Externa (de dentro hacia fuera).
// b) Con captura añadida, el orden completo es:
//    Externa (captura) → Media (captura) → Interna (captura) → Interna → Media → Externa
const registroFlujo = document.getElementById('registro-flujo');

function anotarEnRegistro(texto) {
  const elemento = document.createElement('li');
  elemento.textContent = texto;
  registroFlujo.appendChild(elemento);
}

const cajas = [
  { id: 'caja-externa', nombre: 'Externa' },
  { id: 'caja-media', nombre: 'Media' },
  { id: 'caja-interna', nombre: 'Interna' }
];

cajas.forEach(({ id, nombre }) => {
  const caja = document.getElementById(id);

  // Fase de burbuja (comportamiento por defecto)
  caja.addEventListener('click', () => anotarEnRegistro(nombre));

  // Fase de captura: tercer argumento a true
  caja.addEventListener('click', () => anotarEnRegistro(`${nombre} (captura)`), true);
});

document.getElementById('boton-limpiar-flujo').addEventListener('click', () => {
  registroFlujo.innerHTML = '';
});


// ---------- Ejercicio 8 · Detener y cancelar ----------
const tarjetaProducto = document.getElementById('tarjeta-producto');
const botonComprar = document.getElementById('boton-comprar');
const enlaceInfo = document.getElementById('enlace-info');
const mensajeEstado = document.getElementById('mensaje-estado');

// Cada mensaje se añade como una línea nueva
function agregarMensaje(texto) {
  mensajeEstado.textContent = mensajeEstado.textContent
    ? mensajeEstado.textContent + '\n' + texto
    : texto;
}

tarjetaProducto.addEventListener('click', () => {
  agregarMensaje('Has pulsado la tarjeta');
});

botonComprar.addEventListener('click', (evento) => {
  evento.stopPropagation(); // el clic no llega a la tarjeta
  agregarMensaje('Producto comprado');
});

enlaceInfo.addEventListener('click', (evento) => {
  evento.preventDefault(); // cancela la navegación del enlace
  agregarMensaje('Enlace bloqueado');
});
