import { supabase } from './../../lib/supabaseClient'

export default {
  state: {
    orders: []
  },

  mutations: {
    setItemsRT(state, { type, items }) {
      state[type] = items
    },
  },

  actions: {
    async removeItemRT({ commit }, { item }) {
      try {
      } catch (error) {
        console.error(error)
      }
    },

    async updateItemRT({ commit }, { item }) {
      try {
      } catch (error) {
        console.error(error)
      }
    },

    async addItemRT({ commit }, { item }) {
      try {
      } catch (error) {
        console.error(error)
      }
    },

    async getItemsRT({ commit }, { type }) {
      const { data } = await supabase.from(type).select()
      commit('setItems', { type, items: data })
    }
  },

  getters: {
    orders: state => state.orders
  }
}