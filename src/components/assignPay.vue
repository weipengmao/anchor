<template>
    <div id="assignSuccess">
            <!-- 头部三个广告 -->
            <div class="top-pay clearfix">
                <img src="../img/assign/assign_01.png" alt="">
                <img src="../img/assign/assign_02.png" alt="" style="width:27%;margin-left:0;">
                <img src="../img/assign/assign_03.png" alt="" style="width:20%;margin-left:0;">
            </div>
            <!-- 标题 -->
            <p class="topic">新丝路中国国际少儿模特大赛</p>
            <!-- 报名成功 -->
            <div class="form clearfix">
                <!-- 标题 -->
                <p class="title-pay">报名信息</p>
                <!-- 您的参赛信息 -->
                <p v-for="info in info"  class="number">
                    <span class="assign-payTitle" >{{info}}</span><span v-for="name in name" class="assign-payInfor" >{{name}}</span>
                </p>
                <p class="submit" type="submit" @click="submit()"><span>确认支付</span></p>
            </div>
    </div>
</template>
<script>
export default {
  name: "assignSuccess",
  data() {
    return {
      info: [
        "姓  名",
        "手机号码",
        "培训机构",
        "领队老师",
        "创意名称",
        "合计金额"
      ],
      name: ["XX", "XX", "XX", "XX", "XX", "XX"]
    };
  },
  mounted() {},
  methods:{
      submit(){
          this.$router.push("/assignSuccess")
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

#assignSuccess {
  width: 100%;
  height: 100%;
  background: url("../img/assign/assign-bg.png") center no-repeat;
  background-size: 100% 100%;
  padding-bottom: 1rem;
  overflow-y: auto;
}
.top-pay {
  width: 100%;
  text-align: center;
  padding-top:1rem;
}
.top-pay img {
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
  border-radius: 5%;
  /* padding-bottom:1rem; */
}
.form .title-pay {
  width: 100%;
  font-size: 1.4rem;
  color: white;
  letter-spacing: 2px;
  font-weight: bold;
  padding-top: 0.4rem;
  padding-bottom: 1.58rem;
}
.form .number {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.7rem;
  padding-right: 2.2rem;
  color: white;
  font-weight: bold;
}
.form .tip {
  width: 100%;
  font-size: 0.55rem;
  color: white;
  margin: 0 auto;
  text-align: center;
}
.form .code {
  width: 7.5rem;
  margin: 0.5rem auto;
}
.form .code img {
  width: 7.5rem;
}
/* 马上报名 */
.submit {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  display: inline-block;
  background:url("../img/assign/assign_04.png") center no-repeat !important;
  background-size: 100% 100%;
  border: none;
  outline: none;
  margin-top: 0.5rem;
  font-size: 1rem;
  color: white;
  font-weight: bold;
  background: #660db6;
  border-radius:0 0 10px 10px;
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


.assign-payTitle{
  display:inline-block;margin-right:1.5rem;margin-left:1.5rem;width:3rem;text-align:left;
}
.assign-payInfor{
  color:#fff
}
</style>

