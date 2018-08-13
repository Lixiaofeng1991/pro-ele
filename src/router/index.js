import Vue from 'vue'
import Router from 'vue-router'
import store from "../store"


import Home from '@/pages/home/Index.vue';
import Location from '@/pages/home/Location.vue';
import Search from '@/pages/home/Search.vue';
import City from "@/pages/home/City.vue";

import Discover from '@/pages/discover/Index.vue';
import Indent from '@/pages/indent/Index.vue';

import Mine from '@/pages/mine/Index.vue';
import Login from "@/pages/mine/Login.vue";
import Exit from "@/pages/mine/Exit.vue";


Vue.use(Router)


const router = new Router({
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
            children:[
              {
                path:"city",
                name:"city",
                component:City
              }, 
            ]
          }
        ]
      },
      {
        path:"/discover",
        name:"discover",
        component:Discover
      },
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
        component:Exit,
        //路由独享守卫
        beforeEnter(to,from,next){
          //如果用户已经登录，进入退出页面
          if(store.state.userInfo.name){
            next()
          //如果用户没有登录，君如登录页面
          }else{
            next({path:"/login"})
          }
        }
      },
      {
        path:"/",
        redirect:"/home"
      }
  ]
})

export default router
