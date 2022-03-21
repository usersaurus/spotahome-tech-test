import { House } from './House'
import { getHouses } from '../../api/__mocks__'

describe('The House model', () => {
  it('matches snapshot when object is created with IRawHouseData info', async () => {
    const housesListInfo = await getHouses()
    const house = House(housesListInfo.data[0])

    expect(house).toMatchSnapshot()
  })
})
