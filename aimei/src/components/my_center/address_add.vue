<template>
  <div>
    <div class="item" v-for="(item,index) in order_list" :key="index">
      <div class="item_top" >
        <p class="name">张三</p>
        <p class="tel">17634810426</p>
      </div>
      <div class="address">河南省 郑州市 金水区 国基路60号国家知识产权创意园区</div>
      <div class="item_bot">
          <div  class="bot_left">
                <van-switch v-model="item.ischeck"  @change="change()"  size="17px"/>
                <span>默认地址</span>
          </div>
          <div class="bot_but">
              <span>编辑</span>
              <span>删除</span>
          </div>
      </div>
    </div>
    <div class="addbut" @click="goto_view('address')">添加地址</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        checked:false ,
        order_list:[
            {
                ischeck:false
            },
            {
                ischeck:false
            },
            {
                ischeck:false
            }
        ]
    };
  },
  methods: {
      change(e){
          console.log(this.checked)
      },
      goto_view(url){
         this.$router.push({  //核心语句
         path:"/"+url  //跳转的路径
       
      })
    }
  }
};
</script>
<style scoped>
.item{
    width: 7.1rem;
    background: #FFF;
    border-radius: .1rem;
    margin: .2rem auto;
    padding: .2rem .3rem;
}
.item_top{
    font-size: .25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #888;
}
.address{
    width: 100%;
    font-size: .25rem;
    color: #999;
    padding: .2rem 0;
    border-bottom: 0.01rem solid #F2f2f2;
}
.item_bot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .2rem;
    color: #999;
}
.item_bot div{
    display: flex;
    align-items: center;
}
.van-switch{
    margin-right: .2rem;
}
.item_bot div.bot_but span{
    margin-left: .2rem;
    padding: .1rem .2rem;
    border-radius: .1rem;
}
.item_bot div.bot_but span:first-child{
    background: #c1a25f;
    color: #FFF;
}
.item_bot div.bot_but span:last-child{
    background: #f2f2f2;
    color: #333;
    border:0.01rem solid #ccc;
}
.addbut{
    width: 4.2rem;
    height: .8rem;
    background: #c1a25f;
    color: #FFF;
    line-height: .8rem;
    text-align: center;
    font-size: .25rem;
    border-radius: .1rem;
    margin: .5rem auto;
}
</style>
