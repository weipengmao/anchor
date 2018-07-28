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
    <!-- 底部导航 -->
        <div class="index-bottom">
            <div>
                <img src="../img/index/index-first.png" alt="" style="border-left:none;" @click="toHome()">
                <span style="display:inline-block;border-right:1px solid #fff;
                height:1.6rem;margin-left:0.08rem;"></span>
            </div>
            <div>
                <img src="../img/index/index-assign.png" alt="" @click="toAssign()">
                <span style="display:inline-block;border-right:1px solid #fff;
                height:1.6rem;margin-left:0.08rem;"></span>
            </div>
            <div>
                <img src="../img/index/index-discover.png" alt="" @click="toDiscover()">
                <span style="display:inline-block;border-right:1px solid #fff;
                height:1.6rem;margin-left:0.08rem;"></span>
            </div>
            <div>
                <img src="../img/index/index-mall.png" alt="" @click="toMall()">
                <span style="display:inline-block;border-right:1px solid #fff;
                height:1.6rem;margin-left:0.08rem;"></span>
            </div>
            <div style="border-right:0;">
                <img src="../img/index/index-personal.png" alt="" @click="toAccount()" >
            </div>
        </div>
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
            $(".index-bottom").css("width","100%");
            $(".index-bottom img").css("width","54px");
            $(".index-bottom span").css("height","1.6rem");
        },
        toList(){
            this.$router.push("/list")
            $(".index-bottom").css("width","100%");
            $(".index-bottom img").css("width","54px");
            $(".index-bottom span").css("height","1.6rem");
        },
        toOrder(){
            this.$router.push("/order")
            $(".index-bottom").css("width","100%");
            $(".index-bottom img").css("width","54px");
            $(".index-bottom span").css("height","1.6rem");
        },
        toShop(){
            this.$router.push("/shop");
            $(".index-bottom").css("width","0");
            $(".index-bottom img").css("width","0");
            $(".index-bottom span").css("height","0");
        },
        toHome(){
            this.$router.push('/index')
            $(".index-bottom").css("width","100%");
            $(".index-bottom img").css("width","54px");
            $(".index-bottom span").css("height","1.6rem");
        },
        toAssign(){
            this.$router.push('/arrangement')
        },
        toDiscover(){
            this.$router.push('/discover')
        },
        toMall(){
            this.$router.push('/optimization')
        },
        toAccount(){
            this.$router.push('/login')
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
    /* 底部导航 */
.index-bottom{
    width:100%;
    height:3rem;
    position:fixed;
    bottom:0;
    left:0;
    background:#AD0EFF;
display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
display: -ms-flexbox; /* TWEENER - IE 10 */
display: -webkit-flex; /* NEW - Chrome */
display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
justify-content: center;
align-items: center;
flex-direction: row;
}
.index-bottom img{
    vertical-align: bottom;
    width:54px;
    /* border-right:1px solid #fff; */
    display:inline-block;
}
.index-bottom div{
    width:20%;
}
</style>
