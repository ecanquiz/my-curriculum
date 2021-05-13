<template> 
  <div class="flex" :class="n % 2 === 0 ? 'bg-blue-100' : 'bg-gray-200'">
    <div class="w-full p-2">
      <a
        class="font-normal text-blue-600 hover:text-blue-800 visited:text-purple-600"
        :href="data.h"
        target="_blank">
          {{ data.k }}
      </a>
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
  ,mounted (){console.log(this.key)}
  
}
</script>

<style scoped></style>
