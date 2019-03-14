<template>
 <div>
    <van-nav-bar title="我的团队"  left-arrow @click-left="reruen"></van-nav-bar>
     
     <div class="tab">
         <div class="tab_item " @click="checkThis(1)" :class="oneAcat?'act':''">
            直接(12)
         </div>
         <div class="tab_item" @click="checkThis(2)" :class="twoAcat?'act':''">
             间接(6)
         </div>
     </div>
     <div class="nav">  
         <div class="nav_item">
             会员信息
         </div>
         <div class="nav_item">
             TA消费订单
         </div>
         <div class="nav_item">
             金额
         </div>
     </div>
     <div class="content">
         <div class="conten_item" v-for="(item,index) in for_data" :key="index">
             <div class="head_img">
                 <img src="../../assets/head.png" alt="">
                 <p>小米粒</p>
             </div>
             <div>201709161514</div>
             <div>1980.00</div>
         </div>
     </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
        for_data:12,
        oneAcat:true,
        twoAcat:false
    }
  },
  methods:{
           // 返回
    reruen(){
        this.$router.back(-1)
    },
      checkThis(item){
          var that= this;
          if(item == 1){
              that.for_data =12;
                that.oneAcat=true
                  that.twoAcat=false
          }
          if(item == 2){
              that.for_data =6;
                that.oneAcat=false
                that.twoAcat=true
          }
      }
  }
}

</script>
<style scoped>
.tab{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: .2rem 0;
    background: #FFF;
    
}
.act{
    color: #c1a25f;
    border-bottom: 0.01rem solid #c1a25f;
}
.tab_item{
    line-height: .8rem;
    /* flex: 1; */
    text-align: center;
    /* border-right: 0.01rem solid #F2f2f2 */
}
.head_img{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.head_img img{
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    margin-bottom: .05rem;
}
.nav{
    width: 100%;
    height: .8rem;
    color: #888;
    background: #FFF;
    font-size: .23rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
     border-bottom: 0.01rem solid #F2f2f2;
}
.nav_item{
    border-right: 0.01rem solid #F2f2f2;
    flex: 1;
    text-align: center;
}
.content{
    background: #FFF;
}
.conten_item{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: .2rem 0;
    border-bottom: 0.01rem solid #F2f2f2;


}
.conten_item div{
    flex: 1;
    text-align: center;
    color: #888;
}
</style>
