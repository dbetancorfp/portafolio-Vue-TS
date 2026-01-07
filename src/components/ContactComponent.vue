<template>
  <section id="contact" class="p-3">
    <h1 class="mb-4">Contacto</h1>

    <form class="card p-4" @submit.prevent="onSubmit">
      <div class="grid">
        <div class="col-12 md:col-6">
          <IftaLabel>
            <InputText
              id="name"
              v-model.trim="form.nombre"
              class="w-full"
              placeholder="Tu nombre"
              :invalid="submitted && !form.nombre"
            />
            <label for="name">Nombre</label>
          </IftaLabel>

          <small v-if="submitted && !form.nombre" class="p-error">El nombre es obligatorio.</small>
        </div>

        <div class="col-12 md:col-6">
          <IftaLabel>
            <InputText
              id="email"
              v-model.trim="form.email"
              type="email"
              class="w-full"
              placeholder="tu@email.com"
              :invalid="submitted && !emailOk"
            />
            <label for="email">Email</label>
          </IftaLabel>

          <small v-if="submitted && !emailOk" class="p-error">Introduce un email válido.</small>
        </div>

        <div class="col-12 md:col-6">
          <IftaLabel>
            <Dropdown
              id="subject"
              v-model="form.asunto"
              :options="asuntos"
              optionLabel="label"
              optionValue="value"
              class="w-full"
              placeholder="Selecciona un asunto"
              :invalid="submitted && !form.asunto"
            />
            <label for="subject">Asunto</label>
          </IftaLabel>

          <small v-if="submitted && !form.asunto" class="p-error">Selecciona un asunto.</small>
        </div>

        <div class="col-12 md:col-6">
          <label for="priority" class="block mb-2">Prioridad</label>
          <SelectButton
            id="priority"
            v-model="form.prioridad"
            :options="prioridades"
            optionLabel="label"
            optionValue="value"
          />
        </div>

        <div class="col-12">
          <IftaLabel>
            <Textarea
              id="message"
              v-model.trim="form.mensaje"
              class="w-full"
              rows="6"
              autoResize
              placeholder="Escribe tu mensaje..."
              :invalid="submitted && form.mensaje.length < 10"
            />
            <label for="message">Mensaje</label>
          </IftaLabel>

          <small v-if="submitted && form.mensaje.length < 10" class="p-error">
            El mensaje debe tener al menos 10 caracteres.
          </small>
        </div>

        <div class="col-12">
          <div class="flex align-items-center gap-2">
            <Checkbox inputId="privacy" v-model="form.acepta" :binary="true" />

            <label for="privacy">
              Acepto la
              <a href="#" class="p-link" @click.prevent="privacyVisible = true">
                política de privacidad
              </a>
            </label>
          </div>

          <small v-if="submitted && !form.acepta" class="p-error">
            Debes aceptar la política de privacidad.
          </small>
        </div>

        <div class="col-12">
          <div class="flex justify-content-end gap-2">
            <Button type="button" label="Limpiar" severity="secondary" outlined @click="onReset" />
            <Button type="submit" label="Enviar" icon="pi pi-send" />
          </div>
        </div>
      </div>
    </form>

    <Toast />
  </section>
  <Dialog
    v-model:visible="privacyVisible"
    modal
    :header="privacy.titulo"
    :style="{ width: 'min(900px, 92vw)' }"
  >
    <div class="flex flex-column gap-3">
      <div class="text-sm opacity-70">
        Versión {{ privacy.version }} · Actualizada: {{ privacy.fechaActualizacion }}
      </div>

      <div class="text-sm">
        <strong>Responsable:</strong> {{ privacy.responsable.nombre }}
        <span v-if="privacy.responsable.email"> · {{ privacy.responsable.email }} </span>
      </div>

      <div>
        <h3 class="mt-0 mb-2">Finalidad</h3>
        <ul class="m-0 pl-3">
          <li v-for="(x, i) in privacy.finalidad" :key="i">{{ x }}</li>
        </ul>
      </div>

      <div>
        <h3 class="mt-0 mb-2">Base jurídica</h3>
        <ul class="m-0 pl-3">
          <li v-for="(x, i) in privacy.baseJuridica" :key="i">{{ x }}</li>
        </ul>
      </div>

      <div>
        <h3 class="mt-0 mb-2">Datos tratados</h3>
        <ul class="m-0 pl-3">
          <li v-for="(x, i) in privacy.datosTratados" :key="i">{{ x }}</li>
        </ul>
      </div>

      <div>
        <h3 class="mt-0 mb-2">Conservación</h3>
        <ul class="m-0 pl-3">
          <li v-for="(x, i) in privacy.conservacion" :key="i">{{ x }}</li>
        </ul>
      </div>

      <div>
        <h3 class="mt-0 mb-2">Destinatarios</h3>
        <ul class="m-0 pl-3">
          <li v-for="(x, i) in privacy.destinatarios" :key="i">{{ x }}</li>
        </ul>
      </div>

      <div>
        <h3 class="mt-0 mb-2">Derechos</h3>
        <ul class="m-0 pl-3">
          <li v-for="(x, i) in privacy.derechos" :key="i">{{ x }}</li>
        </ul>
      </div>

      <div>
        <h3 class="mt-0 mb-2">Medidas de seguridad</h3>
        <ul class="m-0 pl-3">
          <li v-for="(x, i) in privacy.medidasSeguridad" :key="i">{{ x }}</li>
        </ul>
      </div>

      <div v-if="privacy.observaciones?.length">
        <h3 class="mt-0 mb-2">Observaciones</h3>
        <ul class="m-0 pl-3">
          <li v-for="(x, i) in privacy.observaciones" :key="i">{{ x }}</li>
        </ul>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

import IftaLabel from 'primevue/iftalabel'
import Dialog from 'primevue/dialog'
import privacy from '../data/politica-privacidad.json'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Dropdown from 'primevue/dropdown'
import SelectButton from 'primevue/selectbutton'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'

type Asunto = 'general' | 'proyecto' | 'colaboracion' | 'otro'
type Prioridad = 'baja' | 'media' | 'alta'

const toast = useToast()
const submitted = ref(false)
const privacyVisible = ref(false)

const asuntos = [
  { label: 'Consulta general', value: 'general' as Asunto },
  { label: 'Propuesta de proyecto', value: 'proyecto' as Asunto },
  { label: 'Colaboración', value: 'colaboracion' as Asunto },
  { label: 'Otro', value: 'otro' as Asunto },
]

const prioridades = [
  { label: 'Baja', value: 'baja' as Prioridad },
  { label: 'Media', value: 'media' as Prioridad },
  { label: 'Alta', value: 'alta' as Prioridad },
]

const form = reactive({
  nombre: '',
  email: '',
  asunto: null as Asunto | null,
  prioridad: 'media' as Prioridad,
  mensaje: '',
  acepta: false,
})

const emailOk = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))

function isValid() {
  return (
    form.nombre.length > 0 &&
    emailOk.value &&
    !!form.asunto &&
    form.mensaje.trim().length >= 10 &&
    form.acepta
  )
}

function onSubmit() {
  submitted.value = true
  if (!isValid()) return

  // Aquí integrarías tu backend / EmailJS / API, etc.
  toast.add({
    severity: 'success',
    summary: 'Enviado',
    detail: 'Tu mensaje se ha enviado correctamente.',
    life: 3000,
  })

  onReset()
  submitted.value = false
}

function onReset() {
  form.nombre = ''
  form.email = ''
  form.asunto = null
  form.prioridad = 'media'
  form.mensaje = ''
  form.acepta = false
}
</script>
