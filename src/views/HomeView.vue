<template>
  <main class="flex h-screen">
    <div class="container flex flex-col items-center justify-center gap-0 mx-auto lg:gap-20 md:flex-row">
      <section id="left-side" class="flex flex-col max-w-sm gap-4"> 
        <h1 class="flex items-center justify-center text-5xl font-extrabold md:justify-start dark:text-white">Picadito<span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">Beta</span></h1>
        <p class="text-center text-gray-500 md:text-start">Una webapp para organizar los equipos de tus partidos de futbol</p>
        
        <div class="flex justify-center gap-5 md:justify-start">
          <router-link to="/modalidades">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Empezar</button>
          </router-link>
          <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Como funciona</button>
        </div>
      </section>

      <section id="right-side" class="hidden md:flex">
        <div class="relative">
          <img src="@/assets/icons/football.svg" class="relative z-20 w-48 h-48" alt="">
          <img src="@/assets/icons/trophy.svg" class="absolute z-10 w-48 h-48 bottom-16 right-24" alt="">
          <img src="@/assets/icons/bottle.svg" class="absolute z-10 w-48 h-48 bottom-16 left-24" alt="">
        </div>
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
