<template>
<div class="clearfix" id="MokaPublish">
    <div class="publish-top clearfix">
        <img src="../img/publish/publish-arrow.png" alt="">
        <p class="publish-button">模卡发布</p>
    </div>
    <!-- 表单 -->
    <div class="publish-form">
    <form action="#">
        <input type="text" placeholder="主题">
        <input type="text" placeholder="内容( 限20字 )">


                <!--    照片添加    -->
        <div class="z_photo">
            <div class="z_file">
                <input type="file" name="file" id="file" value="" accept="image/*" multiple onchange="imgChange('z_photo','z_file');"  style="opacity:0.1"/>

            </div>

        </div>

        <!-- 提交审核 -->
        <input type="submit" value="发布" class="publish-submit">
    </form>

                    <!--遮罩层-->
        <div class="z_mask clearfix">
            <!--弹出框-->
            <div class="z_alert">
                <p>确定要删除这张图片吗？</p>
                <p>
                    <span class="z_cancel">取消</span>
                    <span class="z_sure">确定</span>
                </p>
            </div>
        </div>
    </div>
    </div>

    
</div>
</template>

<script>


export default {
    name:'MokaPublish',
    data(){
        return{
            
        }
    },
    mounted(){
        		//多文件上传
       function imgChange(obj1, obj2) {
            //获取点击的文本框
            var file = document.getElementById("file");
            //存放图片的父级元素
            var imgContainer = document.getElementsByClassName(obj1)[0];
            //获取的图片文件
            var fileList = file.files;
             console.log(fileList)
            //文本框的父级元素
            var input = document.getElementsByClassName(obj2)[0];
            var imgArr = [];
            //遍历获取到得图片文件
            for (var i = 0; i < fileList.length; i++) {
                var imgUrl = window.URL.createObjectURL(file.files[i]);
                console.log(imgUrl)
                imgArr.push(imgUrl);
                var img = document.createElement("img");
                img.setAttribute("src", imgArr[i]);
                var imgAdd = document.createElement("div");
                imgAdd.setAttribute("class", "z_addImg");
                imgAdd.appendChild(img);
                imgContainer.appendChild(imgAdd);
            };
            
            imgRemove();
           
        };

        function imgRemove() {
            var imgList = document.getElementsByClassName("z_addImg");
            var mask = document.getElementsByClassName("z_mask")[0];
            var cancel = document.getElementsByClassName("z_cancel")[0];
            var sure = document.getElementsByClassName("z_sure")[0];
            for (var j = 0; j < imgList.length; j++) {
                imgList[j].index = j;
                imgList[j].onclick = function() {
                    var t = this;
                    mask.style.display = "block";
                    cancel.onclick = function() {
                        mask.style.display = "none";
                    };
                    sure.onclick = function() {
                        mask.style.display = "none";
                        t.style.display = "none";
                    };

                }
            };
        };

       function subtj(){
         console.log(file.files)
       }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin:0;padding:0;box-sizing: border-box;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}
.clearfix:after{
    content:'';clear:both;display:block;
}
#publish{
    width:100%;
}

.publish-top{
    width:100%;
    height:3rem;
    line-height: 3rem;
    background:#B900FF;
    padding-top:0.6rem;
    padding-left:1rem;

}

.publish-top img{
    width:0.8rem;
    float:left;
    /* margin-right: 1rem; */
    margin-top:0.3rem;
}

.publish-button{
    width:10rem;
    height:2rem;
    line-height: 2rem;
    font-size:1rem;
    float:left;
    margin-left:1rem;
    /* padding-left:0.5rem; */
    text-align: center;
    color: white;
    /* border-left:1px solid #DF8AFF; */
}

.publish-form{
    width:100%;
    padding-top:0.5rem;
}
.publish-form input{
    width:95%;
    height:2.5rem;
    margin:0 auto;
    border:1px solid #DF8AFF;
    padding-left:0.4rem;
    margin-bottom:0.5rem;
    font-size:0.7rem;
}
.publish-form .publish-topic{
    width:95%;
    margin:0 auto;
    height:1rem;
    line-height: 1rem;
    font-size: 0.7rem;
    color:#757575;
    text-align: left;
    padding-left:0.4rem;
}

			/*上传多张图片*/

        .z_photo {
            width: 95%;
            height: 6rem;
            line-height: 6rem;
            text-align:center;
            padding:0 0.3rem;
            overflow: auto;
            clear: both;
           margin: 0.5rem auto;
            border: 2px dashed #DF8AFF;
        }
        
        .z_photo img {
            width: 2.3rem;
            height: 2.3rem;
            margin:1rem 0.7rem;
        }
        
        .z_addImg {
            float: left;
            margin-right: 0.2rem;
        }
        
        .z_file {
            width: 4rem;
            height: 4rem;
            line-height: 4rem;
            text-align: center;
            background: url("../img/MokaPublish/Mokapublish-img.png") center no-repeat;
            background-size: 4rem 4rem;
            margin-top: 1rem;
            margin-left: 5.5rem;
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
            background: rgba(0, 0, 0, .5);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999;
            display: none;
        }
        
        .z_alert {
            width: 6rem;
            height: 5rem;
            border-radius: .2rem;
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
            margin:1rem 0;
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

        /* 提交审核 */
        .publish-form .publish-submit{
            width:100%;
            height:2.5rem;
            outline: none;
            border:0;
            background:#B900FF !important;
            margin-bottom:0;
            color:white;
            letter-spacing: 2px;
            font-size: 0.8rem;
            position:fixed;
            bottom:0;
            left:0;
        }
</style>