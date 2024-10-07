<template>
  <div>
    countriesLength = {{ countriesLength }}

    <ul v-if="countriesLength">
      --
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useCountriesStore } from './../stores/countries'

export default {
  computed: {
    ...mapStores(useCountriesStore),
    countries() {
      return this.countriesStore.countries
    },
    countriesLength() {
      return this.countriesStore.countriesLength
    }
  }
}
</script>