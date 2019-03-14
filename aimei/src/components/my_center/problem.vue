<template>
  <div>
    <van-nav-bar title="常见问题"  left-arrow @click-left="reruen"></van-nav-bar>

    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="一、会员的积分是怎么获得的？" name="1">会员积分是通过购买商品获得</van-collapse-item>
      <van-collapse-item title="二、钱包的余额提现后到哪里了？" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
      <van-collapse-item title="三、怎么才能获得奖励？" name="3">线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
      <van-collapse-item title="四、怎么才能获得爱心？" name="4">线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
         activeName: ''    
    };
  },
  methods: {
    // 返回
    reruen(){
        this.$router.back(-1)
    },
  }
};
</script>
<style scoped>
</style>
