<template>
    <div v-if="item">
        <h2>Editar Nombre</h2>
        <form @submit.prevent="handleUpdate">
            <input v-model="localItem.name" required />
            <button type="submit">Actualizar</button>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { reactive, watch } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    item: Object
});
const emit = defineEmits(['refresh']);

const localItem = reactive({ id: null, name: '' });

watch(
    () => props.item,
    (newVal) => {
        if (newVal) {
            localItem.id = newVal.id;
            localItem.name = newVal.name;
        }
    },
    { immediate: true }
);

const handleUpdate = async () => {
    await axios.put(`http://localhost:3000/items/${localItem.id}`, { name: localItem.name });
    emit('refresh');
};
</script>

<style scoped>
form {
    margin-top: 20px;
    display: flex;
    gap: 10px;
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
    background-color: #ff9800;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background-color: #fb8c00;
}
</style>
