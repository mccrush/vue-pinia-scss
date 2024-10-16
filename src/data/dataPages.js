export const dataPages = [
  {
    path: '/',
    name: 'index',
    title: 'Главная',
    component: () => import('./../pages/PageList.vue'),
    showMenu: false
  },
  {
    path: '/list',
    name: 'list',
    title: 'Список стран',
    component: () => import('./../pages/PageList.vue'),
    showMenu: true
  },
  {
    path: '/item/:id',
    name: 'item',
    title: 'Страна',
    component: () => import('./../pages/PageItem.vue'),
    showMenu: true
  },
  {
    path: '/edit/:id',
    name: 'edit',
    title: 'Редактировать',
    component: () => import('./../pages/PageEdit.vue'),
    meta: {
      requiresAuth: true
    },
    showMenu: true
  },
  {
    path: '/login',
    name: 'login',
    title: 'Авторизация',
    component: () => import('./../pages/PageLogin.vue'),
    showMenu: false
  }
]