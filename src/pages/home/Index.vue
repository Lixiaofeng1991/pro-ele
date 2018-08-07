<template>
    <div>
        <div id="home">
            <div class="header">
                <div class="location" @click="showLocationAciton">
                    <i class="iconfont">&#xe60b;</i>
                    <span>{{address}}</span>
                    <i class="iconfont">&#xe654;</i>
                </div>
            </div>
            <div class="search" @click="goSearchAction">
                <p><i class="iconfont">&#xe621;</i>&nbsp;<span>搜索饿了么商家、商品名称</span></p> 
            </div>
            
        </div>
        <router-view></router-view>
    </div>
    
</template>

<script>

import {getAddressData} from "@/services/address.js"
export default {
    data(){
        return{
            address:"正在定位···"
        }
    },
    methods:{
        showLocationAciton(){
            this.$router.push("/home/location");
        },
        goSearchAction(){
            this.$router.push("/search")
        }
    },
    created(){
        getAddressData().then(res=>{
            console.log(res)
            this.address = res;
        })
    }
}
</script>

<style scoped>
#home{
    overflow: hidden;
}
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
