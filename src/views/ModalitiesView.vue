<template>
  <main class="flex min-h-screen">
    <div class="container flex flex-col items-center justify-center gap-10 mx-auto">
      <span class="text-5xl font-bold text-center text-white">Elige una modalidad de partido</span>
      <ul class="grid grid-cols-2 grid-rows-2 gap-2">
        <li v-for="modality in modalities" :key="modality">
          <router-link :to="{name: 'modalidad', params: {modalidad: modality}}">
            <div class="p-10 text-center text-white transition bg-gray-800 rounded hover:bg-gray-600">
              <span class="font-extrabold text-7xl">{{modality}}</span>
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