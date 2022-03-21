import { mount } from '@vue/test-utils'
import { IPagination } from '../../bff'
import Pagination from './Pagination.vue'

const paginationData = {
  last: 100,
  current: 1,
  pageSize: 10,
  totalElements: 10000,
} as IPagination

const doubleRaf = (callback: FrameRequestCallback) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(callback)
  })
}

describe('The Pagination component', () => {
  const wrapper = mount(Pagination, {
    props: {
      paginationData,
    },
  })

  it('should render correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should have the prev button disabled when current page is 1', () => {
    expect(wrapper.find('.pagination--back').classes()).toContain('disabled')
  })

  it('should change accordingly when next page button is clicked', async () => {
    await wrapper.find('.pagination--next').trigger('click')

    doubleRaf(() => {
      expect(wrapper.find('.pagination--back').classes()).not.toContain(
        'disabled'
      )
      expect(wrapper.find('.pagination--current').text()).toBe('2')
      expect(wrapper.emitted()).toHaveProperty('pageChanged')
      expect(wrapper.emitted().pageChanged[0]).toEqual([2])
    })
  })
})
