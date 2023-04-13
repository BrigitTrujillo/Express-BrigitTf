const express = require('express');
const app = express();

const clientes = [
  { id: 1, nombre: 'Brigit', apellido: 'Trujillo', edad: 30},
  { id: 2, nombre: 'Diego',  apellido: 'Verde', edad: 25 },
  { id: 3, nombre: 'Alexa',  apellido: 'Flores', edad: 40 }
];

const productos = [
  { id: 1, nombre: 'Computadora',  marca : 'Dell', precio: 500 },
  { id: 2, nombre: 'Televisor', marca : 'Dell',  precio: 400 },
  { id: 3, nombre: 'Maus',marca : 'Dell',  precio: 450 }
];

app.get('/clientes', (req, res) => {
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  res.json(productos);
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
