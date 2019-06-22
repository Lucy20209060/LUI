import { mount } from '@vue/test-utils'
import Toast from '@/components/toast/src/main.vue'

describe('Toast', () => {
  // 是否存在该组件
  it('组件存在', () => {
    const wrapper = mount(Toast)
    expect(wrapper.exists()).toBe(true)
  })

  // 测试message属性
  it('设置message属性', () => {
    const wrapper = mount(Toast, {
      propsData: {
        message: 'test'
      }
    })
    expect(wrapper.text()).toBe('test')
  })
})