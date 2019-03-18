<template>
  <div class="c-reward">
    <van-nav-bar title="奖励明细"  left-arrow @click-left="reruen"></van-nav-bar>
  <div class="c-top">
    <div class="ttsop">
      <div>
        <span>累计奖励</span>
        <span>136.00</span>
      </div>
      <div>
        <span>累计奖励</span>
        <span>136.00</span>
      </div>
      <div>
        <span>累计奖励</span>
        <span>136.00</span>
      </div>
    </div>
    <p class="tipss">买家确认收货后，立即获得奖励明细</p>
    <div class="record">
      <div class="title list">
        <span>提现申请</span>
        <span>总佣金：123600.00</span>
      </div>
      <div class="list" v-for="(item,index) in 18" :key="index">
        <span>2017-09-12  12:12:30</span>
        <span>1000</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
.c-reward{
  height: 100%;
  display: flex;
  flex-direction: column;

}
.c-top{
  flex: 1;
  overflow: auto;
  
}
.ttsop {
  width: 7rem;
  margin: 0.2rem auto;
  padding: 0.4rem 0.2rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  border-radius: 0.1rem;
 
}
.ttsop div {
  text-align: center;
  display: flex;
  flex-direction: column;
  color: #888;
}
.tipss {
  color: #888;
  margin: 0.2rem 0.3rem;
}
.record{
width: 7rem;
margin: .2rem auto;
background: #FFF;
border-radius: .1rem;
}
.record div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .3rem .2rem;
    border-bottom: 0.01rem solid #f2f2f2;
    color: #888;
}
.record div.title{
    color: #444;
}
</style>
