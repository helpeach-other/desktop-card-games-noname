<script setup lang="ts">
import { useRouter } from 'vue-router'
import AButton from '@/components/AButton.vue'

const router = useRouter()
</script>

<template>
  <div class="h-full w-full flex flex-col items-center justify-center gap-4">
    <span class="text-lg text-slate-800">暂未找到合适的游戏模式，敬请期待！</span>
    <AButton class="px-8" @click="router.push('/')">
      返回首页
    </AButton>
  </div>
</template>
