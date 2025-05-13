<script setup>
import TaskList from './components/TaskList.vue';
import ShoppingCar from './components/ShoppingCar.vue';
import FormValidation from './components/FormValidation.vue';
</script>

<template>
  <main>
    
    <div>
      <h2>Lista de Tareas</h2>
      <TaskList />
    </div>

    <hr>

    <div>
      <h2>Validación de Formulario</h2>
      <FormValidation />
    </div>

    <hr>

    <div>
      <h2>Carrito de Compras</h2>
      <ShoppingCar />
    </div>

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  h2{
    text-align: center;
    color: white;
    margin-top: 1rem;
  }
}
</style>
