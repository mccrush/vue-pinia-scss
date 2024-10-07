import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('./../pages/PageList.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('./../pages/PageList.vue'),
  },
  {
    path: '/item/:id',
    name: 'item',
    component: () => import('./../pages/PageItem.vue'),
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('./../pages/PageEdit.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./../pages/PageLogin.vue'),
  },


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
  //   path: '/:pathMatch(.*)*', // Для всех прочих кроме существующих
  //   redirect: '/404'
  // }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // if (to.path === '/view/order') next()
  // else if (to.meta.requiresAuth && !currentUserId) next({ name: 'login' })
  // else next()
  next()
})

export default router