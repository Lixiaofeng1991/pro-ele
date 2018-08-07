<template>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <div id="location">
            <div class="top">
                <span class="backBtn" @click="goBackAction"><i class="iconfont">&#xe60a;</i></span>
                <h3 class="title">选择收货地址</h3>
            </div>
            
            <div class="content">
                <div class="content-left">
                    <span>深圳 <i class="iconfont">&#xe654;</i></span>
                </div>
                 <div class="content-right">
                    <i class="iconfont">&#xe621;</i>
                    <input type="text" placeholder="请输入地址"> 
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    methods:{
        goBackAction(){
            this.$router.back();
        }
    },
    created(){
      
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
    background: #f4f4f4;
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
.content{
    height: 56px;
    display: flex;
   
    background: #fff;
}
.content-left{
   width:70px;
   height: 100%;
   line-height: 56px;
   text-align: center;
}

.content-right{
    height: 36px;
    padding: 10px 15px;
    position: relative;
    flex: 1;

}
.content-right i{
    height: 36px;
    line-height: 36px;
   position: absolute;
   left: 20px;
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
</style>
