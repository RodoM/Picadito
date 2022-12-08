<template>
  <main class="flex min-h-screen">
    <div class="container flex flex-col-reverse items-center justify-center gap-10 mx-auto md:flex-row">
      <section id="left-side" class="max-w-lg m-2 mb-5 bg-gray-900 max-width md:mb-0">
        <FivePitch v-if="modality === 10" :players="players"/>
        <SixPitch v-else-if="modality === 12" :players="players"/>
        <EightPitch v-else-if="modality === 16" :players="players"/>
        <ElevenPitch v-else-if="modality === 22" :players="players"/>
      </section>

      <section id="right-side">
        <div class="flex flex-col gap-3">
          <span class="mt-10 text-5xl font-bold text-white md:mt-0">Jugadores:</span>
          
          <div v-if="modality <= 12">
            <ul class="flex flex-col gap-2">
              <li v-for="(player, index) in players" :key="player">
                <div class="flex">
                  <span
                    class="inline-flex justify-center items-center px-3 text-sm text-white border border-r-0 rounded-l-md min-w-[2.3rem]"
                    :class="index + 1 <= modality / 2 ? 'bg-blue-500' : 'bg-red-500'"
                  >
                    {{index}}
                  </span>
                  <input
                    type="text"
                    v-model="player.playerName"
                    class="bg-gray-50 border text-gray-900 text-sm rounded-lg rounded-l-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="`Jugador${index}`"
                  >
                </div>
              </li>
            </ul>
          </div>

          <div v-else class="grid grid-cols-2 gap-3">
            <ul class="flex flex-col gap-2">
              <li v-for="(player, index) in players.slice(0, modality / 2)" :key="player">
                <div class="flex">
                  <span
                    class="inline-flex justify-center bg-blue-500 items-center px-3 text-sm text-white border border-r-0 rounded-l-md min-w-[2.3rem]"
                  >
                    {{index}}
                  </span>
                  <input
                    type="text"
                    v-model="player.playerName"
                    class="bg-gray-50 border text-gray-900 text-sm rounded-lg rounded-l-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="`Jugador${index}`"
                  >
                </div>
              </li>
            </ul>
            <ul class="flex flex-col gap-2">
              <li v-for="(player, index) in players.slice(modality / 2, modality)" :key="player">
                <div class="flex">
                  <span
                    class="inline-flex justify-center items-center bg-red-500 px-3 text-sm text-white border border-r-0 rounded-l-md min-w-[2.3rem]"
                  >
                    {{index + (modality / 2)}}
                  </span>
                  <input
                    type="text"
                    v-model="player.playerName"
                    class="bg-gray-50 border text-gray-900 text-sm rounded-lg rounded-l-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="`Jugador${index + (modality / 2)}`"
                  >
                </div>
              </li>
            </ul>
          </div>

          <div class="flex items-center justify-between">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="goalKeepers" class="sr-only peer">
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Arqueros fijos</span>
            </label>

            <InfoIcon data-popover-target="popover-default"/>
            <div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
              <div class="px-3 py-2">
                <p>Activando esta opción, los primeros jugadores de cada equipo serán tomados en cuenta como arqueros fijos.</p>
              </div>
              <div data-popper-arrow></div>
            </div>
          </div>

          <!-- TODO: Deshabilitar el boton hasta que se llenen todos los inputs -->
          <button @click="mixTeams()" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Mezclar</button>

          <!-- <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <div class="flex items-center gap-4">
              <ShareIcon/>
              <span>Compartir formación</span>
            </div>
          </button> -->
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import InfoIcon from '@/assets/icons/infoIcon.vue'
// import ShareIcon from '@/assets/icons/ShareIcon.vue'
import FivePitch from '@/components/Pitchs/FivePitch.vue'
import SixPitch from '@/components/Pitchs/SixPitch.vue'
import EightPitch from '@/components/Pitchs/EightPitch.vue'
import ElevenPitch from '@/components/Pitchs/ElevenPitch.vue'

export default {
  name: 'ModalityView',
  components: {
    InfoIcon,
    // ShareIcon,
    FivePitch,
    SixPitch,
    EightPitch,
    ElevenPitch,
  },
  data() {
    return {
      modality: undefined,
      players: [],
      goalKeepers: false,
    }
  },

  created() {
    this.modality = parseInt(this.$route.params.modalidad, 10) * 2;
    for (let i = 0; i < this.modality; i++) {
      this.players.push({id: i, playerName: undefined});
    }
  },

  methods: {
    mixTeams() {
      if (this.goalKeepers) {
        const goalKeeper1 = this.players[0];
        const goalKeeper2 = this.players[this.modality / 2];

        this.players.splice(this.modality/2, 1);
        this.players.splice(0, 1);

        this.players = this.players.sort(() => Math.random() - 0.5);

        this.players.splice(0, 0, goalKeeper1);
        this.players.splice(this.modality/2, 0, goalKeeper2);
        } else {
        this.players = this.players.sort(() => Math.random() - 0.5);
      }
    },
  }
}
</script>

<style scoped>
.max-width {
  width: -webkit-fill-available;
}
</style>