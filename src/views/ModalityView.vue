<template>
  <main class="min-h-screen bg-gray-900 flex">
    <div class="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
      <section id="left-side">
        <div class="bg-white bg-opacity-30 rounded px-4 py-2">
          <span class="text-white">Pizarra de ideas:</span>
          <ul>
            <li class="text-white">- Un solo campo de juego, en cada mitad va un equipo</li>
            <li class="text-white">- Dos campos de juegos, en cada uno va un equipo bien desplegado</li>
            <li class="text-white">- Botones con formaciones que cambian la disposicion del equipo en el campo</li>
          </ul>
        </div>
      </section>

      <section id="right-side">
        <div class="flex flex-col">
          <span class="text-white font-bold text-5xl mb-4">Jugadores:</span>
          <ul class="flex flex-col gap-2">
            <!-- TODO: checkbox para determinar si un jugador es arquero fijo y no mezclarlo -->
            <li v-for="player in modality" :key="player">
              <input
                type="text"
                v-model="players[player - 1].playerName"
                class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="`Jugador${player - 1}`"
                :class="player <= modality / 2 ? 'border-blue-500' : 'border-red-500'"
              >
            </li>
          </ul>
          <!-- TODO: Deshabilitar el boton hasta que se llenen todos los inputs -->
          <button @click="mixTeams()" type="button" class=" mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Mezclar</button>
        </div>
      </section>
    </div>
  </main>
</template>

<script>

export default {
  name: 'ModalityView',
  components: {
  },
  data() {
    return {
      modality: undefined,
      players: [],
    }
  },

  created() {
    this.modality = parseInt(this.$route.params.modalidad, 10) * 2;
    for (let i = 0; i < this.modality; i++) {
      this.players.push({playerName: undefined});
    }
  },

  methods: {
    mixTeams() {
      console.log('se disparo');
      this.players = this.players.sort(() => Math.random() - 0.5);
    }
  }
}
</script>