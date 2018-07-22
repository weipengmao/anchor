<template>
    <div class="opt-container">
        <div class="opt-top">
            <div class="opt-top-text">
                <img src="../img/anchor-opt-search.png" alt="">
                <span :id="'center'" @touchend="toRecom('center')">推荐</span>|
                <span @touchend="toList()">分类</span>|
                <span @touchend="toShop()">购物车</span>|
                <span @touchend="toOrder()"> 我的订单</span>
            </div>
        </div>
        <router-view to="/"></router-view>
    </div>
</template>

<script>
export default {
    mounted(){
        var li = document.querySelectorAll(".opt-top-text span");
        for(let i=0;i<li.length;i++){
            li[i].ontouchend = function(){
                $(this).addClass("active").siblings().removeClass("active");
            }
        }
    },
    methods:{
        toRecom(id){
            this.$router.push("/recommend")
            $("#"+id+0).css("display","none");
            $("#"+id+1).css("display","block");
        },
        toList(){
            this.$router.push("/list")
        },
        toOrder(){
            this.$router.push("/order")
        },
        toShop(){
            this.$router.push("/shop")
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clearfix:after{
    content:'';
    display: block;
    clear:both;
    visibility: hidden;
}
.opt-container{
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flex;
    display:-moz-flex;
    display:-o-flex;
    flex-direction: column;
    width:100%;
    height:100%;
}
.opt-top{
    height:2.25rem;
    background: rgba(104,29,164,1);
    position: relative;
}
.opt-top-text{
    position:absolute;
    top:50%;
    -o-transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    height:1rem;
    width:100%;
    color:white;
    font-size: 0.8rem;
}
.opt-top-text span{
    display: inline-block;
    margin: 0 0.5rem 0 0.2rem;
    vertical-align: middle;
    font-weight: 700;
    font-family: 微软雅黑;
    height: 1.3rem;
}
.opt-top-text img{
    float: left;
    margin-left:0.5rem;
}
.active{
    border-bottom: 1px solid #fff;
}
</style>
