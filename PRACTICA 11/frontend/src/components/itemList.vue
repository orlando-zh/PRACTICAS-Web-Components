<template>
    <div>
        <h2>Lista de Nombre</h2>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }}
                <button @click="$emit('edit', item)">Editar</button>
                <button @click="handleDelete(item.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import axios from 'axios';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    items: Array
});
const emit = defineEmits(['refresh', 'edit']);

const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/items/${id}`);
    emit('refresh');
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  background: white;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

button {
  margin-left: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

button:first-of-type {
  background-color: #2196F3;
  color: white;
}

button:first-of-type:hover {
  background-color: #1976D2;
}

button:last-of-type {
  background-color: #f44336;
  color: white;
}

button:last-of-type:hover {
  background-color: #d32f2f;
}
</style>
