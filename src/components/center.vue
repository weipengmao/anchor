<template>
    <div id="center" class="opt-container">
        <div class="opt-center" :id="'center0'">
            <div class="opt-firstContent">
                <div class="opt-firstConten-top clearfix">
                    <span class="opt-goods1" >热门商品</span>
                    <span  class="opt-goods2" >查看更多</span>
                </div>
                <div class="opt-firstConten-bottom">
                    <div class="opt-bottom-div">
                        <div class="opt-bottom-content" v-for="key in contents" @click="toDetail()">
                            <img src="../img/anchor-opt-content.jpg" alt="">
                            <p>小青柑普茶</p>
                            <p>价格:  <span style="color:red">￥{{price}}.00</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="opt-secondContent"></div>
            <div class="opt-bottom">
                <div class="opt-bottom-divs clearfix">
                    <div class="opt-bottom-contents" v-for="key in contents" @click="toDetail()">
                        <img src="../img/anchor-opt-content.jpg" alt="">
                        <p>小青柑普茶</p>
                        <p>价格:  <span style="color:red">￥{{price}}.00</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name:' e',
    mounted(){
        var width = this.contents.length*6.2;
        $(".opt-bottom-div").css("width",width+"rem");
        var li = document.querySelectorAll(".opt-top-text span");
        var uid;
        for(let i=0;i<li.length;i++){
            li[i].ontouchend = function(){
                $(this).addClass("active").siblings().removeClass("active");
                uid = $(this).attr("id")+i;
                
            }
        }
    },
    data(){
        return {
        swiperOption: {
          initialSlide:0,//设定初始化时slide的索引
          direction:'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
          loop: false,  //无限滚动
          speed:300,//滑动速度
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
            clickable :true
          },
          autoplay: {
            disableOnInteraction: false,
          }
        },
        swiperSlides: [1, 2, 3, 4],
        price:499,
        contents:[1,2,3,4],
        eye:123,
        others:123
        }
    },
    methods:{
        toDetail(){
            this.$router.push("/shopDetail")
        }
    },
    components:{
        swiper,
        swiperSlide
    }
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
.op-container{
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flex;
    display:-moz-flex;
    display:-o-flex;
    flex-direction: column;
    width:100%;
    height:100%;
}
.opt-bottom{
    margin-bottom:3rem;
}
.opt-top-text{
    position:absolute;
    top:50%;
    -o-transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    height:1rem;
    width:100%;
    color:white;
    font-size: 0.8rem;
}
.opt-top-text span{
    display: inline-block;
    margin: 0 0.5rem 0 0.2rem;
    vertical-align: middle;
    font-weight: 700;
    font-family: 微软雅黑;
    height: 1.3rem;
}
.opt-top-text img{
    float: left;
    margin-left:0.5rem;
}
.opt-center{
    flex:1;
    overflow-y: auto;
}
.opt-swiper{
    height:9.1rem;
    position:relative;
}
#swiper{ height: 9.1rem;position:relative;
  width:100%;}

  .fd_slide{    height: 9.1rem;
    width: 100%;
    }


  .fd_slide img{
    width:100%;
    height:9.1rem;
  }

.swiper-pagination{
  position:absolute;bottom:0.5rem;
}
.swiper-pagination-bullet-active{
    background:rgba(104,29,164,1)!important;
}
.opt-firstContent{
    height:10rem;
    width:100%;
}
.opt-secondContent{
    height:6rem;
    width:100%;
    background:url("../img/anchor-opt-back.png");
    background-size:100% 100%;
}
.opt-firstConten-top{
    height:1.875rem;
    width:100%;
}
.opt-firstConten-top span{
    margin:0.3rem 1rem 0 0.8rem;
    font-family:幼圆;
}
.opt-firstConten-bottom{
    height:8.125rem;
    background: rgba(225,218,218,0.5);
    width:100%;
    overflow-x: auto;
}
.opt-bottom-div{
    height:100%;
    overflow-y: hidden;
}
.opt-bottom-content{
    float: left;
    height:7.7rem;
    width:5.8rem;
    margin:0.2rem;
    font-size:0.7rem;

}
.opt-bottom-content p{
    margin:0;
    padding:0;
    width:5.8rem;
}
.opt-bottom-content img{
    width:5.8rem
}

.opt-bottom-divs{
    height:100%;
}
.opt-bottom-contents{
    float: left;
    height:10.4rem;
    width:7rem;
    margin:0.4rem 0.4rem 0.4rem 0.4rem;
    font-size:0.7rem;
    border:2px solid rgba(104,29,164,1)!important;
}
.opt-bottom-contents p{
    margin:0;
    padding:0;
    width:7rem;
}
.opt-bottom-contents img{
    width:6.5rem
}
.opt-recommend{
    flex:1;
    overflow-y: auto;
}
.opt-recommend-content{
    width:100%;
    height:13.175rem;
}
.opt-content{
    width:100%;
    height:6.6rem;
    background: url("../img/anchor-opt-back.png");
    background-size:100% 100%;
}
.opt-recommend-content p{
    margin-left:1.5rem !important;
    width:80%;
}
.opt-content-eye{
    height:1rem;
    font-size:0.5rem;
    font-weight: 700;
    color:rgba(104,29,164,1);
    padding-left:1.5rem !important;
    padding-top:1rem;
}
.opt-content-eye span{
    float: left;
    margin-top:0.25rem;
}
.opt-content-eye img{
    float: left;
    width:1rem;
}
.opt-content-eye p{
    float: right;
    display: inline-block;
    width:2.6rem;
    height:0.8rem;
    border:1px solid rgba(104,29,164,1);
    margin:0;
    margin-top:0.15rem;
    margin-right:1rem;
}
.active{
    border-bottom: 1px solid #fff;
}


.opt-goods1{
float:left;font-size:0.875rem;font-weight:700;
}

.opt-goods2{
    float:right;font-size:0.5rem;font-weight:700;margin-top:0.45rem;
}
</style>
