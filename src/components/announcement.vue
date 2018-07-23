<template>
    <div id="announcement">
    <div class="announcement-top clearfix">
        <img src="../img/publish/publish-arrow.png" alt="">
        <p class="announcement-button">通告发布</p>
    </div>
    <!-- 规则条例 -->
    <div class="announcement-box">
        <p>使用浏览器访问以下地址</p>
        <a href="#">
            <p>http://xxx.xxx.com/</p>
        </a>
        <p>登录后台发布信息</p>
    </div>






    
    </div>
</template>
<script>
    export default {
        name:'announcement',
        data(){
            return{

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
#announcement{
    width:100%;
}
.announcement-top{
    width:100%;
    height:3rem;
    line-height: 3rem;
    background:#B900FF;
    padding-top:0.6rem;
    padding-left:1rem;
    letter-spacing: 2px;
    font-family: '微软雅黑'
}

.announcement-top img{
    width:0.8rem;
    float:left;
    /* margin-right: 1rem; */
    margin-top:0.3rem;
}

.announcement-button{
    font-family: '微软雅黑';
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

.announcement-box{
    width:100%;
    padding:0.2rem 0.5rem;
    line-height:1.2rem;
    padding-top:1rem;
}
.announcement-box p{
    font-family: '微软雅黑';
    width:100%;
    line-height: 1.5rem;
    text-indent: 1em;
    font-size: 0.8rem;
    text-align: left;
    margin-bottom:0.4rem;
    color:#B900FF
}
</style>