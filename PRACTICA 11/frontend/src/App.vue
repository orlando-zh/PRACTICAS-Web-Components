<template>
  <div class="container">
    <h1>Api de Nombres</h1>

    <ItemForm @refresh="fetchItems" />
    <ItemList :items="items" @refresh="fetchItems" @edit="selectItem" />
    <ItemEdit v-if="selectedItem" :item="selectedItem" @refresh="onEdited" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import ItemForm from './components/ItemForm.vue';
import ItemList from './components/ItemList.vue';
import ItemEdit from './components/ItemEdit.vue';

const items = ref([]);
const selectedItem = ref(null);

const fetchItems = async () => {
  const response = await axios.get('http://localhost:3000/items');
  items.value = response.data;
  selectedItem.value = null;
};

const selectItem = (item) => {
  selectedItem.value = { ...item }; // Clonamos para editar
};

const onEdited = () => {
  fetchItems();
};

fetchItems(); // Al montar
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}
</style>
