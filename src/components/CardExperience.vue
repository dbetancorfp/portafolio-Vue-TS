<template>
  <article class="card">
    <header class="card__header">
      <div>
        <h2 class="card__title">{{ item.empresa }}</h2>
        <h3 class="card__subtitle">{{ item.rol }}</h3>
        <p v-if="item.ubicacion" class="card__meta">{{ item.ubicacion }}</p>
      </div>

      <p class="card__dates">
        <em>{{ item.fechaInicio }} - {{ item.fechaFin ?? 'Presente' }}</em>
      </p>
    </header>

    <p class="card__desc">{{ item.descripcion }}</p>

    <ul v-if="item.logros?.length" class="card__list">
      <li v-for="(logro, idx) in item.logros" :key="`${item.empresa}-logro-${idx}`">
        {{ logro }}
      </li>
    </ul>

    <div v-if="item.tecnologias?.length" class="card__tags">
      <span v-for="(tech, idx) in item.tecnologias" :key="`${item.empresa}-tech-${idx}`" class="tag">
        {{ tech }}
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
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

defineProps<{
  item?: ExperienceItem
}>()
</script>

<style scoped>
.card {
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 1rem;
}
.card__header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
}
.card__title {
  margin: 0;
}
.card__subtitle {
  margin: 0.25rem 0 0;
  font-weight: 600;
}
.card__meta {
  margin: 0.25rem 0 0;
  opacity: 0.8;
}
.card__dates {
  margin: 0;
  white-space: nowrap;
  opacity: 0.9;
}
.card__desc {
  margin: 0.75rem 0 0;
}
.card__list {
  margin: 0.75rem 0 0;
  padding-left: 1.2rem;
}
.card__tags {
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tag {
  border: 1px solid #2a2a2a;
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  font-size: 0.9rem;
}
</style>
