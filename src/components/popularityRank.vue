<template>
    <div class="clearfix" id="popularityRank">
        <div class="assign-tp">
            <div @click="tosign"><span>报名</span></div>
            <div @click="toBack"><span>回放</span></div>
            <div @click="toGetsign"><span class="active">投票</span></div>
            <div @click="toScore"><span>成绩</span></div>
        </div>
        <div class="popularity-top clearfix">
            <img src="../img/popularityRank/popularityRank-img1.png" alt="">
            <img src="../img/popularityRank/popularityRank-img2.png" alt="">
            <img src="../img/popularityRank/popularityRank-img3.png" alt="">
        </div>
    <!-- 累计人气 -->
    <div class="popAccumulate">
        <div class="pop-left">
            <p>参赛选手</p>
            <p class="popPeople" >100</p>
        </div>
        <div class="pop-right">
             <p>累计人气</p>
            <p class="popLike" style="">12312300</p>           
        </div>
    </div>
    <!-- 参赛选手 -->
    <div class="popCandidate clearfix">
        <div class="popBox">
            <img src="../img/popularityRank/popularityRank-img.png" alt="">
            <div class="bottom">
                <p class="name">花轮同学</p>
                <p  class="num">
                  <span >111223</span>
                    人气</p >
            </div>
        </div>

        <div class="popBox">
            <img src="../img/popularityRank/popularityRank-img.png" alt="">
            <div class="bottom">
                <p class="name">花轮同学</p>
                <p  class="num">
                  <span >111223</span>
                    人气</p >
            </div>
        </div>

        <div class="popBox">
            <img src="../img/popularityRank/popularityRank-img.png" alt="">
            <div class="bottom">
                <p class="name">花轮同学</p>
                <p  class="num">
                  <span >111223</span>
                    人气</p >
            </div>
        </div>
        
        <div class="popBox">
            <img src="../img/popularityRank/popularityRank-img.png" alt="">
            <div class="bottom">
                <p class="name">花轮同学</p>
                <p  class="num">
                  <span >111223</span>
                    人气</p >
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
        },
        methods:{
            tosign(){
            this.$router.push("/assign");
            },
            toBack(){
            this.$router.push("/assignBack");
            },
            toGetsign(){
            this.$router.push("/assignTou");
            },
            toScore(){
            this.$router.push("/assignScore"); 
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
    background:url('../img/assign/assign-bg.png') center no-repeat;
    background-size:100% 100%;
}

.popularity-top{
    width:100%;
    height:3rem;
    /* padding-top:1rem; */
    /* margin-bottom: 0.5rem; */
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
    /* width:3.5rem; */
    /* display:inline-block; */
    padding:0.3rem 0;
    padding-top:0;
}
.bottom .num{
        /* width:3.5rem; */
    /* display:inline-block; */
    font-size:0.3rem;
}

.popPeople{
font-weight:bold;font-size:0.9rem;color:#fff;
}

.popLike{
    font-weight:bold;font-size:0.9rem;color:#fff;
}

.num span{
color:#98D1D8
}
</style>
