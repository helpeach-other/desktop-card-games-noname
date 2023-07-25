<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import configuration from '@/configuration'
import AButton from '@/components/AButton.vue'

const models = configuration.models.loads
const active = ref(0)
const activeModel = computed(() => models[active.value] ?? {})
const router = useRouter()
function toView() {
  router.push(activeModel.value.routePath)
}
</script>

<template>
  <div class="h-full w-full flex items-center justify-center">
    <div class="flex gap-1 rounded bg-white p-4 shadow">
      <div class="hidden w-300px flex-col gap-2 p-2 md:flex">
        <p>{{ activeModel.name }}</p>
        <p>{{ activeModel.description }}</p>
        <AButton @click="toView">
          开始游戏
        </AButton>
      </div>
      <div class="w-220px flex flex-col gap-2 p-2">
        <div
          v-for="(model, i) in models" :key="i" class="cursor-pointer border border-slate-300 rounded border-solid p-2 transition-all duration-300 transition-ease" :class="{
            'bg-cyan-500': active === i,
            '!border-cyan-500': active === i,
            'text-sky-100': active === i,
          }" @click="active = i"
        >
          {{ model.name }}
        </div>
      </div>
    </div>
  </div>
</template>
