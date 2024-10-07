<template>
  <nav class="nav flex-column border-end vh-100">
    <RouterLink
      v-for="page in showDataPages"
      :key="page.name"
      :to="page.path"
      class="nav-link"
      >{{ page.title }}
    </RouterLink>
  </nav>
</template>

<script>
import { dataPages } from './../../data/dataPages'

export default {
  computed: {
    showDataPages() {
      return dataPages.filter(item => item.showMenu)
    }
  }
}
</script>