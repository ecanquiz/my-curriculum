<template>
<div>
  <p class="pt-4 text-base font-bold flex items-center text-justify bg-blue-100  border-b-2 border-red-200">
    <icon name="baggage" />          
     Mi Profesión       
  </p>  
  <Profesion
    v-for="(item, index) in items"
    :key="index"
    :n="index"
    :data="item"/>
</div>
</template>

<script>
import Icon from '@/components/Icon'
import Profesion from '@/components/Profesion'
import Profesions from '@/store/Profesions'

export default {
  components: {
    Icon,
    Profesion    
  },
  data () {
    return {
      readMore: false,
      items: Profesions.items      
    }
  }  
}
</script>

<style scoped></style>
