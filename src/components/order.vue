<template>
    <div class="order-container">
        <div class="order-top clearfix">
            <img src="../img/anchor-info-arrow.png" alt="" @click="toOpt">
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
                <div class="order-pay-text" v-for="item in payItem" >
                    <div class="order-content-left">
                        <img src="../img/anchor-order-img.png" width="90" >
                    </div>
                    <div class="order-content-center">
                        <span>小青甘普茶</span>
                        <p>套餐{{num}}</p>
                    </div>
                    <div class="order-content-right">
                        <span>￥{{price}}.00</span>
                        <p class="button1" style="">待付款</p>
                    </div>
                </div>
            </div>
            <div class="order-content-pay">
                <div class="order-pay-text" v-for="item in payItemOne">
                    <div class="order-content-left">
                        <img src="../img/anchor-order-img.png" width="90" >
                    </div>
                    <div class="order-content-center">
                        <span>小青甘普茶</span>
                        <p>套餐{{num}}</p>
                    </div>
                    <div class="order-content-right">
                        <span>￥{{price}}.00</span>
                        <p class="button2" >查看物流</p>
                    </div>
                </div>
            </div>
            <div class="order-content-pay">
                 <div class="order-pay-text" v-for="item in payItemTwo">
                    <div class="order-content-left">
                        <img src="../img/anchor-order-img.png" width="90" >
                    </div>
                    <div class="order-content-center">
                        <span>小青甘普茶</span>
                        <p>套餐{{num}}</p>
                    </div>
                    <div class="order-content-right">
                        <span>￥{{price}}.00</span>
                        <p class="button3" >确认收货</p>
                    </div>
                </div>
            </div>
            <div class="order-content-pay">
                <div class="order-pay-text" style="height:9rem;" v-for="item in payItemThree">
                    <div class="order-content-left">
                        <img src="../img/anchor-order-img.png" width="90" >
                    </div>
                    <div class="order-content-center">
                        <span>小青甘普茶</span>
                        <p>套餐{{num}}</p>
                    </div>
                    <div class="order-content-right">
                        <span>￥{{price}}.00</span>
                        <p class="button4" >待评价</p>
                    </div>
                    <div class="block" >
                        <span >商品评分</span>
                       <el-rate v-model="value1" style="width:85%"></el-rate>
                    </div>
                    <div class="block" >
                        <span >物流评分</span>
                       <el-rate v-model="value2" style="width:85%"></el-rate>
                    </div>
                    <div class="block" >
                        <span >客服评分</span>
                       <el-rate v-model="value3" style="width:85%"></el-rate>
                    </div>
                </div>
            </div>
            <div class="order-content-pay">
                <div class="order-pay-text" v-for="item in payItemFouth">
                    <div class="order-content-left">
                        <img src="../img/anchor-order-img.png" width="90" >
                    </div>
                    <div class="order-content-center">
                        <span>小青甘普茶</span>
                        <p>套餐{{num}}</p>
                    </div>
                    <div class="order-content-right">
                        <span>￥{{price}}.00</span>
                        <p class="button5" style="">申请售后</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        var li =  document.querySelectorAll(".order-bottom span");
        var div = document.querySelectorAll(".order-content-pay");
        $(li[0]).addClass("active");
        $(div[0]).css("display","block");
        for(let i=0;i<li.length;i++){
            li[i].ontouchend = function(){
                $(this).addClass("active").siblings().removeClass("active");
                $(div[i]).css("display","block").siblings().css("display","none");
            }
        }
    },
    methods:{
        toOpt(){
            this.$router.push("/optimization")
        }
    },
    data(){
        return {
            num:1,
            price:399,
            //栏目自己配置
            payItem:[1,2,3,4],
            payItemOne:[1,2,3,4],
            payItemTwo:[1,2,3,4],
            payItemThree:[1],
            payItemFouth:[1,2,3,4],
            value1: null,
            value2: null,
            value3: null
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
    padding-top:0.1rem;
    border:0;
}
.active{
    border-radius: 0.5rem;
    background: rgba(185,0,255,1);
    color:#fff !important;
}
.order-content-pay{
    display:none;
    background: #fff;
    height:100%;
}
.order-content{
    flex:1;
    overflow-y: auto;
}
.order-pay-text{
    height:4.75rem;
    width:100%;
    border-bottom:1px solid rgba(185,0,255,1);
}
.order-content-left{
    float:left;
    margin:0.2rem 0 0 0.2rem;
    font-size:0.5rem;
}
.order-content-center{
    float: left;
    font-size:0.5rem;
    text-align: left;
}
.order-content-center span{
    display: inline-block;
    margin:0.7rem 0 0 0.5rem;
    font-weight: 700;
}
.order-content-center p{
    margin:0.7rem 0 0 0.5rem;
    color:#a7a4a4;
}
.order-content-left span{
    display: inline-block;
}
.order-content-right{
    float:right;
    font-size:0.5rem;
}
.order-content-right span{
    display: inline-block;
    margin:0.7rem 1.2rem 0 0rem;
    font-weight: 700;
    color: red;
}
.order-content-right p{
    font-size: 0.7rem;
    margin:1.7rem 1rem 0 0rem;
    width:4rem;
    border-radius: 0.5rem;
}

.order-content-right .button1{
color:red;border:1px solid red;
}

.order-content-right .button2{
    color:#a7a4a4;border:1px solid #a7a4a4;
}
.order-content-right .button3{
    color:yellow;border:1px solid yellow;
}
.order-content-right .button4{
    color:red;border:1px solid red;
}

.order-content-right .button5{
    color:red;border:1px solid red;border-radius:0;
}
.block{
    display:inline-block;padding-top:0.2rem;width:100%;
                    text-align:right;
}

.block span{
float:left;padding-left:0.6rem;font-size:0.9rem;
}
</style>
