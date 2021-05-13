<template>
<div class="bg-gray-300">
  <div class="pt-4 text-base font-bold flex items-center text-justify bg-blue-100 border-b-2 border-red-200">
    <icon name="baggage" /> 
     Beyond Developer
    </div>
  <div class="p-4 text-base flex items-center text-justify bg-blue-100">
    <p>Dicho témino no existe dentro de este contexto. Pero aun así, lo usaré "metafóricamente", para agrupar todo lo referente a    
       otras tecnologías que quedan en medio de esas fronteras (Backend y Frontend).
    </p>
  </div> 
    <p class="p-4 text-justify">* Habilidades
      <button class="bg-blue-200 text-red-300 px-3 rounded" @click="readMore =! readMore">
        <span v-if="readMore">Leer -</span>
        <span v-else>Leer +</span>
      </button>
  </p>
  <div v-if="readMore">
  <BeyondSkill
    v-for="(item, index) in items"
    :key="index"
    :n="index"
    :data="item"/>
</div>
</div>
</template>

<script>
import Icon from '@/components/Icon'
import BeyondSkill from '@/components/BeyondSkill'
import BeyondSkills from '@/store/BeyondSkills'

export default {
  components: {
    Icon,
    BeyondSkill    
  },
  data () {
    return {
      readMore: false,
      items: BeyondSkills.items      
    }
  }  
}
</script>

<style scoped></style>
