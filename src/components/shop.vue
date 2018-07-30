<template>
    <div class="order-container">
        <div class="order-content">
            <div class="order-content-pay">
                <div class="order-pay-text" v-for="(item,key) in payItem" >
                    <span style="float:left" :id="'check'+key" class="checkboxFourx" @click.stop="checked(key)"></span>
                    <div class="order-content-left">
                        <img src="../img/anchor-order-img.png" width="90" >
                    </div>
                    <div class="order-content-center">
                        <span>小青甘普茶</span>
                        <p>套餐{{key+1}}</p>
                    </div>
                    <div class="order-content-right">
                        <span>￥<span :id="'price'+key" style="margin:0;">{{price}}</span>.00</span>
                    </div>
                    <div class="order-content-text">
                        <span @click ="add(key)" class="toAdd" >+</span>
                        <span :id="'input'+key">1</span>
                        <span @click ="radiu(key)" class="toMin" >-</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="shop-bottom clearfix">
            <div class="bottom-left ">
                <div style="position:relative;">
                    <span id="check" class="checkboxFoury" @click="checkedall()"></span>
                    <span class="bottom-all">全选</span>
                    <span class="bottom-sum" >合计：
                    <span class="bottom-money" >￥<span>{{allPrice}}</span>.00</span></span>
                </div>
            </div>
            <div class="bottom-right">
                <span>结算</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        $(".index-bottom").css("width","0");
        $(".index-bottom img").css("width","0");
        $(".index-bottom span").css("height","0");
    },
    methods:{
        add(i){
            var val = parseInt($("#price"+i).html());
            var valsx = $("#check"+i).css("background-color");
            var vals;
            if(this.num==0){
                vals = val;
                this.val = val;
                this.num++;
            }else{
                vals = this.val;
            }
            if(valsx =="rgb(255, 0, 0)"){
                this.allPrice+=this.val;
            }
            document.querySelector("#input"+i).innerHTML = ++this.value[i];
            document.querySelector("#price"+i).innerHTML = document.querySelector("#input"+i).innerHTML*vals;
        },
        radiu(i){
            var valsx = $("#check"+i).css("background-color");
            if(document.querySelector("#input"+i).innerHTML>1){
                if(valsx =="rgb(255, 0, 0)"){
                    this.allPrice-=this.val;
                }
                document.querySelector("#input"+i).innerHTML = --this.value[i];
                document.querySelector("#price"+i).innerHTML =document.querySelector("#input"+i).innerHTML*this.val;
            }
        },
        checked(i){
            var val = $("#check"+i).css("background-color");
            if(val == "rgb(255, 0, 0)"){
                $("#check"+i).css("background","white")
                this.allPrice -= parseInt($("#price"+i).html());
            }else{
                $("#check"+i).css("background","rgb(255, 0, 0)")
                this.allPrice += parseInt($("#price"+i).html());
            }
            if(val == true){
                val = false
            }else if(val == false){
                val = true
            }
        },
        checkedall(){
            
            var val = $("#check").css("background-color");
            var node = $(".order-pay-text").length;
            var vals = 0;
            if(val == "rgb(255, 0, 0)"){
                $("#check").css("background","white");
                this.allPrice = vals;
                for(let i=0;i<node;i++){
                   $("#check"+i).css("background","white");
                }
            }else{
                for(let i=0;i<node;i++){
                    $("#check"+i).css("background","rgb(255,0,0)");
                    vals += parseInt($("#price"+i).html());
                }
                this.allPrice = vals;
                $("#check").css("background","rgb(255, 0, 0)")
            }
        }
    },
    data(){
        return {
            price:399,
            //栏目自己配置
            payItem:[1,2],
            num:0,
            val:0,
            allPrice:0,
            value:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order-container{
    display: flex;
    height:91%;
    flex-direction: column;
}
.clearfix:after{
    content:'';
    display: block;
    clear:both;
    visibility: hidden;
}
.order-content-pay{
    background: #fff;
}
.order-content{
    flex:1;
    overflow: auto;
}
.order-pay-text{
    position: relative;
    height:4.75rem;
    width:100%;
    border-bottom:1px solid rgba(185,0,255,1);
}
.order-content-left{
    float:left;
    margin:0.2rem 0 0 0.2rem;
    font-size:0.5rem;
}
.order-content-center{
    float: left;
    font-size:0.5rem;
    text-align: left;
}
.order-content-center span{
    display: inline-block;
    margin:0.7rem 0 0 0.5rem;
    font-weight: 700;
}
.order-content-center p{
    margin:0.7rem 0 0 0.5rem;
    color:#a7a4a4;
}
.order-content-left span{
    display: inline-block;
}
.order-content-right{
    position: relative;
    float:right;
    font-size:0.5rem;
    height: 100%;
}
.order-content-right span{
    display: inline-block;
    margin:0.7rem 1.3rem 0 0rem;
    font-weight: 700;
    color: red;
}
.order-content-right p{
    font-size: 0.7rem;
    margin:1.7rem 1rem 0 0rem;
    width:4rem;
    border-radius: 0.5rem;
}
.order-content-text input{
    width:20%;
    outline: none;
    border:none;
    height:0.5rem;
    vertical-align: top;
}
.order-content-text{
    position:absolute;
    bottom:8%;
    right:1.3rem;
    border:1px solid #ccc;
    height:1rem;
}
.order-content-text span{
    line-height: 1rem;
    font-size:0.7rem;
    vertical-align: top;
    display: inline-block;
    height:1rem;
    padding:0 0.15rem 0 0.15rem;
}
.checkboxFour {
	background: #ddd;
	border-radius: 50%;
    margin-top:1.6rem;
    float: left;
	width: 1rem;
	height: 1rem;
    margin-left:0.3rem;
}
.checkboxFour label {
    margin-left:0.3rem;
    margin-top:1.6rem;
	display: block;
	width: 0.5rem;
	height: 0.5rem;
	border-radius: 50%;
    outline: none;
	-webkit-transition: all .5s ease;
	-moz-transition: all .5s ease;
	-o-transition: all .5s ease;
	-ms-transition: all .5s ease;
	transition: all .5s ease;
	cursor: pointer;
	position: absolute;
	top: 5px;
	left: 5px;
	z-index: 1;
	-webkit-box-shadow:inset 0px 1px 3px rgba(0,0,0,0.5);
	-moz-box-shadow:inset 0px 1px 3px rgba(0,0,0,0.5);
	box-shadow:inset 0px 1px 3px rgba(0,0,0,0.5);
}
.checkboxFour input[type=checkbox]:checked + label {
	background: red;
}
.checkboxFour input{
    display:none;
}
.shop-bottom{
    height:3rem;
    bottom:0;
    width:100%;
}
.bottom-right{
    background: red;
    width:6rem;
    height:100%;
    float: right;
}
.bottom-right span{
    display: inline-block;
    color:#fff;
    margin-top:0.85rem;
}
.checkboxFoury{
    left:0;
    position: absolute;
    margin-left:1rem;
    margin-top:1.2rem;
    width: 0.8rem !important;
	height: 0.8rem !important;
	border-radius: 50%;
    display: inline-block;
    float: left;
    border:5px solid #ddd;
}
.checkboxFourx{
    left:0;
    margin-left:0.8rem;
    margin-top:1.6rem;
    width: 0.8rem !important;
	height: 0.8rem !important;
	border-radius: 50%;
    display: inline-block;
    float: left;
    border:5px solid #ddd;
}

.bottom-all{
font-size:0.6rem;float:left;margin-top:1.2rem;margin-left:2.5rem
}

.bottom-sum{
color:#ccc;font-size:0.6rem;float:left;margin-top:1.2rem;margin-left:1rem
}
.bottom-money{
color:black;font-size:0.6rem;
}

.toAdd{
border-right:1px solid #ccc;
}

.toMin{
border-left:1px solid #ccc;
}
</style>
