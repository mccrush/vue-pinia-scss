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
        <div v-if="item">
          <input
            type="text"
            class="form-control w-50"
            v-model.trim="item.title"
          />
          <button class="btn btn-light mt-2" @click="saveItem">
            Сохранить
          </button>
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
  },
  methods: {
    saveItem() {
      this.$store.dispatch('updateItem', { item: this.item })
    }
  }
}
</script>