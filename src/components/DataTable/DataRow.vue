<script setup lang="ts">
import { IHouse } from '../../domain/models/House'

interface IDataRow {
  data: IHouse
}

defineProps<IDataRow>()
</script>

<template>
  <div v-for="value in Object.values(data)" :key="`${value}`">
    {{ value }}
    #############
  </div>
</template>

<style></style>
