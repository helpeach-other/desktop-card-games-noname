<script setup lang="ts">
import OtherPlayer from '@/components/Player/OtherPlayer.vue'
import MyselfPlayer from '@/components/Player/MyselfPlayer.vue'
import Card from '@/components/Card.vue'
import CaoCaoAvatar from '@/assets/images/characters/cao-cao.jpg'
import standardCards from '@/core/card/standard'
</script>

<template>
  <div class="h-full w-full flex flex-col items-center of-hidden pt-40px">
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
    <!-- 玩家区域 -->
    <div class="mt-auto h-120px w-full flex bg-[url(@/assets/images/wood.jpg)] shadow">
      <!-- 玩家武将 -->
      <MyselfPlayer
        class="shrink-0"
        :avatar="CaoCaoAvatar"
        name="曹操"
        :hp="2"
        :max-hp="4"
        :card-count="4"
        identity="反"
      />
      <!-- 玩家手牌区 -->
      <div class="h-full flex flex-1 gap-1 of-hidden of-x-scroll p-1.5">
        <Card v-for="(card, i) in standardCards" v-bind="card" :key="i" class="shrink-0" />
      </div>
      <!-- 玩家装备区 -->
      <div class="h-120px w-120px shrink-0 shadow">
        <!--  -->
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// something
</style>
