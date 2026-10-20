// ==========================================================
// EJER_04.1 · Eventos en JavaScript
// Escribe aquí tus soluciones (módulo ES6).
// - Nombres de variables y funciones en español.
// - Usa addEventListener (no onclick en el HTML).
// ==========================================================

// ---------- Ejercicio 1 · Contador de clics ----------
const botonRestar = document.getElementById("boton-restar");
const botonSumar = document.getElementById("boton-sumar");
const botonReiniciar = document.getElementById("boton-reiniciar");
const valorContador = document.getElementById("valor-contador");

let contador = 0;

function mostrarContador() {
  valorContador.textContent = contador;
  valorContador.style.color = contador < 0 ? "var(--rojo)" : "";
}

botonSumar.addEventListener("click", () => {
  contador++;
  mostrarContador();
});

botonRestar.addEventListener("click", () => {
  contador--;
  mostrarContador();
});

botonReiniciar.addEventListener("click", () => {
  contador = 0;
  mostrarContador();
});

// ---------- Ejercicio 2 · Tarjeta sensible al ratón ----------
const tarjetaRaton = document.getElementById("tarjeta-raton");
const mensajeRaton = document.getElementById("mensaje-raton");

tarjetaRaton.addEventListener("mouseenter", () => {
  tarjetaRaton.classList.add("activa");
  mensajeRaton.textContent = "¡Estás dentro!";
});

tarjetaRaton.addEventListener("mouseleave", () => {
  tarjetaRaton.classList.remove("activa");
  mensajeRaton.textContent = "Pasa el ratón por la tarjeta";
});

tarjetaRaton.addEventListener("dblclick", () => {
  tarjetaRaton.textContent = "¡Doble clic!";
});

// ---------- Ejercicio 3 · Espejo de texto ----------
const campoTexto = document.getElementById("campo-texto");
const ecoTexto = document.getElementById("eco-texto");
const caracteresRestantes = document.getElementById("caracteres-restantes");

campoTexto.addEventListener("input", () => {
  const maximo = Number(campoTexto.getAttribute("maxlength"));
  const restantes = maximo - campoTexto.value.length;

  ecoTexto.textContent = campoTexto.value;
  caracteresRestantes.textContent = restantes;
  caracteresRestantes.classList.toggle("poco", restantes <= 5);
});

// ---------- Ejercicio 4 · Mover con el teclado ----------
const areaJuego = document.getElementById("area-juego");
const cuadrado = document.getElementById("cuadrado");
const posicionCuadrado = document.getElementById("posicion-cuadrado");

const PASO = 10;
let posX = 0;
let posY = 0;

function actualizarCuadrado() {
  cuadrado.style.left = posX + "px";
  cuadrado.style.top = posY + "px";
  posicionCuadrado.textContent = `Posición: (${posX}, ${posY})`;
}

document.addEventListener("keydown", (evento) => {
  const maxX = areaJuego.clientWidth - cuadrado.offsetWidth;
  const maxY = areaJuego.clientHeight - cuadrado.offsetHeight;

  switch (evento.key) {
    case "ArrowLeft":
      posX = Math.max(0, posX - PASO);
      break;
    case "ArrowRight":
      posX = Math.min(maxX, posX + PASO);
      break;
    case "ArrowUp":
      posY = Math.max(0, posY - PASO);
      break;
    case "ArrowDown":
      posY = Math.min(maxY, posY + PASO);
      break;
    case " ":
      posX = 0;
      posY = 0;
      break;
    default:
      return; // otras teclas: no hacemos nada
  }

  evento.preventDefault(); // evita que la página haga scroll
  actualizarCuadrado();
});

// ---------- Ejercicio 5 · Paleta de colores ----------
const paleta = document.getElementById("paleta");
const lienzo = document.getElementById("lienzo");
const nombreColor = document.getElementById("nombre-color");

// Un solo escuchador en la paleta (delegación de eventos)
paleta.addEventListener("click", (evento) => {
  const muestra = evento.target.closest(".muestra");
  if (!muestra) return;

  lienzo.style.background = muestra.getAttribute("data-color");
  nombreColor.textContent = muestra.getAttribute("data-nombre");
});

// ---------- Ejercicio 6 · Grupo con foco ----------
const grupoContacto = document.getElementById("grupo-contacto");
const mensajeFoco = document.getElementById("mensaje-foco");

// focusin y focusout burbujean (focus y blur no)
grupoContacto.addEventListener("focusin", (evento) => {
  grupoContacto.classList.add("activo");
  mensajeFoco.textContent = `Editando: ${evento.target.getAttribute("placeholder")}`;
});

grupoContacto.addEventListener("focusout", (evento) => {
  // Si el foco pasa a otro campo del mismo grupo, no hacemos nada
  if (grupoContacto.contains(evento.relatedTarget)) return;

  grupoContacto.classList.remove("activo");
  mensajeFoco.textContent = "Ningún campo activo";
});

// ---------- Ejercicio 7 · Burbuja y captura ----------
const cajaExterna = document.getElementById("caja-externa");
const cajaMedia = document.getElementById("caja-media");
const cajaInterna = document.getElementById("caja-interna");
const registroFlujo = document.getElementById("registro-flujo");
const botonLimpiarFlujo = document.getElementById("boton-limpiar-flujo");

function registrar(texto) {
  const linea = document.createElement("li");
  linea.textContent = texto;
  registroFlujo.appendChild(linea);
}

const cajas = [
  { elemento: cajaExterna, nombre: "Externa" },
  { elemento: cajaMedia, nombre: "Media" },
  { elemento: cajaInterna, nombre: "Interna" },
];

for (const { elemento, nombre } of cajas) {
  // a) Fase de burbuja (por defecto)
  elemento.addEventListener("click", () => registrar(nombre));

  // b) Fase de captura
  elemento.addEventListener("click", () => registrar(`${nombre} (captura)`), true);
}

botonLimpiarFlujo.addEventListener("click", () => {
  registroFlujo.innerHTML = "";
});

// Orden al pulsar la caja interna:
//   Externa (captura) → Media (captura) → Interna (captura)
//   → Interna → Media → Externa
// (en el propio objetivo, los escuchadores se ejecutan en el orden en que se añadieron)

// ---------- Ejercicio 8 · Detener y cancelar ----------
const tarjetaProducto = document.getElementById("tarjeta-producto");
const botonComprar = document.getElementById("boton-comprar");
const enlaceInfo = document.getElementById("enlace-info");
const mensajeEstado = document.getElementById("mensaje-estado");

function escribirEstado(texto) {
  // El CSS usa white-space: pre-line, así que "\n" crea una línea nueva
  mensajeEstado.textContent += (mensajeEstado.textContent ? "\n" : "") + texto;
}

tarjetaProducto.addEventListener("click", () => {
  escribirEstado("Has pulsado la tarjeta");
});

botonComprar.addEventListener("click", (evento) => {
  evento.stopPropagation(); // la tarjeta no se entera del clic
  escribirEstado("Producto comprado");
});

enlaceInfo.addEventListener("click", (evento) => {
  evento.preventDefault(); // cancela la navegación del enlace
  escribirEstado("Enlace bloqueado");
});