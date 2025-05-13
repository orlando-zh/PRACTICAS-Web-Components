const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
require('dotenv').config(); // Para variables de entorno

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mi_base_datos',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Endpoints

// Obtener todos los items
app.get('/items', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM items');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener items:', error);
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});

// Crear nuevo item
app.post('/items', async (req, res) => {
  try {
    // Extraemos los campos de req.body
    const { nombre, descripcion, precio } = req.body;
    
    const [result] = await pool.query(
      'INSERT INTO items (nombre, descripcion, precio) VALUES (?, ?, ?)',
      [nombre, descripcion, precio]
    );
    
    // Obtenemos el item recién creado para devolverlo
    const [newItem] = await pool.query('SELECT * FROM items WHERE id = ?', [result.insertId]);
    
    res.status(201).json(newItem[0]);
  } catch (error) {
    console.error('Error al crear item:', error);
    res.status(500).json({ error: 'Error al crear el item' });
  }
});

// Actualizar item
app.put('/items/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    // Creamos dinámicamente la consulta de actualización
    const fields = Object.keys(req.body).map(key => `${key} = ?`).join(', ');
    const values = Object.values(req.body);
    
    // Añadimos el ID al final del array de valores
    values.push(id);
    
    const [result] = await pool.query(
      `UPDATE items SET ${fields} WHERE id = ?`,
      values
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Item no encontrado' });
    }
    
    res.json({ message: 'Item actualizado' });
  } catch (error) {
    console.error('Error al actualizar item:', error);
    res.status(500).json({ error: 'Error al actualizar el item' });
  }
});

// Eliminar item
app.delete('/items/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const [result] = await pool.query('DELETE FROM items WHERE id = ?', [id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Item no encontrado' });
    }
    
    res.json({ message: 'Item eliminado' });
  } catch (error) {
    console.error('Error al eliminar item:', error);
    res.status(500).json({ error: 'Error al eliminar el item' });
  }
});

// Iniciar servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3000}`);
});