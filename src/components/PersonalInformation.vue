<template>
<div class="p-4 md:p-4 text-center lg:text-left">

  <FormItem :data="{
    k1: 'Nombre(s)',
    v1: 'Ernesto José',
    k2: 'Apellido(s)',
    v2: 'Jiménez  Canquiz'
  }"/>
  
  <FormItem :data="{
    k1: 'Nacionalidad',
    v1: 'Venezolana',
    k2: 'Fecha de Nacimiento',
    v2: '06 / 09 / 1968'
  }"/>
  
  <FormItem :data="{
    k1: 'Me apasiona',
    v1: 'La música, especialmente la percusión (Batería, Timbal y Tumbadoras).',
    k2: 'Mi Hobby',
    v2: 'Hacer ejercicios y practicar deportes (Artes Marciales, Boxeo, Baloncesto, Béisbol y Futbol).'
  }"/>

  <!--FormItem :data="{
    k1: 'Cédula de Identidad',
    v1: 'V-10.181.503',
    k2: 'Fecha de Nacimiento',
    v2: '06 de Septiembre 1968'
  }"/-->

  <!--FormItem :data="{
    k1: 'Lugar de Nacimiento',
    v1: 'Venezuela, Caracas, Dtto. Capital',
    k2: 'Teléfono',
    v2: '(0412) 702-91-33'
  }"/-->
  
  <!--FormItem :data="{
    k1: 'Correo',
    v1: 'fdsoil123@gmail.com',
    k2: 'Correo',
    v2: 'cumacos@gmail.com'
  }"/-->
  
  <!--FormItem :data="{
    k1: 'Estudios Superiores',
    v1: 'I.U.T.I.R.L.A.',
    k2: 'Título Obtenido',
    v2: 'T.S.U. en Informática – 1995'
  }"/-->
       
</div>
</template>

<script>
import FormItem from '@/components/FormItem'

export default {
  components: {
    FormItem    
  }
}
</script>

<style scoped></style>
