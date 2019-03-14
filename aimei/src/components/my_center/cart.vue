<template>
  <div>
    <van-nav-bar title="购物车"  left-arrow @click-left="reruen"></van-nav-bar> 
    <!-- <van-checkbox-group v-model="result" @change="haschange"> -->
      <div class="goods_item" v-for="(item,index) in goods_lis" :key="index">
        <van-checkbox checked  v-model="item.checked" @change="checkedd(item.checked)"></van-checkbox>
        <div class="goods">
          <div class="goods_img">
            <img src="../../assets/3.jpg" alt>
          </div>
          <div class="good_msg">
            <p class="name">{{item.name}}</p>
            <p class="price">{{item.price}}</p>
            <div class="but">
              <div class="chose_num" v-if="item.checked">
                <div class="edd" @click="edd(item.id)">-</div>
                <div class="num" >{{item.num}}</div>
                <div class="add" @click="add(item.id)">+</div>
              </div>
              <div class="chose_num" v-if="!item.checked">
                <div class="edd">-</div>
                <div class="num" >{{item.num}}</div>
                <div class="add" >+</div>
              </div>
              <div class="delate" @click="delate(item.id)">删除</div>
            </div>
          </div>
        </div>
      </div>
    <!-- </van-checkbox-group> -->
    <div class="bottom">
      <div>
        <van-checkbox v-model="checked"  @change="check_all">全选</van-checkbox>
      </div>
      <div>
        <div class="total" style="margin-right:.3rem">合计：
          <span style="color:#c1a25f;">￥{{total_price}}</span>
        </div>
        <div class="pay">结算（{{total_number}}）</div>
      </div>
    </div>
    <!-- <button @click="result_cons">aaa</button> -->
  </div>
</template>

<script>
import {Dialog  } from 'vant';
import Vue from 'vue'

Vue.use(Dialog )

export default {
  data() {
    return {
      checked: false,
      goods_lis:[{
          id:1,
          name:'商品名',
          price:'22',
          num:12,
          check:false
      },{
          id:2,
          name:'商品名',
          price:'22',
          num:1,
          check:false
      },{
          id:3,
          name:'商品名',
          price:'22',
          num:1,
          check:false
      },
      ],
      list: ["a", "b", "c"],
      result: [],
      total_price: 0,
      total_number:0
    };
  },
  methods: {
    //   删除
    delate(id){
        var that=this;
        that.goods_lis.forEach(function(ee,vv){
            if(id == ee.id){
                Dialog.confirm({
                    title: '提示',
                    message: '确认删除该商品？'
                    }).then(() => {
                    // on confirm
                    
                             that.goods_lis.splice(vv,1)  
                             that.count_total()
                    }).catch(() => {
                    // on cancel
                    });

               
            }
        })
    },
    // 选择每个商品的时候

      checkedd(check){
         console.log(check)
         this.count_total()
      },
    //   计算总价格 和总数量
    count_total(){
        var num=0;
        var price=0;
        this.goods_lis.forEach(element => {
            if(element.checked){
                num=num+element.num
                price= price+element.num*element.price
            }
            
        })
        this.total_price=price
        this.total_number=num
    },
    // 选择所有
    check_all(){
        if(this.checked == true){
            this.goods_lis.forEach(element => {
              element.checked=true
          })
        }
        else{
             this.goods_lis.forEach(element => {
              element.checked=false
          })
        }
        
        this.count_total()
    },
    // 返回
    reruen(){
        this.$router.back(-1)
    },
  
    // 减少
     edd(id){
         console.log(id)
         this.goods_lis.forEach(element => {
            if(element.id == id){
                if(element.num >1){
                    element.num--
                    this.count_total()
                }
            }
         });
     },
    //  增加
     add(id){
        this.goods_lis.forEach(element => {
            if(element.id == id){
                    element.num++
                    this.count_total()
            }
         });
     }
  }
};
</script>
<style scoped>
.goods_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0.3rem;
}
.van-checkbox {
  flex: 1;
}
.goods {
  flex: 9;
  display: flex;
  align-items: center;
}
.goods_img {
  flex: 1;
  margin-right: 0.2rem;
}
.goods_img img {
  width: 1.6rem;
  height: 1.6rem;
}
.good_msg {
  flex: 4;
}
.but {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name {
  font-size: 0.25rem;
}
.price {
  padding: 0.2rem 0;
}
.chose_num {
  display: flex;
  align-items: center;
}
.edd,
.add {
  background: #f2f2f2;
  padding: 0.1rem 0.2rem;
  text-align: center;
}
.num {
  padding: 0.1rem 0.3rem;
  background: #f2f2f2;
  margin: 0 0.2rem;
}
.delate {
  padding: 0.1rem 0.2rem;
  background: #f2f2f2;
  font-size: 0.23rem;
}
.bottom {
  display: flex;
  line-height: 1rem;
  background: #fff;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-left: 0.2rem;
}

.bottom div {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.pay {
  /* height: 100%; */
  padding: 0 0.2rem;
  background: #c1a25f;
  color: #f2f2f2;
}
</style>
