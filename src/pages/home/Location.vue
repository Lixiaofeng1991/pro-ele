<template>
  
    
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
         
        <div id="location">
            <div>
                <div class="top">
                    <span class="backBtn" @click="goBackAction"><i class="iconfont">&#xe60a;</i></span>
                    <h3 class="title">选择收货地址</h3>
                </div>
                <div class="main">
                    <div class="content">
                        <!-- 选择城市 -->
                        <router-link :to="{name:'city'}">
                            <div class="content-left">
                                <span class="content-left-span">{{city}}</span> <i class="iconfont">&#xe654;</i>
                            </div>
                        </router-link>

                        <div class="content-right">
                            <i class="iconfont">&#xe621;</i>
                            <input type="text" placeholder="请输入地址" v-model="inputVal"> 
                        </div>
                    </div>

                    <div class="main-select" v-if='isShow == 1'>
                        <ul class="main-select-ul">
                            <li v-for="(addressItem,index) in addressData" :key="index" class="main-select-li" @click="selectedAction(addressItem)">
                                <h4 class="main-select-title">{{addressItem.name}}</h4>
                                <p class="main-select-text">{{addressItem.address}}</p>
                            </li>
                        </ul>
                        <div class="main-select-footer" >
                            <h4>找不到地址？</h4>
                            <p>请尝试只输入小区、写字楼或学校名</p>
                            <p>详细地址（如门牌号）可稍后输入</p>
                        </div>
                    </div>

                    <div v-if='isShow == 2' class="main-select2">
                        <div class="main-select2-img">
                            <img src="../../images/location1.gif" alt="" >
                        </div>
                        <h4>没有搜索结果</h4>
                        <p>换个关键字试试</p>
                    </div>
                </div>
            </div>

            <router-view></router-view>
        </div>
      
    </transition>
</template>

<script>
import {getSearchAddress} from "@/services/address.js"
export default {
    data(){
        return{
            inputVal:"",
            addressData:[],
            isShow:0
        }
    },
    computed:{
        city:function(){
            if(this.$store.state.userInfo.city){
                return this.$store.state.userInfo.city;
            }else{
                return "选择···";
            }
        }
    },
    methods:{
        goBackAction(){
            this.$router.push({path:"/home"});
        },
        selectedAction(addressItem){
            this.$store.commit("userInfo/modifyCity",{
                city:addressItem.city,
                latitude:addressItem.latitude,
                longitude:addressItem.longitude,
            });
            this.$store.commit("userInfo/modifyAddress",{address:addressItem.name})
            this.$router.push({path:"/home"});
        }
    },
    watch:{
        inputVal(newVal){
           //清除输入框，恢复原样
            if(newVal == "") {
                this.isShow = 0;
                return false;
            }
            let params={
                keyword:newVal
            }
            if(this.$store.state.userInfo.latitude){
                params.latitude = this.$store.state.userInfo.latitude;
                params.longitude = this.$store.state.userInfo.longitude;
            }
            getSearchAddress(params)
            .then(result=>{
                if(result.length == 0){
                    this.isShow = 2;
                }else if(result.length > 0){
                    this.isShow = 1;
                    this.addressData = result;
                }
               
            })
        },
        '$route'(){
             this.inputVal = "";
        }
    }

}
</script>

<style scoped>
#location{
    width:100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    overflow: hidden;
}
.top{
    color: #fff;
}
.backBtn{
   position: absolute;
    width:44px;
    height: 44px;
    line-height: 44px;
    text-align: center
}
.title{
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.main{
    width:100%;
    background: #f4f4f4;
    position: absolute;
    top:44px;
    left: 0;
    bottom: 0;
    overflow-y: auto
}
.content{
    height: 56px;
    display: flex;
    background: #fff;
}
.content-left{
   width:78px;
   height: 100%;
   line-height: 56px;
   text-align: center;
   font-size: 12px;
   display: flex;
   justify-content: center;
}
.content-left-span{
    width:35px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.content-right{
    height: 36px;
    padding: 10px 15px 10px 0;
    position: relative;
    flex: 1;

}
.content-right i{
    height: 36px;
    line-height: 36px;
    position: absolute;
    left: 5px;
    top:10px;
   
}
.content-right input{
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    border: none;
    outline: none;
    padding-left: 25px;
    box-sizing: border-box;
}
.slideInRight,.slideOutRight{
    animation-duration: 300ms;
}
.main-select-li{
    padding: 10px 15px;
    border-bottom: 1px solid #eee;
    background-color:#fff; 
}
.main-select-title{
    font-size: 14px;
}
.main-select-text{
    font-size: 12px;
}
.main-select-footer{
    padding: 20px 0;
    text-align: center;
    color: #999;
    background: #fff;
}
.main-select-footer>h4{
    margin-bottom: 10px;
    font-weight: normal;
}
.main-select-footer>p{
    font-size: 12px;
}
.main-select2{
    padding-top: 150px;
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
.main-select2 p{
    font-size: 12px;
    color: #999;
}
</style>
