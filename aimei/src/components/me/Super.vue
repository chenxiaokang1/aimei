<template>
	<div class="zhen">
		<header>
      <div  v-for="(item,i) in msg" :key="i" class="pian" @click="voo">
        <img :src="item.img" class="imo">
        
        <ul class="fu">
          <li class="font"><h2>{{item.name}}<span>{{item.xing}}</span></h2></li>
          <li>手机：{{item.number}}</li>
        </ul>
        <img src="../../assets/xx.jpg" class="imt">
      </div>
    </header>
    <router-link to="/bj" class="jia">添加名片</router-link>
	</div>
</template>

<script>
	export default {
  name: 'Super',
  data () {
    return {
      msg:[{name:"阿卡丽",number:"1243454",xing:'男',img:require("../../assets/ming1.png")}]
    }
    
  },
  methods:{
    voo(){
      this.$router.push("/ming")
    }
    }
}
</script>
  
<style>
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
.fu li{
  margin-bottom: 0.1rem;
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
}
.imo{
  width: 20%;
    height: 73%;
    border-radius: 0.1rem;
}
  .jia{
   
    width: 4.2rem;
    height: 0.84rem;
    margin-left: 1.6rem;
    border-radius: 0.2rem;
     background: #c1a25f;
     display: block;
     text-align: center;
     line-height: 0.84rem;
  }
  /* .van-button--primary{
    background: #c1a25f;
    border-color: #c1a25f;
  } */
</style>