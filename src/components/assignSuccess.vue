<template>
    <div id="assignSuccess">
            <!-- 头部三个广告 -->
            <div class="top-succ clearfix">
                <img src="../img/assign/assign_01.png" alt="">
                <img src="../img/assign/assign_02.png" alt="" style="width:27%;margin-left:0;">
                <img src="../img/assign/assign_03.png" alt="" style="width:20%;margin-left:0;">
            </div>
            <!-- 标题 -->
            <p class="topic">新丝路中国国际少儿模特大赛</p>
            <!-- 报名成功 -->
            <div class="form clearfix">
                <!-- 标题 -->
                <p class="title">恭喜您报名成功!</p>
                <!-- 您的参赛编码为 -->
                <p class="number">
                    您的参赛编码为：   <span style="color:red">1231231</span>
                </p>
                <!-- 扫描下方二维码 -->
                <p class="tip">
                    扫描下方二维码</br>了解更多的赛事详情
                </p>
                <!-- 二维码 -->
                <div class="code">
                    <img src="../img/assign/assign-code.png" alt="">
                </div>
                <!-- 请截图保存好 -->
                <p class="tip" style="width:100%;">
                    请截图保存好本页面</br>以便日后赛事安排 !<br/>
                    工作人员将在10个工作日以内以电话<br/>或短信的方式联系您 !<br/>请留意！
                </p>
                <!-- 保存到相册 -->
                        <p class="submit" @click="submit()">保存到相册</P>
                
            </div>
    </div>
</template>
<script>
export default {
  name: "assignSuccess",
  data() {
    return {};
  },
  methods: {
    submit() {
      this.$router.push("/assign");
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
  height:100%;
  overflow-y: auto;
  background: url("../img/assign/assign-bg.png") center no-repeat;
  background-size: 100% 100%;
  padding-bottom: 1rem;
}
.top-succ {
  width: 100%;
  text-align: center;
  padding-top:1rem;
}
.top-succ img {
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
.form .title {
  width: 100%;
  font-size: 1.4rem;
  color: white;
  letter-spacing: 2px;
  font-weight: bold;
  padding-top: 0.4rem;
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
  /* background:url("../img/assign/assign_04.png") center no-repeat !important; */
  background-size: 100% 100%;
  border: none;
  outline: none;
  margin-top: 0.5rem;
  font-size: 1rem;
  color: white;
  font-weight: bold;
  background: #660db6;
  border-radius:0 0 15px 15px;
}
</style>

