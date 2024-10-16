<template>
  <div>
    <LayoutDesktop>
      <template #title>{{ pageInfo.title }}</template>
      <template #actions> </template>
      <template #content>
        <LoginMain />
      </template>
    </LayoutDesktop>
  </div>
</template>

<script>
import { dataPages } from './../data/dataPages'

import LayoutDesktop from './../layouts/LayoutDesktop.vue'
//import LoginMain from './../modules/login/LoginMain.vue'
import LoginMain from './../modules/login/LoginMainVuex.vue'

export default {
  components: { LayoutDesktop, LoginMain },
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