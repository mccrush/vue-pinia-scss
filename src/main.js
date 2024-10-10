import './scss/styles.scss'

//import { Dropdown } from 'bootstrap'
import { useCountriesStore } from './stores/countries'
import { useCitiesStore } from './stores/cities'
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

const cities = useCitiesStore()
cities.getCities({ type: 'cities' })
