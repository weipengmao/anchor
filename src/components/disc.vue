<template>
<div id="disc">
    <!-- 比赛 -->
    <div class="clearfix disc-box"  >
    <div class="discover-box clearfix">
        <div class="discover-left">
        <img src="../img/discover/discover-img3.png" alt="">
        </div>
        <div class="discover-inbox clearfix">
            <p class="discover-topic">世界小姐大赛</p>
            <p class="discover-unit">主办单位：深圳职业技术学院</p>
            <p class="discover-time">时间：2018年08月10日</p>
        </div>
    </div>

        <div class="discover-box clearfix">
        <div class="discover-left">
        <img src="../img/discover/discover-img3.png" alt="">
        </div>
        <div class="discover-inbox clearfix">
            <p class="discover-topic">中国国际少儿模特大赛</p>
            <p class="discover-unit">主办单位：深圳职业技术学院</p>
            <p class="discover-time">时间：2018年08月10日</p>
        </div>  
       </div>

           <div class="discover-box clearfix">
        <div class="discover-left">
        <img src="../img/discover/discover-img3.png" alt="">
        </div>
        <div class="discover-inbox clearfix">
            <p class="discover-topic">中国模特大赛</p>
            <p class="discover-unit">主办单位：深圳职业技术学院</p>
            <p class="discover-time">时间：2018年08月10日</p>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "discover",
  data() {
    return {};
  },
  components: {
    swiper,
    swiperSlide
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
  border-radius: 10%;
  height: 1.8rem;
  line-height: 1.8rem;
  padding: 0 0.65rem;
  background: white;
  color: #ad0eff;
  font-size: 1rem;
  float: left;
  font-weight: bold;
  margin-left: 0.4rem;
  margin-top: 0.2rem;
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

.disc-box{
margin-bottom:1rem;
}
</style>