<template>
<div id="discover" class="clearfix">
    <!-- 顶部搜索栏 -->
    <div class="discover-search clearfix">
        <img src="../img/index/index-meun.jpg" alt="" class="discover-meun">
        <input type="text">
        <img src="../img/index/index-search.jpg" alt="" class="discover-look">
    </div>
      <!-- 轮播图 -->
    <swiper  :options="swiperOption" ref="mySwiper">
      <swiper-slide><div class="fd_slide fd_slide1"><img src="../img/index/index-sp1.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide1"><img src="../img/index/index-sp1.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide1"><img src="../img/index/index-sp1.jpg" alt=""></div></swiper-slide>
      <div class="swiper-pagination "  slot="pagination"></div>
    </swiper>
    <!-- 通告、赛事 -->
    <div class="discover-inform clearfix">
        <p @click="toMOKA1">通告</p>
        <p @click="toMOKA2">赛事热播</p>
        <p @click="toMOKA3">模卡</p>
    </div>
    <!-- 比赛 -->
    <router-view to="/"></router-view>
</div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "discover",
  mounted(){
      this.$router.push("/tongGao")
  },
  data() {
    return {
      swiperOption: {
        initialSlide: 0, //设定初始化时slide的索引
        direction: "horizontal", //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
        loop: false, //无限滚动
        speed: 300, //滑动速度
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          disableOnInteraction: false
        }
      },
      swiperSlides: [1, 2, 3]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods:{
      toMOKA1(){
            this.$router.push("/tongGao")
      },
      toMOKA2(){
            this.$router.push("/disc")
      },
      toMOKA3(){
            this.$router.push("/Moka")
      }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.clearfix:after {
  content: "";
  clear: both;
  display: block;
}

#discover {
  width: 100%;
  /* height:100%; */
  background: url("../img/index/index-bgc.png") center no-repeat;
  background-size: 100% 100%;
  letter-spacing: 1px;
  background-color: white;
}
.discover-search {
  width: 100%;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  background: #10ece6;
  /* padding-bottom:0.5rem; */
}
.discover-meun {
  width: 1.5rem;
  margin-top: 0.75rem;
  margin-left: 0.5rem;
  float: left;
}
.discover-search input {
  width: 11rem;
  border-radius: 5%;
  height: 1.8rem;
  border: 0;
  border-style: none;
  outline: none;
  padding-left: 0.5rem;
  background: url("../img/index/index-input.png") center no-repeat;
  background-size: 100% 100%;
}
.discover-look {
  width: 1.3rem;
  margin-top: 0.65rem;
  margin-right: 0.5rem;
  float: right;
}

#swiper {
  height: 30vh;
  position: relative;
  width: 100%;
}

.fd_slide {
  height: 30vh;
  width: 100%;
}

.fd_slide img {
  width: 100%;
  height: 30vh;
}

.swiper-pagination {
  position: absolute;
  bottom: 0.5rem;
}

.discover-inform {
  width: 100%;
  /* height:4rem; */
  padding: 0.6rem 0;
  line-height: 2rem;
  background: #ad0eff;
}
.discover-inform p {
  font-family: "微软雅黑";
  /* width:8rem; */
  height: 1.5rem;
  line-height: 1.5rem;
  padding: 0 0.65rem;
  background: white;
  color: #ad0eff;
  font-size: 0.7rem;
  float: left;
  font-weight: 700;
  margin-left: 0.4rem;
  margin-top: 0.2rem;
  border-radius: 15px 15px 15px 15px;
  /* display:inline-block; */
}

.discover-box {
  width: 100%;
  background: white;
  /* border:1px solid white; */
  padding-top: 0.4rem;
}
.discover-box .discover-left {
  width: 8rem;
  margin-left: 0.4rem;
  float: left;
}
.discover-box img {
  width: 8rem;
  float: left;
}
.discover-box .discover-inbox {
  width: 7.5rem;
  float: left;
  padding-left: 0.4rem;
}
.discover-box p {
  font-family: "微软雅黑";
  width: 100%;
  font-weight: bold;
  text-align: left;
  font-size: 0.5rem;
}
.discover-box .discover-topic {
  font-size: 0.85rem;
  padding-bottom: 0.3rem;
}
.discover-box .discover-unit,
.discover-time {
  height: 1rem;
  padding: 0.2rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>