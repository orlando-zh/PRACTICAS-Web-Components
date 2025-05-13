<template>
    <div>
        <h2>agregar nombre</h2>
        <form @submit.prevent="handleAdd">

        </form>
    </div>
</template>


<script setup>
import  axios from 'axios';
import { ref, defineEmits } from 'vue';

const name = ref('');
const emit = defineEmits(['refresh']);


const handleAdd = async () => {
    try {
        await axios.post('http://localhost:3000/items', { name: name.value });
        name.value = '';
        emit('refresh');
    } catch (error) {
        alert('Error al agregar item: ', error);
    }
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