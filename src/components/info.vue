<template>
    <div class="info-container">
        <div class="info-top clearfix">
            <img src="../img/anchor-info-arrow.png" alt="">
            <span>编辑</span>
        </div>
        <div class="info-center">
            <div class="info-center-top">
                <div class="info-top-content">
                    <img src="../img/anchor-info-photo.png"><span>上传头像</span>
                </div>
            </div>
            <div class="info-center-text"><span>昵称</span></div>
            <div class="info-center-text"><span>性别</span></div>
            <div class="info-center-text"><span>星座</span></div>
        </div>
        <div class="info-bottom">
            <span>保存</span>
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
.info-container{
    display:flex;
    flex-direction: column;
    width:100%;
    height:100%;
}
.info-top{
    width:100%;
    height:2.55rem;
    background:rgba(185,0,255,1);
    position: relative;
}
.info-center{
    flex:1;
}
.info-bottom{
    width:100%;
    height:2.55rem;
    background:rgba(185,0,255,1);
    position: relative;
}
.info-bottom span,.info-top span,.info-top img{
    position:absolute;
    left:50%;
    top:50%;
    -o-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    color:#fff;
}
.info-top img{
    left:0.8rem;
    width:1rem;
    -o-transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
}
.info-center-top{
    width:100%;
    height:4.65rem;
    background: #fff;
    position: relative;
}
.info-center-text{
    width:100%;
    height:2.25rem;
    border-top:1px solid rgba(185,0,255,1);
}
.info-center-text:last-child{
    width:100%;
    height:2.25rem;
    border-bottom:1px solid rgba(185,0,255,1);
}
.info-center-text span{
    color:rgba(185,0,255,1);
    font-size:0.8rem;
    display: inline-block;
    margin:0.6rem 0 0 0.7rem;
    float: left;
}

.info-center-top img{
    width:2.8rem;
    vertical-align: middle;
}
.info-center-top span{
    display: inline-block;
    margin-left:0.5rem;
    color:rgba(185,0,255,1);
    font-size:0.8rem;
}
.info-top-content{
    float: left;
    margin-left:1rem;
    position: absolute;
    top:50%;
    -o-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
}
</style>
