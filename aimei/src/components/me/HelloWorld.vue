<template>
  <div class="hello">
    <section class="sec">
    	<router-view></router-view>
    </section>
    <footer class="foo">
    	<router-link to="/home">首頁</router-link>
    	<router-link to="/zheng">整形項目</router-link>
    	<router-link to="/super">超級名片</router-link>
      <router-link to="/myCenter">我的</router-link>
    </footer>
    <div class="bottom">


    </div>
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
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
}

.sec{
	flex: 1;
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
}
.bottom{
  width: 100%;
  height: 1rem;
}
</style>
