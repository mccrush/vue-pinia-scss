import { defineStore } from 'pinia'
import { supabase } from './../lib/supabaseClientMC'

export const useCitiesStore = defineStore('cities', {
  state: () => ({
    cities: []
  }),

  getters: {
    citiesLength: (state) => state.cities.length,
  },

  actions: {
    async getCities({ type }) {
      const { data } = await supabase.from(type).select()
      console.log('actions getCities() type = ', type)

      this.cities = data
    },
  },
})