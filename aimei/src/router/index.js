import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/components/me/HelloWorld'
import Home from '@/components/me/Home'
import Zheng from '@/components/me/Zheng'
import Super from '@/components/me/Super'
import Quan from '@/components/me/Quan'
import Zx from '@/components/me/Zx'
import Sx from '@/components/me/Sx'
import Mr from '@/components/me/Mr'
import Xz from '@/components/me/Xz'
import Ns from '@/components/me/Ns'
import Bj from '@/components/me/Bj'
import Ys from '@/components/me/Ys'
import Detail from '@/components/me/Detail'
import Zsxm from '@/components/me/Zsxm'
import Gou from '@/components/me/Gou'

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
					redirect:"/zheng/quan",
					component: Zheng,
					children:[
						{
							path: '/zheng/quan',
							component: Quan
						},
						{
							path: '/zx',
							component: Zx
						},
						{
							path: '/sx',
							component: Sx
						},
						{
							path: '/mr',
							component:Mr
						},
						{
							path: '/xz',
							component:Xz
						},
						{
							path: '/ns',
							component:Ns
						},
					]
      	},
      	{
      		path: '/super',
      		component: Super
		  },
		  {
			path: '/ys',
			component: Ys
		},
		
      ]
	},
	{
		path: '/bj',
		component: Bj
	},
	{
		path: '/zsxm',
		component: Zsxm
	},
	{
		path: '/gou',
		component: Gou
	},
    {
			path: '/detail',
			component: Detail
		},
  ]
})
