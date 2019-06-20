import { mount } from '@vue/test-utils'
import Button from '@/components/button'

describe('Button', () => {
  // 是否存在该组件
  it('存在', () => {
    const wrapper = mount(Button)
    expect(wrapper.contains('button')).toBe(true)
  })
  // 测试size属性
  it('成功设置属性-> size', () => {
    const wrapper = mount(Button, {
        propsData: {
          size: 'mini'
        }
    })
    expect(wrapper.classes('lu_button_mini')).toBe(true)
  })
  // 测试plain属性
  it('成功设置属性-> plain', () => {
    const wrapper = mount(Button, {
        propsData: {
          plain: true
        }
    })
    expect(wrapper.classes('lu_button_plain_default')).toBe(true)
  })
})


