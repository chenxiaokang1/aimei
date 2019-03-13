<template>
 <div>
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
         <div class="conten_item" v-for="(item,index) in 12" :key="index">
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
    }
  },
  methods:{
  }
}

</script>
<style scoped>
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
    margin: .2rem 0;
    font-size: .23rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
