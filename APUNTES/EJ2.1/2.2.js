// ejercicio-02.js: Filtrando canciones largas

const playlist = [ // Misma playlist del ejercicio anterior
  { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 354 },
  { titulo: "Billie Jean", artista: "Michael Jackson", duracion: 294 },
  { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
  { titulo: "Smells Like Teen Spirit", artista: "Nirvana", duracion: 301 },
  { titulo: "Imagine", artista: "John Lennon", duracion: 187 },
  { titulo: "Like a Rolling Stone", artista: "Bob Dylan", duracion: 369 },
  { titulo: "Wonderwall", artista: "Oasis", duracion: 258 },
  { titulo: "Yesterday", artista: "The Beatles", duracion: 125 },
  { titulo: "Shape of You", artista: "Ed Sheeran", duracion: 234 },
  { titulo: "Despacito", artista: "Luis Fonsi", duracion: 229 },
];

const cancionesLargas = playlist.filter((cancion) => cancion.duracion > 180); // filter devuelve un array nuevo solo con las canciones de más de 180 segundos

const mensajes = cancionesLargas.map((cancion) => `La canción '${cancion.titulo}' de ${cancion.artista} dura ${cancion.duracion} segundos.`); // map convierte cada canción en un string con el mensaje

console.log(mensajes); // Imprime el array de mensajes (Yesterday queda fuera por durar 125 s)