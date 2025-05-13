<template>
    <div class="card">
        <h3>🛍️ Productos Disponibles</h3>
        <div class="productos">
            <div v-for="(producto, index) in productos" :key="index" class="producto">
                <p>{{ producto.nombre }} - ${{ producto.precio }}</p>
                <button @click="agregarAlCarrito(producto)">Agregar</button>
            </div>
        </div>

        <h3>Carrito</h3>
        <div v-if="carrito.length">
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in carrito" :key="index">
                        <td>{{ item.nombre }}</td>
                        <td>
                            <button @click="cambiarCantidad(item, -1)">-</button>
                            {{ item.cantidad }}
                            <button @click="cambiarCantidad(item, 1)">+</button>
                        </td>
                        <td>${{ (item.precio * item.cantidad).toFixed(2) }}</td>
                        <td><button @click="eliminarDelCarrito(item)">❌</button></td>
                    </tr>
                </tbody>
            </table>

            <div class="resumen">
                <p>Subtotal: <span>${{ subtotal.toFixed(2) }}</span></p>
                <p>IVA (13%): <span>${{ iva.toFixed(2) }}</span></p>
                <p>Total: <span class="total">${{ total.toFixed(2) }}</span></p>
            </div>
        </div>
        <p v-else>Tu carrito está vacío.</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const productos = ref([
    { nombre: 'Mouse', precio: 15.99 },
    { nombre: 'Teclado', precio: 35.50 },
    { nombre: 'Monitor', precio: 219.99 },
    { nombre: 'Audífonos', precio: 49.99 }
]);

const carrito = ref([]);

const agregarAlCarrito = (producto) => {
    const existente = carrito.value.find(item => item.nombre === producto.nombre);
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.value.push({ ...producto, cantidad: 1 });
    }
};

const cambiarCantidad = (item, delta) => {
    item.cantidad += delta;
    if (item.cantidad <= 0) {
        carrito.value = carrito.value.filter(p => p !== item);
    }
};

const eliminarDelCarrito = (item) => {
    carrito.value = carrito.value.filter(p => p !== item);
};

const subtotal = computed(() =>
    carrito.value.reduce((sum, item) => sum + item.precio * item.cantidad, 0)
);
const iva = computed(() => subtotal.value * 0.13);
const total = computed(() => subtotal.value + iva.value);
</script>

<style scoped>
.card {
    background-color: #1e1e2f;
    padding: 1rem;
    border-radius: 12px;
    color: #e0e0e0;
}

.productos {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
}

.producto {
    background-color: #2d2d3a;
    padding: 0.8rem;
    border-radius: 8px;
    flex: 1 1 150px;
}

.producto button {
    margin-top: 0.5rem;
    width: 100%;
    background: #4cd137;
    border: none;
    padding: 0.4rem;
    color: #000;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
}

table {
    width: 100%;
    margin-top: 0.5rem;
    border-collapse: collapse;
}

th,
td {
    padding: 0.5rem;
    text-align: center;
}

button {
    background: #444;
    border: none;
    padding: 0.3rem 0.6rem;
    color: white;
    cursor: pointer;
    border-radius: 4px;
}

.resumen {
    margin-top: 1rem;
    font-weight: bold;
}

.total {
    color: #4cd137;
}
</style>