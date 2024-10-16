
import { createStore } from 'vuex'
import { auth } from './modules/auth'
import { database } from './methods/database'
import { realtime } from './methods/realtime'
import { storage } from './methods/storage'

export default createStore({
  modules: {
    auth,
    database,
    realtime,
    storage
  }
})
