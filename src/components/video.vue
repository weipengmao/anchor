<template>
    <div class="video-container">
      <div class="video-top">
      </div>
      <div class="video-second">
      </div>
      <div class="video-three">
        <div style="background:#5D007F" class="actives">
            <p>互动聊天</p>
        </div>
        <div style="background:#5D007F">
            <p>详情</p>
        </div>
        <div style="background:#5D007F">
            <p>相册</p>
        </div>
        <div style="width:15%;background:#FF0054">
            <p>关注</p>
        </div>
      </div>
      <div class="video-fouth">
        <div class="video-fouth-top" style="background:#FFCC00;width:100%;height:0.8rem;font-size:0.5rem;">
          <span style="float:left;margin-left:0.65rem;">声明：严禁传播违法行为</span>
        </div>
      </div>
      <div class="video-fouth" id="video-fouth" style="display:none;background-size:100% 100%;">
        <div class="video-fouth-top" style="width:100%;height:2.5rem;
        margin:0 auto;border-bottom:1px solid #fff;font-size:1rem;width:95%;">
          <span style="float:left;margin-left:0.8rem;margin-top:0.5rem;color:#fff;">赛事说明</span>
          <span style="float:left;margin-top:1.6rem;color:#fff;font-size:0.8rem;margin-left:0.8rem;text-align:left;
          text-indent:50px;">
                本次大赛为给孩子提供更好的舞台，增加曝光率与关注度，创造更多的机会，开启人气通道，人气环节是为
                线上网络宣传推广使用。为给孩子更多的机会，给宝贝设置了丰厚的奖励哦。请家长自由参与，给孩子一个
                更好的舞台和成长空间。
          </span>
        </div>
      </div>
      <div class="video-fouth" id="video-fouths" style="display:none;background-size:100% 100%;">
        <span style="display:inline-block;width:0.65rem;height:0.65rem;vertical-align:bottom;float:left;
        margin-top:0.5rem !important;padding:0;border-radius:50%;border:1px solid #fff;margin-left:0.25rem;">
        </span>
        <span style="display:inline-block;width:0.65rem;height:0.65rem;vertical-align:bottom;float:left;
        margin-top:0.5rem !important;padding:0;margin-left:0.25rem;color:#fff;font-size:0.5rem;width:3.5rem;">
        09:00-10:00
        </span>
        <div class="video-fouth-tops" style="height:9.8rem;font-size:0.2rem;border-left:2px solid #fff;
        margin:0.5rem;margin-left:0.6rem;margin-top:1.2rem;text-align:left">
          <img src="../img/photos.png" width="105" alt="" style="display:inline-block;margin:0.2rem 0 0 0.3rem">
          <img src="../img/photos.png" width="105" alt="" style="display:inline-block;margin:0.2rem 0 0 0.3rem">
          <img src="../img/photos.png" width="105" alt="" style="display:inline-block;margin:0.2rem 0 0 0.3rem">
          <img src="../img/photos.png" width="105" alt="" style="display:inline-block;margin:0.2rem 0 0 0.3rem">
          <img src="../img/photos.png" width="105" alt="" style="display:inline-block;margin:0.2rem 0 0 0.3rem">
          <img src="../img/photos.png" width="105" alt="" style="display:inline-block;margin:0.2rem 0 0 0.3rem">
        </div>
      </div>
      <div class="video-fifth">
        <img src="../img/biaoqing.png" alt="" width="35">
        <input style="height:1.2rem;border-radius:20px;vertical-align:bottom;
          padding-left:0.3rem;outline:none;width:8.5rem;" type="text">
        <img src="../img/liwu.png" alt=""  width="30">
        <div style="background:#FFCC00;width:2.3rem;height:1.2rem;display:inline-block;
        border-radius:20px;font-size:0.5rem;margin-top:0.65rem;color:#fff;font-weight:bold;
        "><span style="display:inline-block;margin-top:0.2rem;">发送</span></div>
      </div>
    </div>
</template>
<script>
export default {
  name: "assign",
  data() {
    return {
    };
  },
  mounted() {
    var doc = $(".video-three div");
    var cont = $(".video-fouth");
    for(let i=0;i<doc.length-1;i++){
      $(doc[i]).click(()=>{
        $(doc[i]).addClass("actives").siblings().removeClass("actives");
        for(var j=0;j<cont.length;j++){
          if($(cont[j]).css("display")=="block"){
            $(cont[j]).css("display","none");
          }
        }
        $(cont[i]).css("display","block");
      })
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
.video-container{
  width:100%;
  height:100%;
}
.video-top{
  height:3rem;
  width:100%;
  background: url("../img/guanggao.png");
  background-size:100% 100%;
}
.video-second{
  height:9rem;
  width:100%;
  background: red;
  background: url("../img/liveRadio-img4.png");
  background-position-x: -1px;
  background-size:100% 100%;
}
.video-three{
  height:2.5rem;
  width:100%;
  font-size:0;
  font-weight:bold;
}
.video-three p{
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-20%);
  display: inline-block;
  height:100%;
  color:#fff;
  width:100%;
  font-size:0.7rem;
}
.video-three div{
  position: relative;
  display: inline-block;
  padding:0;
  width:28.2%;
  height:2.5rem;
  overflow:hidden;
}
.video-fouth{
  overflow: auto;
  height:11.5rem;
  width:100%;
  background: #fff;
}
.video-fifth{
  width:100%;
  height:2.4rem;
  background: #5D007F;
}
.actives{
  background: #8726ab !important;
}
.video-fifth img{
  vertical-align: bottom;
}
#video-fouth{
  background:url("../img/matchDetail-bg.png")
}
#video-fouths{
  background:url("../img/matchDetail-bg.png")
}
</style>

