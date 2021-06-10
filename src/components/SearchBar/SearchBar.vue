<template>
  <div class="fr-search-bar">
    <label :class="{
      'fr-label': true,
      'invisible': !labelVisible,
      }" :for="id">{{ label }}</label>
    <input 
      :id="id"
      type="search"
      class="fr-input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keydown.esc="$emit('update:modelValue', '')"
      @keypress.enter="$emit('search')"
      :placeholder="placeholder"
    >
    <button
      :class="classesButton"
      title="Rechercher"
      @click="$emit('search')"
    >
    Rechercher
    <v-icon name="ri-search-2-line"/>
    </button>
  </div>
</template>

<script>
import { getRandomId } from '../../utils/random-utils.js'

export default {
  name: 'SearchBar',
  props: {
    id: {
      type: String,
      default: getRandomId('search', 'input'),
    },
    label: {
      type: String,
      default: '',
    },
    dark: Boolean,
    labelVisible: Boolean,
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Rechercher',
    },
  },

  data() {
    return {
      classesText: {
        type: String,
        default: ''
      },
      classesButton: {
        type: String,
        default: ''
      }
    }
  },
}
</script>

<style scoped>
.fr-label {
  font-size: 0.8rem;
  font-style: italic;

  &.invisible {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}

.fr-input {
  margin: 0;
  border-radius: 0.25rem 0 0;
  max-height: none;
  box-shadow: inset 0 -2px 0 0 var(--bf500);
  color: var(--g800);
  background-color: var(--g200);
}

.fr-btn {
  flex: 1 0 auto;
  border-radius: 0 0.25rem 0 0;

  flex-direction: row;
  max-width: 2.5rem;
  max-height: 2.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  &::before {
    content: "\E901"
  }
}
</style>