import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',

  state: () => ({}),

  actions: {},
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
