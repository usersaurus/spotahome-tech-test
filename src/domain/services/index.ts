import { getHouses } from '../../api'
import { House } from '../models/House'

export const getHousesList = () =>
  getHouses().then((rawList) => rawList.map((rawHouse) => House(rawHouse)))
