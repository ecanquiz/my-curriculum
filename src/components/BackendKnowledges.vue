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
    <BackendKnowledge
      v-for="(item, index) in items"
      :key="index"
      :n="index"
      :data="item"/>  
  </div>
</div>
</template>

<script>
import BackendKnowledge from '@/components/BackendKnowledge'
import BackendKnowledges from '@/store/BackendKnowledges'

export default {
  components: {    
    BackendKnowledge    
  },
  data () {
    return {
      readMore: false,
      items: BackendKnowledges.items      
    }
  }  
  
}
</script>

<style scoped></style>
