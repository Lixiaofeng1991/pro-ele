<template>
    <div id="indent">
        <div class="top">
            <span class="backBtn" @click="goBackAction"><i class="iconfont">&#xe60a;</i></span>
            <h3 class="title">订单</h3>
        </div>

        <div v-if="$store.state.userInfo.name" class="main">
            已登录
        </div>
        <div v-else class="mask">
            <div class="mask-img">
                <img src="../../images/indent-pic.png" alt="">
            </div>
            <p class="mask-title">登录后查看外卖订单</p>
            <div class="mask-btn" @click="goLoginAction">立即登录</div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goBackAction(){
            this.$router.back();
        },
        goLoginAction(){
            this.$router.push("/login");
        }
    }
}
</script>

<style scoped>
.top{
    color:#fff;
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

.mask{
    width:100%;
    position: absolute;
    top:44px;
    bottom: 45px;
    background: #f5f5f5;
}
.mask-img{
    width: 200px;
    height: 200px;
    margin: 100px auto 0;
}
.mask-img img{
    width: 100%;
    height: 100%;
}
.mask-title{
    height: 20px;
    text-align:center;
    padding: 10px;
    color: #666;
}
.mask-btn{
    width: 120px;
    height: 40px;
    line-height: 40px;
    background: #56d176;
    color:#fff;
    text-align: center;
    margin: 0 auto;
    border-radius:5px; 
}
</style>
