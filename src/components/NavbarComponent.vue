<template>
  <div class="card">
    <Menubar :model="items">
      <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
      </template>
    </Menubar>
  </div>
</template>

<script lang="ts">
import Menubar from 'primevue/menubar'
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'NavbarComponent',
  components: {
    Menubar,
  },
  setup() {
    const items = ref([
      {
        label: 'Sobre mi',
        icon: 'pi pi-palette',
        route: '/aboutme',
      },
      {
        label: 'Proyectos',
        icon: 'pi pi-link',
        route: '/projects',
      },
      {
        label: 'Habilidades',
        icon: 'pi pi-cog',
        route: '/skills',
      },
      {
        label: 'Experiencia',
        icon: 'pi pi-briefcase',
        route: '/experience',
      },
      {
        label: 'Contacto',
        icon: 'pi pi-envelope',
        route: '/contact',
      },
    ])

    return {
      items,
    }
  },
})
</script>

<style scoped>
/* Ajustar el espaciado superior para el contenido dinámico */
.mt-5 {
  margin-top: 4rem; /* Ajusta el valor según la altura del navbar */
}
</style>
