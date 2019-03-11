<template>
  <div class="head">
      <div class="no_login">  
          <img src="../../assets/no_login.png" alt="">
          <p>登录</p>
      </div>

  </div>
</template>

<script>
export default {
  name: 'center',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head{
    width: 100%;
    height: 3rem;
    background: url('../../assets/head.png') no-repeat;
    background-size: 100% 100%;
    position: relative;

  }
  .no_login{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .no_login img{
    width: 1rem;
    height: 1rem;
  }
  .no_login p{
    color: #FFF;
    line-height: .7rem;
  }
</style>
