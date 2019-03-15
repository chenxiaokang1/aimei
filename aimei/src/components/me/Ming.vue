<template>
 <div>
     <header>
         <van-nav-bar
        title="超级名片"
        left-text="返回"
        
        left-arrow
        @click-left="onClickLeft"
        />
     </header>
     	<section>
         <div  v-for="(item,i) in msg" :key="i" class="pian">
          <div class="csh">
            <img :src="item.img" class="imo">
            
            <ul class="fu">
              <li class="font"><h2>{{item.name}}<span>{{item.xing}}</span></h2></li>
              <li>手机：{{item.number}}</li>
              <li>微信：{{item.wei}}</li>
              <li>邮箱：{{item.email}}</li>
            </ul>
            <img src="../../assets/fen.jpg" class="imt">
            
          </div>
          <div>
              <p>职位：{{item.wok}}</p>
              <p>公司：{{item.pos}}</p>
              <p>地址：{{item.dizhi}}</p>
            </div>
      </div>
    </section>
    <footer>
      <van-button square type="primary" to="/bj" class="jia">修改名片</van-button>
    </footer>
 </div>
</template>

<script>
export default {
 data () {
 return {
     msg:[{name:"你",number:"1243454",xing:'男',img:require("../../assets/1.jpg"),wei:"123445",email:'24555',wok:'董事长',pos:'阳光公司',dizhi:'北京'}]
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
.font{
  font-size: 0.4rem;
}
.font span{
  margin-left: 0.5rem;
  font-size: 0.2rem;
}
.fu{
      margin-left: -3rem;
}
.imt{
  width: 4%;
  height: 10%;
}
.pian{
      width: 95%;
    height: 2.5rem;
    margin: 0.1rem auto;
        display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.imo{
  width: 20%;
    height: 73%;
    border-radius: 0.1rem;
}
.csh{
 display: flex;
    justify-content: space-between;
}
</style>
