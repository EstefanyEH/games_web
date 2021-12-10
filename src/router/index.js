import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Administracion from '@/views/Administracion.vue'
import NotFound from '@/views/NotFound.vue'
import Edit_opiniones from '@/views/Edit_opiniones.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/opiniones',
    name: 'Opiniones',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "opiniones" */ '../views/Opiniones.vue')
  },
 {
   path:'/administracion',
   component:Administracion,
 },
 {
   path: '/administracion/:id',
   component: Edit_opiniones,
   props: true,
 },
 {
   path:'*',
   component: NotFound
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
