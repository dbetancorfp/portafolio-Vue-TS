<template>
  <div class="card-zoom h-full">
    <Card class="h-full">
      <template #title>
        {{ item.nombre }}
      </template>

      <template #content>
        <ul class="m-0 pl-3 text-left">
          <li v-for="(skill, idx) in item.items" :key="idx" class="mb-2">
            <div class="flex align-items-center justify-content-between gap-2">
              <span>{{ skill.nombre }}</span>

              <!-- Nivel 1..5 como puntos -->
              <Rating :modelValue="skill.nivel" :stars="5" readonly :cancel="false" />
            </div>
          </li>
        </ul>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import Rating from 'primevue/rating'

type Skill = {
  nombre: string
  nivel: number
}

type CategoriaHabilidades = {
  nombre: string
  items: Skill[]
}

defineProps<{
  item: CategoriaHabilidades
}>()
</script>

<style scoped>
.card-zoom {
  transition:
    transform 160ms ease,
    box-shadow 160ms ease;
  transform: translateZ(0);
}

.card-zoom:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}
</style>
