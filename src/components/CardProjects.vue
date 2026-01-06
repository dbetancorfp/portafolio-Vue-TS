<template>
  <div class="card-zoom h-full">
    <Card class="h-full">
      <template #title>
        {{ item.nombre }}
      </template>

      <template #content>
        <p class="m-0" style="text-align: justify">
          {{ item.descripcion }}
        </p>
      </template>

      <template #footer>
        <div class="flex gap-2">
          <Button
            v-if="item.links?.demo"
            label="Demo"
            icon="pi pi-external-link"
            as="a"
            :href="item.links.demo"
            target="_blank"
            rel="noopener noreferrer"
            severity="secondary"
            outlined
          />
          <Button
            v-if="item.links?.repo"
            label="Repo"
            icon="pi pi-code"
            as="a"
            :href="item.links.repo"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'

type ProjectItem = {
  nombre: string
  descripcion: string
  links?: { demo?: string | null; repo?: string | null }
}

defineProps<{ item: ProjectItem }>()
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
