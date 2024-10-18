
import { createStore } from 'vuex'
import auth from './modules/auth'
import database from './modules/database'
import storage from './modules/storage'

export default createStore({
  modules: {
    auth,
    database,
    storage
  }
})
