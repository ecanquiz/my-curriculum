<template> 
  <div class="flex bg-gray-200 border-b-2 border-red-200">
    <div class="w-full p-2 text-justify">
      <a
        class="font-normal underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        :href="data.h"
        target="_blank">
          {{ data.k }}
      </a>
      {{ data.v1 }}
      <span v-if="readMore">{{ data.v2 }}</span><span v-else> ... </span>        
      <button class="bg-gray-300 text-red-300 px-3 rounded" @click="readMore =! readMore">
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
