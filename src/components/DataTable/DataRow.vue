<script setup lang="ts">
import { IHouse } from '../../domain/models/House'

interface IDataRow {
  data: IHouse
}

defineProps<IDataRow>()
</script>

<template>
  <tr class="data-row">
    <td class="data-row--item">
      {{ data.title }}
    </td>
    <td class="data-row--item">
      {{ data.address }}
    </td>
    <td class="data-row--item">
      {{ data.city }}
    </td>
    <td class="data-row--item">
      <a :href="data.image" target="_blank"
        ><i class="fa-solid fa-image"></i
      ></a>
    </td>
    <td class="data-row--item">
      <a :href="data.link" target="_blank">
        <i class="fa-solid fa-up-right-from-square"></i>
      </a>
    </td>
  </tr>
</template>

<style lang="postcss">
.data-row--item {
  padding: 1rem;
  text-transform: capitalize;
}
</style>
