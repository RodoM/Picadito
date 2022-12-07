<template>
  <main class="h-screen bg-gray-900 flex">
    <div class="flex flex-col md:flex-row justify-center items-center gap-5 container mx-auto">
      <section id="left-side" class="flex flex-col gap-4">
        <h1 class="text-white text-center md:text-start text-6xl font-extrabold">Picadito</h1>
        <p class="text-gray-500 md:text-start text-center">Una webapp para organizar los equipos de tus partidos de futbol</p>
        
        <div class="flex justify-center md:justify-start gap-5">
          <router-link to="/modalidades">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Empezar</button>
          </router-link>
          <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Como funciona</button>
        </div>
      </section>

      <section id="right-side" class="hidden md:flex">
        <span class="text-white">mockup</span>
      </section>
    </div>
  </main>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
