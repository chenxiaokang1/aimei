<template>
	<div class="zhen">
    <header>
      <van-search placeholder="请输入搜索关键词" v-model="value" />
      <div class="tap">
        <router-link to='/quan'>全部</router-link>
        <router-link to='/quan'>整形</router-link>
        <router-link to='/quan'>塑形</router-link>
        <router-link to='/quan'>美容</router-link>
        <router-link to='/quan'>吸脂</router-link>
        <router-link to='/quan'>玻尿酸</router-link>
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

<style>
.van-search__content{
  border-radius: 0.34rem;
}

.tap{
  display: flex;
  justify-content: space-around;
}
</style>