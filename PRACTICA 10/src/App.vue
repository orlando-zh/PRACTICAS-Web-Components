<template>
  <div class="app">
    <header>
      <h1>Pokédex en Vue.js</h1>
      <p>Ejemplo de consumo de PokeAPI con Composition API</p>
    </header>
    
    <main>
      <PokemonCard />
    </main>
    
    <footer>
      <p>Creado con Vue.js y PokeAPI</p>
    </footer>
  </div>
</template>

<script setup>
import PokemonCard from './components/PokeCard.vue';
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #e3350d;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
}

header h1 {
  margin-bottom: 0.5rem;
}

main {
  flex: 1;
  padding: 2rem 0;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}
</style>