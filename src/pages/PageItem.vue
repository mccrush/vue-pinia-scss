<template>
  <div>
    <LayoutDesktop>
      <template #title>{{ pageInfo.title }}</template>
      <template #actions>
        <button class="btn btn-light">Изменить</button>
      </template>
      <template #content>
        <div>$route.fullPath = {{ $route.fullPath }}</div>
        <div>$route.name = {{ $route.name }}</div>
        <div>$route.params.id = {{ $route.params.id }}</div>
        <div v-if="item" class="border p-2">
          <h4>{{ item.title }}</h4>
          <RouterLink :to="'/edit/' + item.id"> Изменить </RouterLink>
        </div>
      </template>
    </LayoutDesktop>
  </div>
</template>

<script>
import { dataPages } from './../data/dataPages'

import LayoutDesktop from './../layouts/LayoutDesktop.vue'

export default {
  components: { LayoutDesktop },
  computed: {
    pageInfo() {
      const page = dataPages.find(item => item.name === this.$route.name)
      if (page) {
        return page
      }
    },
    countries() {
      return this.$store.getters.cars
    },
    item() {
      const item = this.countries.find(el => el.id == this.$route.params.id)

      if (item) {
        return item
      }
    }
  }
}
</script>