import { createWebHistory, createRouter } from 'vue-router'
import { dataPages } from './../data/dataPages'

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
  // if (to.path === '/view/order') next()
  // else if (to.meta.requiresAuth && !currentUserId) next({ name: 'login' })
  // else next()
  next()
})

export default router