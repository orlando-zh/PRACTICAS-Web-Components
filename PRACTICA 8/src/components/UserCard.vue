<script setup>
defineProps({
    nombre: String,
    correo: String,
    rol: String
})
</script>

<template>
    <div class="card">
        <h3>{{ nombre }}</h3>
        <p>Email: {{ correo }}</p>
        <p>Rol: {{ rol }}</p>
    </div>
</template>



<style scoped>
.card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
}
</style>