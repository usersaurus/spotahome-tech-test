import axios from 'axios'
import { IRawHouseData, IPagination } from '../bff'

export const getHouses = (page: number) =>
  axios
    .get<{ pagination: IPagination; data: IRawHouseData[] }>(
      'http://localhost:3000/gethouses',
      { params: { page } }
    )
    .then(({ data }) => data)
