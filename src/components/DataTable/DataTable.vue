<script setup lang="ts">
import { IHouse } from '../../domain/models/House'
import DataRow from './DataRow.vue'

interface IDataTableProps {
  columns: string[]
  data: IHouse[]
  loading: boolean
}

defineProps<IDataTableProps>()
</script>

<template>
  <div v-for="column in columns" :key="column">{{ column }} |</div>
  <DataRow v-for="elemn in data" :key="Object.values(elemn)[0]" :data="elemn" />
</template>

<style></style>
