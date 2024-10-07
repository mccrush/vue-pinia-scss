<template>
  <div>
    <LayoutDesktop>
      <template #title>{{ pageInfo.title }}</template>
      <template #actions>
        <button class="btn btn-light">Сохранить</button>
      </template>
      <template #content>
        <div>$route.fullPath = {{ $route.fullPath }}</div>
        <div>$route.name = {{ $route.name }}</div>
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
    }
  }
}
</script>