<template>
  <main class="flex min-h-screen bg-gray-900">
    <div class="container flex flex-col items-center justify-center gap-10 mx-auto md:flex-row">
      <section id="left-side">
        <div class="px-4 py-2 bg-white rounded bg-opacity-30">
          <span class="text-white">Pizarra de ideas:</span>
          <ul>
            <li class="text-white">- Un solo campo de juego, en cada mitad va un equipo</li>
            <li class="text-white">- Dos campos de juegos, en cada uno va un equipo bien desplegado</li>
            <li class="text-white">- Botones con formaciones que cambian la disposicion del equipo en el campo</li>
          </ul>
        </div>
      </section>

      <section id="right-side">
        <div class="flex flex-col gap-2">
          <span class="text-5xl font-bold text-white">Jugadores:</span>
          <ul class="flex flex-col gap-2">
            <li v-for="player in modality" :key="player">
              <input
                type="text"
                v-model="players[player - 1].playerName"
                class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="`Jugador${player - 1}`"
                :class="player <= modality / 2 ? 'border-blue-500' : 'border-red-500'"
              >
            </li>
          </ul>

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
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import InfoIcon from '@/assets/icons/infoIcon.vue'

export default {
  name: 'ModalityView',
  components: {
    InfoIcon,
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
      this.players.push({playerName: undefined});
    }
  },

  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://unpkg.com/flowbite@1.5.4/dist/flowbite.js')
    document.head.appendChild(recaptchaScript)
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
    }
  }
}
</script>