<template>
	<div class="zhen">
    <div class="c-s">
      
      <van-search placeholder="请输入搜索关键词" v-model="value" background="#f7f7f7" shape="round"  style="text-align: left;"/>
      <div class="tap">
        <router-link to='/zheng/quan' tag="span">全部</router-link>
        <router-link to='/zx' tag="span">整形</router-link>
        <router-link to='/sx' tag="span">塑形</router-link>
        <router-link to='/mr' tag="span">美容</router-link>
        <router-link to='/xz' tag="span">吸脂</router-link>
        <router-link to='/ns' tag="span">玻尿酸</router-link>
      </div>
    </div>
    <div class="c-d">
      <router-view></router-view>
    </div>
	</div>
</template>

<script>


	export default {
  name: 'Zheng',
  data () {
    return {
      value: '',
     
    }
  },
  watch: {
    $route(newData, oldData) {
      var that = this;
      console.log(newData.path, oldData.path);
      if (newData.patha == "/zheng/quan") {
     
       document.addEventListener('plusready', function() {
        var webview = plus.webview.currentWebview();
        plus.key.addEventListener('backbutton', function() {
            webview.canBack(function(e) {
                if(e.canBack) {
                    // webview.back();             
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
    }
  }
}
  
}
</script>

<style scoped>



.zhen{
  display: flex;
  flex-direction: column;
  height: 100%;

}
.c-d{
  flex: 1;
  overflow: auto;
}
.tap{
  display: flex;
  justify-content: space-around;
  background: white;
  height: 0.7rem;
    margin-bottom: 0.2rem;
}
.tap span{
  line-height: 0.7rem;
}
.router-link-active{
		color: #c1a25f;
    border-bottom: 0.01rem solid #c1a25f;
	}
  /* .van-search__content--round{
    background: white 
  } */
  
  input::-webkit-input-placeholder {
        
        text-align:left;
   }
</style>