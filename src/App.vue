<template>
  <div id="app">
    <keep-alive>
        <router-view/>
    </keep-alive>
    
    <div class="tabs">
      <router-link to="/home" class="tab">
        <i class="iconfont home">&#xe74b;</i> 
        <h4>首页</h4>
      </router-link>
      <router-link to="/discover" class="tab">
        <i class="iconfont">&#xe609;</i>
        <h4>发现</h4> 
      </router-link>
      <router-link to="/indent" class="tab">
        <i class="iconfont">&#xe63c;</i>
        <h4>订单</h4> 
      </router-link>
      <router-link to="/mine" class="tab">
        <i class="iconfont">&#xe60e;</i>
        <h4>我的</h4> 
      </router-link>
    </div>

    
  </div>
</template>

<script>

export default {
  name: 'App'
}

</script>

<style >
html,body,#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.tabs{
  width:100%;
  height: 44px;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  border-top: 1px solid #ddd;
}
.tab{
  flex: 1;
  text-align: center
}

.router-link-active{
  color:#0089dc;
}
</style>
