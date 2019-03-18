<template>
  <div class="hello">
    <section class="sec">
    	<router-view></router-view>
    </section>
 
    <footer class="foo">
    	<router-link to="/home"><i class="iconfont icon-yemian-copy"></i>首页</router-link>
    	<router-link to="/zheng"><i class="iconfont icon-icon1"></i>整形项目</router-link>
    	<router-link to="/super"><i class="iconfont icon-mingpian"></i>超级名片</router-link>
      <router-link to="/myCenter"><i class="iconfont icon-mine-gray"></i>我的</router-link>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  width: 100%;
   height: 100%;
}
.router-link-active{
		color: #c1a25f;
	}
.sec{
  width: 100%;
  height: 100%;
}
.view{
  width: 100%;
   height: 100%;
   overflow: auto;
   margin-bottom: 1rem;
}
.foo{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 1rem;
  border-top: 0.01rem solid #ccc;
  background: #ffffff;
  overflow: hidden;
}
.foo a{
  display: flex;
  flex-direction: column;

}
.foo i{
  text-align: center;
  font-size: 0.5rem;
}

</style>
