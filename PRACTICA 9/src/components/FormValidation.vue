<template>
    <div class="card">
      <h3>🧾 Registro</h3>
      <input v-model="nombre" placeholder="Nombre completo" />
      <input v-model="email" placeholder="Correo electrónico" />
      <input type="password" v-model="clave" placeholder="Contraseña" />
  
      <ul v-if="errores.length" class="errores">
        <li v-for="(error, index) in errores" :key="index">⚠️ {{ error }}</li>
      </ul>
      <p v-else class="valido">Formulario válido ✅</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const nombre = ref('');
  const email = ref('');
  const clave = ref('');
  
  const errores = computed(() => {
    const lista = [];
  
    if (nombre.value.trim().length < 3) {
      lista.push('El nombre debe tener al menos 3 caracteres');
    }
  
    if (!email.value.includes('@')) {
      lista.push('Correo no válido');
    }
  
    if (clave.value.length < 6) {
      lista.push('La contraseña debe tener al menos 6 caracteres');
    }
  
    return lista;
  });
  </script>
  
  <style scoped>
  .card {
    background-color: #1e1e2f;
    padding: 1rem;
    border-radius: 12px;
    color: #e0e0e0;
    margin-bottom: 1rem;
  }
  input {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin: 0.4rem 0;
    border: none;
    border-radius: 8px;
    background-color: #2d2d3a;
    color: white;
  }
  .errores {
    color: #ff6b6b;
    margin-top: 0.5rem;
    padding-left: 1rem;
  }
  .valido {
    color: #7bed9f;
    margin-top: 0.5rem;
  }
  </style>
  