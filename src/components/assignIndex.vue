<template>
    <div id="assignIndex">
            <div class="assign-tp">
                <div @click="tosign"><span class="active">报名</span></div>
                <div @click="toBack"><span>回放</span></div>
                <div @click="toGetsign"><span>投票</span></div>
                <div @click="toScore"><span>成绩</span></div>
            </div>
            <!-- 头部三个广告 -->
            <div class="top-ass clearfix">
                <img src="../img/assign/assign_01.png" alt="">
                <img src="../img/assign/assign_02.png" alt="" style="width:27%;margin-left:0;">
                <img src="../img/assign/assign_03.png" alt="" style="width:20%;margin-left:0;">
            </div>
            <!-- 标题 -->
            <p class="topic">新丝路中国国际少儿模特大赛</p>
            <!-- 报名填写的表单 -->
            <div class="form clearfix">
                <form action="#">
                    <div class="clearfix">
                            <div class="left">
                                <p class="title">报名信息</p>
                                <p class="input">
                                    <span>姓名</span>
                                    <input type="text" placeholder="必填">
                                </p>
                                <p class="input">
                                    <span>年龄</span>
                                    <input type="text" placeholder="必填">
                                </p>
                            </div>
                        <!--    照片添加    -->
                        <div class="z_photo">
                            <div class="z_file">
                                <input type="file" name="file" id="file" value="" accept="image/*" multiple onchange="imgChange('z_photo','z_file');" />
                            </div>
                        </div>

                    </div>

                <!-- 监护人等 -->
                <div class="box clearfix">
                          <p class="input1 clearfix">
                            <span>监护人</span>
                            <input type="text" placeholder="必填">
                        </p>   
                          <p class="input1 clearfix">
                            <span>手机</span>
                            <input type="text" placeholder="必填">
                        </p>   
                          <p class="input1 clearfix">
                            <span>微信号</span>
                            <input type="text" placeholder="必填">
                        </p>   
                          <p class="input1 clearfix">
                            <span style="letter-spacing:1px;">所属赛区</span>
                            <input type="text" placeholder="必填/没有则填无">
                        </p>   
                </div>
                <!-- 马上报名 -->
                        <p type="submit" @click="submit()"><span>马上报名</span></p>
                </form>
            </div>
    </div>
</template>
<script>
export default {
  name: "assignIndex",
  data() {
    return {};
  },
  mounted() {
    //多文件上传
    function imgChange(obj1, obj2) {
      //获取点击的文本框
      var file = document.getElementById("file");
      //存放图片的父级元素
      var imgContainer = document.getElementsByClassName(obj1)[0];
      //获取的图片文件
      var fileList = file.files;
      console.log(fileList);
      //文本框的父级元素
      var input = document.getElementsByClassName(obj2)[0];
      var imgArr = [];
      //遍历获取到得图片文件
      for (var i = 0; i < fileList.length; i++) {
        var imgUrl = window.URL.createObjectURL(file.files[i]);
        console.log(imgUrl);
        imgArr.push(imgUrl);
        var img = document.createElement("img");
        img.setAttribute("src", imgArr[i]);
        var imgAdd = document.createElement("div");
        imgAdd.setAttribute("class", "z_addImg");
        imgAdd.appendChild(img);
        imgContainer.appendChild(imgAdd);
      }

      imgRemove();
    }

    function imgRemove() {
      var imgList = document.getElementsByClassName("z_addImg");
      var mask = document.getElementsByClassName("z_mask")[0];
      var cancel = document.getElementsByClassName("z_cancel")[0];
      var sure = document.getElementsByClassName("z_sure")[0];
      for (var j = 0; j < imgList.length; j++) {
        imgList[j].index = j;
        imgList[j].ontouchend = function() {
          var t = this;
          mask.style.display = "block";
          cancel.ontouchend = function() {
            mask.style.display = "none";
          };
          sure.ontouchend = function() {
            mask.style.display = "none";
            t.style.display = "none";
          };
        };
      }
    }
    function subtj() {
      console.log(file.files);
    }
  },
  methods: {
    submit() {
      this.$router.push("/assignPay");
    },
    tosign(){
      this.$router.push("/assign");
    },
    toBack(){
      this.$router.push("/assignBack");
    },
    toGetsign(){
      this.$router.push("/assignTou");
    },
    toScore(){
      this.$router.push("/assignScore"); 
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

#assign {
  width: 100%;
  height: 100%;
  background: url("../img/assign/assign-bg.png") center no-repeat;
  background-size: 100% 100%;
  overflow-y: auto;
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
  border-radius:0 0 15px 15px;
}
p[type="submit"] span {
  display: inline-block;
  margin-top: 0.25rem;
}
.assign-tp{
    padding-top:0.2rem;
    margin-bottom:1rem !important;
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
</style>

