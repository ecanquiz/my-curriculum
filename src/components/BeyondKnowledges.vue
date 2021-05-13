<template>
<div class="bg-gray-300">
<p class="p-4 text-justify">   
     * Conocimientos
     <button class="bg-blue-200 text-red-300 px-3 rounded" @click="readMore =! readMore">
        <span v-if="readMore">Leer -</span>
        <span v-else>Leer +</span>
      </button>
  </p>
  <div v-if="readMore"> 
    <BeyondKnowledge
      v-for="(item, index) in items"
      :key="index"
      :n="index"
      :data="item"/>  
  </div>
</div>
</template>

<script>
import BeyondKnowledge from '@/components/BeyondKnowledge'
import BeyondKnowledges from '@/store/BeyondKnowledges'

export default {
  components: {    
    BeyondKnowledge    
  },
  data () {
    return {
      readMore: false,
      items: BeyondKnowledges.items      
    }
  }  
  
}
</script>

<style scoped></style>
