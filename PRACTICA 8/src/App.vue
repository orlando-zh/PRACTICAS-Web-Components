<script setup>
/*Importando los componentes necesarios*/
import ProductCard from './components/ProductCard.vue'
import DinamicTaskList from './components/DinamicTaskList.vue'
import UserCard from './components/UserCard.vue'
import { ref } from 'vue'

const productos = [
  {
    nombre: 'Laptop Gamer ASUS',
    descripcion: 'Procesador Ryzen 7, 16GB RAM, RTX 3060.'
  },
  {
    nombre: 'Teclado Mecánico RGB',
    descripcion: 'Switches rojos, iluminación personalizable.'
  },
  {
    nombre: 'Monitor 144Hz',
    descripcion: 'Pantalla Full HD de 24 pulgadas con alta tasa de refresco.'
  }
]

const tareas = ref([
  { texto: 'Estudiar Vue.js', estado: false },
  { texto: 'Preparar presentación', estado: false },
  { texto: 'Subir repositorio a GitHub', estado: false }
])

function toggleTarea(index) {
  tareas.value[index].estado = !tareas.value[index].estado
}

const usuarios = [
  { nombre: 'Ana López', correo: 'ana@example.com', rol: 'Admin' },
  { nombre: 'Carlos Pérez', correo: 'carlos@example.com', rol: 'Editor' },
  { nombre: 'Sofía Gómez', correo: 'sofia@example.com', rol: 'Viewer' }
]

</script>

<template>
  <div>
    <h1 style="margin-top: 0;">Catálogo de Productos</h1>
    <ProductCard 
      v-for="(item, index) in productos" 
      :key="index" 
      :nombre="item.nombre" 
      :descripcion="item.descripcion" 
    />
  </div>

  <hr>

  <div>
    <h1>Lista de Tareas</h1>
    <ul>
      <DinamicTaskList 
        v-for="(item, index) in tareas" 
        :key="index" 
        :tarea="item" 
        :index="index" 
        @toggle-tarea="toggleTarea" 
      />
    </ul>
  </div>

  <hr>

  <div>
    <h1>Usuarios registrados</h1>
    <UserCard
      v-for="(user, index) in usuarios"
      :key="index"
      :nombre="user.nombre"
      :correo="user.correo"
      :rol="user.rol"
    />
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
  text-align: center;
  margin: 2rem;
}

ul {
  padding: 0;
  list-style: none;
}
</style>
