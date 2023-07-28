<script setup lang="ts">
interface OtherPlayerProps {
  /** 身份 */
  identity?: string
  /** avatar */
  avatar?: string
  /** 名称 */
  name: string
  /** 生命值 */
  hp: number
  /** 最大生命值 */
  maxHp: number
  /** 卡牌数量 */
  cardCount: number
}

defineProps<OtherPlayerProps>()
</script>

<template>
  <div class="relative h-180px w-150px rounded-lg bg-[url(@/assets/images/wood.jpg)] p-1.5 shadow-2xl">
    <!-- identity -->
    <div class="green-shadow absolute right--8px top--12px z-2 text-lg text-white">
      {{ identity }}
    </div>
    <!-- avatar -->
    <img
      class="relative z-1 h-full w-full rounded-lg object-cover shadow-2xl"
      :src="avatar"
      alt="avatar"
      :draggable="false"
    >
    <!-- name -->
    <div class="blue-shadow absolute left-15px top-20px z-2 text-lg text-white">
      {{ name }}
    </div>
    <!-- hp -->
    <div class="absolute bottom-20px right-15px z-2 text-lg text-white">
      <span v-if="maxHp > 7" class="green-shadow">
        {{ hp }}/{{ maxHp }}
      </span>
      <div v-else class="flex flex-col gap-1">
        <div v-for="i in (maxHp - hp)" :key="`lost-${i}`" class="h-3 w-3 border border-slate-600 rounded-full rounded-full border-solid bg-slate" />
        <div v-for="i in hp" :key="i" class="h-3 w-3 border border-green-600 rounded-full border-solid bg-green" />
      </div>
    </div>
    <!-- card count -->
    <div class="absolute bottom-20px left--8px rounded bg-green-600 p1 text-sm text-white shadow-xl">
      {{ cardCount }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.green-shadow {
  text-shadow: rgba(57, 123, 4,1) 0 0 2px, rgba(57, 123, 4,1) 0 0 5px, rgba(57, 123, 4,1) 0 0 10px, rgba(57, 123, 4,1) 0 0 10px, rgba(57, 123, 4,1) 0 0 20px, rgba(57, 123, 4,1) 0 0 20px, black 0 0 1px;
}
.red-shadow {
  text-shadow: rgba(128, 59, 2,1) 0 0 2px, rgba(128, 59, 2,1) 0 0 2px, rgba(128, 59, 2,1) 0 0 2px, rgba(128, 59, 2,1) 0 0 2px, black 0 0 1px;
}
.blue-shadow {
  text-shadow: rgba(78, 117, 140,1) 0 0 2px, rgba(78, 117, 140,1) 0 0 2px, rgba(78, 117, 140,1) 0 0 2px, rgba(78, 117, 140,1) 0 0 2px, black 0 0 1px;
}
</style>
