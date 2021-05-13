<template>  
  <div class="flex flex-wrap m-4">
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-1">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-1">
          {{ data.k1 }}
        </label>
        <p class="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          {{ data.v1 }}
        </p>
      </div>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2" px-1>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-1">
          {{ data.k2 }}
        </label>
        <p class="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          {{ data.v2 }}
        </p>
      </div>    
    </div>
  </div>
</template>

<script>

export default {
  props: {
    data: Object
  },
}
</script>

<style scoped>

</style>
