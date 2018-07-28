<template>
    <div class="list-container clearfix">
        <div class="list-left">
            <div class="list-ul" v-for="(item,key) in lis">
                <ul class="list-left-ul" @click="getLi"><span>{{ulName}}</span></ul>
            </div>
        </div>
        <div class="list-right">
            <div class="list-right-img"></div>
            <div class="list-right-nameNum clearfix">
                <div class="list-right-name" v-for="item in listName" @click="toShop">
                    <img src="../img/anchor-opt-content.jpg" alt="">
                    <p>商品名称</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        var li = $(".list-left-ul");
        $(li[0]).addClass("activeLi");
        li.on("click",function(){
            for(let i=0;i<li.length;i++){
               $(li[i]).removeClass("activeLi")
            }
           $(this).addClass("activeLi")
        })
    },
    data(){
        return {
            lis:[1,2,3,4,5,6,7,9,8,9,7],
            ulName:"热门",
            listName:[1,2,3,4,5,6,7,8,9,10]
        }
    },
    methods:{
        getLi(){},
        toShop(){
            this.$router.push("/shopDetail")
        }
    }
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
.list-container{
    width:100%;
    height:100%;
    overflow-y: auto;
    margin-bottom:3rem;
}
.list-left{
    float: left;
    width:4.8rem;
    height:100%;
}
.list-right{
    margin-left:4.8rem;
    margin-top:0.4rem;
    height:100%;
}
.list-ul:first-child{
    margin-top:0.4rem;
}
.list-left-ul{
    height:1.4rem;
    list-style: none;
    margin: 0.4rem 0 0.4rem 0;
    padding:0;
    font-size:0.7rem;
}
.list-left-ul span{
    display: inline-block;
    margin-top:0.25rem;
}
.list-left-li{
    list-style: none;
    font-size:0.7rem;
}
.list-left-li span{
    display: inline-block;
    margin-top:0.45rem;
    margin-bottom:0.45rem;
}
.activeLi{
    color:rgba(104,29,164,1);
    border-left:3px solid rgba(104,29,164,0.5);
}
.list-right-img{
    height:5.05rem;
    width:100%;
    background: url("../img/anchor-opt-back.png");
    background-size:100% 100%;
}
.list-right-name{
    float: left;
    height:4rem;
    width:3rem;
    margin:0.3rem;
}
.list-right-name img{
    width:3rem;
}
.list-right-name p{
    font-size:0.5rem;
    margin:0;
    padding:0;
    text-align: center;
}
</style>
