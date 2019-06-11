<template>
    <div>
        <h1>发现</h1>
    </div>
</template>

<script>
export default {
    created(){
        console.log("created 执行了")
    },
    beforeRouteEnter(to,from,next){
        console.log("beforeRouterEnter 执行了");
        next();
    },
    beforeRouteUpdate(to,from,next){
        console.log("beforeRouteUpdate 执行了");
        next();
    },
    beforeRouteLeave(to,from,next){
        console.log("beforeRouterLeave 执行了");
        next();
    }
}
</script>

<style>

</style>
