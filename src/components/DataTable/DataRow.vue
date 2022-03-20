<script setup lang="ts">
import { IHouse } from '../../domain/models/House'

interface IDataRow {
  data: IHouse
}

defineProps<IDataRow>()
</script>

<template>
  <div v-for="value in Object.values(data)" :key="`${value}`" class="red">
    {{ value }}
    #############
  </div>
</template>

<style lang="postcss">
.red {
  color: red;

  &:hover {
    color: blue;
  }
}
</style>
