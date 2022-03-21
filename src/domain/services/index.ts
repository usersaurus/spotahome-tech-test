import { getHouses } from '../../api'
import { IPagination } from '../../bff'
import { House, IHouse } from '../models/House'

export interface IHouseListData {
  houses: IHouse[]
  pagination: IPagination
}

export const getHousesList = (page = 1) =>
  getHouses(page).then((rawList) => ({
    pagination: rawList.pagination,
    houses: rawList.data.map((rawHouse) => House(rawHouse)),
  })) as Promise<IHouseListData>
