<template>
<div id="arrangement" class="clearfix">
      <!-- 轮播图 -->
    <swiper  :options="swiperOption" ref="mySwiper">
      <swiper-slide><div class="fd_slide fd_slide1"><img src="../img/arrangement/arrangement-swp1.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide1"><img src="../img/arrangement/arrangement-swp2.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide1"><img src="../img/arrangement/arrangement-swp1.jpg" alt=""></div></swiper-slide>
      <div class="swiper-pagination "  slot="pagination"></div>
    </swiper>
    <!-- 赛事 -->
    <div class="arrangement-box clearfix">
    <P class="arrangement-match">
        赛事
    </P>
    <img src="../img/arrangement/arrangement-img1.jpg" alt="" @click="toCities()">
    <img src="../img/arrangement/arrangement-img2.jpg" alt="" @click="toCities()">
    <img src="../img/arrangement/arrangement-img3.png" alt="" @click="toCities()">
    </div>
    <div class="index-bottom">
        <div>
            <img src="../img/index/index-first.png" alt="" style="border-left:none;" @click="toHome()">
            <span style="display:inline-block;border-right:1px solid #fff;
            height:1.6rem;margin-left:0.08rem;"></span>
        </div>
        <div>
            <img src="../img/index/index-assign.png" alt="" @click="toAssign()">
            <span style="display:inline-block;border-right:1px solid #fff;
            height:1.6rem;margin-left:0.08rem;"></span>
        </div>
        <div>
            <img src="../img/index/index-discover.png" alt="" @click="toDiscover()">
            <span style="display:inline-block;border-right:1px solid #fff;
            height:1.6rem;margin-left:0.08rem;"></span>
        </div>
        <div>
            <img src="../img/index/index-mall.png" alt="" @click="toMall()">
            <span style="display:inline-block;border-right:1px solid #fff;
            height:1.6rem;margin-left:0.08rem;"></span>
        </div>
        <div style="border-right:0;">
            <img src="../img/index/index-personal.png" alt="" @click="toAccount()" >
        </div>
    </div>
    

</div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Vue from 'vue'
export default {
    name:'arrangement',
      data () {
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
        swiperSlides: [1, 2, 3],
        items:[],
        titleIndex:[],
        titleContent:[],
        Index:[],
        textData:[],
        textIndex:[],
        textPlace:[],
        imgIndex:[],
        // backgroundImg:require('../common/image/swiper.jpg'),
        loading:true,
        moreAnswerLoading:true,
        moreAnswerLoadingA:true,
        own:false,
        noneText:false
    }
  },
        components:{
      swiper,
      swiperSlide
    },
    methods:{
      toCities(){
        this.$router.push('/cities')
      },
      toHome(){
          this.$router.push('/index')
      },
      toAssign(){
          this.$router.push('/arrangement')
      },
      toDiscover(){
          this.$router.push('/discover')
      },
      toMall(){
          this.$router.push('/optimization')
      },
      toAccount(){
          this.$router.push('/login')
      }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin:0;padding:0;
    box-sizing: border-box
}
a{
    text-decoration: none;
}

#arrangement{
    width:100%;
    height:100vh;
    background:url('../img/arrangement/arrangement-bg.png') center no-repeat;
    background-size:100% 100%;
}
#swiper{ height: 30vh;position:relative;
  width:100%;}

  .fd_slide{    height: 30vh;
    width: 100%;
    }


  .fd_slide img{
    width:100%;
    height:30vh;
  }

.swiper-pagination{
  position:absolute;bottom:0.5rem;
}

.arrangement-match{
  font-family: '微软雅黑';
    width:100%;
    height:2rem;
    line-height:2rem;
    font-size:1rem;
    color:white;
    letter-spacing: 10px;
    text-align: left;
    padding-left:0.05rem;
}   


.arrangement-box{
    width:100%;
}
.arrangement-box img{
    width:100%;
    margin-top:3px;
    float:left;
}
    /* 底部导航 */
.index-bottom{
    width:100%;
    height:3rem;
    position:fixed;
    bottom:0;
    left:0;
    background:#AD0EFF;
display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
display: -ms-flexbox; /* TWEENER - IE 10 */
display: -webkit-flex; /* NEW - Chrome */
display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
justify-content: center;
align-items: center;
flex-direction: row;
}
.index-bottom img{
    vertical-align: bottom;
    width:54px;
    /* border-right:1px solid #fff; */
    display:inline-block;
}
.index-bottom div{
    width:20%;
}
</style>