import { setActivePinia, createPinia } from 'pinia'
import { useAppStore } from './app'
import { houseList } from './__mocks__'

describe('The store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('updates houseList and pagination when setHouseList is called', () => {
    const store = useAppStore()

    store.setHouseList({
      houses: houseList,
      pagination: { last: 100, current: 2, pageSize: 10, totalElements: 10000 },
    })

    expect(store.houseList).toEqual(houseList)
  })
})
