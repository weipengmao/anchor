<template>
<div class="clearfix" id="MokaDetail">
    <!-- 详情 -->
    <div class="MokaDetail-box clearfix" v-for="item in num" @click="toDetail">
        <div class="clearfix">
            <p class="MokaDetail-img"></p>
            <p class="MokaDetail-title">xxx</p>
        </div>
        <div class="moka" style="height:4.91rem;width:13.2rem;
        background-size:100% 100%;margin-top:0.3rem;"></div>
    </div>
</div>
</template>

<script>


export default {
    name:'MokaDetail',
    data(){
        return{
            num:[1,2]
        }
    },
    methods:{
        toDetail(){
            this.$router.push("/mokaDetail")
        }
    }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin:0;padding:0;box-sizing: border-box;
}
.moka{
    background: url("../img/moka.png")
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
    background: #fff;
}

.publish-top{
    width:100%;
    height:3rem;
    line-height: 3rem;
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