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
  height: auto;
  width: 100%;
  position: absolute;
}

html,
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #eff6ff;
}
</style>
