import { createRouter, createWebHistory } from 'vue-router'
import { retrieve } from '@/libs/vault'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
  },

  {
    path: '/',
    component: () => import('@/components/LayoutMain.vue'),
    children: [
      {
        path: 'apartments',
        name: 'Apartments',
        component: () => import('@/views/ApartmentView.vue'),
        meta: {
          title: 'Apartments'
        }
      },

      {
        path: 'apartments/:apartmentUid/houses',
        component: () => import('@/views/HouseView.vue'),
        meta: {
          title: 'Houses'
        }
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const { token } = retrieve()

  if (!token && to.name !== 'Login') {
    next({ name: 'Login' })
  } else if (token && to.name === 'Login') {
    next({ name: 'Apartments' })
  } else {
    next()
  }
})

export default router
