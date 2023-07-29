<script setup lang="ts">
import { onMounted, ref } from 'vue'
import OtherPlayer from '@/components/Player/OtherPlayer.vue'
import MyselfPlayer from '@/components/Player/MyselfPlayer.vue'
import Card from '@/components/Card.vue'
import CaoCaoAvatar from '@/assets/images/characters/cao-cao.jpg'
import standardCards from '@/core/card/standard'

const handCardsRef = ref<HTMLElement | null>(null)
const handCards = ref(standardCards.slice())
const handCardTransform = ref(0)
const activeCard = ref<number | null>(null)

// 计算手牌间距
function computeHandCardTransform() {
  const handCardsEl = handCardsRef.value
  if (!handCardsEl)
    return
  const exceededWidth = handCardsEl.scrollWidth - handCardsEl.getBoundingClientRect().width
  if (exceededWidth > 0)
    handCardTransform.value = Math.ceil(exceededWidth / (handCards.value.length - 1))
}

function handleClickCard(index: number) {
  activeCard.value = activeCard.value === index ? null : index
}

onMounted(computeHandCardTransform)
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
      <div ref="handCardsRef" class="h-full w-[calc(100%-240px)] flex flex-1 shrink-0 gap-6px p-1.5">
        <Card
          v-for="(card, i) in handCards" v-bind="card" :key="i" class="shrink-0 transition-all duration-300"
          :style="{ transform: `translate(-${i * handCardTransform}px, ${activeCard === i ? -20 : 0}px)` }"
          @click="handleClickCard(i)"
        />
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
