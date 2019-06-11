<template>
    <div>
        <page id="home" :onScroll="handerPageScroll" >

            <!-- 定位 -->
            <router-link to="/home/location">
                <div class="location" >
                    <i class="iconfont">&#xe60b;</i>
                    <span class="location-address">{{address}}</span>
                    <i class="iconfont">&#xe654;</i>
                </div>
            </router-link>

            <!-- 搜索框 -->
            <router-link to="/search">
                <div class="search" ref="search">
                    <p><i class="iconfont">&#xe621;</i>&nbsp;<span>搜索饿了么商家、商品名称</span></p> 
                </div>
            </router-link>

            <!-- 定位成功显示 -->
            <div v-if="isShow ==1">
                <!-- 轮播图 -->
                <banner></banner>

                <!-- 推荐商品 -->
                <recommend></recommend>
                
                <!-- 商家列表 -->
                <shop-list v-for="items in businessDate" :key="items.id" :items="items.restaurant">

                </shop-list>
                <!-- 综合排序 筛选等 -->
                <aside v-for="item in asideDate" :key="item.id" :item="item.data"></aside>
            </div>

            <!-- 定位不成功显示 -->
            <div v-if="isShow ==2" class="main-select2">
                <div class="main-select2-img">
                    <img src="../../images/home1.gif" alt="" >
                </div>
                <h4>输入地址后才能订餐哦</h4>
                <p>
                    <router-link to="/home/location"><button>手动选择地址</button></router-link>
                </p>
            </div>
        </page>
        
        <router-view></router-view>
        
    </div>
</template>

<script>

import {getBusinessDate,getAsideDate,getFilterDate} from '../../services/businessService.js'
import {getCurrentPosition,getAddressData} from "@/services/address.js"

import Recommend from "@/components/Home/recommend.vue"
import Banner from '@/components/Banner.vue'
import shopList from '@/components/shopList'
import Aside from '@/components/Aside'

export default {
    components:{
        Banner,
        shopList,
        Aside,
        Recommend
    },
    data(){
        return{
            isShow:0,
            businessDate:[], 
            asideDate:[],
            address:"正在定位···"
        }
    },
    methods:{
        //获取滚动距离
        handerPageScroll(scrollObj){
            if(scrollObj.scroll.y<-50){
                this.$refs.search.style.top = -(scrollObj.scroll.y+50)+"px";
            }else{
                this.$refs.search.style.top = 0;
            }
        },

        //获取商家列表、综合排序数据
        getInitData(params){
            //请求商家列表数据
            getBusinessDate(params)
            .then(result=>{
                console.log(result)
                this.businessDate = result;
            })
            // 请求综合排序的数据
            getAsideDate(params)
            .then(result=>{
                console.log(result)
                this.asideDate = result;
            })
            // 请求综合排序的数据
            getFilterDate(params)
            .then(result=>{
                console.log(result)
                this.filterDate =result;
            })
        }
    },
    created(){
        //获取经纬度
        getCurrentPosition()
        //获取经纬度成功
        .then(result=>{
            //获取地址
            getAddressData(result)
            //获取地址成功
            .then(res=>{
                console.log(res);
                this.address = res.name;
                this.$store.commit("userInfo/modifyCity",{
                    city:res.city,
                    latitude:res.latitude,
                    longitude:res.longitude,
                });
                this.$store.commit("userInfo/modifyAddress",{address:res.name});
                this.isShow = 1;
                this.getInitData(result);
            })
              //获取地址失败
            .catch(error=>{
                console.log("请求失败");
                console.log(error);
            });
        })
        //获取经纬度失败
        .catch(error=>{
            this.$router.push({name:"location"});
            this.isShow = 2;
        })
       
    },
    mounted(){
        
    },
    //使用组件更新守卫监听路由变化
    beforeRouteUpdate(to,from,next){
        if(from.name =="location" && this.$store.state.userInfo.address == ""){
            this.address = "未能获取地址";
        }else{
            this.isShow = 1;
            this.address = this.$store.state.userInfo.address;
            this.getInitData({
                latitude:this.$store.state.userInfo.latitude,
                longitude:this.$store.state.userInfo.longitude,
            });
        }
        next();
    }
}
</script>

<style scoped>
.location{
    width:100%;
    height: 50px;
    line-height: 50px;
    padding: 0 14px;
    background-image:linear-gradient(90deg,#0af,#0085ff); 
    box-sizing: border-box;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    display: flex;
}
.location-address{
    display: inline;
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    z-index: 9;
}
.search p{
    width: 100%;
    height: 36px;
    background: #fff;
    line-height: 36px;
    text-align: center;
    color:#999;
}
.main-select2{
    padding-top: 100px;
    text-align: center;
}
.main-select2-img{
    width:200px;
    height: 200px;
    margin:0 auto;
     
}
.main-select2-img img{
    display: block;
    width: 100%;
    height: 100%;;
}
.main-select2 h4{
    margin: 15px 0 10px ;
    color: #6a6a6a;
}
.main-select2 p button{
    font-size: 14px;
    color: #fff;
    background: #56d176;
    padding: 10px;
    outline: none;
    border:none;
    border-radius: 4px;
}
</style>
