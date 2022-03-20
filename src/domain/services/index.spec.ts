import { getHousesList } from './index'
jest.mock('../../api')

describe('The getHouseList service', () => {
  it('returns a House array', async () => {
    const housesList = await getHousesList()

    expect(housesList).toBeInstanceOf(Array)
  })

  it('returns the correct info', async () => {
    const housesList = await getHousesList()

    expect(housesList).toMatchSnapshot()
  })
})
