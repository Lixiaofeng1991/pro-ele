import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/pages/home/Index.vue'
import Location from '@/components/home/Location.vue'
import Search from '@/pages/home/Search.vue'

import Discover from '@/pages/discover/Index.vue'
import Indent from '@/pages/indent/Index.vue'

import Mine from '@/pages/mine/Index.vue';
import Login from "@/pages/mine/Login.vue";
import Exit from "@/pages/mine/Exit.vue";

Vue.use(Router)

export default new Router({
  routes: [
      {
        path:"/home",
        name:"home",
        component:Home,
        children:[
          {
            path:"location",
            name:"location",
            component:Location,
          }
        ]
      },
      {
        path:"/discover",
        name:"discover",
        component:Discover},
      {
        path:"/indent",
        name:"indent",
        component:Indent},
      {
        path:"/mine",
        name:"mine",
        component:Mine},
      {
        path:"/search",
        name:"search",
        component:Search
      },
      {
        path:"/login",
        name:"login",
        component:Login
      },
      {
        path:"/exit",
        name:"exit",
        component:Exit
      },
      {
        path:"/",
        redirect:"/home"
      }
  ]
})
