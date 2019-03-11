<template>
  <div class="hello">
    <header>
    	<h1>首页</h1>
    </header>
    <section class="sec">
    	<h1>内容</h1>
    </section>
    <footer class="foo">
    	<h1>首页</h1>
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
  }
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
</style>
