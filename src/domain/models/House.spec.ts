import { House } from './House'
import { getHouses } from '../../api/__mocks__'

describe('The House model', () => {
  it('matches snapshot when object is created with IRawHouseData info', async () => {
    const houses = await getHouses()
    const house = House(houses[0])

    expect(house).toMatchSnapshot()
  })
})
