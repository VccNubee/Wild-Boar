import Vue from 'vue'
import Router from 'vue-router'
import Tuijian from './views/tuijian.vue'
import Productlist from './views/productlist.vue'
import Zhonglei from './views/zhonglei.vue'
import haiwai from './views/listRouter/haiwai.vue'
import jiaju from './views/listRouter/jiaju.vue'
import nanshi from './views/listRouter/nanshi.vue'
import nvshi from './views/listRouter/nvshi.vue'
import yingtong from './views/listRouter/yingtong.vue'
import meizhuang from './views/listRouter/meizhuang.vue'
import jijiangtuichu from './views/jijiangtuichu.vue'
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
      component:Zhonglei,
      children:[
        {
          path:'haiwai',
          component:haiwai
        },
        {
          path:'jiaju',
          component:jiaju
        },
        {
          path:'nanshi',
          component:nanshi
        },
        {
          path:'nvshi',
          component:nvshi
        },
        {
          path:'yingtong',
          component:yingtong
        },
        {
          path:'meizhuang',
          component:meizhuang
        }
      ]
    },
    {
      path:'/jijiangtuichu',
      component:jijiangtuichu
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
