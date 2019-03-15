<template>
 <div>
     <header>
         <van-nav-bar
        title="支付成功"
        
        
        left-arrow
        @click-left="onClickLeft"
        />
     </header>
     <section>
         <div class="logo">
             <div class="li">
                <div class="toone">
                    <p><img src="../../assets/ffoo.jpg"></p>
                    <p>支付成功</p>
                </div>
                <ul class="zhsan">
                    <li>收货人：张三</li>
                    <li>联系电话：1246566</li>
                    <li>收货地址：郑州市金水区</li>
                    <li>支付金额：￥380.00</li>
                </ul>
                <div class="an">
                   <router-link to="/home" tag="button" class="hui">回到首页</router-link>
                   <button class="ddxq">订单详情</button>
                </div>
            </div>
         </div>
     </section>
 </div>
</template>

<script>
export default {
 data () {
 return {
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
.logo{
        width: 7.1rem;
    height: 6.8rem;
    background: white;
    margin: 0.1rem auto;
}
.li{
        width: 5.96rem;
    height: 6.8rem;
    margin: 0 auto;
    
}
.toone{
    border-bottom: 0.01rem solid #f5f5f5;
}
.toone img{
    width: 20%;
}
.toone p{
    text-align: center;
    margin: 0.1rem 0;
}
.zhsan{
    margin-top: 0.2rem;
    border-bottom: 0.01rem solid #f5f5f5;
}
.zhsan li{
    margin:0.2rem 0;
}
.an{
    margin: 1rem;
}
.hui{
    width: 1.6rem;
    height: 0.5rem;
    background: #ebebeb;
    border-radius: 0.1rem;
}

.ddxq{
    
    width: 1.6rem;
    height: 0.5rem;
    background: #c1a25f;
    border-radius: 0.1rem;
    margin-left: .5rem;
    color: white;

}
</style>
