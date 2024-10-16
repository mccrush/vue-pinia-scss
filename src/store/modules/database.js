import { supabase } from './../../lib/supabaseClient'

export default {
  state: {
    countries: [],
    cities: [],
    cars: []
  },

  mutations: {
    setItems(state, { type, items }) {
      state[type] = items
    },
  },

  actions: {
    async removeItem({ commit }, { item }) {
      try {
      } catch (error) {
        console.error('database.js removeItem()', error)
      }
    },

    async updateItem({ commit }, { item }) {
      try {
        //console.log('database.js updateItem() item =', item)
        const { error } = await supabase
          .from(item.type)
          .update(item)
          .eq('id', item.id)

        if (error) throw error
      } catch (error) {
        console.error('database.js updateItem()', error)
      }
    },

    async addItem({ commit }, { item }) {
      try {
      } catch (error) {
        console.error('database.js addItem()', error)
      }
    },

    async getItems({ commit }, { type }) {
      try {
        console.log('database.js getItems() type =', type)
        const { data, error } = await supabase.from(type).select()
        if (error) throw error
        if (data) {
          commit('setItems', { type, items: data })
        }
      } catch (error) {
        console.error('database.js getItems()', error)
      }
    }
  },

  getters: {
    countries: state => state.countries,
    cities: state => state.cities,
    countriesLength: state => state.countries.length,
    citiesLength: state => state.cities.length,
    cars: state => state.cars,
    carsLength: state => state.cars.length
  }
}