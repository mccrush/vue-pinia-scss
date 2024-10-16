export default {
  state: {
    isLoggedIn: null,
    userEmail: null
  },

  mutations: {},

  actions: {
    logIn({ email, password }) {

    },

    logOut() {

    }
  },

  getters: {
    isLoggedIn: state => state.isLoggedIn,
    userEmail: state => state.userEmail,
  }
}