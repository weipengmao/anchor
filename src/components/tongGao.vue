<template>
    <div id="assigns">
            <div class="assign-content" v-for="(item,key) in num" @click="toTou">
              <div class="assign-content-top">
                <p>中国国际少儿模特大赛</p>
                <p class="area" > 广东广州<span class="remainDay" >剩余30天截至报名</span></p>
              </div>
              <div class="assign-content-bottom">
                <p>已经有xx人报名<span class="toAssign" >报名</span></p>
              </div>
            </div>
            <div class="assigns-box" ></div>
    <!-- 底部导航 -->
    <div class="index-bottom">
        <div>
            <img src="../img/index/index-first.png" alt="" style="border-left:none;" @click="toHome()">
            <span class="index-nav" ></span>
        </div>
        <div>
            <img src="../img/index/index-assign.png" alt="" @click="toAssign()">
            <span class="index-nav" ></span>
        </div>
        <div>
            <img src="../img/index/index-discover.png" alt="" @click="toDiscover()">
            <span class="index-nav" ></span>
        </div>
        <div>
            <img src="../img/index/index-mall.png" alt="" @click="toMall()">
            <span class="index-nav" ></span>
        </div>
        <div style="border-right:0;">
            <img src="../img/index/index-personal.png" alt="" @click="toAccount()" >
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name: "assign",
  data() {
    return {
      num:[1,2,3]
    };
  },
  methods: {
    toTou(){
      this.$router.push("/assign")
    },
    toHome() {
      this.$router.push("/index");
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
    }
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
li {
  list-style-type: none;
}
.clearfix:after {
  content: "";
  clear: both;
  display: block;
}

#assigns {
  width: 100%;
  background-size: 100% 100%;
  overflow-y: auto; 
  background: #fff;
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
.top {
  width: 100%;
  text-align: center;
  padding-top: 0.5rem;
}
.top-ass img {
  width: 19%;
  float: left;
  margin-left: 2.7rem;
}
/* 标题 */
.topic {
  width: 100%;
  color: white;
  font-size: 1.1rem;
  font-family: "微软雅黑";
  padding: 0.2rem 0;
  font-weight: bold;
  letter-spacing: 1px;
}
/* 报名填写的表单 */
.form {
  width: 90%;
  /* height:15rem; */
  margin: auto;
  background: url("../img/assign/assign_05.png") center no-repeat !important;
  margin-top: 0.3rem;
  background: 100% 100%;
  border-radius: 5%;
  /* padding-bottom:1rem; */
}
.form .left {
  width: 9.5rem;
  padding: 0.4rem;
  padding-bottom: 0;
  float: left;
}
.form .left .title {
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5rem;
  color: white;
  font-weight: bold;
  letter-spacing: 3px;
}
.form .left span {
  width: 3.3rem;
  display: inline-block;
  font-size: 0.7rem;
  letter-spacing: 15px;
  color: white;
  font-weight: bold;
}
.form .left input {
  width: 5rem;
  height: 1.5rem;
  border-radius: 5%;
  border: none;
  outline: none;
  margin: 0.3rem 0;
  padding-left: 0.5rem;
  color: #c7c7c7;
  border-radius: 7%;
}
.form .input1 {
  width: 100%;
  text-align: left;
  padding-left: 0.6rem;
}
.form .input1 span {
  width: 3.1rem;
  display: inline-block;
  font-size: 0.7rem;
  letter-spacing: 6px;
  color: white;
  font-weight: bold;
}
.form .input1 input {
  width: 9.7rem;
  height: 1.5rem;
  border-radius: 5%;
  border: none;
  outline: none;
  margin: 0.3rem 0;
  padding-left: 0.5rem;
  color: #c7c7c7;
  border-radius: 7%;
}
/*上传多张图片*/

.z_photo {
  width: 4.2rem;
  height: 5.8rem;
  line-height: 5rem;
  text-align: center;
  /* padding:0 0.3rem; */
  overflow: auto;
  /* clear: both; */
  /* margin: 0.5rem auto; */
  border: 1px dashed #fff;
  float: left;
  margin-top: 1rem;
}
.z_photo img {
  width: 4rem;
  height: 100%;
  margin: 1rem 0.7rem;
}

.z_addImg {
  float: left;
  margin-right: 0.2rem;
}

.z_file {
  width: 4rem;
  height: 5rem;
  line-height: 2rem;
  text-align: center;
  background: url("../img/assign/assign-add.png") center no-repeat;
  background-size: 1.5rem 1.5rem;
  /* margin-top: 1.5rem;
            margin-left: 6rem; */
}

.z_file input::-webkit-file-upload-button {
  width: 2.3rem;
  height: 2.3rem;
  border: none;
  position: absolute;
  outline: 0;
  opacity: 0;
}

.z_file input#file {
  display: block;
  width: auto;
  border: 0;
  vertical-align: middle;
}
/*遮罩层*/

