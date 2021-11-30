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
    name: 'step步骤条',
    component: () => import('../views/step.vue')
  },
  {
    path: '/formValidate',
    name: 'form表单校验',
    component: () => import('../views/formValidate.vue')
  },
  {
    path: '/formTime',
    name: '时间选择控件',
    component: () => import('../views/formTime.vue')
  },
  {
    path: '/imgViewer',
    name: '图片放大预览',
    component: () => import('../views/imgViewer.vue')
  },
  {
    path: '/imgUpload',
    name: '图片上传',
    component: () => import('../views/imgUpload.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router