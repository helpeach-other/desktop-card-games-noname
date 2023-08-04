<script setup lang="ts">
import { computed } from 'vue'
import type { CardClass } from '@/core/card/standard'
import { CardSuit, CardSuitStringMap, CardTokenStringMap, CardType } from '@/core/card/standard'

interface Props {
  card: CardClass
  suit: CardSuit
  token: number
  clipped?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{ click: [card: CardClass, event: MouseEvent] }>()

const cardToken = computed(() => `${CardSuitStringMap[props.suit]} ${CardTokenStringMap[props.token] || props.token}`)
const isRedToken = computed(() => [CardSuit.Diamond, CardSuit.Heart].includes(props.suit))
const tokenTextCls = computed(() => ({
  'text-slate-800': !isRedToken.value,
  'text-red-800': isRedToken.value,
  'leading-4.5': !props.clipped || props.card.name.length < 4,
  'leading-4': props.clipped && props.card.name.length === 4,
  'leading-3.4': props.clipped && props.card.name.length === 5,
}))

function handleClickCard(event: MouseEvent) {
  emit('click', props.card, event)
}
</script>

<template>
  <div class="relative h-104px w-104px select-none rounded-lg bg-[url(@/assets/images/wood.jpg)] shadow" @click="handleClickCard">
    <p
      class="absolute left-8px w-18px border rounded border-solid text-center"
      :class="{
        ...tokenTextCls,
        'top-8px': !clipped,
        'top-30px': clipped,
        'text-15px': clipped && card.name.length > 3,
      }"
    >
      {{ card.name }}
    </p>
    <!-- bg -->
    <div
      class="h-full w-full rounded-lg bg-cover shadow-2xl"
      :style="{ backgroundImage: `url(${card.image})` }"
    />
    <!-- token -->
    <div
      class="absolute top-8px text-center"
      :class="{
        ...tokenTextCls,
        'right-8px': !clipped,
        'left-4px': clipped,
      }"
    >
      {{ cardToken }}
    </div>
    <div v-if="card.type & CardType.Weapon">
      <div class="absolute bottom-8px right-8px text-center">
        <span class="text-slate-700">范围：3</span>
      </div>
    </div>
  </div>
</template>
