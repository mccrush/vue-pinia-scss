  <template>
  <div>
    <!-- <SupaBase />
    <PiniaStore /> -->
    <LayoutDesktop />
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view> -->
  </div>
</template>

<script>
import LayoutDesktop from './layouts/LayoutDesktop.vue'
//import SupaBase from './components/SupaBase.vue'
//import PiniaStore from './components/PiniaStore.vue'

export default {
  components: {
    LayoutDesktop
  }
}
</script>

<style>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>