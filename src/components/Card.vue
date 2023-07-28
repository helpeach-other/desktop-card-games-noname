<script setup lang="ts">
import type { Card } from '@/core/card/standard'
import { CardType } from '@/core/card/standard'

defineProps<Card>()
</script>

<template>
  <div class="relative h-104px w-104px select-none rounded-lg bg-[url(@/assets/images/wood.jpg)] shadow">
    <p class="absolute left-8px top-8px w-18px border border-slate-600 rounded border-solid text-center leading-4.5">
      {{ name }}
    </p>
    <!-- bg -->
    <div
      class="h-full w-full rounded-lg bg-cover shadow-2xl"
      :style="{ backgroundImage: `url(${image})` }"
    />
    <!-- index -->
    <div class="absolute right-8px top-8px text-center">
      ♠︎ Q
    </div>
    <div v-if="type & CardType.Weapon">
      <div class="absolute bottom-8px right-8px text-center">
        <span class="text-slate-700">范围：3</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 1px, rgba(0, 0, 0, 0.45) 0 3px 10px;
}
</style>
