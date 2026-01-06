<template>
  <section id="experience" v-if="exp?.items?.length">
    <h1>{{ exp.titulo }}</h1>

    <div class="grid">
      <div v-for="(item, idx) in exp.items" :key="itemKey(item, idx)" class="col-12 md:col-6">
        <CardExperience :item="item" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolioStore } from '../stores/portfolio'
import CardExperience from '../components/CardExperience.vue'

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
const exp = computed(() => portfolio.data?.experiencia ?? null)

function itemKey(item: ExperienceItem, idx: number) {
  return `${item.empresa}-${item.rol}-${item.fechaInicio}-${idx}`
}
</script>
