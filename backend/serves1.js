const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});


app.get('/destinos', (req, res) => {
  const destinos = [
    { name: 'Muzo', description: 'Un lugar turístico famoso por sus esmeraldas.' },
    { name: 'Zipaquirá', description: 'Conocida por su catedral de sal.' },
  ];
  res.json(destinos);
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


