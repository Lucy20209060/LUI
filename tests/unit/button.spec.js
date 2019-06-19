import { shallowMount } from '@vue/test-utils'
import Button from '@/components/button'

describe('Button', () => {
  it('存在', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper)
  })

  it('可以设置属性-> size', () => {
    const wrapper = shallowMount(Button, {
        propsData: {
          size: 'mini'
        }
    })
    expect(wrapper.classes('lu_button_mini')).toBe(true)
  })

  it('可以设置属性-> plain', () => {
    const wrapper = shallowMount(Button, {
        propsData: {
          plain: true
        }
    })
    expect(wrapper.classes('lu_button_plain_default')).toBe(true)
  })
})


