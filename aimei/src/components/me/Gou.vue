<template>
 <div class="you">
     <header>
         <van-nav-bar
        title="整形项目"
        left-text="返回"
        
        left-arrow
        @click-left="onClickLeft"
        />
     </header>
     <section>
         <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="../../assets/lun1.png"></van-swipe-item>
      <van-swipe-item><img src="../../assets/xiang_79.png"></van-swipe-item>
      <van-swipe-item><img src="../../assets/xiang_80.png"></van-swipe-item>
     </van-swipe>
     <div class="jst">
         <p>韩式永久韩式半永久 韩式纹眉 美瞳线 清秀眉目</p>
         <p><span class="hu">￥599.0</span> <span class="yin">送1000积分</span></p>
     </div>
     <div class="c-jie">
         <img src="../../assets/xiang_78.png">
     </div>


     </section>
     <footer>
         <van-goods-action>
            <van-goods-action-big-btn
                text="加入购物车"
                
                @click="onClickBigBtn"
            />
            
            <van-icon name="shopping-cart" class="c-che"/>
           
            <van-goods-action-big-btn
                primary
                
                text="立即购买"
                @click="on"
               
            />
             <van-icon name="gold-coin" class="c-qian"/>
         </van-goods-action>
         <van-popup v-model="show" position="bottom" :overlay="false">
            <div class="ggo">
                <div class="tops">
                    <img src="../../assets/1.jpg">
                    <ul class="qing">
                        <li class="xx" @click="xguan"><img src="../../assets/xx.jpg"></li>
                        <li>衡力肉毒素100单位</li>
                        <li>￥599</li>
                        <li>库存999</li>
                    </ul>
                </div>
                <div class="bottom">
                    <p>购买数量</p>
                    <van-stepper v-model="value" />
                </div>
            </div>
         </van-popup>
         <van-popup v-model="show5" position="right" >
             <Ding></Ding>
            
         </van-popup>
     </footer>
 </div>
</template>

<script>
import Ding from './Ding'
export default {
 data () {
 return {
     show:false,
     show5:false,
     value:1,
 }
 },
 methods:{
      onClickLeft() {
      this.$router.go(-1)
    },
    onClickBigBtn() {
      this.show=true
    },
    xguan(){
        this.show=false
    },
    on(){
        // this.show5=true
        this.$router.push('/ding')
    },
   

 },
 components:{
     Ding,
 }
}

</script>
<style scoped>
.c-qian{
        font-size: 0.6rem;
    color: white;
    position: absolute;
    top: 0.2rem;
    left: 4.3rem;
}
.c-che{
    font-size: 0.6rem;
    color: white;
    position: absolute;
    top: 0.2rem;
    left: 0.4rem;
}

footer{
    position: relative;
}
.c-jie{
    margin-bottom: 1rem;
}
.c-jie img{
    width: 100%;
}
.you{
    height: 100vh;
    display: flex;
    flex-direction: column;

}
section{
    flex:1;
    overflow: auto;
}
.hu{
    color: #c1a25f;
}
.jst{
    margin: 0.1rem;
}
.yin{
    color: #aeaeae;
}
.van-button--warning{
    background: #461974;
}
.van-button--danger{
    background: #c1a25f;
}
.van-swipe{
    height: 5.3rem;
}
.van-swipe img{
    width: 100%;
    height: 100%;
}
.ggo{
    height: 2.5rem;
}
.tops{
    display: flex;
    margin: 0.3rem auto 0;
    width: 95%;

    
}
.tops ul{
    margin-left: 0.2rem;
}
.tops img{
   width: 22%;
    height: 72%;
    margin-left: 0.2rem;
}
.bottom{
    margin-top: 0.2rem;
    display: flex;
    margin-left: 0.2rem;
    width: 95%;
}
.bottom p{
    width: 20%
}
.van-stepper{
    margin-left: 2.8rem;
}
.qing{
    position: relative;
}
.xx{
    position: absolute;
    top: 0rem;
    left: 3rem;
    width: 2.4rem;
}
.xx img{
    margin-left: 1.5rem;
}
.van-popup--right{
    width: 100%;
    height: 100%;
}
.van-button{
    border: none;
}
</style>
