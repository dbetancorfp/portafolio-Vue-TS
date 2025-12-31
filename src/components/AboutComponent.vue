<template>
  <section id="about" v-if="portfolio.data">
    <h1>{{ portfolio.data.acercaDeMi?.titulo }}</h1>
    <p>{{ portfolio.data.acercaDeMi?.resumen }}</p>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio.js'

const portfolio = usePortfolioStore()
</script>

<style scoped>
/* Estilos específicos */
</style>
