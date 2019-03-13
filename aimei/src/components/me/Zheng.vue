<template>
	<div class="zhen">
    <header>
      <van-search placeholder="请输入搜索关键词" v-model="value" />
      <div class="tap">
        <router-link to='/zheng/quan' tag="span">全部</router-link>
        <router-link to='/zx' tag="span">整形</router-link>
        <router-link to='/sx' tag="span">塑形</router-link>
        <router-link to='/mr' tag="span">美容</router-link>
        <router-link to='/xz' tag="span">吸脂</router-link>
        <router-link to='/ns' tag="span">玻尿酸</router-link>
      </div>
    </header>
    <section>
      <router-view></router-view>
    </section>
	</div>
</template>

<script>
	export default {
  name: 'Zheng',
  data () {
    return {
      value: '',
     
    }
  }
}
</script>

<style sxoped>
header{
  position: fixed;
    width: 100%;
}
section{
  
}
.van-search__content{
  border-radius: 0.34rem;
}
.zhen{
  display: flex;
  flex-direction: column;

}
section{
  flex: 1;
  overflow: auto;
}
.tap{
  display: flex;
  justify-content: space-around;
  background: white;
}
.router-link-active{
		color: #c1a25f;
    border-bottom: 0.01rem solid #c1a25f;
	}
</style>