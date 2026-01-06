<template>
  <section id="projects" v-if="projects?.items?.length">
    <h1>{{ projects.titulo }}</h1>

    <div class="grid">
      <div v-for="(proyecto, idx) in projects.items" :key="idx" class="col-12 md:col-6 lg:col-4">
        <CardProjects :item="proyecto" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import CardProjects from '@/components/CardProjects.vue'

const portfolio = usePortfolioStore()
const projects = computed(() => portfolio.data?.proyectos ?? null)
</script>
