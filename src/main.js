// src/main.js
import './assets/main.css'
import'./Views/curso/informatica/mainInfo.css'
import'./Views/curso/quimaca/mainQuimi.css'
import'./Views/curso/agropecuria/mainAgro.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App)
  .use(router)
  .mount('#app')
