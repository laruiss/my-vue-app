import { mount } from '@vue/test-utils'

import SearchBar from './SearchBar.vue'

describe('SearchBar', () => {
  it('should mount SearchBar', () => {
    
    // Given - Arrange
    const props = {}
    
    // When - Act
    const wrapper = mount(SearchBar, { props })
    
    // Then - Assert
    const root = wrapper.find('div')
    const label = root.find('label')
    const input = root.find('input')
    const button = root.find('button')
    expect(root.exists()).toBe(true)
    expect(label.exists()).toBe(true)
    expect(input.exists()).toBe(true)
    expect(button.exists()).toBe(true)
  })
})
