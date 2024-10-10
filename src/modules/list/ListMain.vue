<template>
  <div class="border p-3">
    Страны:
    <ul v-if="countriesLength">
      <li v-for="country in countries" :key="country.id">
        {{ country.name + '--' + country.id }}
      </li>
    </ul>

    Города:
    <ul v-if="citiesLength" class="mt-2">
      <li v-for="city in cities" :key="city.id">
        {{ city.name + '--' + city.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useCountriesStore } from './../../stores/countries'
import { useCitiesStore } from './../../stores/cities'

export default {
  computed: {
    ...mapStores(useCountriesStore, useCitiesStore),
    countries() {
      return this.countriesStore.countries
    },
    countriesLength() {
      return this.countriesStore.countriesLength
    },
    cities() {
      return this.citiesStore.cities
    },
    citiesLength() {
      return this.citiesStore.citiesLength
    }
  }
}
</script>