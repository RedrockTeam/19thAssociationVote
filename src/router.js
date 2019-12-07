import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import home from './pages/home.vue'  //引入根目录下的Hello.vue组件
import rule from './pages/rule.vue'
import vote from './pages/vote.vue'
import flnalvote from './pages/flnalvote.vue'

 
Vue.use(Router)  //Vue全局使用Router
 
export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'home',     //路由名称，
      component: home   //对应的组件模板
    },
    {                    //每一个链接都是一个对象
        path: '/rule',         //链接路径
        name: 'rule',     //路由名称，
        component: rule   //对应的组件模板
    },
    {                    //每一个链接都是一个对象
        path: '/vote',         //链接路径
        name: 'vote',     //路由名称，
        component: vote   //对应的组件模板
    },
    {                    //每一个链接都是一个对象
        path: '/finalvote',         //链接路径
        name: 'flnalvote',     //路由名称，
        component: flnalvote   //对应的组件模板
    },
  ]
})
