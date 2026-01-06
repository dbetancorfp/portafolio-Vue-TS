<template>
  <div class="card-zoom h-full">
    <Card class="h-full">
      <template #title>
        <div class="flex flex-column gap-1">
          <span>{{ item.rol }}</span>
          <small class="opacity-70">
            {{ item.empresa }}
            <span v-if="item.ubicacion"> · {{ item.ubicacion }}</span>
          </small>
        </div>
      </template>

      <template #content>
        <div class="flex flex-column gap-3">
          <div class="opacity-80">
            {{ rangoFechas }}
          </div>

          <p class="m-0" style="text-align: justify">
            {{ item.descripcion }}
          </p>

          <div v-if="item.logros?.length">
            <h4 class="m-0 mb-2">Logros</h4>
            <ul class="m-0 pl-3 text-left">
              <li v-for="(logro, idx) in item.logros" :key="idx" class="mb-2">
                {{ logro }}
              </li>
            </ul>
          </div>

          <div v-if="item.tecnologias?.length">
            <h4 class="m-0 mb-2">Tecnologías</h4>
            <div class="flex flex-wrap gap-2">
              <Tag
                v-for="(tech, idx) in item.tecnologias"
                :key="idx"
                :value="tech"
                severity="secondary"
              />
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'

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

const props = defineProps<{
  item: ExperienceItem
}>()

const rangoFechas = computed(() => {
  const inicio = props.item.fechaInicio
  const fin = props.item.fechaFin ?? 'Actualidad'
  return `${inicio} — ${fin}`
})
</script>

<style scoped>
.card-zoom {
  transition:
    transform 160ms ease,
    box-shadow 160ms ease;
  transform: translateZ(0);
}

.card-zoom:hover {
  transform: scale(1.01);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}
</style>
