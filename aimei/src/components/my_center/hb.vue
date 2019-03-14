<template>
 <div class="conetent">
    <van-nav-bar title="超级海报"  left-arrow @click-left="reruen"></van-nav-bar>
    <div class="bg">
      
    </div>
     <img class="ewm" src="../../assets/hbewm.png" alt="">
 </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    // 返回
    reruen(){
        this.$router.back(-1)
    },
  }
}

</script>
<style scoped>
.bg{
  width: 100%;
    height:12.42rem;
    background: url('../../assets/hb.png') no-repeat ;
    background-size: 100% 100%;
}
.conetent{
    width: 100%;
    height: 100%;
}
.ewm{
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 50%;
    top: 5.7rem;
    transform: translateX(-50%)
}
</style>
