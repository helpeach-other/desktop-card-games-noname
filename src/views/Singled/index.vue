<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import OtherPlayer from '@/components/Player/OtherPlayer.vue'
import MyselfPlayer from '@/components/Player/MyselfPlayer.vue'
import Card from '@/components/Card.vue'
import CaoCaoAvatar from '@/assets/images/characters/cao-cao.jpg'
import { standardCards } from '@/core/card/standard'

const handCardsRef = ref<HTMLElement | null>(null)
const handCards = ref(standardCards.slice())
const handCardTransform = ref(0)
const needOverflow = computed(() => handCardTransform.value === 80)
const activeCard = ref<number | null>(null)
const CARD_WIDTH = 104
const handCardsWrapperWidth = computed(() => `${(CARD_WIDTH - handCardTransform.value + 6) * handCards.value.length + CARD_WIDTH}px`)

// 计算手牌间距
function computeHandCardTransform() {
  const handCardsEl = handCardsRef.value
  if (!handCardsEl)
    return
  const len = handCards.value.length
  const exceededWidth = len * CARD_WIDTH - handCardsEl.getBoundingClientRect().width
  if (exceededWidth > 0)
    handCardTransform.value = Math.min(80, Math.ceil(exceededWidth / (handCards.value.length - 1)))
}

// x轴滚动
function handleWheel(event: WheelEvent) {
  const el = handCardsRef.value
  if (!el)
    return
  el.scrollLeft += event.deltaY > 0 ? 20 : -20
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
      <div ref="handCardsRef" class="h-full flex-1 shrink-0 of-hidden" :class="{ 'of-x-scroll': needOverflow }">
        <div class="h-full min-w-full flex gap-6px p-1.5" :style="{ width: handCardsWrapperWidth }" @wheel="handleWheel">
          <Card
            v-for="([suit, token, card], i) in handCards" :key="i" :suit="suit" :token="token" :card="new card()"
            class="inline-block shrink-0 cursor-pointer transition-all duration-300"
            :class="{
              'ac-shadow': activeCard === i,
            }"
            :style="{
              transform: `translateX(-${i * handCardTransform}px)`,
              opacity: activeCard === null ? 1 : activeCard === i ? 1 : 0.8,
            }"
            :clipped="needOverflow && i !== handCards.length - 1"
            @click="handleClickCard(i)"
          />
        </div>
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
