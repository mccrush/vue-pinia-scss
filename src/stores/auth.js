import { defineStore } from 'pinia'
import { supabase } from './../lib/supabaseClient'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userId: null,
    userEmail: null
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
      //console.log(' auth.js logIn() email = ', email, ' password = ', password)

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (data) {
        this.userId = data.user.id
        this.userEmail = data.user.email
        console.log(' auth.js logIn() this.userId = ', this.userId)
      }

    },

    async logOut() {
      const { error } = await supabase.auth.signOut()
      this.$reset()
      console.log(' auth.js logOut() this.userId = ', this.userId)
    }
  },
})