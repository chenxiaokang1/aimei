import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/me/HelloWorld'
import Home from '@/components/me/Home'
import Zheng from '@/components/me/Zheng'
import Super from '@/components/me/Super'

import myCenter from '@/components/my_center/center_index'
import reward from '@/components/my_center/reward'
import love from '@/components/my_center/love'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   redirect:"/home",
    //   component: HelloWorld,
    //   children:[
    //   	{
    //   		path: '/home',
    //   		component: Home
    //   	},
    //   	{	
    //   		path: '/zheng',
    //   		component: Zheng
    //   	},
    //   	{
    //   		path: '/super',
    //   		component: Super
    //   	}
    //   ]
    // },
    {
      path: '/',
      name: 'HelloWorld',
      redirect: "/home",
      component: HelloWorld,
      children: [{
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
        },
        {
          path: '/myCenter',
          component: myCenter
        }
      ]
		},
		{
			path: '/reward',
			component: reward
		},
		{
			path: '/love',
			component: love
		}

  ]
})
