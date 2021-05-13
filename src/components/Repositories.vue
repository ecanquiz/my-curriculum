<template>
<div class="bg-gray-300">
  <div class="pt-4 text-base font-bold flex items-center text-justify bg-blue-100 border-b-2 border-red-200">
    <icon name="baggage" /> Repositories
    <button class="bg-blue-200 text-red-300 px-3 rounded" @click="readMore1 =! readMore1">
        <span v-if="readMore1">Leer -</span>
        <span v-else>Leer +</span>
      </button>
    </div>    
  <div v-if="readMore1">
  <Repository
    v-for="(item, index) in items"
    :key="index"
    :n="index"
    :data="item"/>
</div>
</div>
</template>

<script>
import Icon from '@/components/Icon'
import Repository from '@/components/Repository'

export default {
  components: {
    Icon,
    Repository    
  },
  data () {
    return {      
      readMore1: false,
      items: [{
        k: 'Condominium Administration System',
        h: 'https://github.com/CaribesTIC/laravel-vue-condominium'
      },{
        k: 'Git Hub',
        h: 'https://github.com/ejimenez123'
      },{
        k: 'Git Lab',
        h: 'https://gitlab.com/fdsoil/FDSoil'
      },{
        k: 'Code Pen',
        h: 'https://codepen.io/ejimenez123/'
      },{
        k: 'Code Wars',
        h: 'https://www.codewars.com/users/ejimenez123'
      }]
    }
  }  
}
</script>

<style scoped></style>

