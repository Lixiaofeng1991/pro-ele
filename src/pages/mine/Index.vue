<template>
    <div id="mine">
        <div class="top">
            <span class="backBtn" @click="goBackAction"><i class="iconfont">&#xe60a;</i></span>
            <h3 class="title">我的</h3>
        </div>
        
        <div class="content-me" @click="goLoginAction">
            <div class="icon-login">
                <i class="iconfont font30">&#xe74b;</i>
            </div>
            <div class="content-text">
                <h3 >{{username}}</h3>
                <p><i class="iconfont">&#xe63e;</i> {{mark}}</p>
            </div>
            <div class="icon-right">
                <i class="iconfont">&#xe6bf;</i>
            </div>
        </div>
        <ul class="money">
            <li>钱包</li>
            <li>红包</li>
            <li>金币</li>
        </ul>
        <div class="address">
            <p>
                我的地址
                <i class="iconfont fr">&#xe6bf;</i>
            </p>
        </div>
        <ul class="shop">
            <li>
                <p>
                    金币商城
                    <i class="iconfont fr">&#xe6bf;</i>
                </p>
            </li>
             <li>
                <p>
                    分享拿5元现金
                    <i class="iconfont fr">&#xe6bf;</i>
                </p>
            </li>
        </ul>
        <ul class="down">
            <li>
                <p>
                    我的客服
                    <i class="iconfont fr">&#xe6bf;</i>
                </p>
            </li>
            <li>
                <p>
                    下载饿了么APP
                    <i class="iconfont fr">&#xe6bf;</i>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:"登录/注册",
            mark:"登录后享受更多特权"
        }
    },
    methods:{
        goBackAction(){
            this.$router.push("/home");
        },
        goLoginAction(){
            if(this.$store.state.userInfo.name){
                this.$router.push({path:"/exit",query:{name:this.username}})
            }else{
                this.$router.push("/login");
            }
            
        }
    },
    activated(){
        if(this.$store.state.userInfo.name){
            this.username = this.$store.state.userInfo.name;
            this.mark = this.$store.state.userInfo.id
        }else{
            this.username = "登录/注册";
            this.mark = "登录后享受更多特权";
        }
    },
}
</script>

<style scoped>
#mine{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
}
.fr{
    float: right;
}
.font30{
    font-size: 30px;
    color:#fff;
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
.content-me{
    width: 100%;
    height: 110px;
    display: flex;
    padding: 25px 15px;
    box-sizing: border-box;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color:#fff;
}
.icon-login{
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius:50%; 
    background: rgba(243, 243, 238,0.5)
}
.content-text{
    margin: 5px 15px 0;
    flex: 1;
}
.icon-right{
    height: 60px;
    line-height: 60px;
    
}
.money{
    width: 100%;
    height: 84px;
    display: flex;
}
.shop,.address{
    margin: 10px 0;
}
.money li{
    flex: 1;
    text-align: center;
    border-right: 1px solid #ddd;
    background: #fff;
}
.money li:last-child{
    border: none;
}
.shop li,.address,.down li{
    height: 44px;
    line-height: 44px;
    background: #fff;
    padding: 0 10px
}
</style>