.z_mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: none;
}

.z_alert {
  width: 6rem;
  height: 5rem;
  border-radius: 0.2rem;
  background: #fff;
  font-size: 0.4rem;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -3rem;
  margin-top: -2.5rem;
}

.z_alert p:nth-child(1) {
  line-height: 1rem;
  margin: 1rem 0;
}

.z_alert p:nth-child(2) span {
  display: inline-block;
  width: 50%;
  height: 1rem;
  line-height: 1rem;
  float: left;
  border: 1px solid #ddd;
}

.z_cancel {
  border-right: 1px solid #ddd;
}
/* 马上报名 */
p[type="submit"] {
  width: 100%;
  height: 2rem;
  display: inline-block;
  background: url("../img/assign/assign_04.png") center no-repeat !important;
  background: 100% 100%;
  border: none;
  outline: none;
  margin-top: 0.5rem;
  font-size: 1rem;
  color: white;
  font-weight: bold;
}
p[type="submit"] span {
  display: inline-block;
  margin-top: 0.25rem;
}
.assign-tp{
    padding-top:0.2rem;
    margin-bottom:0.4rem;
    width:100%;
}
.assign-tp div{
    font-size:0.8rem;
    width:23%;
    font-weight: bold;
    display: inline-block;
    color:white;
    margin-top:0.2rem;
    border-right:1px solid white;
}
.assign-tp div:last-child{
    width:25%;
    display: inline-block;
    border-right:0px;
}
.active{
    display: inline-block;
    padding-bottom:0.1rem;
    border-bottom:1px solid rgb(81,0,151);
}
.assign-img{
  height:8.5rem;
  width:100%;
  background:url("../img/toTou.jpg") no-repeat;
  background-size:100% 100%; 
}
.assign-content{
  background: #940dc5;
  width:15rem;
  height:4rem;
  margin:0.5rem;
  margin-top:0.9rem;
}
.assign-content-bottom{
  color: #940dc5;
  width:100%;
  margin-bottom:3.8rem;
  /* height:0.8rem; */
  text-align: left;
  font-size:0.5rem;
  background: #fff;
  font-weight: bold;
}
.assign-content-bottom{
  text-align: right;
  border:1px solid #940dc5;
}
.assign-content-bottom span{
  line-height:0.5rem;
}
.assign-content-top p{
  display: inline-block;
  text-align: left;
  font-size:1rem;
  padding:0.5rem 0 0 0.4rem;
  width:100%;
  font-weight: bold;
  color:#fff;
}




.index-nav{
display:inline-block;border-right:1px solid #fff;
            height:1.6rem;margin-left:0.08rem;
}

.area{
font-size:0.45rem;padding-top:0.2rem;font-weight:normal;
}
.remainDay{
font-size:0.45rem;padding-left:4rem;
}

.toAssign{
font-size:0.6rem;padding-left:8rem;
}

.assigns-box{
height:3rem;width:100%;
}
</style>

