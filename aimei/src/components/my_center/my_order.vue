<template>
  <div>
    <div class="nav">
      <div
        @click="check_nav($event)"
        v-for="(item ,index) in nav_data"
        :key="index"
        :id="item.id"
        class="nav_item"
        :class="act_nav == index ? 'nav_act':''"
      >{{item.name}}</div>
    </div>
    <div class="order-list">
      <div class="order_item" v-for="(item,index) in show_msg" :key="index">
        <div class="order_top">
          <p class="time">{{item.time}}</p>
          <p class="type" v-if="item.order_type==1">未付款</p>
          <p class="type" v-if="item.order_type==2">待发货</p>
          <p class="type" v-if="item.order_type==3">待收货</p>
          <p class="type" v-if="item.order_type==4">交易成功</p>
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
          <span>{{item.price * item.num}}</span>
        </div>
        <div class="bottom_but">
          <div class="typeonebut" v-if="item.order_type==1">
            <span>取消订单</span>
            <span>支付</span>
          </div>
          <div class="typetwobut" v-if="item.order_type==2">
            <span>取消订单</span>
          </div>
          <div class="typethreebut" v-if="item.order_type==3">
            <span>确认收货</span>
          </div>
          <div class="typefourbut" v-if="item.order_type==4">
            <span>删除订单</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav_data: [
        {
          id: 0,
          name: "全部"
        },
        {
          id: 1,
          name: "待付款"
        },
        {
          id: 2,
          name: "待发货"
        },
        {
          id: 3,
          name: "待收货"
        },
        {
          id: 4,
          name: "已完成"
        }
      ],
      act_nav: 0,
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
          num: 1
        },
        {
          id: 3,
          time: "2017-10-14 15:26:12",
          img: require("../../assets/1.jpg"),
          name: "商品名称",
          price: "11",
          order_type: 3,
          num: 1
        },
        {
          id: 4,
          time: "2017-10-14 15:26:12",
          img: require("../../assets/1.jpg"),
          name: "商品名称",
          price: "11",
          order_type: 4,
          num: 1
        }
      ],
      show_msg: ""
    };
  },
  mounted() {
    this.check_shop_type();
  },
  methods: {
    check_nav(ele) {
      console.log(ele.target.id);
      this.act_nav = ele.target.id;
      this.check_shop_type();
    },
    check_shop_type() {
      var _this = this;
      var data = [];
      if (_this.act_nav == 0) {
        data = _this.shop_msg;
      }
      if (_this.act_nav == 1) {
        _this.shop_msg.forEach(element => {
          if (element.order_type == 1) {
            data.push(element);
          }
        });
      }
      if (_this.act_nav == 2) {
        _this.shop_msg.forEach(element => {
          if (element.order_type == 2) {
            data.push(element);
          }
        });
      }
      if (_this.act_nav == 3) {
        _this.shop_msg.forEach(element => {
          if (element.order_type == 3) {
            data.push(element);
          }
        });
      }
       if (_this.act_nav == 4) {
        _this.shop_msg.forEach(element => {
          if (element.order_type == 4) {
            data.push(element);
          }
        });
      }
      _this.show_msg = data;
    }
  }
};
</script>
<style scoped>
.nav {
  margin: 0.3rem 0;
  display: flex;
  background: #fff;
  justify-content: space-around;
  font-size: 0.25rem;
  line-height: 0.8rem;
}
.nav_act {
  color: #d2bc91;
  border-bottom: 0.02rem solid #d2bc91;
}
.order-list {
}
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
