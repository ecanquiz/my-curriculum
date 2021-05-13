<template> 
  <div class="flex" :class="n % 2 === 0 ? 'bg-blue-100' : 'bg-gray-200'">
    <div class="w-1/4 p-2">
      <a
        class="font-normal underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        :href="data.h"
        target="_blank">
          {{ data.k }}
      </a>
    </div>
    <div class="w-1/2 p-2 text-gray-600 text-justify">
      {{ data.v1 }}
      <span v-if="readMore">{{ data.v2 }}</span><span v-else>...</span>      
    </div>
    <div class="w-1/4 p-2">
      <button class="bg-blue-200 text-red-300 px-3 rounded" @click="readMore =! readMore">
        <span v-if="readMore">Leer -</span>
        <span v-else>Leer +</span>
      </button>
    </div>
 </div>
</template>

<script>

export default {
  props: {
    data: Object,
    n: Number
  },
  data () {
    return {
      readMore: false
    }
  }
  
}
</script>

<style scoped></style>
