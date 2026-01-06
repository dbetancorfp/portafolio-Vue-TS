<template>
  <section id="skills" v-if="skills?.categorias?.length">
    <h1>{{ skills.titulo }}</h1>

    <div class="grid">
      <div
        v-for="(categoria, idx) in skills.categorias"
        :key="idx"
        class="col-12 md:col-6 lg:col-4"
      >
        <CardHabilidades :item="categoria" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolioStore } from '../stores/portfolio'
import CardHabilidades from '../components/CardHabilidades.vue'

const portfolio = usePortfolioStore()
const skills = computed(() => portfolio.data?.habilidades ?? null)
</script>
