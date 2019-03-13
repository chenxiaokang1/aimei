<template>
  <div>
    <div class="order-list">
      <div class="order_item" v-for="(item,index) in shop_msg" :key="index">
        <div class="order_top">
          <p class="time">{{item.time}}</p>
          <p class="type">交易成功</p>
        </div>
        <div class="order_mid">
          <div class="img">
            <img :src=" item.img " alt>
          </div>
          <div class="mid_right">
            <p class="shop_name">{{item.name}}</p>
            <p class="shop_price">￥{{item.price}}</p>
            <p class="shop_num">x{{item.num}}</p>
          </div>
        </div>
        <div class="totle_price">
          共计：
          <span>￥{{item.price * item.num}}</span>
        </div>
        <div class="bottom_but">
          <div class="typetwobut" :id='index' @click="remove($event)">
            <span :id='index'>删除订单</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Dialog } from 'vant';
import Vue from 'vue'

Vue.use(Dialog)
export default {
  data() {
    return {
      shop_msg: [
        {
          id: 1,
          time: "2017-10-14 15:26:12",
          img: require("../../assets/1.jpg"),
          name: "商品名称",
          price: "11",
          order_type: 1,
          num: 1
        },
        {
          id: 2,
          time: "2017-10-14 15:26:12",
          img: require("../../assets/1.jpg"),
          name: "商品名称",
          price: "11",
          order_type: 2,
          num: 2
        },
        {
          id: 3,
          time: "2017-10-14 15:26:12",
          img: require("../../assets/1.jpg"),
          name: "商品名称",
          price: "11",
          order_type: 3,
          num: 3
        },
        {
          id: 4,
          time: "2017-10-14 15:26:12",
          img: require("../../assets/1.jpg"),
          name: "商品名称",
          price: "11",
          order_type: 4,
          num: 4
        }
      ]
    };
  },
  methods: {
      remove(e){
          console.log(e.target.id)
          Dialog.confirm({
            title: '标题',
            message: '确认删除订单？'
            }).then(() => {
            // on confirm
            this.shop_msg.splice(e.target.id,1)
            }).catch(() => {
            // on cancel
            });
          
      }
  }
};
</script>
<style scoped>
.order_item {
  padding: 0.3rem;
  background: #fff;

  margin: 0.2rem 0;
}
.order_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order_mid {
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
}
.order_mid > div.img {
  flex: 1;
}
.order_mid > div.mid_right {
  flex: 3;
}
.order_mid > div.img img {
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.3rem;
}
.type {
  color: #d2bc91;
}
.shop_name {
  font-size: 0.3rem;
  padding-bottom: 0.2rem;
}
.shop_price,
.shop_num {
  font-size: 0.25rem;
  color: #777;
  line-height: 0.5rem;
}
.totle_price {
  text-align: right;
  transform: translateY(-0.3rem);
  border-bottom: 0.01rem solid #f2f2f2;
  padding-bottom: 0.3rem;
}
.totle_price span {
  color: #d2bc91;
}
.bottom_but {
  display: flex;
  justify-content: flex-end;
}
.typeonebut span {
  display: inline-block;
  width: 1.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.2rem;
  border-radius: 0.1rem;
}
.typeonebut span:first-child {
  border: 0.01rem solid #b2b2b2;
  color: #777;
}
.typeonebut span:last-child {
  background: #d2bc91;
  color: #fff;
}
.typetwobut span {
  display: inline-block;
  width: 1.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.2rem;
  border-radius: 0.1rem;
  border: 0.01rem solid #b2b2b2;
  color: #777;
}
.typethreebut span {
  display: inline-block;
  width: 1.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.2rem;
  border-radius: 0.1rem;
  background: #d2bc91;
  color: #fff;
}
.typefourbut span {
  display: inline-block;
  width: 1.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.2rem;
  border-radius: 0.1rem;
  background: #d2bc91;
  color: #fff;
}
</style>
