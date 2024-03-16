const express = require('express');
const app = express();
const puerto = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`La aplicación está escuchando en http://localhost:${puerto}`);
});
