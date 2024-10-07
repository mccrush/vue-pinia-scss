import { defineStore } from 'pinia'
import { supabase } from './../lib/supabaseClient'

export const useCountriesStore = defineStore('countries', {
  state: () => ({
    countries: []
  }),

  getters: {
    countriesLength: (state) => state.countries.length,
  },

  actions: {
    async getCountries({ type }) {
      const { data } = await supabase.from(type).select()
      console.log('actions getCountries() type = ', type)

      this.countries = data
    },
  },
})