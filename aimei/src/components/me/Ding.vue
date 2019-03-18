<template>
 <div class="jaio">
     <header>
         <van-nav-bar
            title="确认订单"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
           
     </header>
     <section>
         <div class="tian">
            <p>添加地址<span>></span></p> 
         </div>
         <div class="hsbyj">
            <div class="hsb">
                <img src="../../assets/1.jpg">
                <ul class="you">
                    <li>韩式半永久韩式纹眉...</li>
                    <li><span class="se">￥599.0</span><span>x{{shu}}</span></li>
                </ul>
            </div>
            <p><span class="lrf">共 1 件商品  合计</span><span class="se">￥599.00</span></p>
         </div>
         <div class="zhon">
             <ul class="zhonu">
                 <li><i>商品金额：</i><span class="se">￥599.00</span></li>
                 <li><i>运费</i><span>包邮</span></li>
                 <li class="c-jifen"><i>0积分可抵扣0.00元</i><span><van-switch v-model="checked" size="0.5rem" /></span></li>
                 <li class="c-jifen"><i>0爱心值可抵扣0.00元</i><span><van-switch v-model="checked2"  size="0.5rem"/></span></li>
             </ul>
         </div>
         <div class="xin">
             <input type="text" placeholder="请输入备注信息">
         </div>
         
     </section>
     <footer>
         
             <p class="one">合计金额:  <span>￥{{mony}}</span></p>
             <router-link to="/zf" class="two" >去付款</router-link>

         
     </footer>
 </div>
</template>

<script>
export default {
   
 data () {
 return {
     mony:30,
     shu:1,
     checked: true,
     checked2: true
 }
 },
 methods:{
      onClickLeft() {
      this.$router.go(-1)
    },
  
 },
 
}

</script>
<style scoped>
.hsbyj{
    margin: 0.2rem 0;
    background: white;
}
.hsbyj p{
    border-top: 0.05rem solid #f5f5f5;
    text-align: right;
}
.c-jifen span{
    margin-top: 0.1rem;
    height: 100%;
}
.lrf{
    margin-left: 2rem;
}
.se{
    color: #c1a25f;
        margin-right: 0.2rem;
}
.xin input{
    width: 95%;
    height: 2rem;
    border: 0.01rem solid #f5f5f5;
    border-radius: 0.1rem;
    margin-left: 0.1rem;
}
.jaio{
    background: #f5f5f5;
    height: 100vh;
    display: flex;
    flex-direction: column;

}
section{
    flex: 1;
    overflow: auto;
    

}
footer{
    background: white;
    display: flex;
    
    justify-content: space-between;
    height: 0.8rem;
    line-height: 0.8rem;
}
footer p{
    height: 0.8rem;
    line-height: 0.8rem;
}
.one span{
    color: #c1a25f;
}
.two{
    background: #c1a25f;
    color: white;
}
.tian{
    height: 0.5rem;
    background: white;
    margin-top: 0.2rem;
}
.tian p{
    line-height: 0.5rem;
    margin: 0 0.2rem; 
}
.tian span{
    float:right;
}
.hsb{
    display: flex;
        padding: 0.2rem 0.1rem;
}
.hsb img{
    width: 20%;
    height: 20%;
}
.you{
    width: 70%;
    margin-left: 0.2rem;

}
.you span:last-child{
    float: right;
}
.zhonu{
    
    margin: 0.1rem 0;
}
.zhonu li{
    height: 0.8rem;
    line-height: 0.8rem;
    margin-top:0.1rem;
    border-top: 0.01rem solid #f5f5f5;
    border-bottom: 0.01rem solid #f5f5f5;
    background: white;
}
.zhonu span{
    float: right;
    margin-right: 0.2rem;
} 
.zhonu i{
    margin-left: 0.2rem;
}
</style>
