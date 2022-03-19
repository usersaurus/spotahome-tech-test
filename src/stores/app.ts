import { defineStore } from 'pinia'
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
