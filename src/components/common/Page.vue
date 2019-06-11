<template>
    <div class="page" ref="page">
        <div class="page-wrap">
           <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        onScroll:Function
    },
    methods:{
        refreshDOM(){
            this.scroll.refresh();
        }
    },
    mounted(){
        this.scroll = new IScroll(this.$refs.page,{
            probeType: this.onScroll ? 3 : 0
        });

        this.scroll.on("beforeScrollStart",()=>{
            this.scroll.refresh();
        });

        this.scroll.on("scroll",()=>{
            let disY = this.scroll.y;
            this.onScroll(this);
        })
    }
}
</script>

<style scoped>
.page{
    width: 100%;
    position: absolute;
    left: 0;
    top:0;
    bottom:44px;
    overflow: hidden;
}
</style>
