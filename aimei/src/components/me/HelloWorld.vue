<template>
  <div class="hello">
    <section class="sec">
    	<router-view class="view"></router-view>
    </section>
     <div class="not">
    </div>
    <footer class="foo">
    	<router-link to="/home">首頁</router-link>
    	<router-link to="/zheng">整形項目</router-link>
    	<router-link to="/super">超級名片</router-link>
      <router-link to="/myCenter">我的</router-link>
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
.sec{
  width: 100%;
  height: 100%;
}
.view{
  width: 100%;
   height: 100%;
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
}
.not{
  float: left;
  width: 100%;
  height: 1.5rem;
}
</style>
