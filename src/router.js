import Vue from 'vue'
import Router from 'vue-router'
import Tuijian from './views/tuijian.vue'
import Productlist from './views/productlist.vue'
import Zhonglei from './views/zhonglei.vue'

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
      path: '/zhonglei',
      name:'zhonglei',
      component:Zhonglei
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
