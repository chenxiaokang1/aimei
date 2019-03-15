<template>
	<div class="zhen">
    <div class="c-s">
      <van-search placeholder="请输入搜索关键词" v-model="value" />
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
  }
}
</script>

<style scoped>


.van-search__content{
  border-radius: 0.34rem;
}
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
}
.router-link-active{
		color: #c1a25f;
    border-bottom: 0.01rem solid #c1a25f;
	}
</style>