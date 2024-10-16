<template>
  <div>
    {{ VITE_TEST }}
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
//const VITE_TEST = import.meta.env.VITE_TEST

import { dataPages } from './../data/dataPages'

import LayoutDesktop from './../layouts/LayoutDesktop.vue'
//import ListMain from './../modules/list/ListMain.vue'
import ListMain from './../modules/list/ListMainVuex.vue'

export default {
  components: { LayoutDesktop, ListMain },
  data() {
    return {
      VITE_TEST: import.meta.env.VITE_TEST
    }
  },
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