<template>
	<div class="home">
		<van-swipe :autoplay="3000" indicator-color="white">
		  <van-swipe-item><img src="../../assets/1.jpg"></van-swipe-item>
		  <van-swipe-item><img src="../../assets/2.jpg"></van-swipe-item>
		  <van-swipe-item><img src="../../assets/3.jpg"></van-swipe-item>
		</van-swipe>
		<div class="rong">
			<ul class="top">
				<li v-for="(item,i) in msg" :key="i"><img src="../../assets/1.jpg"><span>{{item}}</span></li>
			</ul>
		</div>
		<div class="zhaoshang">
			<h1>艾美招商<span class="ling">&diams;</span></h1>
			<ul class="zhao3">
				<li v-for="(item,i) in zhao" :key="i"><img :src="item.img"><span>{{item.ren}}</span>{{item.many}}<span></span></li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	
	export default {
  name: 'Home',
  data () {
    return {
      msg: ["整形项目","整形医生","超级名片","客服咨询"],
      zhao:[
      {ren:"艾美联合创始人",many:"￥0.00",img:require("../../assets/1.jpg")},
      {ren:"艾美总裁",many:"￥0.00",img:require("../../assets/1.jpg")},
      {ren:"艾美合伙人",many:"￥0.00",img:require("../../assets/1.jpg")},
      {ren:"形象代言人",many:"￥0.00",img:require("../../assets/1.jpg")},
      ]
    }
  }
}
</script>

<style>
	.van-swipe{
		height: 3.6rem;
	}
	.van-swipe img{
		width: 100%;
		height: 100%;
	}
	.rong{
		position: relative;
	}
	.top{
	display: flex;
	justify-content: space-around;
    width: 7rem;
    height: 2rem;
    margin-left: 0.2rem;
    position: absolute;
		top: -0.15rem;
    border: .01rem #ebebeb;
    border-radius: 0.1rem;
    background: #FFFFFF;
	}
	.top li{
		display: flex;
		flex-direction: column;
		margin-top: 0.4rem;
	}
	.top img{
		width: 1rem;
		height: 1rem;
		border-radius: 0.6rem;
		margin-bottom: 0.2rem;
	}
	section{
		background: #f5f5f5;
	}
	.zhaoshang{
		    margin-top: 2rem;
		    height: 1.47rem;
		    width: 7.11rem;
		    
		    margin-left: 0.2rem;
	}
	.zhaoshang h1{
text-align: center;
    border-bottom: .01rem solid #c1a25f;
    height: 0.8rem;
    width: 2rem;
    margin: auto;
    padding-top: .3rem;
	}
	.ling{
		position: absolute;
    top: 6.18rem;
    left: 3.7rem;
    color: #c1a25f;
	}
	.zhao3{
		display: flex;
		flex-wrap: wrap;
		    margin-top: 0.6rem;
	}
	.zhao3 li{
		display: flex;
    flex-direction: column;
	}
	.zhao3 img{
		    width: 3.42rem;
		    height: 3.42rem;
		    border-radius: 0.1rem;
		    
	}
</style>