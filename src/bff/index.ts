import axios from 'axios'

export interface IRawHouseData {
  Address: string
  City: string
  CountryCode: string
  Price: number
  StartDate: string
  EndDate: string
  Currency: string // should be 'USD' | 'EUR' | 'GBP' or something like that, but let's keep it simple
  Description: string
  Lat: number
  Lng: number
  Facilities: { [key: string]: string }
  Deposit: number
  Images: string[]
  LastUpdated: string
  ListingReference: string
  Link: string
}

export interface IPagination {
  current: number
  last: number
  pageSize: number
  totalElements: number
}

const PAGE_SIZE = 10
let houses: IRawHouseData[] = []

export const getHouses = async (page: number) => {
  const url = 'http://feeds.spotahome.com/ads-housinganywhere.json'

  if (!houses.length) {
    houses = await axios.get<IRawHouseData[]>(url).then(({ data }) => data)
  }

  return {
    pagination: {
      current: page,
      last: Math.ceil(houses.length / PAGE_SIZE),
      pageSize: PAGE_SIZE,
      totalElements: houses.length,
    } as IPagination,
    data: houses.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
  }
}
