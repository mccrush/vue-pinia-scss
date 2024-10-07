import './scss/styles.scss'

//import { Dropdown } from 'bootstrap'
import { useCountriesStore } from './stores/countries'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'



const pinia = createPinia()
let app

if (!app) {
  app = createApp(App).use(pinia).use(router).mount('#app')
}

console.log('main.js: App is run')

const countries = useCountriesStore()
countries.getCountries({ type: 'countries' })
