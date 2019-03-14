<template>

  <div class="center">
    <van-nav-bar title="我的团队"  left-arrow @click-left="reruen"></van-nav-bar>

    <div class="head">
      <div class="head_img">
        <img src="../../assets/no_login.png" alt>
      </div>
      <div class="name">提出个未来</div>
      <div class="level">
        <img src="../../assets/leave.png" alt>
        <span>级别：30级</span>
      </div>
      <div class="time">加入时间：2018-09-14 10:19:45</div>
    </div>
    <div class="mid">
        <div class="mid_item">
            <p>10600.00</p>
            <p>累计奖励</p>
        </div>
        <div class="mid_item">
            <p>2600.00</p>
            <p>可提现奖励</p>
        </div>
    </div>
    <div class="bot">
        <div class="bot_item"  @click="goto_view('bigData')">
            <img src="../../assets/msg.png" alt="">
            <p>大数据采集</p>
            <p>1206人</p>
        </div>
        <div class="bot_item"  @click="goto_view('myFans')">
            <img src="../../assets/fs.png" alt="">
            <p>我的粉丝</p>
            <p>186人</p>
        </div>
         <div class="bot_item" @click="goto_view('myTeam')">
            <img src="../../assets/t.png" alt="">
            <p>我的团队</p>
            <p>621人</p>
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
       goto_view(url){
         this.$router.push({  //核心语句
         path:"/"+url  //跳转的路径
       
      })
    }
  }
};
</script>
<style scoped>
.head {
  width: 7rem;
  height: 3rem;
  margin: 0.3rem auto;
  border-radius: 0.1rem;
  /* padding: .3rem 0; */
  background: url("../../assets/head.png") no-repeat;
  background-size: 100% 100%;
  padding: 0.2rem;
  color: #fff;
  text-align: center;
}
.head_img {
  width: 1rem;
  height: 1rem;
  margin: 0 auto;
}
.head_img img {
  width: 1rem;
  height: 1rem;
}
.name {
  padding: 0.1rem;
}
.level {
  width: 2rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.level img {
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.1rem;
}
.time {
  padding: 0.1rem;
}
.mid{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFF;
    padding: .5rem 0; 
}
.mid_item:first-child{
    border-right: 0.01rem solid #F3f3f3;
}
.mid_item{
    width: 500%;
    text-align: center;
}
.bot{
    background: #FFF;
    margin: .3rem 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: .3rem 0;
}
.bot_item{
    display: flex;
    width: 33.3333%;
    flex-direction: column;
    align-items: center;
    border-right: 0.01rem solid #F3f3f3;
}
.bot_item img{
    width: .5rem;
    height: .5rem ;
    padding: .1rem;
    background: #c1a25f;
    border-radius: 50%;
}
</style>
