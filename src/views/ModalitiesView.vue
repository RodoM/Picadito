<template>
  <main class="h-screen bg-gray-900 flex">
    <div class="container mx-auto flex flex-col justify-center items-center gap-10">
      <span class="text-white text-center font-bold text-5xl">Elige una modalidad de partido</span>
      <ul class="grid md:grid-cols-2 md:grid-rows-2 gap-2">
        <li v-for="modality in modalities" :key="modality">
          <router-link :to="{name: 'modalidad', params: {modalidad: modality}}">
            <div class="bg-gray-800 rounded text-white text-center p-10 hover:bg-gray-600 transition">
              <span class="text-7xl font-extrabold">{{modality}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>

export default {
  name: 'ModalitiesView',
  components: {
  },
  data() {
    return {
      modalities: [5,6,8,11]
    }
  }
}
</script>