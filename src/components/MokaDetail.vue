<template>
<div class="clearfix" id="MokaDetail">
    <div class="publish-top clearfix">
        <img src="../img/publish/publish-arrow.png" alt="">
    </div>
    <!-- 详情 -->
    <div class="MokaDetail-box clearfix">
        <div class="clearfix">
        <p class="MokaDetail-img"></p>
        <p class="MokaDetail-title">xxx</p>
        </div>

        <div class="MokaDetail-performance">

        </div>
        <div class="MokaDetail-brief">
            <p>模特名称：</p>
            <p>家长名称:</p>
            <p>联系方式:</p>
        </div>
    </div>
    <!-- 图片 -->
    <img src="../img/MokaDetail/MokaDetail-swp1.jpg" alt="" class="MokaDetail-sp">
</div>
</template>

<script>


export default {
    name:'MokaDetail',
    data(){
        return{
            
        }
    },

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin:0;padding:0;box-sizing: border-box;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}
.clearfix:after{
    content:'';clear:both;display:block;
}
#MokaDetail{
    width:100%;
}

.publish-top{
    width:100%;
    height:3rem;
    line-height: 3rem;
    background:#B900FF;
    padding-top:0.6rem;
    padding-left:1rem;

}

.publish-top img{
    width:0.8rem;
    float:left;
    /* margin-right: 1rem; */
    margin-top:0.3rem;
}


.MokaDetail-box{
    width:100%;
    padding:1rem 0.7rem;
}
.MokaDetail-box .MokaDetail-img{
    width:2.5rem;
    height:2.5rem;
    border-radius: 50%;
    background:#B900FF;
    float:left;
}
.MokaDetail-box .MokaDetail-title{
    width:12rem;
    padding:0.7rem 0.4rem;
    line-height:1rem;
    float:left;
    text-align: left;
    font-size:1.5rem;
}
.MokaDetail-performance{
    width:95%;
    height:5rem;
    margin:0.5rem auto;
}
.MokaDetail-brief{
    width:95%;
    /* padding:0.5rem; */
    margin:0 auto;
}
.MokaDetail-brief p{
    width:100%;
    text-align: left;
    margin-bottom:0.3rem;
}

.MokaDetail-sp{
    width:100%;
    height:4rem;
    position:fixed;
    bottom:2rem;
    left:0;
}

</style>