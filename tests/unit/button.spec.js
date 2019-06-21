import { mount, shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import Button from '@/components/button'

describe('Button', () => {
  // 是否存在该组件
  it('组件存在', () => {
    const wrapper = mount(Button)
    expect(wrapper.exists()).toBe(true)
  })
  // 测试size属性
  it('设置size属性', () => {
    const wrapper = mount(Button, {
      propsData: {
        size: 'mini'
      }
    })
    expect(wrapper.classes('lu_button_mini')).toBe(true)
  })
  // 测试plain属性
  it('设置plain属性', () => {
    const wrapper = mount(Button, {
      propsData: {
        plain: true
      }
    })

    expect(wrapper.classes('lu_button_plain_default')).toBe(true)
  })

  // 其他属性测试同理 不一一列举

  // 点击事件测试
  it('触发点击事件', () => {
    const wrapper = mount(Button)
    const vm = wrapper.vm
    const callback = sinon.fake()  // 创建间谍函数
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback.callCount).toBe(1)
  })
})


