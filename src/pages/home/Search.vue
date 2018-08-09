<template>
    <div id="search">
        <div class="header">
            <div class="header-left" @click="goBackAction">
                <i class="iconfont">&#xe60a;</i>
            </div>
            <div class="header-right">
                <p>
                    <i class="iconfont">&#xe621;</i>
                    <input type="text" placeholder="输入商家、商品名称"> 
                </p>
                <button>搜索</button>
            </div>
        </div>

        <div class="content">
            <h4>热门搜索</h4>
            <div class="content_main">
                <button v-for="(item,index) in hotSearchData" :key="index">{{item.word}}</button>
            </div>
        </div>
    </div>
</template>

<script>
import {getHotSearchData} from "../../services/search.js";
export default {
    data(){
        return{
            hotSearchData:[]
        }
    },
    methods:{
        goBackAction(){
            this.$router.back();
        }
    },
    created(){
        getHotSearchData().then(res=>{
            this.hotSearchData =res;
        })
    }
}
</script>

<style scoped>
#search{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background: #fff;
    z-index: 9;
}
.header{
    height: 55px;
    display: flex;
    padding: 10px 0;
    box-sizing: border-box;
}

.header-left,.header-right{
    height: 35px;
    line-height: 35px;
    text-align: center
}
.header-left{
     width:35px;
}
.header-left i{
    font-size: 20px;
}
.header-right{
    flex: 1;
    display: flex
}
input,button{
    border: none;
    outline: none;
}
.header-right p{
    height: 35px;
    background: #f8f8f8;
    flex: 1;
    display: flex
}
.header-right p i{
    width: 35px;
}
.header-right p input{
    flex: 1;
   background: #f8f8f8;
}
.header-right button{
    height: 35px;
    width:35px;
    font-size: 16px;
    font-weight: bold;
    background: #fff;
    margin: 0 10px;
}
.content {
    margin-top:20px;
}
.content h4{
    padding: 0 10px;
    color: #666;
}
.content_main button{
    height: 30px;
    line-height: 30px;
    background: #f7f7f7;
    color:#666;
    margin:10px 0 0 10px;
    padding:5px 10px;
    box-sizing: content-box;
}
</style>
