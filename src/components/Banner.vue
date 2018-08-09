<template>
   <div class="swiper-container" id="banner" ref="banner">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <router-link to="">
                <div class="common_sider">
                    <img src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
                    <p>美食</p>
                </div>
            </router-link>
            <router-link to="">
                <div class="common_sider">
                    <img src="https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
                    <p>商超便利</p>
                </div>
            </router-link>
            <router-link to="">
                <div class="common_sider">
                    <img src="https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
                    <p>水果</p>
                </div>
            </router-link>
             <router-link to="">
                <div class="common_sider">
                    <img src="https://fuss10.elemecdn.com/1/48/bf1a859bf81553bbcfd6cf4ac42cbjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
                    <p>早餐</p>
                </div>
            </router-link>
              <router-link to="">
                <div class="common_sider">
                    <img src="https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
                    <p>医药健康</p>
                </div>
            </router-link>
              <router-link to="">
                <div class="common_sider">
                    <img src="https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
                    <p>大牌5折</p>
                </div>
            </router-link>
            <router-link to="">
                <div class="common_sider">
                    <img src="https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
                    <p>浪漫鲜花</p>
                </div>
            </router-link>
             <router-link to="">
                <div class="common_sider">
                    <img src="https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
                    <p>厨房生鲜</p>
                </div>
            </router-link>
             <router-link to="">
                <div class="common_sider">
                    <img src="https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
                    <p>跑腿代购</p>
                </div>
            </router-link>
             <router-link to="">
                <div class="common_sider">
                    <img src="https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
                    <p>披萨意面</p>
                </div>
            </router-link>

        </div>
        <div class="swiper-slide">
            <router-link to="">
                <div class="common_sider">
                    <img src="https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
                    <p>地方小吃</p>
                </div>
            </router-link>
            <router-link to="">
                <div class="common_sider">
                    <img src="https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
                    <p>麻辣烫</p>
                </div>
            </router-link>
            <router-link to="">
                <div class="common_sider">
                    <img src="https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
                    <p>地方菜系</p>
                </div>
            </router-link>
        </div>
        
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination " >
    </div>
</div> 
</template>

<script>
export default {
    mounted(){
        this.bannerSwiper = new Swiper(this.$refs.banner, {
            loop: true,
            pagination: '.swiper-pagination',
            
        });
    },
}
</script>

<style scoped>
#banner{
    height: 177px;
    background: #ffffff;
    text-align: center;
    overflow: hidden;
    position: relative;
    box-sizing: border-box
}
.common_sider img{
    width: 45px;
    height: 45px;
    display: block;
    text-align: center;
    vertical-align: top;
    margin-left: 15px
    
}
.swiper-slide p{
    text-align: center;
    font-size: 12px;
    color: #666;
}
.common_sider{
    width: 20%;
    float: left;
    margin-top: 11px
}
/* .swiper-pagination-customs-active{
    background: red!important;
} */
</style>
