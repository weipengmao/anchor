<template>
    <div class="trade-container">
        <div class="trade-top clearfix">
            <img src="../img/anchor-info-arrow.png" alt="">
            <span>交易成功</span>
        </div>
        <div class="trade-bottom"></div>
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
.trade-container{
    display:flex;
    flex-direction: column;
    width:100%;
    height:100%;
}
.trade-top{
    width:100%;
    height:2.55rem;
    background:rgba(185,0,255,1);
    position: relative;
}
.trade-bottom{
    flex:1
}
.trade-top span,.trade-top img{
    position:absolute;
    left:50%;
    top:50%;
    -o-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    color:#fff;
}
.trade-top img{
    left:0.8rem;
    width:1rem;
    -o-transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
}
.trade-bottom{
    height: 18rem;
    background: url("../img/anchor-trade-welcome.png") no-repeat;
}
</style>
