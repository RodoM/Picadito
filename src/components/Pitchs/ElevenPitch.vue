<template>
  <div class="relative w-full">
    <div class="bg-blue-500 bg-opacity-30 h-[20rem] md:h-[25rem] w-full py-6 border-2 border-white rounded rounded-b-none">
      <div class="flex flex-col justify-between h-full">
        <PlayerDot :player="players[0]" :number="0"/>
        <div class="flex justify-around">
          <PlayerDot :player="players[1]" :number="1"/>
          <PlayerDot :player="players[2]" :number="2"/>
          <PlayerDot :player="players[3]" :number="3"/>
          <PlayerDot :player="players[4]" :number="4"/>
        </div>
        <div class="flex justify-around">
          <PlayerDot :player="players[5]" :number="5"/>
          <PlayerDot :player="players[6]" :number="6"/>
          <PlayerDot :player="players[7]" :number="7"/>
        </div> 
        <div class="flex justify-around">
          <PlayerDot :player="players[8]" :number="8"/>
          <PlayerDot :player="players[9]" :number="9"/>
          <PlayerDot :player="players[10]" :number="10"/>
        </div>
      </div>
    </div>
    <div class="absolute w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full top-1/2 left-1/2"></div>
    <div class="bg-red-500 bg-opacity-30 h-[20rem] md:h-[25rem] w-full py-6 border-2 border-white rounded rounded-t-none border-t-0">
      <div class="flex flex-col justify-between h-full">
        <div class="flex justify-around">
          <PlayerDot :player="players[12]" :number="12"/>
          <PlayerDot :player="players[13]" :number="13"/>
          <PlayerDot :player="players[14]" :number="14"/>
        </div>
        <div class="flex justify-around">
          <PlayerDot :player="players[15]" :number="15"/>
          <PlayerDot :player="players[16]" :number="16"/>
          <PlayerDot :player="players[17]" :number="17"/>
        </div>
        <div class="flex justify-around">
          <PlayerDot :player="players[18]" :number="18"/>
          <PlayerDot :player="players[19]" :number="19"/>
          <PlayerDot :player="players[20]" :number="20"/>
          <PlayerDot :player="players[21]" :number="21"/>
        </div>
        <PlayerDot :player="players[11]" :number="11"/>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerDot from '@/components/PlayerDot.vue'

export default {
  name: 'ElevenPitch',
  components: {
    PlayerDot,
  },
  props: {
    players: undefined,
  },
}
</script>
