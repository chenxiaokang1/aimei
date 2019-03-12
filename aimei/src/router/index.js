import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/components/me/HelloWorld'
import Home from '@/components/me/Home'
import Zheng from '@/components/me/Zheng'
import Super from '@/components/me/Super'
import Quan from '@/components/me/Quan'

<<<<<<< HEAD

=======
>>>>>>> aeb898a31d40b57b345601aeb3fcf1ee3f6750b4
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
<<<<<<< HEAD
					path: '/zheng',
				
					component: Zheng,
					children:[
						{
							path: '/quan',
						
							component: Quan
						},
					]
=======
      		path: '/zheng',
      		component: Zheng
>>>>>>> aeb898a31d40b57b345601aeb3fcf1ee3f6750b4
      	},
      	{
      		path: '/super',
      		component: Super
      	}
      ]
    },
    
  ]
})
