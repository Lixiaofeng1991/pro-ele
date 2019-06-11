<template>
    <div id="city">
        <div class="top">
                <span class="backBtn" @click="goBackAction"><i class="iconfont">&#xe60a;</i></span>
                <h3 class="title">城市选择</h3>
            </div>
            
            <page class="search-page">
                <div class="content">
                        <i class="iconfont icon-search i-search"></i>
                        <input type="text" placeholder="输入城市名、拼音或首字母查询" class="text" v-model="inputValue"> 
                </div>
                <div class="search-reslut" v-if="isShow">
                    <ul>
                        <li class="list-ul-li" v-for="(searchItem,index) in searchResult" :key="index" @click="selectCityAction(searchItem)">{{searchItem.name}}</li>
                    </ul>
                </div>
                <div class="search-null" v-else>无结果</div>
            </page>


            <page class="list" v-show="!inputValue">
                <div v-if="city">
                    <h3 class="list-title">当前定位城市</h3>
                    <p class="list-ul-li">{{city}}</p>
                </div>
                <div v-for="(items,key) in cityList" :key="key">
                    <h3 class="list-title">{{key}}</h3>
                    <ul class="list-ul">
                        <li class="list-ul-li" v-for="(cityItem,index) in items" :key="index" @click="selectCityAction(cityItem)">{{cityItem.name}}</li>
                    </ul>
                </div>
            </page>
           
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    data(){
        return{
            cityList:{
                B:[
                     {name:"北京",latitude:39.90469,longitude:116.407173},
                     {name:"北京",latitude:39.90469,longitude:116.407173},
                     {name:"北京",latitude:39.90469,longitude:116.407173},
                     {name:"北京",latitude:39.90469,longitude:116.407173},
                     {name:"北京",latitude:39.90469,longitude:116.407173},
                     {name:"北京",latitude:39.90469,longitude:116.407173},
                     {name:"北京",latitude:39.90469,longitude:116.407173},
                     {name:"北京",latitude:39.90469,longitude:116.407173}
                ],
                G:[
                    {name:"广州",latitude: 23.12908,longitude: 113.264359},
                    {name:"广州",latitude: 23.12908,longitude: 113.264359},
                    {name:"广州",latitude: 23.12908,longitude: 113.264359},
                    {name:"广州",latitude: 23.12908,longitude: 113.264359},
                    {name:"广州",latitude: 23.12908,longitude: 113.264359},
                ],
                S:[
                    {name:"上海",latitude: 31.23037,longitude: 121.473701},
                    {name:"上海",latitude: 31.23037,longitude: 121.473701},
                    {name:"上海",latitude: 31.23037,longitude: 121.473701},
                    {name:"上海",latitude: 31.23037,longitude: 121.473701},
                    {name:"上海",latitude: 31.23037,longitude: 121.473701},
                    {name:"深圳",latitude: 22.54286,longitude: 114.059563},
                    {name:"深圳",latitude: 22.54286,longitude: 114.059563},
                    {name:"深圳",latitude: 22.54286,longitude: 114.059563},
                    {name:"深圳",latitude: 22.54286,longitude: 114.059563}
                ]
            },
            inputValue:"",
            isShow:false,
            //搜索的结果
            searchResult:[],
            // selectCity:""
        }
    },
    computed:{
        ...Vuex.mapState({
            city: state =>state.userInfo.city
        })
    },
    methods:{
        goBackAction(){
            this.$router.back();
        },
        selectCityAction(value){
            this.$store.commit("userInfo/modifyCity",{city:value.name,latitude:value.latitude,longitude:value.longitude})
            this.$router.push({name:"location"})
        }
    },
    watch:{
        inputValue(newVal,oldVal){
            this.searchResult=[];
            let reg = /^[a-zA-Z]/;
            let reg2 = new RegExp()
            if(reg.test(newVal)){
                 newVal = newVal.toUpperCase();
                if(newVal in this.cityList){
                    this.isShow = true;
                    this.searchResult = this.cityList[newVal]
                }
            }else {
                for(let key in this.cityList){
                    this.cityList[key].forEach(element => {
                        if(element.name.indexOf(newVal) == 0){
                            this.isShow = true;
                            this.searchResult.push(element)
                        }
                    });
                }
            }           
            
        }
    }
}
</script>

<style scoped>
#city{
    width:100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    background: #fff;
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
    height: 30px;
    padding: 7px 0;
    text-align: center;
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.text{
    border: none;
    outline: none;
    width: 280px;
    height: 28px;
    padding: 1px 0 1px 30px;
    border-radius:15px; 
}
.i-search{
    position: relative;
    left: 30px;
    font-size: 12px;
}
#city .search-page{
    top:44px;
    bottom: 0px;
}
.search-null{
    width:100%;
    text-align: center;
    position: absolute;
    /* height: 20px;
    line-height: 20px; */
    top:350px;
    
}
#city .list{
   top:88px;
   bottom: 0;
   background: #fff;
}
.list-title{
    height: 40px;
    line-height: 40px;
    padding-left:15px;
    font-weight: normal;
    color:#666;
    background: #f5f5f5; 
    border-bottom:1px solid #ddd;
}

.list-ul-li{
    height: 49px;
    line-height: 49px;
    margin-left:15px;
    border-bottom:1px solid #ddd;

}
ul li:last-child{
    border-bottom: none;
}

</style>
