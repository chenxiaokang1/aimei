<template>
  <div>
    <van-nav-bar title="收货地址"  left-arrow @click-left="reruen"></van-nav-bar>

    <van-address-edit
      :area-list="areaList"
     
      show-set-default
     
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
        />
  </div>
</template>

<script>
import address from '../../libs/area.js'
export default {
  data() {
    return {
      areaList:address,
      searchResult: []
    }
  },
    mounted() {

  
    },
  methods: {
    // 返回
    reruen(){
        this.$router.back(-1)
    },
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>
<style >
.van-button--danger{
  background: #c1a25f !important;
  border: none;
  width: 4rem;
  margin: 0 auto;
}
/*  */
</style>
