import { mount, shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import Toast from '@/components/toast/src/main.vue'

describe('Toast', () => {
  // 是否存在该组件
  it('组件存在', () => {
    const wrapper = mount(Toast)
    expect(wrapper.exists()).toBe(true)
  })
  
})