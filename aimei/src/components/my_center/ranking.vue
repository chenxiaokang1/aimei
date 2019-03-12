<template>
 <div>
     <div class="nav">
         <div   @click="check_nav($event)" v-for="(item ,index) in nav_data" :key="index" :id="item.id"  class="nav_item" :class="act_nav == index ? 'nav_act':''">
             {{item.name}}
         </div>
     </div>


     <!-- 积分排行内容 -->
     <div class="conten_box" v-if="act_nav==0">
         <div class="contetn_head">
             <div class="head_item">
                 <span>我的排名</span>
                 <span>1</span>
             </div>
             <div class="head_item">
                 <img src="../../assets/no_login.png" alt="">
                 <span>踢出个未来</span>
             </div>
              <div class="head_item">
                 <span>我的积分</span>
                 <span>200</span>
             </div>
         </div>
         <div class="content_list">
             <div class="list_item" v-for="(item,index) in 3" :key="index">
                 <div>
                 <img src="../../assets/logo.png" alt="">

                 </div>
                <span class="bane">美创占用就</span>
                <span class="jf">积分：320</span>
             </div>
         </div>
     </div>
      <!-- 爱心排行内容 -->
     <div class="conten_box"  v-if="act_nav==1">
         <div class="contetn_head">
             <div class="head_item">
                 <span>我的排名</span>
                 <span>1</span>
             </div>
             <div class="head_item">
                 <img src="../../assets/no_login.png" alt="">
                 <span>踢出个未来</span>
             </div>
              <div class="head_item">
                 <span>我的积分</span>
                 <span>200</span>
             </div>
         </div>
         <div class="content_list">
             <div class="list_item" v-for="(item,index) in 8" :key="index">
                 <div>
                 <img src="../../assets/logo.png" alt="">

                 </div>
                <span class="bane">美创占用就</span>
                <span class="jf">积分：320</span>
             </div>
         </div>
     </div>
      <!-- 消费排行内容 -->
     <div class="conten_box"  v-if="act_nav==2">
         <div class="contetn_head">
             <div class="head_item">
                 <span>我的排名</span>
                 <span>1</span>
             </div>
             <div class="head_item">
                 <img src="../../assets/no_login.png" alt="">
                 <span>踢出个未来</span>
             </div>
              <div class="head_item">
                 <span>我的积分</span>
                 <span>200</span>
             </div>
         </div>
         <div class="content_list">
             <div class="list_item" v-for="(item,index) in 1" :key="index">
                 <div>
                 <img src="../../assets/logo.png" alt="">

                 </div>
                <span class="bane">美创占用就</span>
                <span class="jf">积分：320</span>
             </div>
         </div>
     </div>
       <!-- 佣金排行内容 -->
     <div class="conten_box"  v-if="act_nav==3">
         <div class="contetn_head">
             <div class="head_item">
                 <span>我的排名</span>
                 <span>1</span>
             </div>
             <div class="head_item">
                 <img src="../../assets/no_login.png" alt="">
                 <span>踢出个未来</span>
             </div>
              <div class="head_item">
                 <span>我的积分</span>
                 <span>200</span>
             </div>
         </div>
         <div class="content_list">
             <div class="list_item" v-for="(item,index) in 3" :key="index">
                 <div>
                 <img src="../../assets/logo.png" alt="">

                 </div>
                <span class="bane">美创占用就</span>
                <span class="jf">积分：320</span>
             </div>
         </div>
     </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
        nav_data:[
            {
                id:0,
                name:'积分排行'
            },
            {
                id:1,
                name:'爱心排行'
            },
            {
                id:2,
                name:'消费排行'
            },
            {
                id:3,
                name:'佣金排行'
            }
        ],
        act_nav:0   

    }
  },
  methods:{
      check_nav(ele){
          console.log(ele.target.id)
            this.act_nav = ele.target.id
      }
  }
}

</script>
<style scoped>
.nav{
    display: flex;
    background: #FFF;
    justify-content: space-around;
    font-size: .25rem;
    line-height: 1rem;
}
.nav_act{
    color: #d2bc91;
    border-bottom: 0.02rem solid #d2bc91;
}
.conten_box{
    padding: .3rem;
}
.contetn_head{
    width: 100%;
    height: 2rem;
    background: url('../../assets/ph.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #FFF;
}
.head_item{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content_list{
    background: #FFF;
    margin-top: .3rem;
}
.head_item img{
    width: .7rem;
    height: .7rem;
    margin-bottom: .1rem;
}
.list_item{
    padding: .2rem;
    border-bottom: 0.01rem solid #f3f3f3;
    display: flex;
    justify-content: flex-start;
    font-size: .28rem;
    align-items: center;
}
.list_item img{
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
}
.list_item div{
    flex: 0.5;
}
.list_item span.bane{
    flex: 2.5;
}.list_item span.jf{
    flex: 1;
}
</style>
