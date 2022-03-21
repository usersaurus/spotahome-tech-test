import { defineStore } from 'pinia'
import { IPagination } from '../bff'
import { IHouse } from '../domain/models/House'
import { IHouseListData } from '../domain/services'

export const useAppStore = defineStore({
  id: 'app',

  state: () => ({
    houseList: [] as IHouse[],
    pagination: {} as IPagination,
  }),

  actions: {
    setHouseList(houseListData: IHouseListData) {
      this.houseList = houseListData.houses
      this.pagination = houseListData.pagination
    },
  },
})
