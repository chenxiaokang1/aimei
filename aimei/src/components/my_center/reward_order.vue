<template>
  <div>
    <van-nav-bar title="奖励订单"  left-arrow @click-left="reruen"></van-nav-bar>

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
    <div class="order_list">
      <div class="order_item" v-for="(item ,index) in show_msg" :key="index">
        <div class="img">
          <img :src="item.img" alt>
        </div>
        <div class="order_msg">
          <p class="name">{{item.name}} {{item.type_id == 1?"(直接)":"(间接)"}} </p>
          <p class="ordernum">{{item.order_num}}</p>
          <p class="time">{{item.time}}</p>
        </div>
        <div class="pay">
          <p>{{item.price}}</p>
          <p >{{item.order_type == 1?"代付款":(item.order_type == 2?"待发货":(item.order_type == 3?"待收货":(item.order_type == 4)?"已完成":""))}}</p>
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
          name: "小米粒儿",
          price: "680.00",
          order_type: 1,
          type_id: 1,
          order_num: "201709121003"
        },
        {
          id: 2,
          time: "2017-10-14 15:26:12",
          img: require("../../assets/1.jpg"),
          name: "小米粒儿",
          price: "680.00",
          order_type: 2,
          type_id: 2,
          order_num: "201709121003"
        },
        {
          id: 3,
          time: "2017-10-14 15:26:12",
          img: require("../../assets/1.jpg"),
          name: "小米粒儿",
          price: "680.00",
          order_type: 3,
          type_id: 2,
          order_num: "201709121003"
        },
        {
          id: 4,
          time: "2017-10-14 15:26:12",
          img: require("../../assets/1.jpg"),
          name: "小米粒儿",
          price: "680.00",
          order_type: 4,
          type_id: 1,
          order_num: "201709121003"
        }
      ],
      show_msg: ""
    };
  },
  mounted() {
    this.check_shop_type();
  },
  methods: {
     // 返回
    reruen(){
        this.$router.back(-1)
    },
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
    },
    goto_detail(e) {
      this.$router.push({
        //核心语句
        path: "/" + e //跳转的路径
      });
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
.order_list{
    width: 100%;
    background: #FFF;
}
.order_item{
    padding: .3rem;
    border-bottom: 0.01rem solid #f2f2f2;
    display: flex;
    align-items: center;
}
.img{
    flex: 1;
}
.img img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
}
.order_msg{
    flex: 3.2;
    color: #666;
}
.pay{
    text-align: center;
    color: #666;
}
</style>
