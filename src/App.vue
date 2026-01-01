<template>
  <div class="min-h-screen">
    <!-- Barra fija -->
    <header class="fixed top-0 left-0 w-full z-5">
      <NavbarComponent class="w-full" />
    </header>

    <!-- Contenido debajo (ajusta el padding a la altura real del menú) -->
    <main class="pt-6">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<style></style>
