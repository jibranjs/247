import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button'


const app = createApp(App)
app.use(router)
app.use(PrimeVue);
app.component(Button)
app.component('Icon', Icon)
app.mount('#app')