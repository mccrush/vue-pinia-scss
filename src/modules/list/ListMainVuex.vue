<template>
  <div class="border p-3">
    Страны:
    <ul v-if="countriesLength">
      <li
        v-for="country in countries"
        :key="country.id"
        class="d-flex justify-content-between align-items-center"
      >
        <RouterLink :to="'/item/' + country.id">
          {{ country.title + '--' + country.id }}
        </RouterLink>
        <button class="btn btn-sm btn-light mt-2" @click="removeItem(country)">
          Удалить
        </button>
      </li>
    </ul>
    <div>
      <input type="text" class="form-control w-50" v-model.trim="title" />
      <button class="btn btn-light mt-2" @click="addItem">Добавить</button>
    </div>
    <br />
    Города:
    <ul v-if="citiesLength" class="mt-2">
      <li v-for="city in cities" :key="city.id">
        {{ city.name + '--' + city.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import { factoryCars } from './../../factories/factoryCars'

export default {
  data() {
    return {
      title: ''
    }
  },
  computed: {
    countries() {
      return this.$store.getters.cars
    },
    countriesLength() {
      return this.$store.getters.carsLength
    },
    cities() {
      return this.$store.getters.cities
    },
    citiesLength() {
      return this.$store.getters.citiesLength
    }
  },
  methods: {
    addItem() {
      if (this.title) {
        let item = factoryCars()
        item.title = this.title
        this.$store.dispatch('addItem', { item })
        this.title = ''
      }
    },
    removeItem(item) {
      if (confirm('Точно удалить?')) {
        this.$store.dispatch('removeItem', { item })
      }
    }
  }
}
</script>