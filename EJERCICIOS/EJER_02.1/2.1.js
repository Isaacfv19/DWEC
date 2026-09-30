
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

playlist.forEach((cancion) => {
  console.log(`${cancion.titulo} - ${cancion.artista}`);
});