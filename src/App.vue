<script setup lang="ts">
import HouseList from './views/HouseList.vue'
</script>

<template>
  <div class="app">
    <HouseList />
  </div>
</template>

<style lang="postcss">
.app {
  height: 100vh;
  background-color: #eff6ff;
  width: 100vw;
  position: absolute;
}

html,
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
</style>
