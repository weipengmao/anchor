<template>
<div class="clearfix" id="cities">
    <img src="../img/cities/cities-top.png" alt="" class="cities-img">
    <p class="cities-title">人气榜单</p>
    <div class="clearfix" style="width:100%">
    <p class="cities-tip clearfix">点击相应目标城市即可进如城市报名页面</p>
    <ul class="cities-box clearfix" >
        <li v-for="item in items">{{item}}</li>
    </ul>
    <p class="cities-warn">赛事组委会享有最终解释权</p>
    </div>
    
</div>
</template>

<script>


export default {
    name:'cities',
    data(){
        return{
            items:['乌鲁木齐','通州','通州','通州','通州','通州','通州','通州','通州','通州','通州','通州','通州',
            '通州','通州','通州','通州','通州','通州','通州','通州','通州','通州','通州','通州','通州','通州',]
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
#cities{
    width:100%;
    /* height:100vh; */
    background:url('../img/cities/cities-bg.png') center no-repeat;
    background-size: 100% 100%;
}
.cities-img{
    width:100%;
    height:20vh;
}

.cities-box{
    width:100%;
    /* padding-top:1rem; */
    /* margin-top:1rem; */
}
.cities-title{
    width:100%;height:2.5rem;line-height:2.5rem;
    font-size: 1rem;color:white;
    font-family: '方正姚体';
    background:#3CACF3;

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
    color:#BEA4D0;
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