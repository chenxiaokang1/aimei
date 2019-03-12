import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/me/HelloWorld'
import Home from '@/components/me/Home'
import Zheng from '@/components/me/Zheng'
import Super from '@/components/me/Super'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:"/home",
      component: HelloWorld,
      children:[
      	{
      		path: '/home',
      		component: Home
      	},
      	{
      		path: '/zheng',
      		component: Zheng
      	},
      	{
      		path: '/super',
      		component: Super
      	}
      ]
    },
    
  ]
})
