<template>
<div class="bg-gray-300">
  <div class="pt-4 text-base font-bold flex items-center text-justify bg-blue-100 border-b-2 border-red-200">
    <icon name="baggage" />
    <a href="https://en.wikipedia.org/wiki/Front-end_web_development" target="_blank" class="font-bold text-blue-500 hover:text-blue-800 visited:text-purple-600">Frontend Developer</a>
  </div>
  <div class="p-4 text-base flex items-center text-justify lg:justify-start bg-blue-100">
    <p>Un desarrollador front-end se enfoca en el manejo de HTML, CSS y javaScript. Dicho de otra forma, su trabajo está centrado en traducir estructura, diseño y funcionalidades propuestas para una
    <span v-if="readMore0">
    interfaz de usuario, con el uso de las tecnologías mencionadas respectivamente. Para ello utilizará una serie de  librerías, frameworks y patrones de diseño creados por comunidades y testeados, con los que trabajar de manera eficiente. Su trabajo también está relacionado con la optimización de los recursos consumidos por una aplicación, a través del servidor. Un ejemplo de ello, es el tiempo de carga. A menor tiempo de carga, mejor experiencia de usuario. Es aquella persona encargada de programar el navegador de una web, es decir, el encargado de traducir las definiciones de comportamiento, diseño y estructura realizadas en etapas previas a códigos HTML semántico. Es la práctica de convertir datos a una interfaz gráfica, mediante el uso de HTML, CSS y JavaScript, para que  los usuarios puedan ver e interactuar con esos datos. Aunque normalmente a un Frontend Developer se le asocien principios de diseño y de estructura de páginas web, como buen programador que es debe ser consciente que su trabajo se realizará en el lado cliente, en muchos casos en el navegador. Pero aún así, esta persona ha de tener conocimientos y tener en cuenta la usabilidad, legibilidad de la web o app, el diseño y la estructura de páginas web y aplicaciones para procurar que el usuario pueda tener una experiencia de 10. Cómo recibir y enviar datos del servidor Backend. Entre las responsabilidades del desarrollador Front End está tener en cuenta la usabilidad, legibilidad de la web o aplicación web, el diseño y la estructura de las páginas para que el usuario disfrute de una experiencia satisfactoria.
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
    <FrontendSkill
      v-for="(item, index) in items"
      :key="index"
      :n="index"
      :data="item"/>
  </div>
</div>
</template>

<script>
import Icon from '@/components/Icon'
import FrontendSkill from '@/components/FrontendSkill'
import FrontendSkills from '@/store/FrontendSkills'

export default {
  components: {
    Icon,
    FrontendSkill    
  },
  data () {
    return {
      readMore0: false,
      readMore1: false,      
      items: FrontendSkills.items      
    }
  }  
}
</script>

<style scoped></style>
