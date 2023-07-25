<script setup lang="ts"></script>

<template>
  <div class="game-stage h-screen w-screen">
    <router-view />
  </div>
</template>

<style>
.game-stage {
  background-image: url('@/assets/images/grid.png'), linear-gradient(#6c7989, #434b55);
}
</style>
