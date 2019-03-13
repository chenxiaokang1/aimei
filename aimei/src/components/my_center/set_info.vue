<template>
  <div>
    <van-cell-group>
      <van-field type label="姓名：" placeholder="请输入姓名 "/>
      <van-field
        type
        label="性别："
        placeholder="请选择性别 >"
        :value="sex_value"
        @click="choose_sex()"
        readonly
      />
      <van-field type label="微信号：" placeholder="请输入微信号 "/>
      <van-field type label="邮箱：" placeholder="请输入邮箱 "/>
      <van-field type label="公司：" placeholder="请输入公司名称 "/>
      <van-field
        type
        label="职位："
        placeholder="请选择职位 >"
        :value="job_value"
        @click="choose_job()"
        readonly
      />
      <van-field
        type
        label="省市区："
        placeholder="请选择省市区 >"
        :value="address_msg"
        @click="citySelec_show"
        readonly
      />
      <van-field type label="开户银行：" placeholder="请输入开户银行 "/>
      <van-field type label="银行卡号：" placeholder="请输入银行卡号 "/>
      <van-field type label="持卡人：" placeholder="请输入持卡人 "/>
      <div class="up_img">
        <p>超级名片头像：</p>
        <div class="unimg"> <span v-if="!img">+</span><img v-if="img" img :src="img" alt=""></div>
          <van-uploader class="up_click" :after-read="onRead" accept="image/gif, image/jpeg" multiple>
            <van-icon name="photograph"/>
          </van-uploader>
      </div>

      <div class="save">保存</div>
    </van-cell-group>

    <!-- 选择性别 -->
    <van-actionsheet v-model="show" :actions="actions" @select="onSelect"/>
    <!-- 职位选择 -->
    <van-actionsheet v-model="job_show" :actions="job_actions" @select="job_onSelect"/>
    <!-- 城市选择 -->
    <div class="address-box" v-show="city_selec">
      <van-area
        class="cont"
        @confirm="chose_city_ok"
        @cancel="hide_citySelec"
        :columns-num="3"
        :area-list="areaList"
      />
    </div>

  </div>
</template>

<script>
import address from "../../libs/area.js";
export default {
  data() {
    return {
      areaList: address,
      // 性别
      show: false,
      sex_value: "",
      actions: [
        {
          name: "男"
        },
        {
          name: "女"
        }
      ],
      //   职位
      job_show: false,
      job_value: "",
      job_actions: [
        {
          name: "职位1"
        },
        {
          name: "职位2"
        }
      ],

      // 地址
      address_msg: "",
      city_selec: false,
      img:''
    };
  },
  methods: {
    //   选择性别
    choose_sex() {
      this.show = true;
    },
    // 选择性别弹出层
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      this.sex_value = item.name;
    },

    //   选择职位
    choose_job() {
      this.job_show = true;
    },
    // 选择职位弹出层
    job_onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.job_show = false;
      this.job_value = item.name;
    },

    // 选择城市成功
    citySelec_show() {
      this.city_selec = true;
    },
    chose_city_ok(value) {
      console.log(value);
      this.address_msg = value[0].name + value[1].name + value[2].name;
      this.city_selec = false;
    },
    hide_citySelec() {
      this.city_selec = false;
    },

    // 上传图片
    onRead(file) {
      console.log(file)
      this.img =file.content
    }
  }
};
</script>
<style >
body{
    background: #FFF;
}
.up_img {
    position: relative;
  display: flex;
  padding: 0.3rem;
  font-size: 0.25rem;
  color: #333;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.01rem solid #f2f2f2;
}
.unimg img{
    width: 100%;
    height: 100%;
}
.up_click{
    width: 1.5rem;
    height: 1.5rem;
    background: #ccc;
    position: absolute;
    right: .5rem;
    opacity: 0;
}
.unimg {
  width: 2rem;
  height: 2rem;
  border: 0.01rem solid #ccc;
  line-height: 2rem;
  text-align: center;
  font-size: 1rem;
  color: #ccc;
}
.van-field__control {
  text-align: right !important;
}
.address-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.cont {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.save{
    width: 3rem;
    height: .8rem;
    line-height: .8rem;
    font-size: .25rem;
    color: #FFF;
    background: #c1a25f;
    border-radius: .1rem;
    margin: .5rem auto;
    text-align: center;
}
</style>
