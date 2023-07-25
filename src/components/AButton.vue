<script setup lang="ts">
defineEmits<{
  (event: 'click', payload: MouseEvent): void
}>()
</script>

<template>
  <button
    class="btn cursor-pointer select-none border-0 rounded bg-sky-500 p2 text-slate-100 transition-all duration-300 transition-ease hover:bg-sky-600 hover:text-slate-200"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>
