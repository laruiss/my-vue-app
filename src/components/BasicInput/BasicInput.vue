<template>
  <label :for="id">
    {{ label }}
  </label>
  <input
    v-bind="$attrs"
    :type="type"
    :id="id"
    :placeholder="placeholder"
    :aria-placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
  <div class="message">{{ message }}</div>
</template>

<script>
export default {
  name: 'BasicInput',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
      required: true,
    },
    disabled: Boolean,
    placeholder: {
      type: String,
      default: ''
    },
    classes: { // TODO
      type: [String, [String], Object],
      default: ''
    },
    message: {
      type: String,
      default: '',
    }
  },
  
  data () {
    return {}
  }
}
</script>

<style scoped>
input {
  border-radius: 5px;
  padding: 0.25rem;
}
label {
  font-size: 0.8rem;
  font-style: italic;
}
.message {
  font-size: 0.8rem;
  color: red;
  font-style: italic;
  margin-top: 0.25rem;
  height: 1rem;
  line-height: 1rem;
}
</style>