<template>
	<div class="home">
	<van-actionsheet
  v-model="show"
  :actions="actions"
  cancel-text="取消"
  @select="onSelect"
  @cancel="onCancel"
/>
		<van-swipe :autoplay="3000" indicator-color="white">
		  <van-swipe-item><img src="../../assets/lun1.png"></van-swipe-item>
		  <van-swipe-item><img src="../../assets/lun2.png"></van-swipe-item>
		  <van-swipe-item><img src="../../assets/lun3.png"></van-swipe-item>
		</van-swipe>
		<div class="rong">
			<ul class="top">
				<router-link to="/zheng" tag="li"><img src="../../assets/shou_04.png"><span>整形项目</span></router-link>
				<router-link to="/ys" tag="li"><img src="../../assets/shou_06.png"><span>整形医生</span></router-link>
				<router-link to="/super" tag="li"><img src="../../assets/shou_08.png"><span>超级名片</span></router-link>
				<li @click="show = true" ><img src="../../assets/shou_10.png"><span>客服咨询</span></li>
			
				<!-- <li v-for="(item,i) in msg" :key="i"><img src="../../assets/1.jpg"><span>{{item}}</span></li> -->
			</ul>
				
		</div>
		<div class="zhaoshang">
			<h1>艾美招商<span class="ling">&diams;</span></h1>
			<ul class="zhao3">
				<router-link to="/zsxm" tag="li" v-for="(item,i) in zhao" :key="i"><img :src="item.img"><span class="c-to">{{item.ren}}</span><span class="se">{{item.many}}</span></router-link>
			</ul>
		</div>
		<div class="docter">
			<h1>整形医生<span class="ling">&diams;</span></h1>
			
			<ul class="doc">
					<router-link to="/detail" tag="li" v-for="(item,i) in ter" :key="i"><img :src="item.img"><span>{{item.ren}}</span></router-link>
			</ul>
		
		</div>
		<div class="xiang">
			<h1>艾美整形项目<span class="ling">&diams;</span></h1>
			<img src="../../assets/1.png" class="too">
			<ul class="xiang2">
				<router-link to="/gou" tag="li" v-for="(item,i) in xiang" :key="i"><img :src="item.img"><span class="c-shou">{{item.ren}}</span><span class="se">{{item.many}}</span></router-link>
			</ul>
		</div>
		
	</div>
</template>

<script>
	document.addEventListener('plusready', function() {
        var webview = plus.webview.currentWebview();
        plus.key.addEventListener('backbutton', function() {
            webview.canBack(function(e) {
                if(e.canBack) {
                    webview.back();             
                } else {
                    //webview.close(); //hide,quit
                    //plus.runtime.quit();
                    mui.plusReady(function() {
                        //首页返回键处理
                        //处理逻辑：1秒内，连续两次按返回键，则退出应用；
                        var first = null;
                        plus.key.addEventListener('backbutton', function() {
                            //首次按键，提示‘再按一次退出应用’
                            if (!first) {
                                first = new Date().getTime();
                                mui.toast('再按一次退出应用');
                                setTimeout(function() {
                                    first = null;
                                }, 1000);
                            } else {
                                if (new Date().getTime() - first < 1500) {
                                    plus.runtime.quit();
                                }
                            }
                        }, false);
                    });
                }
            })
        });
    });

	export default {
  name: 'Home',
  data () {
    return {
      msg: ["","","",""],
      zhao:[
						{ren:"艾美联合创始人",many:"￥0.00",img:require("../../assets/shou_29.png")},
						{ren:"艾美总裁",many:"￥0.00",img:require("../../assets/shou_26.png")},
						{ren:"艾美合伙人",many:"￥0.00",img:require("../../assets/shou_21.png")},
						{ren:"形象代言人",many:"￥0.00",img:require("../../assets/shou_17.png")},
						],
			ter:[
						{ren:"李忠才",img:require("../../assets/yi_03.png")},
						{ren:"戴维",img:require("../../assets/yi_05.png")},
						{ren:"董瑞芳",img:require("../../assets/yi_12.png")},
						{ren:"陶为斌",img:require("../../assets/yi_16.png")},
			],
			xiang:[
						{ren:"韩式小翘鼻 塑造俏   丽美鼻",many:"￥599.00",img:require("../../assets/shou_37.png")},
						{ren:"【玻尿酸填充面颊】打造出面部   自然美肌 塑造属于你的个性...",many:"￥7880.00",img:require("../../assets/shou_39.png")},
						{ren:"【自体脂肪填充】郑州自体脂肪   丰全脸 丰出饱满面相 脸型盈...",many:"￥1580.00",img:require("../../assets/shou_44.png")},
						{ren:"【吸脂】360°水动力吸脂 祛除人   体多余脂肪 瘦身 摆脱水...",many:"￥780.00",img:require("../../assets/shou_45.png")},
						{ren:"【眼部】郑州艾美眼综合双眼皮+开内眼角+眼睑下至",many:"￥2980.00",img:require("../../assets/shou_50.png")},
						{ren:"激光去眼袋 硅胶隆鼻 玻尿酸填充面颊",many:"￥380.00",img:require("../../assets/shou_52.png")},
						],
			show: false,
      actions: [
        {
          name: '1234566'
        },
        {
          name: '呼叫',
          subname: ''
        },
       
        
        
      ]


    }

	},
	 methods: {
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      // this.show = false;
			//  this.$toast(item.name);
			location.href="tel://"+12345
		},
		onCancel(item) {
      console.log(111)
    }
		
  }
	
}
</script>

<style>
.c-shou{
	margin-top: 0.1rem;
}
.c-to{
	margin:.1rem 0;
}
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
    height: 2.3rem;
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
		    margin-top: 0.3rem;
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
		margin-top: 0.4rem;
		background: white;
	}
	.doc li{
		width: 2.2rem;
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
		margin-top: 0.2rem;
	}
	.xiang2{
		display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
		margin-bottom: 1rem;
	}
	.xiang2 img{
		width:100%;
		border-radius: 0.1rem;
	}
	.xiang2 li{
		width: 3.4rem;
		display: flex;
    flex-direction: column;
		margin: 0.2rem 0;
	}
</style>