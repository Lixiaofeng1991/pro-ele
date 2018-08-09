<template>
   <router-link to="">
       <section class="business">
           <div class="business_container">
                <div class="business_img">
                    <img :src="'https://fuss10.elemecdn.com/'+src+'?imageMogr/format/webp/thumbnail/!65x65r/gravity/Center/crop/65x65/'" />
                </div>
                <div class="business_info">
                    <section class="shop_info">
                        <h3 class="shopname"><span class="brand">品牌</span>{{items.name}}</h3>
                    </section>
                    <section>
                        <div class="star"></div>
                        <span class="grade">{{items.rating}}</span>
                        <span class="count">月售{{items.recent_order_num}}单</span>
                    </section>
                    <section class="piecewise">
                        <span class="piecewise_line">￥{{items.piecewise_agent_fee.rules[0].price}}起送</span>
                        <span>{{items.piecewise_agent_fee.description}}</span>
                        <div class="distance">
                            <span class="dis">{{items.distance}}m</span>
                            <span>{{items.order_lead_time}}分钟</span>
                        </div>
                        
                    </section>
                </div>
           </div>
           <div class="business_description">
               <section class="signmark">
                   <span class="tags1">{{items.support_tags[0].text}}</span>
                   <span class="tags1" v-if="items.support_tags[1]">{{items.support_tags[1].text}}</span>
                   <span class="tags1">{{items.recommend.reason}}</span>
               </section>
               <section class="activities">
                   <div class="act">
                       <div class="tips">
                            <span class="reduce" v-if="items.activities[1].icon_name">{{items.activities[1].icon_name}}</span>
                            <span>{{items.activities[1].tips}}</span>
                        </div>
                        <div>
                            <span class="special" >特</span>
                            <span>{{items.activities[0].tips}}</span>
                        </div>
                   </div>
               </section>
           </div>
       </section>
   </router-link>
</template>

<script>
export default {
    props:{
        items:Object
    },
    data(){
        return{
            src:""
        }
    },
    created(){
       let arr= this.items.image_path.match(/(jpeg)|(png)/g)
       this.src =this.items.image_path+"."+arr[arr.length-1]
    }
}
</script>

<style scoped>
.business{
    position: relative;
    border-bottom:1px solid #eee;
    padding: 18px 0 ;
    
}
.business_img{
    position: relative;
    display: block;
    border:1px solid rgb(221, 217, 217);
    margin-left: 13px;
    margin-right: 13px
}
.business_container{
    display: flex;
    align-items: stretch;
    justify-content: flex-start
}
.business_info{
      justify-content: space-between
}
.brand{
    width:27px;
    height:17px;
    background: #fff100;
    color:#6f3f15;
    font-size: 3px; 
    margin-top: 3px;
    margin-right: 3px
}
.shopname{
    display: flex;
    color: #333;
    font-size:16px;
    /* font-weight: 700 */
}
.grade,.count,.piecewise{
    font-size: 4px;
    color: rgb(102, 101, 101)
}
.piecewise>.piecewise_line::after{
    content: "|";
    color: #ddd;
    margin: 3px
}
.distance{
    display: flex;
    align-items: center;
    float: right;
    margin-left: 50px;
    color: #999
}
.distance>.dis::after{
    content: "|";
    color: #ddd;
    margin: 3px
}
.signmark{
    display: flex;
    align-items: center;
    margin:3px 0 0 94px
}
.tags1{
    border: 1px solid rgb(221, 221, 221);
    font-size: 3px;
    color: rgb(102, 101, 101);
    margin-right: 6px
}
.activities{
    font-size: 3px;
    color:#666;
    display: flex;
    overflow: hidden;
}
.act{
    flex:1;
    overflow: hidden;
    padding:12px 0 0 93px
}
.tips{
    margin-bottom: 6px
}
.reduce{
    /* border: 1px solid red; */
    background: red;
    color:white
}
.special{
    /* border: 1px solid red; */
    background: green;
    color:white
}

</style>
