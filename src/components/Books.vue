<template>
<div class="bg-gray-300">
  <div class="pt-4 text-base font-bold flex items-center text-justify bg-blue-100 border-b-2 border-red-200">
    <icon name="baggage" /> Books
    </div>
  <div class="p-4 text-base flex items-center text-justify bg-grey-100">
    <p>Por aquí les dejo el enlace a mis dos (2) libros que he publicado a lo largo de mi carrera como Fullstack Developer.
      <button class="bg-blue-200 text-red-300 px-3 rounded" @click="readMore =! readMore">
        <span v-if="readMore">Leer -</span>
        <span v-else>Leer +</span>
      </button>   
    </p>
  </div>
  <div v-if="readMore">
    <Book
      v-for="(item, index) in items"
      :key="index"
      :n="index"
      :data="item"/>
  </div>  
</div>
</template>

<script>
import Icon from '@/components/Icon'
import Book from '@/components/Book'
import Books from '@/store/Books'

export default {
  components: {
    Icon,
    Book    
  },
  data () {
    return {
      readMore: false,
      items: Books.items      
    }
  }  
}
</script>

<style scoped></style>

