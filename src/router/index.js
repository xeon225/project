import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pageContext from '@/page/index.js'
// import Mine from '@/page/mine'
Vue.use(Router)

// 需要登录的页面
const pageLogin = [
  'mine' // 我的
]

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    ...pageContext.routerAdd.map(e => {
      return {
        path: e.path,
        name: e.name,
        component: () => import(`../page/${e.fullPath}`),
        meta: {
          requireLogin: pageLogin.includes(e.name) // 当前路由需要校验，不需要就不用写
        }
      }
    })
    // {
    //   path: '/mine',
    //   name: 'Mine',
    //   component: () => import('@/page/mine'),
    //   meta: {
    //     requireLogin: pageLogin.includes('Mine') // 当前路由需要校验，不需要就不用写
    //   }
    // }
  ]
})
