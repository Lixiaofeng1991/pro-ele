<template>
    <div>
        <h1>首页</h1>
        <!-- 轮播图 -->
        <banner></banner>
        <!-- 商家列表 -->
        <shop-list v-for="items in businessDate" :key="items.id" :items="items.restaurant">

        </shop-list>
        <!-- 综合排序 筛选等 -->
        <aside v-for="item in asideDate" :key="item.id" :item="item.data"></aside>
    </div>
</template>

<script>
import {getBusinessDate,getAsideDate,getFilterDate} from '../../services/businessService.js'
import Banner from '@/components/Banner.vue'
import shopList from '@/components/shopList'
import Aside from '@/components/Aside'
export default {
    components:{
        Banner,
        shopList,
        Aside
    },
    data(){
        return{
            businessDate:[], 
            asideDate:[]
        }
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

<style>

</style>
