<template>
 <div>
    <van-nav-bar title="订单详情"  left-arrow @click-left="reruen"></van-nav-bar>

     <div class="head">
         订单状态：<span>订单关闭</span>
     </div>
    <div class="consignee">
        <div class="person">
            <span>收货人：张三</span>
            <span>1823695460</span>
        </div>
        <div class="address">收货地址：河南省郑州市金水区国基路60号国家知识产权创意园区 </div>
    </div>
    <div class="goods">
        <div class="goods_msg">
            <div class="thumb">
                <img src="../../assets/1.png" alt="">
            </div>
            <div class="goods_in">
                <p class="name">玻尿酸填充面颊</p>
                <p class="peice">￥8800</p>
                <p class="num">1</p>
            </div>
        </div>
        <div class="goods_money">
            <div>
                    商品金额：
            </div>
            <div>
                    ￥8800
            </div>
        </div>
         <div class="freight">
            <div>
                    运费
            </div>
            <div>
                    包邮
            </div>
        </div>
        <div class="goods-order clearfix">
            <div class="pay">
                <p>共 <span style="color:#c5a96d">1</span> 件</p>
                <p>支付金额：<span style="color:#c5a96d">￥8800</span></p>
            </div>
            <div class="but">
                删除订单
            </div>
        </div>
    </div>
    <div class="order_msg">
        <div>
            <span>订单编号：168523650096322695</span>
            <div>复制</div>
        </div>
          <div>
            <span>下单时间：2018-03-12 11:24:36</span>
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
       // 返回
    reruen(){
        this.$router.back(-1)
    },
  }
}

</script>
<style scoped>
.head{
    width: 100%;
    box-sizing: border-box;
    padding: .2rem .2rem;
    background: #FFF;
    margin:.2rem 0;
    font-size: .25rem;  
    color:#333  ;
}
.head span{
    color: #aaa;
}
.consignee{
       width: 100%;
    box-sizing: border-box;
    padding: .2rem .2rem;
    background: #FFF;
    margin:.2rem 0;
    font-size: .20rem;  
    color:#333  ;
}
.person{
    display: flex;
    justify-content: space-between;
    font-size: .22rem; 
    color: #666;
}
.address{
    color: #999;
    padding-top: 0.1rem;
}
.goods{
         width: 100%;
    box-sizing: border-box;
    padding: .2rem .2rem;
    background: #FFF;
    margin:.2rem 0;
    font-size: .20rem;  
    color:#333  ;
}
.goods_msg{
    display: flex;
    align-items: center;
    padding-bottom: .2rem;
    border-bottom: #f2f2f2;
}
.thumb{
    flex: 1;
    margin-right: .2rem;

}
.thumb img{
   width: 1.6rem;
   height: 1.6rem;
}
.goods_in{
    flex: 4.3;
    font-size: .25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.peice{
    padding: .2rem 0;
    color: #c5a96d;
}

.goods_money,.freight{
    padding: .2rem 0;
    font-size: .25rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.01rem solid #f2f2f2;
    color: #555;
    }
    .goods_money div:last-child{
        color:  #c5a96d;
    }
    .goods-order{
        padding: .2rem 0;
    }
    .pay{
        display: flex;
        justify-content: flex-end;
    }
    .but{
        /* display: flex;
        justify-content: flex-end; */
        width: 1.5rem;
        padding: .1rem 0;
        text-align: center;
        border-radius: .1rem;
        border: 0.01rem solid #ccc;
        background: #f2f2f2;
        float:right;
        margin-top: .2rem;
    }
    .order_msg{
          width: 100%;
    box-sizing: border-box;
    padding: .2rem .2rem;
    background: #FFF;
    margin:.2rem 0;
    font-size: .20rem;  
    color:#333  ;
    }
    .order_msg>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #999;
        margin: .1rem;
    }
    .order_msg>div div{
        border: 0.01rem solid #ccc;
        padding:0.1rem .2rem;
        border-radius: 0.1rem;
    }
</style>
