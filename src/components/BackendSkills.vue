<template>
<div class="bg-gray-300">
  <div class="pt-4 text-base font-bold flex items-center text-justify bg-blue-100 border-b-2 border-red-200">
    <icon name="baggage" /> 
     <a href="https://fp.uoc.fje.edu/blog/que-es-un-backend-developer/" target="_blank" class="font-bold text-blue-500 hover:text-blue-800 visited:text-purple-600">Backend Developer</a>
    </div>
  <div class="p-4 text-base flex items-center text-justify lg:justify-start bg-blue-100">
    <p>
    Desarrollador que trabaja del lado del servidor procesando información recibida a través del Frontend. Encargado de diseñar la lógica  para que las acciones solicitadas en una página      
    <span v-if="readMore0">
    web sean ejecutadas correctamente. Requiere conocer las interacciones con bases de datos, debido a que toda aplicación web necesita almacenar datos. Prácticamente es quien se encuentra detrás del escenario.
    </span>
    <span v-else> ... </span>        
      <button class="bg-gray-300 text-red-300 px-3 rounded" @click="readMore0 =! readMore0">
        <span v-if="readMore0">Leer -</span>
        <span v-else>Leer +</span>
      </button>
    </p>
  </div> 
    <p class="p-4 text-justify">* Habilidades
      <button class="bg-blue-200 text-red-300 px-3 rounded" @click="readMore1 =! readMore1">
        <span v-if="readMore1">Leer -</span>
        <span v-else>Leer +</span>
      </button>
  </p>
  <div v-if="readMore1">
  <BackendSkill
    v-for="(item, index) in items"
    :key="index"
    :n="index"
    :data="item"/>
</div>
</div>
</template>

<script>
import Icon from '@/components/Icon'
import BackendSkill from '@/components/BackendSkill'
import BackendSkills from '@/store/BackendSkills'

export default {
  components: {
    Icon,
    BackendSkill    
  },
  data () {
    return {
      readMore0: false,
      readMore1: false,  
      items: BackendSkills.items      
    }
  }  
}
</script>

<style scoped></style>
