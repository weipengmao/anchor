<template>
    <div id="rules">
    <div class="rules-top clearfix">
        <img src="../img/publish/publish-arrow.png" alt="">
        <p class="rules-button">认证规则</p>
    </div>
    <!-- 规则条例 -->
    <div class="rules-box">
        <p class="num" v-for="item in items">
            {{item}}
        </p>
    </div>






    
    </div>
</template>
<script>
    export default {
        name:'rules',
        data(){
            return{
                items:['1.开始讲道理副驾驶就，圣诞节菲利克斯到家了房间里圣诞节福利，时间到了复健科。','2.开始讲道理副驾驶就，圣诞节菲利克斯到家了房间里圣诞节福利，时间到了复健科。',
                '3.开始讲道理副驾驶就，圣诞节菲利克斯到家了房间里圣诞节福利，时间到了复健科。',]
            }
        }
    }    
</script>

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
#rules{
    width:100%;
}
.rules-top{
    width:100%;
    height:3rem;
    line-height: 3rem;
    background:#B900FF;
    padding-top:0.6rem;
    padding-left:1rem;
    letter-spacing: 2px;
    font-family: '微软雅黑'
}

.rules-top img{
    width:0.8rem;
    float:left;
    /* margin-right: 1rem; */
    margin-top:0.3rem;
}

.rules-button{
    width:10rem;
    height:2rem;
    line-height: 2rem;
    font-size:1.1rem;
    float:left;
    margin-left:1rem;
    /* padding-left:0.5rem; */
    text-align: center;
    color: white;
    /* border-left:1px solid #DF8AFF; */
}

.rules-box{
    width:100%;
    padding:0.2rem 0.5rem;
    line-height:1.2rem;
}
.rules-box p{
    width:100%;
    line-height: 1.5rem;
    text-indent: 1em;
    font-size: 1rem;
    text-align: left;
    margin-bottom:0.4rem;
}
</style>
