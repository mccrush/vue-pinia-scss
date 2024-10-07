<template>
  <div class="container">
    <div class="d-flex">
      <TheMenu />
      <div class="flex-grow-1">
        <TheHeader>
          <template> </template>
        </TheHeader>
        <main class="border p-2">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import TheMenu from './../components/interface/TheMenu.vue'
import TheHeader from './../components/interface/TheHeader.vue'

export default {
  components: {
    TheMenu,
    TheHeader
  }
}
</script>