<template>
  <div id="app">
   
    <router-view/>
    <div class="tabs">
      <router-link to="/home" class="tab">首页</router-link>
      <router-link to="/discover" class="tab">发现</router-link>
      <router-link to="/indent" class="tab">订单</router-link>
      <router-link to="/mine" class="tab">我的</router-link>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.tabs{
  width:100%;
  height: 44px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  border-top: 1px solid #999;
}
.tab{
  flex: 1;
  text-align: center
}
</style>
