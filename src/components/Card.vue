<template>  
  <div class="w-full lg:w-2/5 bg-gray-300 opacity-100 rounded-lg shadow-2xl lg:block m-8 lg:mx-0">    
    <div class="p-2 md:p-8 md:pb-6 text-center lg:text-left">
      <h1 class="text-3xl font-bold">Ernesto Canquiz</h1>
      <div class="mx-auto lg:mx-0 pt-3 border-b-2 border-red-300 opacity-75 text-left">      
        <div class="flex flex-wrap my-2">
          <div class="px-1 text-left">Agile Coach</div>
          <div class="px-1 text-left">&</div>   
          <div class="px-1 text-left">Fullstack Developer</div>
        </div>      
      </div>      
    </div>
    <img src="@/assets/img/index.jpeg" class="lg:rounded-lg shadow-2xl hidden lg:block opacity-100">    
    <PersonalInformation />
    <World />
    <Socialite />    
  </div>
</template>

<script>
import PersonalInformation from '@/components/PersonalInformation'
import World from '@/components/World.vue'
import Socialite from '@/components/Socialite'

export default {
   components: {
    Socialite,
    PersonalInformation,    
    World
  }
}
</script>

<style scoped>

</style>
