import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Index from '@/views/Index'
import Button from '@/views/button'

import List from '@/views/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
