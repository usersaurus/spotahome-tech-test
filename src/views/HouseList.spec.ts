import { mount } from '@vue/test-utils'
import HouseList from './HouseList.vue'
import DataTable from '../components/DataTable/DataTable.vue'
import DataRow from '../components/DataTable/DataRow.vue'
import { setActivePinia, createPinia } from 'pinia'

jest.mock('../api')

describe('The HouseList component', () => {
  setActivePinia(createPinia())

  const wrapper = mount(HouseList)

  it('should render a DataTable component', () => {
    expect(wrapper.findComponent(DataTable).exists()).toBe(true)
  })

  it('should render 2 DataRow components', () => {
    expect(wrapper.findAllComponents(DataRow).length).toBe(2)
  })

  it('should render DataRows with the expected content', () => {
    const data = wrapper.findAllComponents(DataRow)

    expect(data).toMatchSnapshot()
  })
})
