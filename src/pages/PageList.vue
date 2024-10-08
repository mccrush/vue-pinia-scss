<template>
  <div>
    <LayoutDesktop>
      <template #title>{{ pageInfo.title }}</template>
      <template #actions>
        <button class="btn btn-light">Добавить страну</button>
      </template>
      <template #content>
        <ListMain />
      </template>
    </LayoutDesktop>
  </div>
</template>

<script>
import { dataPages } from './../data/dataPages'

import LayoutDesktop from './../layouts/LayoutDesktop.vue'
import ListMain from './../modules/list/ListMain.vue'

export default {
  components: { LayoutDesktop, ListMain },
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