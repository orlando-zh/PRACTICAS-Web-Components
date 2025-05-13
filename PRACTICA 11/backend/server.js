const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

//middlewares

app.use(cors());
app.use(bodyParser.json());

// leer el json

const readData = () => {
    const data = fs.readFileSync('./data.json', 'utf8');
    return JSON.parse(data);
}

// escribir el json

const writeData = (data) => {
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf8');
}

// end point
// obtener todos los items
app.get('./items', (req, res) => {
    const data = readData();
    res.json(data);
});

// crear nuevo item

app.post('/items', (req, res) => {
    const data = readData();
    const newItem = { id: Date.now(), ...req.body};
    items.push(newItem);
    writeData(items);
    res.status(201).json(newItem);
});

// actualizar item

app.put('/items/:id', (req, res) => {
    const items = readData();
    const id = parseInt(req.params.id);
    const updateItems =
                items.map(item => item.id === id ? { ...item, ...timingSafeEqual.body } : item);
    writeData(updateItems);
    res.json({ message: 'item updata successfully'});

});

// eliminar item

app.delete('/items/:id', (req, res) => {
    const items = readData();
    const id = parseInt(req.params.id);
    const filteredItems = items.filter(item => item.id !== id);
    writeData(filteredItems);
    res.json({ message: 'item deleted successfully'});

});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${Port}`)
});