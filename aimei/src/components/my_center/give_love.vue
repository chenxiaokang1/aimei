<template>
  <div>
    <van-nav-bar title="爱心值转让"  left-arrow @click-left="reruen"></van-nav-bar>

    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="my_fans">
      <div class="title">我的粉丝</div>
      <div class="fans_item" v-for="(item,index) in showData" :key="index">
        <div class="head_img">
          <img :src="item.thumb" alt>
        </div>
        <div class="name">{{item.name}}</div>
        <div class="but" @click="show_input">转让给他</div>
      </div>
    </div>

    <van-dialog title='爱心值 ' v-model="show"  show-cancel-button @confirm='click_ok' @cancel='click_no'>
      <input type="text" v-model="num" class="num_love" placeholder="请输入转让爱心值">
    </van-dialog>
  </div>
</template>

<script>
import {Toast } from 'vant';
import Vue from 'vue'

Vue.use(Toast)
export default {
  data() {
    return {
      value: "",
      
      fans_data: [
        {
          name: "李明",
          thumb: require("../../assets/brand.png"),
          id: 1
        },
        {
          name: "张三",
          thumb: require("../../assets/brand.png"),
          id: 2
        },
        {
          name: "王五",
          thumb: require("../../assets/brand.png"),
          id: 3
        },
        {
          name: "赵六",
          thumb: require("../../assets/brand.png"),
          id: 4
        }
      ],
      showData: "",
      show:false ,
      num:''
    };
  },
  mounted() {
    this.showData = this.fans_data;
    console.log(this.showData);
  },
  methods: {
     // 返回
    reruen(){
        this.$router.back(-1)
    },
    //   模糊查询
    onSearch() {
      console.log(this.value);
      this.fuzzyQuery(this.fans_data, this.value);
    },
    fuzzyQuery(list, keyWord) {
      var that = this;
      var arr = [];
      for (var i = 0; i < list.length; i++) {
        if (list[i].name.indexOf(keyWord) >= 0) {
          arr.push(list[i]);
        }
      }
      console.log(arr);
      that.showData = arr;
      return arr;
    },
    // 显示填写转让爱心值输入表单
    show_input(){
        this.show=true
    },
    // 点击确定按钮
    click_ok(){
     console.log(this.num)
     this.show=false
     if(!this.num){
         Toast.fail('填写赠送数量');
     }
    },
     click_no(){
     this.show=false
    }
  }
};
</script>
<style scoped>

.num_love{
  text-align: center;
  font-size: .25rem;
   line-height: .6rem;
   width: 100%;
   margin: .2rem;
}
.my_fans {
  width: 100%;
  margin-top: 0.3rem;
  background: #fff;
}
.title {
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.3rem;
}
.fans_item {
  display: flex;
  align-items: center;
  padding: 0.3rem;
  border-bottom: 0.01rem solid #f2f2f2;
}
.head_img {
  flex: 1;
}
.head_img img {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  display: block;
  /* margin: 0 auto; */
}
.name {
  flex: 3;
  color: #666;
  font-size: 0.25rem;
}
.but {
  flex: 1;
  width: 1.4rem;
  font-size: 0.25rem;
  height: 0.6rem;
  background: #c1a25f;
  border-radius: 0.1rem;
  color: #fff;
  text-align: center;
  height: 0.7rem;
  line-height: 0.7rem;
  margin: 0 auto;
}
</style>
