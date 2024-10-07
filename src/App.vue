  <template>
  <div class="border-red">
    <!-- <SupaBase />
    <PiniaStore /> -->

    <!-- <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <RouterView />
  </div>
</template>

<style lang="sass">
@import './scss/variables'

.border-red
  border: 2px solid $my-red

.fade-enter-active,
.fade-leave-active
  transition: opacity 0.3s ease

.fade-enter-from,
.fade-leave-to
  opacity: 0
</style>