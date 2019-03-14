<template>
  <div>
    <van-nav-bar title="绑定手机"  left-arrow @click-left="reruen"></van-nav-bar>

    <input class="tel" type="text" placeholder="请输入手机号">
    <div class="eCode">
      <input type="text" placeholder="请输入验证码">
      <div v-show="show" @click="getCode">{{yzm}}</div>
      <div v-show="!show">{{count}}</div>
    </div>
    <div class="submit">确认绑定</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      yzm: "发送验证码",
      timer: null,
      count: ""
    };
  },
  methods: {
    // 返回
    reruen(){
        this.$router.back(-1)
    },
    getCode() {
      const TIME_COUNT = 10;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    }
  }
};
</script>
<style scoped>
.tel {
  width: 6rem;
  height: 0.8rem;
  border-radius: 0.1rem;
  border: 0.01rem solid #ccc;
  font-size: 0.25rem;
  padding-left: 0.2rem;
  display: block;
  margin: 0.4rem auto;
}
.eCode {
  width: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.4rem auto;
}
.eCode input {
  width: 3.5rem;
  height: 0.8rem;
  border-radius: 0.1rem;
  border: 0.01rem solid #ccc;
  font-size: 0.25rem;
  padding-left: 0.2rem;
  display: block;
}
.eCode div {
  color: #fff;
  font-size: 0.25rem;
  background: #c1a25f;
  width: 2rem;
  line-height: 0.8rem;
  border-radius: 0.1rem;
  text-align: center;
}
.eCode div:last-child{
    background: #f2f2f2;
    border:0.01rem solid #ccc;
    color: #888;
}
.submit {
  width: 6rem;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.25rem;
  color: #fff;
  text-align: center;
  background: #c1a25f;
  border-radius: 0.1rem;
  margin: 0 auto;
}
</style>
