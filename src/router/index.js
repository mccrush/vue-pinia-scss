import { createWebHistory, createRouter } from 'vue-router'
import { dataPages } from './../data/dataPages'
//import { useAuthStore } from './../stores/auth'

//const routes = [
// {
//   path: '/view/:type',
//   name: 'view',
//   component: () => import('../pages/PageView.vue'),
//   meta: {
//     requiresAuth: true
//   }
// },
// {
//   path: '/404', // Первая, для перекрытия остальных
//   name: '404',
//   component: () => import('../pages/PageNotFound.vue')
// },
// {
//   path: '/:pathMatch(.*)', // Для всех прочих кроме существующих
//   redirect: '/404'
// }
//]

const routes = dataPages

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  // const auth = useAuthStore()
  // if (to.meta.requiresAuth && !auth.isLoggedIn) {
  //   next('/login')
  // } else {
  //   if (auth.isLoggedIn && to.name === 'login') {
  //     next('/')
  //   } else {
  //     next()
  //   }
  // }

  next()
})

export default router