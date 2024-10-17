<template>
  <div class="border p-3">
    Страны:
    <ul v-if="countriesLength">
      <li v-for="country in countries" :key="country.id">
        <RouterLink :to="'/item/' + country.id">
          {{ country.title + '--' + country.id }}
        </RouterLink>
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
    }
  }
}
</script>