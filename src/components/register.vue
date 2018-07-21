<template>
    <div class="register-container">
        <img class="register-top" src="../img/anchor-register-top.png" alt="">
        <div class="register-bottom clearfix">
            <el-input class="register" placeholder="账号"></el-input>
            <el-input class="register" placeholder="密码"></el-input>
            <el-input class="confirm" placeholder="验证码"></el-input>
            <div class="confirmText">
            <span>获取验证码</span>
            </div>
            <div class="button">
            <span>登录</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clearfix:after{
    content:'';
    display: block;
    clear:both;
    visibility: hidden;
}
.register-container{
    height:100%;
    width:100%;
    background: url("../img/anchor-login-back.png");
    background-size:100% 100%;
}
.register-top{
    margin:1.5rem auto 1.5rem;
    width:6rem;
}
.register-bottom{
    height:11.5rem;
    width:10.1rem;
    margin:0 auto;
}
.confirmText{
    height:1.8rem;
    width:40%;
    display: inline-block;
    background: rgba(161,31,255,1);
    position: relative;
}
.confirmText span{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    font-size:0.5rem;
    width:100%;
    color:#c4c4c4;
}
.button{
    background: rgba(161,31,255,1);
    height:1.8rem;
    width:100%;
    margin-top:1rem;
    position: relative;
}
.button span{
    position:absolute;
    top:50%;
    left:58%;
    transform: translate(-50%,-55%);
    color:#fff;
    letter-spacing:1rem;
}
</style>
