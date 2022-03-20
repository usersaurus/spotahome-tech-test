<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getHousesList } from '../domain/services'
import { useAppStore } from '../stores/app'
import DataTable from '../components/DataTable/DataTable.vue'

const store = useAppStore()
const columns = ref([] as string[])

onMounted(async () => {
  const housesList = await getHousesList()

  store.setHouseList(housesList)
  columns.value = store.houseList[0] ? Object.keys(store.houseList[0]) : []
})
</script>

<template>
  <div class="house-list">
    <DataTable :columns="columns" :data="store.houseList" :loading="true" />
  </div>
</template>

<style lang="postcss">
.house-list {
  padding: 1rem;
  position: relative;
  max-width: 100%;
}
</style>
