<template>
<div class="login-container">
    <div class="login-top">
        <div class="login-top-first clearfix">
            <div style="width:2.2rem;height:2.2rem;
            border-radius:50%;border:1px solid black;display:inline-block;float:left;">
            </div>
            <span class="login">登录/注册</span>
            <span class="span">编辑</span>
            <img src="../img/anchor-pane.png" >
        </div>
        <div class="login-top-second">
            <div class="div">1
                <p>我的收藏</p>
            </div>
            <span></span>
            <div class="div">2
                <p>我的品牌</p>
            </div>
            <span></span>
            <div class="div">3
                <p>我的足迹</p>
            </div>
        </div>
        <img src="../img/anchor-shadow.png" width="100%;" height="5" style="border-radius: 0 0 20px 20px;
        margin-bottom:4px;">
    </div>
    <div class="login-center">
       <div class="login-top-first clearfix">
            <span class="login">我的订单</span>
            <img src="../img/anchor-arrow.png" >
            <span class="span">查看全部订单</span>
        </div>
        <div class="login-top-second">
            <div class="div">
                <img src="../img/anchor-pay.png" alt="" width="20">
                <p>待支付</p>
            </div>
            <div class="div">2
                <p>待发货</p>
            </div>
            <div class="div">3
                <p>待收货</p>
            </div>
            <div class="div">4
                <p>退货</p>
            </div>
        </div>
    </div>
    <div class="login-bottom">
        <div class="login-top-first clearfix">
            <span class="login">我的订单</span>
        </div>
        <div class="login-top-second">
            <div class="div">
                <img src="../img/anchor-pay.png" alt="" width="20">
                <p>待支付</p>
            </div>
            <div class="div">2
                <p>待发货</p>
            </div>
            <div class="div">3
                <p>待收货</p>
            </div>
            <div class="div">4
                <p>退货</p>
            </div>
        </div>
        <div class="login-top-second">
            <div class="div">
                <img src="../img/anchor-pay.png" alt="" width="20">
                <p>待支付</p>
            </div>
            <div class="div">2
                <p>待发货</p>
            </div>
            <div class="div">3
                <p>待收货</p>
            </div>
            <div class="div">4
                <p>退货</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

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
.login-container{
    position:relative;
    height:100%;
    width:100%;
    background:url("../img/anchor-hightLight.png") no-repeat center;
    background-size: 100% 100%;
}
.login-top{
    height:5.8rem;
    width:15rem;
    background:#fff;
    position:absolute;
    top:3.1rem;
    left:.5rem;
    border-radius: 0.2rem;
}
.login-center{
    position:absolute;
    background:#fff;
    width:100%;
    height:6.85rem;
    top:10.2rem;
}
.login-bottom{
    position:absolute;
    background:#fff;
    width:100%;
    height:9.25rem;
    top:17.4rem;
}
.login-top-first{
    margin:0.6rem 1rem 0 0.8rem;
}
.login-top-first .login{
    font-size:0.85rem;
    font-weight: 700;
    float:left;
    margin:0.85rem 0 0 0.4rem;
    transform: translateY(-0.3rem)
}
.login-top-first .span{
    font-size:0.5rem;
    float:right;
}
.login-top-first img{
    width:0.6rem;
    float:right;
    margin:0.2rem 0.2rem 0 0;
}
.login-top-second{
    margin:0.4rem 0rem 0 0rem;
}
.login-top-second span{
    display: inline-block;
    margin:0;
    padding:0;
    height:1.3rem;
    width:1px;
    background:black;
    vertical-align: center;
}
.login-top-second .div{
    width:30%;
    display: inline-block;
    vertical-align: bottom;
}
.login-top-second .div p{
    font-size:0.3rem;
    margin:0;
}

.login-center .login-top-first,.login-bottom .login-top-first{
    margin:1.5rem 0.3rem 0 0.7rem;
}
.login-center .login-top-first .login,.login-bottom .login-top-first .login{
    font-size:0.6rem;
    font-weight: 700;
    float:left;
    margin:0 0 0 0;
    transform: translateY(-0rem);
}
.login-center .login-top-first .span,.login-bottom .login-top-first .span{
    font-size:0.4rem;
    float:right;
}
.login-center .login-top-first img,.login-bottom .login-top-first img{
    width:0.3rem;
    float:right;
    margin:0.2rem 0.2rem 0 0.3rem;
}
.login-center .login-top-second,.login-bottom .login-top-second{
    margin:1rem 0rem 0 0rem;
}
.login-center .login-top-second span,.login-bottom .login-top-second span{
    display: inline-block;
    margin:0;
    padding:0;
    height:1.3rem;
    width:1px;
    background:black;
    vertical-align: center;
}
.login-center .login-top-second .div,.login-bottom .login-top-second .div{
    width:22%;
    display: inline-block;
    vertical-align: bottom;
}
</style>
