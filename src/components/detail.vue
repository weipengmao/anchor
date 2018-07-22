<template>
<div id="detail" class="clearfix">
    <!-- 视屏播放 -->
    <img src="../img/detail/detail-img1.png" alt="" class="detail-top">
    <!-- 相关视频 -->
    <p class="detail-title">相关视频</p>
    <div class="detail-box">
        <img src="../img/detail/detail-img2.png" alt="">
        <img src="../img/detail/detail-img2.png" alt="">
        <img src="../img/detail/detail-img2.png" alt="">
        <img src="../img/detail/detail-img2.png" alt="">
        <img src="../img/detail/detail-img2.png" alt="">
        <img src="../img/detail/detail-img2.png" alt="">
        <img src="../img/detail/detail-img2.png" alt="">
        <img src="../img/detail/detail-img2.png" alt="">
    </div>
</div>
</template>

<script>

export default {
    name:'detail'
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin:0;padding:0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
}

.clearfix:after{
    content:'';clear:both;display:block;
}

#detail{
    width:100%;
    /* height:100vh; */
    background:url('../img/detail/detail-bg.png') center no-repeat;
    background-size:100% 100%;    
}
.detail-top{
    width:100%;
}

.detail-title{
    width:100%;
    height:2rem;
    line-height:2rem;
    color:white;
    font-size:1.3rem;
    font-family: '方正姚体'
}
.detail-box img{
    width:7rem;
    margin:0.4rem 0;
    margin-left:0.7rem;
    float:left;

}
</style>