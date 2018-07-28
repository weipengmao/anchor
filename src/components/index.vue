<template>
<div id="index">
    <!-- 顶部搜索栏 -->
    <div class="index-search clearfix">
        <img src="../img/index/index-meun.jpg" alt="" class="index-meun">
        <input type="text">
        <img src="../img/index/index-search.jpg" alt="" class="index-look">
    </div>
      <!-- 轮播图 -->
    <swiper  :options="swiperOption" ref="mySwiper">
      <swiper-slide><div class="fd_slide fd_slide1"><img src="../img/index/index-sp1.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide1"><img src="../img/index/index-sp1.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide1"><img src="../img/index/index-sp1.jpg" alt=""></div></swiper-slide>
      <!-- <div class="swiper-pagination "  slot="pagination"></div> -->
    </swiper>

    <!-- 赛事回放 -->
    <div class="index-box clearfix">
        <div class="index-inbox clearfix">
        <p class="index-rewind">
            <span class="index-title">赛事回放</span>
            <span class="index-more"  @click="toArrangement()">更多&gt;&gt;&gt;</span>
        </p>
        <img src="../img/index/index-img1.jpg" alt="" @click="toLiveRadio()">
        <img src="../img/index/index-img1.jpg" alt="">
        <img src="../img/index/index-img1.jpg" alt="">
        </div>

        <div class="index-inbox clearfix">
        <p class="index-rewind">
            <span class="index-title">赛事用品</span>
            <span class="index-more" @click="toList()">更多&gt;&gt;&gt;</span>
        </p>
        <img src="../img/index/index-img2.jpg" alt="" @click="toshopDetail()">
        <img src="../img/index/index-img2.jpg" alt="" @click="toshopDetail()">
        <img src="../img/index/index-img2.jpg" alt="" @click="toshopDetail()">
        </div>

        <div class="index-inbox clearfix">
        <p class="index-rewind">
            <span class="index-title">赛事投票</span>
            <span class="index-more" @click="toArrangement()">更多&gt;&gt;&gt;</span>
        </p>
        <img src="../img/index/index-img1.jpg" alt="">
        <img src="../img/index/index-img1.jpg" alt="">
        <img src="../img/index/index-img1.jpg" alt="">
        </div>

        <div class="index-inbox clearfix">
        <p class="index-rewind">
            <span class="index-title">赛事成绩</span>
            <span class="index-more" @click="toArrangement()">更多&gt;&gt;&gt;</span>
        </p>
        <img src="../img/index/index-img1.jpg" alt="">
        <img src="../img/index/index-img1.jpg" alt="">
        <img src="../img/index/index-img1.jpg" alt="">
        </div>

    </div>
    <!-- 底部导航 -->
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
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "index",
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
      swiperSlides: [1, 2, 3],
      items: [],
      titleIndex: [],
      titleContent: [],
      Index: [],
      textData: [],
      textIndex: [],
      textPlace: [],
      imgIndex: [],
      // backgroundImg:require('../common/image/swiper.jpg'),
      loading: true,
      moreAnswerLoading: true,
      moreAnswerLoadingA: true,
      own: false,
      noneText: false
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    toAssign() {
      this.$router.push("/arrangement");
    },
    toDiscover() {
      this.$router.push("/discover");
    },
    toMall() {
      this.$router.push("/optimization");
    },
    toAccount() {
      this.$router.push("/login");
    },
    toLiveRadio() {
      this.$router.push("/liveRadio");
    },
    toshopDetail() {
      this.$router.push("/shopDetail");
    },
    toArrangement() {
      this.$router.push("/arrangement");
    },
    toList() {
      this.$router.push("/optimization");
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

#index {
  width: 100%;
  /* height:100%; */
  background: url("../img/index/index-bgc.png") center no-repeat;
  background-size: 100% 100%;
  letter-spacing: 1px;
}

.index-search {
  width: 100%;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  background: #10ece6;
  /* padding-bottom:0.5rem; */
}
.index-meun {
  width: 1.5rem;
  margin-top: 0.75rem;
  margin-left: 0.5rem;
  float: left;
}
.index-search input {
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
.index-look {
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

.index-box {
  width: 100%;
  font-family: "仿宋";
  padding-bottom: 3.5rem;
}
.index-rewind {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
}
.index-title {
  font-size: 1rem;
  float: left;
  margin-left: 0.5rem;
  color: white;
}
.index-more {
  font-size: 0.6rem;
  float: right;
  margin-right: 0.5rem;
  text-align: end;
  color: white;
}

.index-box {
  width: 100%;
  text-align: center;
}

.index-box img {
  width: 4.8rem;
  /* margin:0.2rem 0; */
  margin-left: 0.4rem;
  float: left;
}

/* 底部导航 */
.index-bottom {
  width: 100%;
  height: 3rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ad0eff;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.index-bottom img {
  width: 54px;
  /* border-right:1px solid #fff; */
  display: inline-block;
  vertical-align:bottom;
}
.index-bottom div {
  width: 20%;
}
</style>
