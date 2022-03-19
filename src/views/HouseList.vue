<script setup lang="ts">
import { onMounted } from 'vue'
import { getHousesList } from '../domain/services'
import { useAppStore } from '../stores/app'

const store = useAppStore()

onMounted(async () => {
  const housesList = await getHousesList()
  store.setHouseList(housesList)
})
</script>

<template>
  {{ store.houseList }}
</template>

<style></style>
