<template>
  <main>
    <NavbarComponent />
    <router-view />
  </main>
</template>

<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<style>
/* Estilos adicionales si se requieren */
.app {
  max-width: 980px;
  margin: 0 auto;
  padding: 24px;
}
</style>
