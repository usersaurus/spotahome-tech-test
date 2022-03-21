<script setup lang="ts">
import { IPagination } from '../../bff'

interface IPaginationProps {
  paginationData: IPagination
}
defineProps<IPaginationProps>()

const emit = defineEmits<{
  (e: 'pageChanged', page: number): void
}>()

const changePage = (page: number) => {
  emit('pageChanged', page)
}
</script>

<template>
  <div class="pagination">
    <div
      class="pagination--back"
      @click="
        paginationData.current > 1 &&
          emit('pageChanged', paginationData.current - 1)
      "
    >
      <i class="fa-solid fa-arrow-left"></i>
    </div>
    <div class="pagination--current">{{ paginationData.current }}</div>
    <div
      class="pagination--next"
      @click="
        paginationData.last !== paginationData.current &&
          emit('pageChanged', paginationData.current + 1)
      "
    >
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  </div>
</template>

<style lang="postcss">
.pagination {
}
</style>
