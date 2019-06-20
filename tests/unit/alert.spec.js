import { mount } from '@vue/test-utils'
import Alert from '@/components/alert'

describe('Alert', () => {
  // 是否存在该组件
  it('存在', () => {
    const wrapper = mount(Alert)
    expect(wrapper.contains('div')).toBe(true)
  })
})


