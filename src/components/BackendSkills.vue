<template>
<div class="bg-gray-300">
  <div class="pt-4 text-base font-bold flex items-center text-justify bg-blue-100 border-b-2 border-red-200">
    <icon name="baggage" /> 
     <a href="https://fp.uoc.fje.edu/blog/que-es-un-backend-developer/" target="_blank" class="font-bold text-blue-500 hover:text-blue-800 visited:text-purple-600">Backend Developer</a>
    </div>
  <div class="p-4 text-base flex items-center text-justify lg:justify-start bg-blue-100">
    <p>Un desarrollador backend se encarga de diseñar la lógica y las soluciones para que todas las acciones solicitadas en una página web sean ejecutadas de manera correcta. Éste profesional se  
    <span v-if="readMore0">
encarga de ejercer sus labores del lado servidor. Prácticamente es quien se encuentra detrás del escenario, y es el que permite que el usuario disfrute con la máxima comodidad la navegación.
Cabe destacar que sin el esfuerzo invertido por el back end developer, el trabajo del desarrollador front-end, no se sostendría. Conocimiento amplio de lenguajes y frameworks: Es importante que tenga conocimientos importantes en esta clase de lenguajes para el desarrollo completo y eficiente de su trabajo. 
Familiarización con bases de datos: Un desarrollador back end requiere conocer con precisión el funcionamiento de las bases de datos. Esto se debe a que toda aplicación web necesita almacenar datos de algún modo. Tomando en cuenta esto, entre las bases de datos más comunes a manejar se encuentran:
También se encarga de diseñar la lógica y las soluciones para que todas las acciones solicitadas en una página web sean ejecutadas de manera correcta. Trabaja del lado del servidor y procesa la información recibida a través del frontend.
    Por lo tanto, un desarrollador backend es responsable de la programación del sitio en todos sus componentes. Podría decirse que es el que trabaja “detrás del escenario”, permitiendo que el usuario disfrute su experiencia. Por lo que debe asegurarse de que todo funcione de acuerdo a las interacciones que hace el usuario. Mientras que el desarrollador frontend, se encarga de la interfaz del sitio.
    El desarrollador backend debe estudiar los diferentes lenguajes de programación que pueden ser necesarios para desarrollar su trabajo. Debe formarse como desarrollador de aplicaciones web o como desarrollador de aplicaciones multiplataforma.  Además necesita conocer las interacciones con diferentes bases de datos.
    </span>
    <span v-else> ... </span>        
      <button class="bg-gray-300 text-red-300 px-3 rounded" @click="readMore0 =! readMore0">
        <span v-if="readMore0">Leer -</span>
        <span v-else>Leer +</span>
      </button>
    </p>
  </div> 
    <p class="p-4 text-justify">* Habilidades
      <button class="bg-blue-200 text-red-300 px-3 rounded" @click="readMore1 =! readMore1">
        <span v-if="readMore1">Leer -</span>
        <span v-else>Leer +</span>
      </button>
  </p>
  <div v-if="readMore1">
  <BackendSkill
    v-for="(item, index) in items"
    :key="index"
    :n="index"
    :data="item"/>
</div>
</div>
</template>

<script>
import Icon from '@/components/Icon'
import BackendSkill from '@/components/BackendSkill'
import BackendSkills from '@/store/BackendSkills'

export default {
  components: {
    Icon,
    BackendSkill    
  },
  data () {
    return {
      readMore0: false,
      readMore1: false,  
      items: BackendSkills.items      
    }
  }  
}
</script>

<style scoped></style>
