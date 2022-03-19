import { IRawHouseData } from '../../bff'

export interface IHouse {
  title: string
  link: string
  address: string
  city: string
  image: string
}

export const House = (props: IRawHouseData) =>
  ({
    title: `${props.City} - ${props.Price}`, // There's not a title prop in given data, so we'll just use the city and price
    link: props.Link,
    address: props.Address,
    city: props.City,
    image: props.Images.length && props.Images[0],
  } as IHouse)
