<script setup lang="ts">
import { IHouse } from '../../domain/models/House'

interface IDataRow {
  data: IHouse
}

const props = defineProps<IDataRow>()
const items = Object.keys(props.data).filter((key) => key !== 'id')
</script>

<template>
  <tr class="data-row">
    <td v-for="key in items" :key="key + data.id" class="data-row--item">
      <a v-if="key === 'link'" :href="data.link" target="_blank">
        <i class="fa-solid fa-up-right-from-square"></i>
      </a>
      <a v-else-if="key === 'image'" :href="data.image" target="_blank"
        ><i class="fa-solid fa-image"></i
      ></a>
      <template v-else>{{ data[key] }}</template>
    </td>
  </tr>
</template>

<style lang="postcss">
.data-row--item {
  padding: 1rem;
  text-transform: capitalize;
}
</style>
