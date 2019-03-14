<template>
 <div class="ys">
     <van-nav-bar
        title="整形医生"
        left-text="返回"
        
        left-arrow
        @click-left="onClickLeft"
        />
        <ul class="ysjj">
            <router-link to="/detail" tag="li" v-for="(item,i) in ys" :key="i"><img :src="item.img"><p>{{item.ren}}</p><p>{{item.js}}</p></router-link>
        </ul>
 </div>
</template>

<script>
export default {
 data () {
 return {
     ys:[
         {ren:"李忠才",js:'擅长：各种大公会换个大厅内能挺好',img:require("../../assets/1.jpg")},
		 {ren:"戴维",js:'擅长：各种',img:require("../../assets/2.jpg")},
		{ren:"董瑞芳",js:'擅长：各种',img:require("../../assets/3.jpg")},				
        {ren:"陶为斌",js:'擅长：各种',img:require("../../assets/1.jpg")},
        {ren:"戴维",js:'擅长：各种',img:require("../../assets/2.jpg")},
		{ren:"董瑞芳",js:'擅长：各种',img:require("../../assets/3.jpg")},				
							
     ]
 }
 },
 methods:{
      onClickLeft() {
      this.$router.go(-1)
    },
 }
}

</script>
<style scoped>
.ysjj{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 1.3rem;
}
.ysjj li{
    width: 3.04rem;
    height: 4.76rem;
}
.ysjj img{
    width: 100%;
    height: 70%;
    border-radius: 0.2rem;
}
.van-nav-bar{
    position: fixed;
    width: 100%;
    top: 0;

}

</style>
