<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getHousesList } from '../domain/services'
import { useAppStore } from '../stores/app'
import DataTable from '../components/DataTable/DataTable.vue'
import Pagination from '../components/Pagination/Pagination.vue'
import { IHouse } from '../domain/models/House'

const store = useAppStore()
const columns = ref([] as string[])
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  const housesList = await getHousesList()

  store.setHouseList(housesList)

  columns.value = store.houseList[0]
    ? buildColumnTitles(store.houseList[0])
    : []

  isLoading.value = false
})

const onPageChanged = async (page: number) => {
  isLoading.value = true

  const housesList = await getHousesList(page)
  store.setHouseList(housesList)

  isLoading.value = false
}

const buildColumnTitles = (house: IHouse) =>
  Object.keys(house).reduce((acc, key) => {
    if (key === 'id') return acc
    acc.push(key)
    return acc
  }, [] as string[])
</script>

<template>
  <div class="house-list">
    <DataTable
      :columns="columns"
      :data="store.houseList"
      :loading="isLoading"
    />
    <Pagination
      :pagination-data="store.pagination"
      @page-changed="onPageChanged"
    />
  </div>
</template>

<style lang="postcss">
.house-list {
  padding: 1rem;
  position: relative;
  max-width: 100%;
}
</style>
