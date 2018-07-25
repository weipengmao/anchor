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
</style>