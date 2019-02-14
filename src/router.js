import Vue from 'vue'
import Router from 'vue-router'
import Tuijian from './views/tuijian.vue'
import Productlist from './views/productlist.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/tuijian',
      name: 'tuijian',
      component: Tuijian
    },
    {
      path:'/productlist',
      name:'productlist',
      component:Productlist
    },
    {
      path:'*',
      redirect:'/tuijian'
    }
  ]
})
