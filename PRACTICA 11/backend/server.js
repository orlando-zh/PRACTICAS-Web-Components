const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Leer la "base de datos"
const readData = () => {
  const data = fs.readFileSync('./data.json', 'utf8');
  return JSON.parse(data);
};

// Escribir en la "base de datos"
const writeData = (data) => {
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
};

// Endpoints

// Obtener todos
app.get('/items', (req, res) => {
  const items = readData();
  res.json(items);
});

// Crear nuevo
app.post('/items', (req, res) => {
  const items = readData();
  const newItem = { id: Date.now(), ...req.body };
  items.push(newItem);
  writeData(items);
  res.json(newItem);
});

// Actualizar
app.put('/items/:id', (req, res) => {
  const items = readData();
  const id = parseInt(req.params.id);
  const updatedItems = items.map(item => item.id === id ? { ...item, ...req.body } : item);
  writeData(updatedItems);
  res.json({ message: 'Item actualizado' });
});

// Eliminar
app.delete('/items/:id', (req, res) => {
  const items = readData();
  const id = parseInt(req.params.id);
  const filteredItems = items.filter(item => item.id !== id);
  writeData(filteredItems);
  res.json({ message: 'Item eliminado' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
