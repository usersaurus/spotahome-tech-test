<script setup lang="ts">
import { IHouse } from '../../domain/models/House'
import DataRow from './DataRow.vue'
import Loading from 'vue-loading-overlay'
import { ref, watchEffect } from 'vue'
import 'vue-loading-overlay/dist/vue-loading.css'

interface IDataTableProps {
  columns: string[]
  data: IHouse[]
  loading: boolean
}

const props = defineProps<IDataTableProps>()
const isLoading = ref(props.loading)

watchEffect(() => {
  isLoading.value = props.loading
})
</script>

<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :is-full-page="true"
  />
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
