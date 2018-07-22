<template>
    <div class="order-container">
        <div class="order-content">
            <div class="order-content-pay">
                <div class="order-pay-text" v-for="(item,key) in payItem" >
                    <div class="checkboxFour ">
                        <input :name="'checkbox'+key" type="checkbox" :id = "'checkboxFourInput'+key" @touchend="checked(key)" :checked="false" style="float:left;margin-top:2rem;outline:none;">
                        <label :for="'checkboxFourInput'+key"></label>
                    </div>
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
                        <p @touchend ="add(key)" style="text-align:center;border-right:1px solid #ccc;padding-right:0.2rem;">+</p>
                        <input type="text" :value="1" style="padding-left:0.3rem;" :id="'input'+key">
                        <p @touchend ="radiu(key)" style="border-left:1px solid #ccc;padding-left:0.2rem;">-</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
    },
    methods:{
        add(i){
            var val = parseInt($("#price"+i).html());
            var vals;
            if(this.num==0){
                vals = val;
                this.val = val;
                this.num++;
            }else{
                vals = this.val;
            }
            document.querySelector("#input"+i).value = parseInt(document.querySelector("#input"+i).value)+1;
            document.querySelector("#price"+i).innerHTML = document.querySelector("#input"+i).value*vals;
        },
        radiu(i){
            if(document.querySelector("#input"+i).value>1){
                document.querySelector("#input"+i).value = parseInt(document.querySelector("#input"+i).value)-1;
                document.querySelector("#price"+i).innerHTML = document.querySelector("#input"+i).value*this.val;
            }
        },
        checked(i){
            var val = $("input[name=radio"+i+"]").prop("checked");

            if(val == true){
                val = false
            }else if(val == false){
                val = true
            }
        }
    },
    data(){
        return {
            price:399,
            //栏目自己配置
            payItem:[1,2,3,4],
            num:0,
            val:0
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
.order-content-pay{
    background: #fff;
    height:100%;
}
.order-content{
    flex:1;
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
    margin:0.7rem 1.2rem 0 0rem;
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
    vertical-align: middle;
}
.order-content-text{
    position:absolute;
    bottom:8%;
    right:1.2rem;
    width:3.2rem;
    border:1px solid #ccc;
    height:1rem;
}
.order-content-text p{
    display: inline-block;
    margin:0;
    width:0.5rem;
    border-radius: 0;
    color:#ccc;
    height:1rem;
}
input::-webkit-input-placeholder{text-align: center;}
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
	border-radius: 100px;
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
</style>
