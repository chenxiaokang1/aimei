<template>
  <div>
    <van-address-edit
      :area-list="areaList"
     
      show-delete
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
        console.log(address)
    },
  methods: {
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
<style scoped>
</style>
