
const playlist = [
  { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 354 },
  { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
  { titulo: "Imagine", artista: "John Lennon", duracion: 183 },
  { titulo: "Smells Like Teen Spirit", artista: "Nirvana", duracion: 301 },
  { titulo: "Billie Jean", artista: "Michael Jackson", duracion: 294 },
  { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 482 },
  { titulo: "Like a Rolling Stone", artista: "Bob Dylan", duracion: 369 },
  { titulo: "Yesterday", artista: "The Beatles", duracion: 125 },
  { titulo: "Wonderwall", artista: "Oasis", duracion: 258 },
  { titulo: "Losing My Religion", artista: "R.E.M.", duracion: 269 },
  { titulo: "Come As You Are", artista: "Nirvana", duracion: 219 },
];

// 1. Filtrar las canciones que duran más de 180 segundos
const cancionesLargas = playlist.filter((cancion) => cancion.duracion > 180);

// 2. Convertir cada canción filtrada en un mensaje
const mensajes = cancionesLargas.map(
  (cancion) =>
    `La canción '${cancion.titulo}' de ${cancion.artista} dura ${cancion.duracion} segundos.`
);

// 3. Imprimir el arreglo de mensajes
console.log(mensajes);