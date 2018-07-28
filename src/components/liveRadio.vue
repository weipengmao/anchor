<template>
<div class="clearfix" id="liveRadio">
    <!-- 头部标题 -->
    <div class="liveRadio-top">
        <img src="../img/liveRadio/liveRadio-img1.png" alt="">
        <img src="../img/liveRadio/liveRadio-img2.png" alt="">
        <img src="../img/liveRadio/liveRadio-img3.png" alt="">
        <p class="liveRadio-topic">各分赛区</p>
    </div>
    <!-- 视频 -->
    <img src="../img/liveRadio/liveRadio-img4.png" alt="" class="vedio">
    <!-- 各地区 -->
    <div class="clearfix" style="width:100%">
    <p class="cities-tip clearfix">点击相应目标城市即可进如城市报名页面</p>
    <ul class="cities-box clearfix" @click="toAssgn">
        <li v-for="item in items">{{item}}</li>
    </ul>
    <!-- <p class="cities-warn">赛事组委会享有最终解释权</p> -->
    </div>
</div>
</template>

<script>
export default {
    name:'liveRadio',
    data(){
        return{
            items:['乌鲁木齐','通州','通州','通州','通州','通州','通州','通州','通州','通州','通州','通州','通州',
            '通州','通州','通州','通州','通州','通州','通州','通州','通州','通州','通州','通州','通州','通州',]
        }
    },
    methods:{
        toAssgn(){
            this.$router.push("/assign")
        }
    }
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
#liveRadio{
        width:100%;
    /* height:100vh; */
    background:url('../img/cities/cities-bg.png') center no-repeat;
    background-size: 100% 100%;
}
.liveRadio-top{
    width:100%;
    height:3rem;
    line-height: 3rem;
    background:#B703FF;
}

.liveRadio-top img{
    width:1.4rem;
    margin-top:0.8rem;
    float:left;margin-left:0.4rem;
}

.liveRadio-top .liveRadio-topic{
    font-size: 0.9rem;
    color:white;
    letter-spacing: 2px;
    font-weight: bold;
    float:right;
    margin-right:1rem;
}

.vedio{
    width:100%;
}


.cities-tip{
    width:100%;
    height:2rem;
    line-height:2rem;
    font-size:0.4rem;
    letter-spacing: 2px;
}


.cities-box li{
    width:5rem;height:2.5rem;
    line-height: 2.5rem;
    font-size: 1rem;
    color:#FFFFFF;
    text-align: center;
    float:left;
    background:#48007C;
    margin:0.15rem 0;
    margin-left:0.25rem;
    border-radius: 0 10%  0 10%;
}

.cities-warn{
    width:100%;height:2rem;
    line-height: 2rem;
    font-size:0.3rem;
    text-align: center;
    color:#8F3AF9;
    letter-spacing: 2px;
}
</style>
