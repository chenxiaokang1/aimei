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
import Ming from '@/components/me/Ming'



// 李雷雷
import myCenter from '@/components/my_center/center_index'
import reward from '@/components/my_center/reward'
import love from '@/components/my_center/love'
import rank from '@/components/my_center/ranking'
import rewardCenter from '@/components/my_center/reward_center'
import rewardDetail from '@/components/my_center/reward_detail'
import rewardOrder from '@/components/my_center/reward_order'
import myOrder from '@/components/my_center/my_order'
import orderDetail from '@/components/my_center/order_detail'
import addressAdd from '@/components/my_center/address_add'
import address from '@/components/my_center/address'
import hb from '@/components/my_center/hb'
import teamIndex from '@/components/my_center/my_team'
import bigData from '@/components/my_center/big_data'
import myFans from '@/components/my_center/my_fans'
import myTeam from '@/components/my_center/team_kinds'
import brand from '@/components/my_center/brand'
import problem from '@/components/my_center/problem'
import setinfo from '@/components/my_center/set_info'
import bindPhone from '@/components/my_center/bind_phone'
import giveLove from '@/components/my_center/give_love'
import loveOrder from '@/components/my_center/love_order'
import cart from '@/components/my_center/cart'
Vue.use(Router)

export default new Router({
  routes: [{
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
          redirect: "/zheng/quan",
          component: Zheng,
          children: [{
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
              component: Mr
            },
            {
              path: '/xz',
              component: Xz
            },
            {
              path: '/ns',
              component: Ns
            },
          ]
        },
        {
          path: '/super',
          component: Super
        }, ,
        {
          path: '/myCenter',
          component: myCenter
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
  {
    path: '/ming',
    component: Ming
},

	
	// lilielei
  ,
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
  },
  {
    path: '/rewardDetail',
    component: rewardDetail
  },
  {
    path: '/rewardOrder',
    component: rewardOrder
  },
  {
    path: '/myOrder',
    component: myOrder
  },
  {
    path: '/addressAdd',
    component: addressAdd
  },
  {
    path: '/address',
    component: address
  },
  {
    path: '/hb',
    component: hb
  },
  {
    path: '/teamIndex',
    component: teamIndex
  },
  {
    path: '/bigData',
    component: bigData
  },
  {
    path: '/myFans',
    component: myFans
  },
  {
    path: '/myTeam',
    component: myTeam
  },
  {
    path: '/brand',
    component: brand
  },
  {
    path: '/problem',
    component: problem
  },
  {
    path: '/setinfo',
    component: setinfo
  },
  {
    path: '/bindPhone',
    component: bindPhone
  },
  {
    path: '/giveLove',
    component: giveLove
  }
  ,
  {
    path: '/loveOrder',
    component: loveOrder
  },
  {
    path: '/orderDetail',
    component: orderDetail
  }
  ,
  {
    path: '/cart',
    component: cart
  }
  
    
  ]
})
