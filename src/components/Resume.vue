<template>  
  <div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-lg shadow-2xl bg-blue-100 mx-6 lg:mx-0 .mb-10">
    <div class="p-4 md:p-12 text-center lg:text-left">
      <!-- Image for mobile view-->        
      <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
           style="background-image: url('index.jpeg')"></div>        
      <h1 class="text-3xl font-bold pt-8 lg:pt-0 bg-blue-100">Bienvenido mi página !!</h1>            
      <!--div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-75 bg-blue-100"><span>Fullstack Developer</span></div-->      
      
      <Profesions v-if="pro"/>
      <FrontendSkills v-if="ski"/>
      <FrontendKnowledges v-if="kno"/>
      <BackendSkills v-if="ski"/>
      <BackendKnowledges v-if="kno"/>
      <BeyondSkills v-if="ski"/>
      <BeyondKnowledges v-if="kno"/>
      <AgileDevelopments v-if="kno"/>
      <Books v-if="kno"/>
      <Repositories v-if="kno"/>
                
      <!--div class="pt-12 pb-8">
        <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
          Get In Touch
        </button>
      </div-->      
      <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->
    </div>
  </div>
</template>

<script>
import AgileDevelopments from '@/components/AgileDevelopments.vue'
import BackendSkills from '@/components/BackendSkills.vue'
import BackendKnowledges from '@/components/BackendKnowledges'
import BeyondSkills from '@/components/BeyondSkills.vue'
import Books from '@/components/Books.vue'
import BeyondKnowledges from '@/components/BeyondKnowledges'
import FrontendKnowledges from '@/components/FrontendKnowledges'
import FrontendSkills from '@/components/FrontendSkills.vue'
import Profesions from '@/components/Profesions.vue'
import Repositories from '@/components/Repositories.vue'

export default {
   components: {
    AgileDevelopments,
    BackendKnowledges,
    BackendSkills,
    BeyondKnowledges,
    BeyondSkills,
    Books,
    FrontendKnowledges,
    FrontendSkills,      
    Profesions,
    Repositories
  },
  data() {
    return {    
       kno: true,
       ski: true,
       pro: true
    }
  }
}
</script>

<style scoped>

</style>
