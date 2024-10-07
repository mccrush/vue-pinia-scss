<template>
  <div class="container">
    <div class="d-flex">
      <TheMenu />
      <div class="flex-grow-1">
        <nav class="navbar bg-body-tertiary border">
          <div class="container-fluid d-flex justify-content-between">
            <slot name="title">
              <h4>Title</h4>
            </slot>
            <slot name="actions"> </slot>
          </div>
        </nav>

        <main class="border-red p-2">
          <slot name="content"> Content of page </slot>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import TheMenu from './../components/interface/TheMenu.vue'
//import TheHeader from './../components/interface/TheHeader.vue'

export default {
  components: {
    TheMenu
  }
}
</script>