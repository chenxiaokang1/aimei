<template>
  <div>
    <div class="head">
      <div class="no_login" v-if="nologin">
        <img src="../../assets/no_login.png" alt>
        <p @click="login">登录</p>
      </div>
      <div v-if="!nologin" class="login">
        <div class="login_left">
            <div>
               <img src="../../assets/brand.png" alt="">
            </div>
            <div class="lflr">
                <p>艾丽莎</p>
                <div class="qd" v-if="!is_qd" @click="qd_click">
                    签到
                </div>
                <div class="qd" v-if="is_qd">
                    已签到
                </div>
            </div>
        </div>
        <div class="login_right">
            <div>
                <img src="../../assets/b1.png" alt="">
                <span>位置：河南省郑州市</span>
            </div>
            <div>
                <img src="../../assets/b2.png" alt="">
                <span>级别：一般用户</span>
            </div>
            <div>
                <img src="../../assets/b3.png" alt="">
                <span>推荐人：总店</span>
            </div>
        </div>
      </div>
    </div>
    <div class="conte">
      <div class="head_nav">
        <div class="item_box">
          <img src="../../assets/qian.png" alt>
          <p>奖励：0.00</p>
        </div>
        <div class="item_box" @click="goto_view('love')">
          <img src="../../assets/aixin.png" alt>
          <p>爱心：0</p>
        </div>
        <div class="item_box">
          <img src="../../assets/jf.png" alt>
          <p>积分：0.00</p>
        </div>
      </div>
    </div>
    <div class="child_nav">
      <div class="box">
        <div class="box_li" >
          <img src="../../assets/nav1.png" alt>
          <p>奖励提现</p>
        </div>
        <div class="box_li" @click="goto_view('love')">
          <img src="../../assets/nav2.png" alt>
          <p>爱心</p>
        </div>
        <div class="box_li" @click="goto_view('rank')">
          <img src="../../assets/nav3.png" alt>
          <p>排行榜</p>
        </div>
        <div class="box_li" @click="goto_view('rewardCenter')">
          <img src="../../assets/nav4.png" alt>
          <p>奖励中心</p>
        </div>
        <div class="box_li" @click="goto_view('myOrder')">
          <img src="../../assets/nav5.png" alt>
          <p>我的订单</p>
        </div>
        <div class="box_li">
          <img src="../../assets/nav6.png" alt>
          <p>购物车</p>
        </div>
        <div class="box_li" @click="goto_view('addressAdd')">
          <img src="../../assets/nav7.png" alt>
          <p>收货地址</p>
        </div>
        <div class="box_li" @click="goto_view('hb')">
          <img src="../../assets/nav8.png" alt>
          <p>超级海报</p>
        </div>
        <div class="box_li">
          <img src="../../assets/nav9.png" alt>
          <p>超级名片</p>
        </div>
        <div class="box_li" @click="goto_view('teamIndex')">
          <img src="../../assets/nav10.png" alt>
          <p>我的团队</p>
        </div>
        <div class="box_li" @click="goto_view('brand')">
          <img src="../../assets/nav11.png" alt>
          <p>品牌介绍</p>
        </div>
        <div class="box_li" @click="goto_view('problem')">
          <img src="../../assets/nav12.png" alt>
          <p>常见问题</p>
        </div>
        <div class="box_li" @click="goto_view('setinfo')">
          <img src="../../assets/nav13.png" alt>
          <p>修改资料</p>
        </div>
        <div class="box_li" @click="goto_view('bindPhone')">
          <img src="../../assets/nav14.png" alt>
          <p>绑定手机</p>
        </div>
      </div>
    </div>

    <div class="qd_bg" v-show="qd_show" @click="hide_qd">
        <img src="../../assets/qd.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "center",
  data() {
    return {
      msg: "",
      nologin: true,
      qd_txt:"签到",
      qd_show:false,
      is_qd:false
    };
  },
  methods: {
    goto_view(url) {
      this.$router.push({
        //核心语句
        path: "/" + url //跳转的路径
      });
    },
    // 登录
    login(){
      this.nologin=false
    },

    // 签到
    qd_click(){
        this.qd_show=true
        this.is_qd=true
    },
    // 签到隐藏
    hide_qd(){
      this.qd_show=false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qd_bg{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.qd_bg img{
  width: 100%;
  height: 100%;
}

.login{
  display: flex;
  justify-content: space-between;
  padding: .3rem;
  align-items: center;
}
.login>div{
  flex: 1;
}
.login_left{
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  border-right: 0.01rem solid #FFF;
}
.login_left img{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: .5rem
}
.lflr{
  color: #FFF;
  text-align: center;
}
.lflr p{
  margin: .3rem 0;
}
.qd{

  border: 0.01rem solid #FFF;
  border-radius: .1rem;
  margin-bottom: .2rem;
  padding: .1rem .2rem;
}
.login_right div{
  color: #FFF;
  padding-left: .3rem;
  display: flex;
  align-items: center;
  padding: .1rem 0 .1rem .3rem;
}
.login_right div img{
  width: .3rem ;
  height: .3rem;
  margin-right: 0.05rem
}
.head {
  width: 100%;
  height: 3rem;
  background: url("../../assets/head.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.no_login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.no_login img {
  width: 1rem;
  height: 1rem;
}
.no_login p {
  color: #fff;
  border: 0.01rem solid #fff;
  padding: 0.1rem 0.2rem;
  border-radius: 0.1rem;
  margin-top: 0.2rem;
}
.conte {
  z-index: 10000;
  transform: translateY(-0.5rem);
}
.head_nav {
  width: 7rem;
  height: 1.6rem;
  background: #fff;
}
.head_nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  border-radius: 0.1rem;
  box-shadow: 0rem 0.1rem 0.2rem #ccc;
}
.item_box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item_box img {
  width: 0.7rem;
  height: 0.7rem;
  margin-bottom: 0.1rem;
}
.child_nav {
  width: 100%;
  background: #fff;
}
.child_nav .box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.box_li {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: 0.3rem 0;
  border-right: 0.01rem solid #ccc;
  border-bottom: 0.01rem solid #ccc;
}
.box_li:nth-child(4n + 0) {
  border-right: none;
}
.box_li img {
  width: 0.7rem;
  height: 0.7rem;
  margin-bottom: 0.1rem;
}
.box_li p {
  font-size: 0.2rem;
}
</style>
