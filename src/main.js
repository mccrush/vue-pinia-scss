import './scss/styles.scss'

//import { Dropdown } from 'bootstrap'
//import { useCountriesStore } from './stores/countries'
//import { useCitiesStore } from './stores/cities'
import { supabase } from './lib/supabaseClient'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from './store'

const pinia = createPinia()
let app

if (!app) {
  app = createApp(App).use(store).use(router).mount('#app')
}

console.log('main.js: App is run')

// const countries = useCountriesStore()
// countries.getCountries({ type: 'countries' })

// const cities = useCitiesStore()
// cities.getCities({ type: 'cities' })

// События хуков авторизации
const { data } = supabase.auth.onAuthStateChange((event, session) => {
  //console.log(event, session)

  if (event === 'INITIAL_SESSION') {
    // handle initial session
  } else if (event === 'SIGNED_IN') {
    // handle sign in event
    store.commit('setAuthData', { type: 'userId', data: session.user.id })
    store.commit('setAuthData', { type: 'userEmail', data: session.user.email })
    router.push('/')
  } else if (event === 'SIGNED_OUT') {
    // handle sign out event
    store.commit('setAuthData', { type: 'userId', data: null })
    store.commit('setAuthData', { type: 'userEmail', data: null })
  } else if (event === 'PASSWORD_RECOVERY') {
    // handle password recovery event
  } else if (event === 'TOKEN_REFRESHED') {
    // handle token refreshed event
  } else if (event === 'USER_UPDATED') {
    // handle user updated event
  }
})

// Данные которые получаем для всех пользователей
store.dispatch('getItems', { type: 'cars' })

// Подписка на события, для работы Realtime методов
supabase.channel('custom-insert-channel')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'cars' },
    (payload) => {
      //console.log('Change received! Inser new Data', payload)
      store.dispatch('getItems', { type: 'cars' })
    }
  )
  .subscribe()


supabase.channel('custom-update-channel')
  .on(
    'postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'cars' },
    (payload) => {
      store.dispatch('getItems', { type: 'cars' })
    }
  )
  .subscribe()

supabase.channel('custom-delete-channel')
  .on(
    'postgres_changes',
    { event: 'DELETE', schema: 'public', table: 'cars' },
    (payload) => {
      store.dispatch('getItems', { type: 'cars' })
    }
  )
  .subscribe()