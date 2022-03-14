import { createRouter, createWebHashHistory } from 'vue-router'
import toyApp from '../views/toy-app.vue'
import toyDetails from '../components/toy-details.vue'
import toyEdit from '../components/toy-edit.vue'
import toyAdd from '../components/toy-add.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/toy',
      name: 'toy',
      component: toyApp
    },
    {
      path: '/toy/:toyId',
      name: 'toy details',
      component: toyDetails
    },
    {
      path: '/toy/edit/:toyId',
      name: 'toy edit',
      component: toyEdit
    },
    {
      path: '/toy/add',
      name: 'toy add',
      component: toyAdd
    },
  ]
})

export default router
