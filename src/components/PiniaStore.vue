<template>
  <div>
    PiniaStore
    <div>name = {{ name }}</div>
    <div>counter = {{ counter }}</div>
    <button @click="incrementCounter">counter++</button>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useCounterStore } from './../stores/counter'

export default {
  computed: {
    ...mapStores(useCounterStore),
    counter() {
      return this.counterStore.count
    },
    name() {
      return this.counterStore.name
    }
  },
  methods: {
    incrementCounter() {
      this.counterStore.increment()
    }
  }
}
</script>