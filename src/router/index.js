import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import pageContext from '@/page/index.js'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    ...pageContext.routerAdd.map(e => {
      return {
        path: e.path,
        name: e.name,
        component: () => import(`../page/${e.fullPath}`)
      }
    })
  ]
})
