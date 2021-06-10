import { createApp } from 'vue'

import OhVueIcon from "oh-vue-icons/dist/v3/icon.es";

import { RiSearch2Line } from "oh-vue-icons/icons";

OhVueIcon.add(RiSearch2Line);

import App from './App.vue'

createApp(App)
  .component("v-icon", OhVueIcon)
  .mount('#app')
