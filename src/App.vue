<template> 
  <div class="container mx-auto lg:py-16">
    <div class="max-w-6xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <Resume />
      <Card />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import Resume from '@/components/Resume'

export default {
  name: 'App',
  components: {
    Card,   
    Resume    
  }
}
</script>

<style></style>
