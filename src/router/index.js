import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/step',
    name: 'step',
    component: () => import('../views/step.vue')
  },
  {
    path: '/formValidate',
    name: 'formValidate',
    component: () => import('../views/formValidate.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router