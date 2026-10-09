// ejercicio-01.js: Creando tu primera lista de reproducción

const playlist = [ // Array de objetos: cada objeto es una canción con titulo (string), artista (string) y duracion (segundos)
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

playlist.forEach((cancion) => { // forEach ejecuta la función una vez por cada canción del array
  console.log(`${cancion.titulo} - ${cancion.artista}`); // Imprime el título y el artista con un template string
});