<template>
  <div class="flex flex-col items-center justify-center">
    <div class="relative w-5 h-5 bg-white rounded-full md:w-8 md:h-8">
      <span class="absolute font-semibold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">{{player.id}}</span>
    </div>
    <span class="font-semibold text-white text-xs md:text-base md:min-w-[6rem] min-h-[1.5rem] text-center">{{player.playerName}}</span>
  </div>
</template>

<script>
export default {
  name: 'PlayerDot',
  props: {
    player: undefined,
  },
}
</script>