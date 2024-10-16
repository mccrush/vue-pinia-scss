<template>
  <div class="border p-3">
    Страны:
    <ul v-if="countriesLength">
      <li v-for="country in countries" :key="country.id">
        {{ country.name + '--' + country.id }}
      </li>
    </ul>
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
export default {
  computed: {
    countries() {
      return this.$store.getters.countries
    },
    countriesLength() {
      return this.$store.getters.countriesLength
    },
    cities() {
      return this.$store.getters.cities
    },
    citiesLength() {
      return this.$store.getters.citiesLength
    }
  }
}
</script>