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
  Facilities: { [key: string]: 'yes' | 'no' }
  Deposit: number
  Images: string[]
  LastUpdated: string
  ListingReference: string
  Link: string
}

export const getHouses = () => {
  const url = 'http://feeds.spotahome.com/ads-housinganywhere.json'

  return axios.get<IRawHouseData[]>(url).then(({ data }) => data)
}
