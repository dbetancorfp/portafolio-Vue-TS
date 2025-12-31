<template>
  <section id="experience" v-if="portfolio">
    <h1>{{ portfolio.data.experiencia?.titulo }}</h1>
    <div class="grid">
      <CardExperience
        v-for="(item, idx) in portfolio.data.experiencia?.items"
        :key="itemKey(item, idx)"
        :item="item"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio.js'
import CardExperience from './CardExperience.vue'

type ExperienceItem = {
  rol: string
  empresa: string
  ubicacion?: string
  fechaInicio: string
  fechaFin: string | null
  descripcion: string
  logros: string[]
  tecnologias?: string[]
}

const portfolio = usePortfolioStore()

function itemKey(item: ExperienceItem, idx: string | number) {
  // Clave estable sin depender de un id que no existe en el JSON
  return `${item.empresa}-${item.rol}-${item.fechaInicio}-${idx}`
}
</script>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
}
</style>
