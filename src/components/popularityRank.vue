<template>
    <div class="clearfix" id="popularityRank">
        <div class="popularity-top clearfix">
            <img src="../img/popularityRank/popularityRank-img1.png" alt="">
            <img src="../img/popularityRank/popularityRank-img2.png" alt="">
            <img src="../img/popularityRank/popularityRank-img3.png" alt="">
        </div>
    <!-- 累计人气 -->
    <div class="popAccumulate">
        <div class="pop-left">
            <p>参赛选手</p>
            <p style="font-weight:bold;font-size:0.9rem;color:#fff;">100</p>
        </div>
        <div class="pop-right">
             <p>累计人气</p>
            <p style="font-weight:bold;font-size:0.9rem;color:#fff;">12312300</p>           
        </div>
    </div>
    <!-- 参赛选手 -->
    <div class="popCandidate clearfix">
        <div class="popBox">
            <img src="../img/popularityRank/popularityRank-img.png" alt="">
            <div class="bottom">
                <span class="name">花轮同学</span>
                <span class="num">
                  <span style="color:#98D1D8">111223</span>
                    人气</span>
            </div>
        </div>

        <div class="popBox">
            <img src="../img/popularityRank/popularityRank-img.png" alt="">
            <div class="bottom">
                <span class="name">花轮同学</span>
                <span class="num">
                    <span style="color:#98D1D8">111223</span>    
                    人气</span>
            </div>
        </div>

        <div class="popBox">
            <img src="../img/popularityRank/popularityRank-img.png" alt="">
            <div class="bottom">
                <span class="name">花轮同学</span>
                <span class="num">
                    <span style="color:#98D1D8">111223</span>    
                    人气</span>
            </div>
        </div>
        
        <div class="popBox">
            <img src="../img/popularityRank/popularityRank-img.png" alt="">
            <div class="bottom">
                <span class="name">花轮同学</span>
                <span class="num">
                    <span style="color:#98D1D8">111223</span>    
                    人气</span>
            </div>
        </div>
    </div>





    </div>
</template>
<script>
    export default {
        name:'popularityRank',
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
#popularityRank{
    width:100%;
    /* height:100vh; */
    background:url('../img/popularityRank/popularityRank-bg.png') center no-repeat;
    background-size:100% 100%;
}

.popularity-top{
    width:100%;
    height:3rem;
    padding-top:1rem;
    margin-bottom: 0.5rem;
}
.popularity-top img{
    width:2rem;
    float:left;
    margin-left:0.5rem;
}
.popAccumulate{
    width:100%;
    height:3.75rem;
    padding-top:0.5rem;
    letter-spacing: 1px;
    background-color:rgba(255,255,255,0.5)
}
.pop-left{
    width:50%;
    height:2.5rem;
    line-height: 1.4rem;
    font-size:0.8rem;
    color:#efefef;
    float:left;
    border-right: 1px solid #fff
}
.pop-right{
    width:50%;
    height:4rem;
    line-height: 1.4rem;
    font-size:0.8rem;
    color:#efefef;
    float:left;
}

.popCandidate{
    width:100%;
}

.popCandidate .popBox{
    width:7.5rem;
    float:left;
    margin-left:0.3rem;
    margin-bottom:0.5rem;
}
.popCandidate .popBox img{
    width:7.5rem;
    float:left;
}
.popCandidate .popBox .bottom{
    width:100%;
    padding-top:0.7rem;
    padding-bottom:0.7rem;
    background:white;
    float:left;
    font-size:0.8rem;
}
.bottom .name{
    width:3.5rem;
    display:inline-block;
}
.bottom .num{
        width:3.5rem;
    display:inline-block;
    font-size:0.3rem;
}
</style>
