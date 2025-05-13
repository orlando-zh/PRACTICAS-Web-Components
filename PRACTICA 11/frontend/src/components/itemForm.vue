<template>
    <div>
        <h2>Agregar Nombre</h2>
        <form @submit.prevent="handleAdd">
            <input v-model="name" placeholder="Nombre" required />
            <button type="submit">Agregar</button>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { defineEmits } from 'vue';

const name = ref('');
const emit = defineEmits(['refresh']);

const handleAdd = async () => {
    await axios.post('http://localhost:3000/items', { name: name.value });
    name.value = '';
    emit('refresh');
};
</script>

<style scoped>
form {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

input {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #45a049;
}
</style>
