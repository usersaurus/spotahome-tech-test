import { defineStore, acceptHMRUpdate } from 'pinia'
import { IHouse } from '../domain/models/House'

export const useAppStore = defineStore({
  id: 'app',

  state: () => ({
    houseList: [] as IHouse[],
  }),

  actions: {
    setHouseList(houses: IHouse[]) {
      this.houseList = houses
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
