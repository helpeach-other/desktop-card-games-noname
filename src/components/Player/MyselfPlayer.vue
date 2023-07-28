<script setup lang="ts">
interface MyselfPlayerProps {
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

defineProps<MyselfPlayerProps>()
</script>

<template>
  <!-- avatar -->
  <div class="relative h-120px w-120px select-none bg-cover" :style="{ backgroundImage: `url(${avatar})` }">
    <!-- identity -->
    <div class="absolute right--8px top--12px z-2 cursor-default text-lg text-white green-shadow">
      {{ identity }}
    </div>
    <!-- name -->
    <div class="absolute left-15px top-20px z-2 text-lg text-white blue-shadow">
      {{ name }}
    </div>
    <!-- hp -->
    <div class="absolute bottom-10px right-5px z-2 text-lg text-white">
      <span v-if="maxHp > 7" class="green-shadow">
        {{ hp }}/{{ maxHp }}
      </span>
      <div v-else class="flex flex-col gap-1">
        <div v-for="i in (maxHp - hp)" :key="`lost-${i}`" class="h-3 w-3 border border-slate-600 rounded-full rounded-full border-solid bg-slate" />
        <div v-for="i in hp" :key="i" class="h-3 w-3 border border-green-600 rounded-full border-solid bg-green" />
      </div>
    </div>
    <!-- card count -->
    <div class="absolute bottom-20px left-0 rounded-r bg-green-600 p1 text-sm text-white shadow">
      {{ cardCount }}
    </div>
  </div>
</template>
