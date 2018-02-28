import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index' // 路由首页
import list from '../view/list' // 路由列表页
import product from '../view/product' // 专辑详情页

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/product',
      name: 'product',
      component: product
    }
  ]
})
