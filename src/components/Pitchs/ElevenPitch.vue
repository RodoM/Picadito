<template>
  <div class="relative w-full">
    <div class="bg-blue-500 bg-opacity-30 h-[20rem] md:h-[25rem] w-full py-6 border-2 border-white rounded rounded-b-none">
      <div class="flex flex-col justify-between h-full">
        <PlayerDot :playerName="players[0].playerName"/>
        <div class="flex justify-around">
          <PlayerDot :playerName="players[1].playerName"/>
          <PlayerDot :playerName="players[2].playerName"/>
          <PlayerDot :playerName="players[3].playerName"/>
          <PlayerDot :playerName="players[4].playerName"/>
        </div>
        <div class="flex justify-around">
          <PlayerDot :playerName="players[5].playerName"/>
          <PlayerDot :playerName="players[6].playerName"/>
          <PlayerDot :playerName="players[7].playerName"/>
        </div> 
        <div class="flex justify-around">
          <PlayerDot :playerName="players[8].playerName"/>
          <PlayerDot :playerName="players[9].playerName"/>
          <PlayerDot :playerName="players[10].playerName"/>
        </div>
      </div>
    </div>
    <div class="absolute w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full top-1/2 left-1/2"></div>
    <div class="bg-red-500 bg-opacity-30 h-[20rem] md:h-[25rem] w-full py-6 border-2 border-white rounded rounded-t-none border-t-0">
      <div class="flex flex-col justify-between h-full">
        <div class="flex justify-around">
          <PlayerDot :playerName="players[12].playerName"/>
          <PlayerDot :playerName="players[13].playerName"/>
          <PlayerDot :playerName="players[14].playerName"/>
        </div>
        <div class="flex justify-around">
          <PlayerDot :playerName="players[15].playerName"/>
          <PlayerDot :playerName="players[16].playerName"/>
          <PlayerDot :playerName="players[17].playerName"/>
        </div>
        <div class="flex justify-around">
          <PlayerDot :playerName="players[18].playerName"/>
          <PlayerDot :playerName="players[19].playerName"/>
          <PlayerDot :playerName="players[20].playerName"/>
          <PlayerDot :playerName="players[21].playerName"/>
        </div>
        <PlayerDot :playerName="players[11].playerName"/>
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
