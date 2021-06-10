<template>
  <div>
    <login-form/>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue'

export default {
  name: 'App',

  components: {
    LoginForm,
  },

  data () {
    return {
      name: 'Stan'
    }
  }
}
</script>

<style>
:root {
  --bf500: #000091;
  --btn-color-hover: rgba(0, 0, 221, 0.5);
  --btn-color-active: rgba(41, 41, 255, 0.5);
  --w: #fff;
  --block-color-hover: hsla(0,0%,87.8%,0.5);
  --block-color-active: hsla(0,0%,76.1%,0.5);
}

html {
  background-color: #eee;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.text-center {
  text-align: center;
}

.fieldset {
  border: none;
}


.flex {
  display: flex;
}

.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.flex-col {
  flex-direction: column;
}
::placeholder {
  font-style: italic;
}

.fr-input {
  display: block;
  width: 100%;
  border: 0;
  border-radius: 0.25rem 0.25rem 0 0;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem 1rem;
  appearance: none;
}

:root:not([data-fr-theme="dark" i]) .fr-btn {
  --color-hover: rgba(19, 19, 99, 0.5);
  --color-active: rgba(41, 41, 255, 0.5);
}

.fr-btn {
  background-color: var(--bf500);
  color: var(--w-bf500);
  --is-link: false;
  margin: 0;font-size: 1rem;
  line-height: 1.5rem;
  min-height: 2.5rem;
  padding: 0.5rem 1.5rem;
  overflow: hidden;
  z-index: 1;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}

button {
  outline-color: var(--focus);
  outline-offset: 2px;
  outline-width: 2px;
  appearance: none;
  font-family: inherit;
  border: none;
}
</style>
