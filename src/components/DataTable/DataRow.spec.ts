import { mount } from '@vue/test-utils'
import DataRow from './DataRow.vue'

describe('The DataRow component', () => {
  const wrapper = mount(DataRow, {
    props: {
      data: {
        title: 'Benito Villamarin',
        address: 'Avenida de la palmera',
        city: 'Sevilla',
        image: 'http://google.com',
        link: 'http://google.com',
      },
    },
  })

  it('should render a row', () => {
    expect(wrapper.find('.data-row').exists()).toBe(true)
  })

  it('should render te correct amount of items', () => {
    expect(wrapper.findAll('.data-row--item').length).toBe(5)
  })
})
