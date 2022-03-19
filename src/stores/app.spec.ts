import { setActivePinia, createPinia } from 'pinia'
import { useAppStore } from './app'
import { houseList } from './__mocks__'

describe('The store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('updates houseList when setHouseList is called', () => {
    const store = useAppStore()

    store.setHouseList(houseList)

    expect(store.houseList).toEqual(houseList)
  })
})
