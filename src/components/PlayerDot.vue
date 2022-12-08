<template>
  <div class="flex flex-col items-center justify-center">
    <div class="w-5 h-5 bg-white rounded-full md:w-8 md:h-8"></div>
    <span class="font-semibold text-white text-xs md:text-base md:min-w-[6rem] min-h-[1.5rem] text-center">{{playerName}}</span>
  </div>
</template>

<script>
export default {
  name: 'PlayerDot',
  props: {
    playerName: undefined,
  },
}
</script>