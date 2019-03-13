<template>
 <div>
     <div class="nav">  
         <div class="nav_item">
             姓名
         </div>
         <div class="nav_item">
             电话
         </div>
         <div class="nav_item">
             时间
         </div>
     </div>
     <div class="content">
         <div class="conten_item" v-for="(item,index) in 12" :key="index">
             <div>张浩楠</div>
             <div>17634910466</div>
             <div>2017-09-12 <br>  10:22:21</div>
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
