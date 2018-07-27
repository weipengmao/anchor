<template>
    <div id="payInfor">
            <!-- 头部三个广告 -->
            <div class="top clearfix">
                <img src="../img/assign/assign_01.png" alt="">
                <img src="../img/assign/assign_02.png" alt="" style="width:37%;">
                <img src="../img/assign/assign_03.png" alt="" style="width:28%;margin-left:0;">
            </div>
            <!-- 标题 -->
            <p class="topic">新丝路中国国际少儿模特大赛</p>
            <!-- 报名成功 -->
            <div class="form clearfix">
                <!-- 标题 -->
                <p class="title">支付信息</p>
                <p class="inform">
                    <span style="width:5rem;display:inline-block;letter-spacing:0.8rem;">姓&nbsp;名</span>
                    <span >XXXXX</span>
                </p>
                <p class="inform">
                    <span style="width:5rem;display:inline-block;">手机号码</span>
                    <span>13XXXXX3213</span>
                </p>
                <p class="inform">
                    <span style="width:5rem;display:inline-block;">培训机构</span>
                    <span>XXXXX</span>
                </p>
                <p class="inform">
                    <span style="width:5rem;display:inline-block;">领队老师</span>
                    <span>XXXXX</span>
                </p>
                <p class="inform">
                    <span style="width:5rem;display:inline-block;">创意名称</span>
                    <span>XXXXX</span>
                </p>
                <p class="inform">
                    <span style="width:5rem;display:inline-block;">合计金额</span>
                    <span>1133元</span>
                </p>
                <!-- 保存到相册 -->
                        <p class="submit" >确认支付</P>
                
            </div>
    </div>
</template>
<script>
    export default {
        name:"payInfor",
        data(){
            return{

            }
        },
    mounted(){



    }
    }
</script>


<style>
    *{
        margin:0;padding:0;box-sizing: border-box;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style-type: none;
    }
    .clearfix:after{
        content:'';
        clear:both;
        display:block;
    }

    #payInfor{
        width:100%;
        height:100vh;
        background:url('../img/assign/assign-bg.png') center no-repeat;
        background-size:100% 100%;
        padding-bottom:1rem;
    }
    .top{
        width:100%;
        text-align:center;
        padding-top:1rem;
    }
    .top img{
        width:25%;
        float:left;
        margin-left:0.6rem;
    }
    /* 标题 */
    .topic{
        width:100%;
        color:white;
        font-size: 1.1rem;
        font-family: "微软雅黑";
        padding:0.2rem 0;
        font-weight: bold;
        letter-spacing: 1px;
    }
    /* 报名填写的表单 */
    .form{
        width:90%;
        /* height:15rem; */
        margin:auto;
        background:url('../img/assign/assign_05.png') center no-repeat !important;
        margin-top:0.3rem;
        background:100% 100%;
        border-radius: 5%;
        /* padding-bottom:1rem; */
    }
    .form .title{
        width:100%;
        font-size:1.4rem;
        color:white;
        padding:0.5rem 0;
        letter-spacing: 2px;
        font-weight: bold;
    }
    .form .inform{
        width:100%;
        text-align:left;
        padding:0.5rem 0.5rem;
        padding-left:1.5rem;
        font-size:1rem;
        color:white;
        /* font-weight:bold; */
    }
        /* 马上报名 */
        .submit{
            width:100%;
            height:2rem;
            line-height: 2rem;
            display:inline-block;
            background:url("../img/assign/assign_04.png") center no-repeat !important;
            background:100% 100%;
            border:none;
            outline:none;
            margin-top:0.5rem;
            border-radius: 0 0 10% 10%;
            font-size:1rem;
            color:white;
            font-weight: bold;
        }
</style>

