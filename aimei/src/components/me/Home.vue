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
				<li v-for="(item,i) in zhao" :key="i"><img :src="item.img"><span>{{item.ren}}</span><span class="se">{{item.many}}</span></li>
			</ul>
		</div>
		<div class="docter">
			<h1>整形医生<span class="ling">&diams;</span></h1>
			
			<ul class="doc">
					<li v-for="(item,i) in ter" :key="i"><img :src="item.img"><span>{{item.ren}}</span></li>
			</ul>
		
		</div>
		<div class="xiang">
			<h1>艾美整形项目<span class="ling">&diams;</span></h1>
			<img src="../../assets/1.png" class="too">
			<ul class="xiang2">
				<li v-for="(item,i) in xiang" :key="i"><img :src="item.img"><span>{{item.ren}}</span><span class="se">{{item.many}}</span></li>
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
						],
			ter:[
						{ren:"李忠才",img:require("../../assets/1.jpg")},
						{ren:"戴维",img:require("../../assets/2.jpg")},
						{ren:"董瑞芳",img:require("../../assets/3.jpg")},
						{ren:"陶为斌",img:require("../../assets/1.jpg")},
			],
			xiang:[
						{ren:"艾美联合创始人",many:"￥0.00",img:require("../../assets/1.jpg")},
						{ren:"艾美总裁",many:"￥0.00",img:require("../../assets/1.jpg")},
						{ren:"艾美合伙人",many:"￥0.00",img:require("../../assets/1.jpg")},
						{ren:"形象代言人",many:"￥0.00",img:require("../../assets/1.jpg")},
						{ren:"艾美合伙人",many:"￥0.00",img:require("../../assets/1.jpg")},
						{ren:"形象代言人",many:"￥0.00",img:require("../../assets/1.jpg")},
						],
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
		    height: 10.47rem;
		    width: 7.11rem;
		    
		    margin-left: 0.2rem;
	}
	.zhaoshang h1,.docter h1,.xiang h1{
text-align: center;
    border-bottom: .01rem solid #c1a25f;
    height: 0.8rem;
    width: 2rem;
    margin: auto;
    padding-top: .3rem;
		position: relative
	}
	.ling{
		position: absolute;
    top: 6.18rem;
    left: 3.7rem;
    color: #c1a25f;
		position: absolute;
		top: 0.6rem;
    left: 1rem;
	}
	.zhao3{
		display: flex;
		flex-wrap: wrap;
		    margin-top: 0.6rem;
				justify-content: space-around;
	}
	.zhao3 li{
		display: flex;
    flex-direction: column;
		margin: 0.13rem 0rem;
	}
	.zhao3 img{
		    width: 3.42rem;
		    height: 3.42rem;
		    border-radius: 0.1rem;
		    
	}
	.zhao3 span{
		text-align: center;
	}
	.se{
		color: #c1a25f;
	}
	.doc{
		display: flex;
		display: -webkit-box;
    overflow-x: scroll;

		width: 7.5rem;
		margin-top: 0.5rem;
		background: white;
	}
	.doc li{
		width: 3rem;
    height: 3.18rem;
		margin: 0 0.1rem;
	}
	.doc img{
		width: 100%;
		height: 80%;
		border-radius: 0.1rem;
	}
	.doc span{
		
		text-align: center;
    display: block;
    width: 100%;
    line-height: 0.5rem;
	}
	.xiang{
		margin-top: 0.1rem;
		background: #FFFFFF;
	}
	.too{
		width: 95%;
		margin-left: 0.2rem;
	}
	.xiang2{
		display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
	}
	.xiang2 img{
		width:100%;
		border-radius: 0.1rem;
	}
	.xiang2 li{
		width: 3.4rem;
		display: flex;
    flex-direction: column;
	}
</style>