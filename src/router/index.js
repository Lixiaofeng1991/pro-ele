import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Index.vue'
import Discover from '@/pages/discover/Index.vue'
import Indent from '@/pages/indent/Index.vue'
import Mine from '@/pages/mine/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {path:"/home",alias:"/",name:"home",component:Home},
      {path:"/discover",alias:"/",name:"discover",component:Discover},
      {path:"/indent",alias:"/",name:"indent",component:Indent},
      {path:"/mine",alias:"/",name:"mine",component:Mine},
  ]
})
