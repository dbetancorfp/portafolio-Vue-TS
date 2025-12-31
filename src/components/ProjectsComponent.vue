<template>
  <section id="projects" v-if="portfolio">
    <h1>{{ portfolio.data.proyectos?.titulo }}</h1>
    <div v-for="proyecto in portfolio.data.proyectos?.items" :key="proyecto.id">
      <h2>{{ proyecto.nombre }}</h2>
      <p>{{ proyecto.descripcion }}</p>
      <a :href="proyecto.url" target="_blank">Ver proyecto</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio.js'

const portfolio = usePortfolioStore()
</script>

<style scoped>
/* Estilos específicos */
</style>
