<template>
  <section id="about" v-if="portfolio.data" class="surface-0 p-3 w-full">
    <!-- Título arriba -->
    <h1 class="m-0 mb-6 text-900 text-3xxl font-bold">
      {{ portfolio.data.acercaDeMi?.titulo }}
    </h1>

    <!-- 2 columnas: imagen + texto -->
    <div class="grid align-items-start">
      <!-- Columna imagen -->
      <div class="col-12 md:col-4">
        <Image
          :src="portfolio.data.acercaDeMi?.foto.url"
          :alt="portfolio.data.acercaDeMi?.foto.alt"
          imageClass="w-full border-round img-doble"
          preview
        />
      </div>

      <!-- Columna texto -->
      <div class="col-12 md:col-8">
        <p class="text-justify mt-0 line-height-3">
          {{ portfolio.data.acercaDeMi?.resumen }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Image from 'primevue/image'
import { usePortfolioStore } from '../stores/portfolio.js'

const portfolio = usePortfolioStore()
</script>

<style scoped>
/* Estilos específicos */
.img-doble {
  transform: scale(2);
  transform-origin: top left;
}
</style>
