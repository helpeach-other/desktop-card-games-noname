<script setup lang="ts">
import OtherPlayer from '@/components/Player/OtherPlayer.vue'
import MyselfPlayer from '@/components/Player/MyselfPlayer.vue'
import CaoCaoAvatar from '@/assets/images/characters/cao-cao.jpg'
</script>

<template>
  <div class="h-full w-full flex flex-col items-center overflow-hidden pt-40px">
    <!-- 对手 -->
    <OtherPlayer
      :avatar="CaoCaoAvatar"
      name="曹操"
      :hp="2"
      :max-hp="4"
      :card-count="4"
      identity="反"
    />
    <!-- 棋盘 -->
    <div />
    <!-- 出牌区 -->
    <div class="mt-auto h-120px w-full bg-[url(@/assets/images/wood.jpg)]">
      <MyselfPlayer
        :avatar="CaoCaoAvatar"
        name="曹操"
        :hp="2"
        :max-hp="4"
        :card-count="4"
        identity="反"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
// something
</style>
