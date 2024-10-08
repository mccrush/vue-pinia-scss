import { defineStore } from 'pinia'
import { supabase } from './../lib/supabaseClient'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userId: null
  }),

  getters: {
    isLoggedIn: (state) => state.userId !== null,
  },

  actions: {
    async getCountries({ type }) {
      const { data } = await supabase.from(type).select()
      console.log('actions getCountries() type = ', type)

      this.countries = data
    },

    async logIn({ email, password }) {
      console.log(' auth.js logIn() email = ', email, ' password = ', password)
    },

    async logOut() {

    }
  },
})