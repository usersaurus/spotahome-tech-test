import { getHousesList } from './index'
jest.mock('../../api')

describe('The getHouseList service', () => {
  it('returns a House array', async () => {
    const housesListInfo = await getHousesList()

    expect(housesListInfo.houses).toBeInstanceOf(Array)
  })

  it('returns the correct info', async () => {
    const housesListInfo = await getHousesList()

    expect(housesListInfo.houses).toMatchSnapshot()
  })
})
