<template>
  <nav class="nav flex-column border-end vh-100">
    <RouterLink
      v-for="page in showDataPages"
      :key="page.name"
      :to="page.path"
      class="nav-link"
      :class="{ 'bg-body-tertiary': $route.name === page.name }"
      >{{ page.title }}
    </RouterLink>
    <hr />
    <div v-if="isLoggedIn">
      {{ userEmail }}<br />
      <button class="btn btn-light w-100" @click="logOut">Выйти</button>
    </div>
    <div v-else>
      <button
        v-if="$route.name !== 'login'"
        class="btn btn-light w-100"
        @click="$router.push('/login')"
      >
        Войти
      </button>
    </div>
  </nav>
</template>

<script>
import { dataPages } from './../../data/dataPages'
import { mapStores } from 'pinia'
import { useAuthStore } from './../../stores/auth'

export default {
  computed: {
    ...mapStores(useAuthStore),
    isLoggedIn() {
      return this.authStore.isLoggedIn
    },
    userEmail() {
      return this.authStore.userEmail
    },
    showDataPages() {
      return dataPages.filter(item => item.showMenu)
    }
  },

  methods: {
    logOut() {
      this.authStore.logOut()
    }
  }
}
</script>