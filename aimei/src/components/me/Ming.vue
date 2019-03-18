<template>
 <div class="c-uu">
     <div class="c-ee">
         <van-nav-bar
        title="超级名片"
        left-text="返回"
        
        left-arrow
        @click-left="onClickLeft"
        />
     </div>
     	<div class="c-rr">
         <div  v-for="(item,i) in msg" :key="i" class="pian">
          <div class="csh">
            <div class="c-csh"> 
            <img :src="item.img" class="imo">
            </div>
            <ul class="fu">
              <li class="font"><h2>{{item.name}}<span>{{item.xing}}</span></h2></li>
              <li>手机：{{item.number}}</li>
              <li>微信：{{item.wei}}</li>
              <li>邮箱：{{item.email}}</li>
            </ul>
            <img src="../../assets/fen.jpg" class="imt">
            
          </div>
          <div class="c-zhizhi">
              <p>职位：{{item.wok}}</p>
              <p>公司：{{item.pos}}</p>
              <p>地址：{{item.dizhi}}</p>
            </div>
      </div>
    </div>
    <div class="c-tt">
      <van-button square type="primary" to="/bj" class="jiaw">修改名片</van-button>
    </div>
 </div>
</template>

<script>
export default {
 data () {
 return {
     msg:[{name:"阿卡丽",number:"1243454",xing:'男',img:require("../../assets/ming1.png"),wei:"123445",email:'24555',wok:'董事长',pos:'阳光公司',dizhi:'北京'}]
 }
 },
 methods:{
     onClickLeft() {
      this.$router.go(-1)
    },
 }
}

</script>
<style scoped>
.c-zhizhi{
  margin-top:2.8rem;
}
.jiaw{
  width: 4.2rem;
    height: 0.84rem;
    margin-left: 1.6rem;
    border-radius: 0.2rem;
}
.c-uu{
  height: 100%;
    display: flex;
    flex-direction: column;
}
.fu li{
  margin-bottom: 0.1rem;
}
.c-rr{
  flex: 1;
    overflow: auto;
    height: 2rem;
}
.font{
  font-size: 0.4rem;
}
.font span{
  margin-left: 0.5rem;
  font-size: 0.2rem;
}
.font h2{
      margin-bottom: 0.3rem;
}
.fu{
      margin-left: -2.5rem;
}
.imt{
  width: 5%;
  height: 18%;
}
.pian{
      width: 95%;
    height: 3.5rem;
    margin: 0.1rem auto;
        display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.imo{
  width: 100%;
    height: 100%;
    border-radius: 0.1rem;
}
.csh{
 display: flex;
    justify-content: space-between;
    height: 2.4rem;
}
.c-csh{
  width: 25%;
    height: 2.4rem;
}
.c-tt button{
  background-color: #c1a25f;
  border: none;
  margin-bottom: 2rem;
}
</style>
