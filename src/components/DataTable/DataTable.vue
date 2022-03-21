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
  <table class="data-table">
    <thead class="data-table--header">
      <tr>
        <th v-for="column in columns" :key="column">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <DataRow v-for="elemn in data" :key="elemn.id" :data="elemn" />
    </tbody>
  </table>
</template>

<style lang="postcss">
.data-table {
  border-collapse: collapse;
  min-width: 100%;
  background-color: #fff;
  overflow: auto;
  position: relative;
  display: block;
  overflow-x: auto;
  white-space: nowrap;

  @media only screen and (min-width: 600px) {
    display: table;
  }
}

.data-table--header {
  background-color: #f9fafb;
  text-align: left;
  border-bottom: 2px solid #eff6ff;
  text-transform: capitalize;

  & th {
    padding: 1rem;
  }
}
</style>
