<template>
  <div>
      <div>
          <span class="order">综合排序<i class="iconfont">&#xe654;</i></span>
          <ul>
              <li v-for="item in name" :key="item.value">{{inside_sort_filter[0].name}}</li>
          </ul>
      </div>
     <div>
          <span>距离最近</span>
      </div>
      <div>
          <span>品质联盟</span>
      </div>
      <div>
          <span>筛选<i class="iconfont">&#xe6b1;</i></span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        data:Object
    },
    data(){
        name:[]
    }
}
</script>

<style scoped>
.order{
    font-size: 10px;
    color: black
}
</style>


