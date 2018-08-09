<template>
    <page :onScroll="handerPageScroll">

        <!-- 定位 -->
        <div class="header">
            <div class="location" @click="showLocationAciton">
                <i class="iconfont">&#xe60b;</i>
                <span>{{address}}</span>
                <i class="iconfont">&#xe654;</i>
            </div>
        </div>

        <!-- 搜索框 -->
        <div class="search" @click="goSearchAction" ref="search">
            <p><i class="iconfont">&#xe621;</i>&nbsp;<span>搜索饿了么商家、商品名称</span></p> 
        </div>
            
         <!-- 轮播图 -->
        <banner></banner>
        <!-- 商家列表 -->
        <shop-list v-for="items in businessDate" :key="items.id" :items="items.restaurant">

        </shop-list>
        <!-- 综合排序 筛选等 -->
        <aside v-for="item in asideDate" :key="item.id" :item="item.data"></aside>
        <router-view></router-view>

    </page>
</template>

<script>

import {getBusinessDate,getAsideDate,getFilterDate} from '../../services/businessService.js'
import Banner from '@/components/Banner.vue'
import shopList from '@/components/shopList'
import Aside from '@/components/Aside'
import {getAddressData} from "@/services/address.js"
export default {
    components:{
        Banner,
        shopList,
        Aside
    },
    data(){
        return{
            businessDate:[], 
            asideDate:[],
            address:"正在定位···"
        }
    },
    methods:{
        showLocationAciton(){
            this.$router.push("/home/location");
        },
        goSearchAction(){
            this.$router.push("/search")
        },
        //获取滚动距离
        handerPageScroll(scrollObj){
            if(scrollObj.scroll.y<-50){
                this.$refs.search.style.top = -(scrollObj.scroll.y+50)+"px";
            }else{
                this.$refs.search.style.top = 0;
            }
        }
    },
    created(){
        getAddressData().then(res=>{
            console.log(res)
            this.address = res;
        })
    },
    mounted(){
        //请求商家列表数据
         getBusinessDate()
        .then(result=>{
            console.log(result)
            this.businessDate = result;
        })
        // 请求综合排序的数据
        getAsideDate().then(result=>{
            console.log(result)
            this.asideDate = result;
        })
        // 请求综合排序的数据
        getFilterDate().then(result=>{
            console.log(result)
            this.filterDate =result;
        })
    }
}
</script>

<style scoped>
.header{
    width:100%;
    height: 50px;
    line-height: 50px;
    padding: 0 14px;
    background-image:linear-gradient(90deg,#0af,#0085ff); 
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    box-sizing: border-box;
}
.location{
    float: left;
}
.search{
    width:100%;
    height: 50px;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: 7px 14px;
    box-sizing: border-box;
    position: relative;
    top:0;
    left:0;
    z-index: 99;
}
.search p{
    width: 100%;
    height: 36px;
    background: #fff;
    line-height: 36px;
    text-align: center;
    color:#999;
}
</style>
