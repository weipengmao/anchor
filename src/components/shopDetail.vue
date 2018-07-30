<template>
<div class="shopDetail">
    <div class="shopDetail-top clearfix">
        <img  src="../img/detailShop-back.jpg" alt="" @touchend="back()">
        <span >商品详情</span>
    </div>
    <div class="opt-swiper">
        <swiper  :options="swiperOption" ref="mySwiper">
        <swiper-slide><div class="fd_slide fd_slide1"><img src="../img/anchor-opt-swiper.jpg" alt=""></div></swiper-slide>
        <swiper-slide><div class="fd_slide fd_slide2"><img src="../img/anchor-opt-swiper.jpg" alt=""></div></swiper-slide>
        <swiper-slide><div class="fd_slide fd_slide3"><img src="../img/anchor-opt-swiper.jpg" alt=""></div></swiper-slide>
        <swiper-slide><div class="fd_slide fd_slide4"><img src="../img/anchor-opt-swiper.jpg" alt=""></div></swiper-slide>
        <div class="swiper-pagination "  slot="pagination"></div>
        <!-- <img class="shut" src="../assets/close.png" alt=""> -->
        </swiper>
    </div>
    <div class="shopDetail-text">
        <p>新丝路彤年</p>
        <p>小青柑普茶</p>
    </div>
    <div class="shopDetail-price"><p>￥<span>399</span>.00</p></div>
    <div class="shopDetail-info" ><p class="p1">商品信息</p><p class="p2"
     v-for="item in series"><span class="sp1" >{{item}}：</span>小青柑普茶</p></div>
    <div class="shopDetail-img">
        <span class="shopDetail-span" >图片详情</span>
    </div>
    <div class="shop-img" style="margin-bottom:3rem;">
        <img src="../img/shopDetail-background.png" alt="">
    </div>
    <div class="shop-bottom-detail clearfix">
        <div class="bottom-left ">
            <div>
                <img src="../img/anchor-shopTwo.png" alt="" width="20">
                <p>客服</p>
            </div>
            <div>
                <img src="../img/anchor-shopOne.png" alt="" width="20">
                <p>购物车</p>
            </div>
            <div>
                <img src="../img/anchor-shopThree.png" alt="" width="20">
                <p>首页</p>
            </div>
        </div>
        <div class="bottom-right-detail" @click="toShop">
            <span>立即购买</span>
        </div>
        <div class="bottom-right-detail" @click="toShop" style="background:#ff9800">
            <span>加入购物车</span>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name:'shopDetail',
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
            others:123,
            series:["系列","产地","退换货","适合人群","商品尺寸","详情"]
        }
    },
    methods:{
        back(){
            this.$router.push("/optimization")
        },
        toShop(){
            this.$router.push("/shop")
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clearfix:after{
    content:'';clear:both;display:block;
}
.shopDetail{
    width:100%;
    height:100%;
}
.shop-bottom-detail{
    position:fixed;
    height:3rem;
    bottom:0;
    width:100%;
    background: #fff;
}
.bottom-right-detail{
    background: red;
    width:4rem;
    height:100%;
    float: right;
    font-size:0.5rem;
}
.bottom-right-detail span{
    display: inline-block;
    color:#fff;
    margin-top:1.1rem;
}
.shopDetail-top{
    height:2.5rem;
    width:100%;
}
.opt-swiper{
    height:9.1rem;
    position:relative;
}
.bottom-left{
    float: left;
    margin-top:0.7rem;
    /* margin-left:0.9rem; */
    font-size:0.5rem;
}
.bottom-left div{
    width:2rem;
    display: inline-block;
    margin-left:0.4rem;
}
.bottom-left p{
    margin:0;padding:0;
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
.shopDetail-text{
    width:100%;
    height:4.275rem;
}
.shopDetail-text p{
    margin:0;
    padding:0;
    padding-top:0.5rem;
    margin-left:-8rem;
}
.shopDetail-price{
    width:100%;
    height:2.2rem;
    border-bottom:1px solid #ccc;
    border-top:1px solid #ccc;
}
.shopDetail-price p{
    margin:0;
    padding:0;
    padding-top:0.5rem;
    margin-left:-9rem;
}
.shopDetail-info{
    width:100%;
    height:12rem;
    border-bottom:1px solid #ccc;
}
.shopDetail-info p{
    margin:0;
    padding:0;
    padding-top:0.5rem;
    margin-left:-9rem;
}
.shopDetail-img{
    float: left;
    margin-left:1.7rem;
    margin-bottom:0.2rem;
}
.shop-img{
    margin-top:2rem;
    width:100%;
}
.shop-img img{
    width:100%;
}



.shopDetail-top img{
float:left;margin-top:0.45rem;margin-left:1.45rem;
}

.shopDetail-top span{
    float:left;font-size:0.9rem;margin-top:0.45rem;margin-left:1rem;
}

.shopDetail-info .p1{
font-size:1rem;margin-top:2rem;
}

.shopDetail-info .p2{
text-align:left;
    font-size:0.6rem;margin-left:1.5rem;
}

.shopDetail-info .p2 .sp1{
color:rgb(159,159,159);
}

.shopDetail-span{
display:inline-block;padding-top:0.3rem;
}
</style>