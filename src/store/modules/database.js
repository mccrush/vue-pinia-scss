import { supabase } from './../../lib/supabaseClient'

export default {
  state: {
    countries: [],
    cities: []
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
        console.error(error)
      }
    },

    async updateItem({ commit }, { item }) {
      try {
      } catch (error) {
        console.error(error)
      }
    },

    async addItem({ commit }, { item }) {
      try {
      } catch (error) {
        console.error(error)
      }
    },

    async getItems({ commit }, { type }) {
      const { data } = await supabase.from(type).select()
      commit('setItems', { type, items: data })
    }
  },

  getters: {
    countries: state => state.countries,
    cities: state => state.cities,
    countriesLength: state => state.countries.length,
    citiesLength: state => state.cities.length
  }
}