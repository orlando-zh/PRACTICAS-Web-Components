<template>
    <div class="card">
        <h3>📝 Lista de Tareas</h3>
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                <label>
                    <input type="checkbox" v-model="tarea.completada" />
                    <span :class="{ done: tarea.completada }">{{ tarea.texto }}</span>
                </label>
            </li>
        </ul>
        <div class="resumen">
            <p>✅ Completadas: {{ completadas.length }}</p>
            <p>⌛ Pendientes: {{ pendientes.length }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const tareas = ref([
    { texto: 'Hacer ejercicio', completada: true },
    { texto: 'Estudiar Vue', completada: false },
    { texto: 'Preparar clase', completada: false }
]);

const completadas = computed(() => tareas.value.filter(t => t.completada));
const pendientes = computed(() => tareas.value.filter(t => !t.completada));
</script>

<style scoped>
.card {
    background-color: #1e1e2f;
    padding: 1rem;
    border-radius: 12px;
    color: #e0e0e0;
    margin-bottom: 1rem;
}

ul {
    padding-left: 1rem;
}

li {
    margin: 0.5rem 0;
}

.done {
    text-decoration: line-through;
    color: #8aff8a;
}

.resumen {
    margin-top: 1rem;
    font-weight: bold;
}

input{
    margin-right: 5px;
}
</style>