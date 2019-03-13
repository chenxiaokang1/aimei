<template>
 <div>
     <header>
     <van-nav-bar
        title="招商项目"
        left-text="返回"
        
        left-arrow
        @click-left="onClickLeft"
        />
     </header>
     <section>
         <ul class="todo">
             <li><img src="../../assets/1.jpg"><p>爱美联合创始人</p><p class="yell">￥0.00</p></li>
         </ul>
         <van-actionsheet
  v-model="show"
  :actions="actions"
  cancel-text="取消"
  @select="onSelect"
  @cancel="onCancel"
/>
<button @click="show = true">联系客服</button>
     </section>
 </div>
</template>

<script>
export default {
 data () {
 return {
     show: false,
      actions: [
        {
          name: '1234566'
        },
        {
          name: '呼叫',
          subname: ''
        },
       
      ]

 }
 },
 methods:{
      onClickLeft() {
      
      this.$router.go(-1)
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      // this.show = false;
			//  this.$toast(item.name);
			location.href="tel://"+12345
        },
        onCancel(item) {
    //   console.log(111)
    }
 }
}

</script>
<style scoped>
.todo li{
    height: 3.7rem;
}
.todo img{
    width: 100%;
    height: 80%;
}
.yell{
    color: #c1a25f;
}
button{
    width: 100%;
    height: 0.7rem;
    margin-top: 8rem;
    background: #c1a25f;
}
</style>
