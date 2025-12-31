<template>
  <section id="skills" v-if="portfolio">
    <h1>{{ portfolio.data.habilidades?.titulo }}</h1>
    <ul>
      <div v-for="habilidad in portfolio.data.habilidades?.categorias" :key="habilidad.id">
        <h2>{{ habilidad.nombre }}</h2>
        <li v-for="skill in habilidad.items" :key="skill.id">{{ skill.nombre }}</li>
      </div>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio.js'

const portfolio = usePortfolioStore()
</script>

<style scoped>
/* Estilos específicos */
</style>
