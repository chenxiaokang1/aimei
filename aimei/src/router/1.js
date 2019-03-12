import Vue from 'vue'
import Router from 'vue-router'

import {
  Swipe,
  SwipeItem
} from 'vant';
import HelloWorld from '@/components/me/HelloWorld'
import Home from '@/components/me/Home'
import Zheng from '@/components/me/Zheng'
import Super from '@/components/me/Super'

import myCenter from '@/components/my_center/center_index'
import reward from '@/components/my_center/reward'
import love from '@/components/my_center/love'
import rank from '@/components/my_center/ranking'
import rewardCenter from '@/components/my_center/reward_center'

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
		},
		{
      path: '/rank',
      component: rank
		},
		{
      path: '/rewardCenter',
      component: rewardCenter
    }


  ]
})