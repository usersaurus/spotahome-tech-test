<script setup lang="ts">
import { IPagination } from '../../bff'

interface IPaginationProps {
  paginationData: IPagination
}

const props = defineProps<IPaginationProps>()
const emit = defineEmits<{
  (e: 'pageChanged', page: number): void
}>()

const changePage = (page: number) => {
  if (page < 0 || page > props.paginationData.last) return

  emit('pageChanged', page)
}
</script>

<template>
  <div class="pagination">
    <div
      class="pagination--back"
      :class="{ disabled: paginationData.current === 1 }"
      @click="changePage(paginationData.current - 1)"
    >
      <i class="fa-solid fa-caret-left"></i>
    </div>
    <div class="pagination--current">{{ paginationData.current }}</div>
    <div
      class="pagination--next"
      :class="{ disabled: paginationData.current === paginationData.last }"
      @click="changePage(paginationData.current + 1)"
    >
      <i class="fa-solid fa-caret-right"></i>
    </div>
  </div>
</template>

<style lang="postcss">
.pagination {
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  padding-top: 16px;
  width: 100%;
  font-weight: 600;
  font-size: 13pt;
}

.pagination--next,
.pagination--back {
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;

    color: gray;
  }
}
</style>
