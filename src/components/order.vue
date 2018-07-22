<template>
    <div class="order-container">
        <div class="order-top clearfix">
            <img src="../img/anchor-info-arrow.png" alt="">
            <span>我的订单</span>
        </div>
        <div class="order-bottom">
            <span>待付款</span>
            <span>待发货</span>
            <span>待收货</span>
            <span>待评价</span>
            <span>退货申请</span>
        </div>
        <div class="order-content">
            <div class="order-content-pay">
                <div class="order-pay-text"></div>
            </div>
            <div class="order-content-payOne"></div>
            <div class="order-content-payTwo"></div>
            <div class="order-content-payThree"></div>
            <div class="order-content-payFouth"></div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        var li =  document.querySelectorAll(".order-bottom span");
        var div = document.querySelectorAll(".order-content div");
        console.log(div)
        $(li[0]).addClass("active");
        $(div[0]).css("display","block");
        for(let i=0;i<li.length;i++){
            li[i].ontouchend = function(){
                $(this).addClass("active").siblings().removeClass("active");
                $(div[i]).css("display","block").siblings().css("display","none")
            }
        }
    },
    methods:{

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
.order-container{
    display:flex;
    flex-direction: column;
    width:100%;
    height:100%;
}
.order-top{
    width:100%;
    height:2.55rem;
    background:rgba(185,0,255,1);
    position: relative;
}
.order-top span,.order-top img{
    position:absolute;
    left:50%;
    top:50%;
    -o-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    color:#fff;
}
.order-top img{
    left:0.8rem;
    width:1rem;
    -o-transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
}
.order-bottom{
    height:2rem;
    border-bottom:1px solid rgba(185,0,255,1);
}
.order-bottom span{
    height:0.9rem;
    font-size: 0.5rem;
    display:inline-block;
    width:18%;
    color:rgba(185,0,255,1);
    margin-top:0.7rem;
    font-weight: 700;
}
.active{
    border-radius: 0.5rem;
    background: rgba(185,0,255,1);
    color:#fff !important;
}
.order-content-payOne,.order-content-payTwo,.order-content-payThree,.order-content-payFouth{
    display:none;
    background: #fff;
}
.order-content-pay{
    height:100%;
}
.order-content{
    flex:1;
}
.order-pay-text{
    height:4.75rem;
    width:100%;

}
</style>
