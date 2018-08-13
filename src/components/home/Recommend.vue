<template>
     <div id="recommend">
        <div class="recommend m-right10">
            <h2 class="recommend-title ">品质套餐</h2>
            <p class="recommend-p1">搭配齐全吃的好</p>
            <p class="recommend-p2">立即抢购 <i class="iconfont font12">&#xe6bf;</i></p>
            <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
        </div>

       <div class="recommend m-right10">
            <h2 class="recommend-title red">{{recommedData.name}}</h2>
            <p class="recommend-p1">{{recommedData.description}}</p>
            <p class="recommend-p2"><span class="red">{{count}}人</span>正在抢 <i class="iconfont font12">&#xe6bf;</i></p>
            <img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
        </div>
    </div>
</template>

<script>
import {getBannerAndRecommedData} from "@/services/bannerServiec.js"
export default {
    data(){
        return {
            recommedData:"",
            count:0
        }
    },
    created(){
        getBannerAndRecommedData(1).then(res=>{
            this.recommedData = res[0];
            this.count = JSON.parse(this.recommedData.more).population
        })
    }
}
</script>

<style scoped>
.red{
    color:#e81919;
}
.font12{
    font-size: 12px;
}
.m-right10{
    margin-right: 5px;
}
#recommend{
    margin: 0 13px;
    height: 140px;
    display: flex;
}
.recommend{
    flex: 1;
    background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
    position: relative;
    padding: 10px 0 0 10px;
}
.recommend-title{
    font-size:18px; 
}
.recommend-p1{
    font-size: 14px;
    margin: 5px 0;
}
.recommend-p2{
    font-size: 12px;
    font-weight: bold;
    color:#af8260
}
.recommend img{
    display: block;
    width: 120px;
    height: 80px;
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>
