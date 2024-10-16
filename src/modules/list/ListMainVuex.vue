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
  }
}
</script>