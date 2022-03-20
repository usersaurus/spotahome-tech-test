import { IRawHouseData } from '../../bff'

export interface IHouse {
  title: string
  address: string
  city: string
  link: string
  image: string
}

export const House = (props: IRawHouseData) =>
  ({
    title: `${props.City} - ${formatCurrency(
      props.CountryCode,
      props.Currency
    ).format(props.Price)}`, // There's not a title prop in given data, so we'll just use the city and price
    address: props.Address,
    city: props.City,
    link: props.Link,
    image: props.Images.length && props.Images[0],
  } as IHouse)

const formatCurrency = (countryCode: string, currency: string) =>
  new Intl.NumberFormat(countryCode, {
    style: 'currency',
    currency,
  })
