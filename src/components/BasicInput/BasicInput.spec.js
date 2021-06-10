import { mount }  from '@vue/test-utils'
import BasicInput from './BasicInput.vue'

describe('BasicInput', () => {
  it('should mount BasicInput', () => {
    // Given
    const label = 'dummy label'
    const type = 'email'
    const id = 'email'
    const wrapper = mount(BasicInput, {
      props: {
        label,
        type,
        id,
      }
    })

    // When
    const wrapperHtml = wrapper.html()
    const labelEl = wrapper.find('label')
    const inputEl = wrapper.find('input')

    // Then
    expect(inputEl.exists()).toBe(true)
    expect(inputEl.attributes('type')).toBe(type)
    expect(inputEl.attributes('id')).toBe(id)
    expect(wrapperHtml).toContain('<label')
    expect(labelEl.text()).toBe(label)
    expect(labelEl.attributes('for')).toBe(id)
  })
});