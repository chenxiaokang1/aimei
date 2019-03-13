<template>
 <div class="suo">
     <ul class="lsuo">
         <li v-for="(item, i) in amsg" :key="i"><img :src="item.img"><span class="sese">{{item.ren}}</span><span class="se">{{item.many}}</span></li>
     </ul>
 </div>
</template>

<script>
export default {
 data () {
 return {
     amsg:[
         {ren:"艾美联合创始人",many:"￥0.00",img:require("../../assets/1.jpg")},
		 {ren:"艾美总裁",many:"￥0.00",img:require("../../assets/1.jpg")},
		 {ren:"艾美合伙人",many:"￥0.00",img:require("../../assets/1.jpg")},
		 {ren:"形象代言人",many:"￥0.00",img:require("../../assets/1.jpg")},
		 {ren:"艾美合伙人",many:"￥0.00",img:require("../../assets/1.jpg")},
         {ren:"形象代言人",many:"￥0.00",img:require("../../assets/1.jpg")},
         {ren:"形象代言人",many:"￥0.00",img:require("../../assets/1.jpg")},
		 {ren:"艾美合伙人",many:"￥0.00",img:require("../../assets/1.jpg")},
         {ren:"形象代言人",many:"￥0.00",img:require("../../assets/1.jpg")},
         {ren:"艾美合伙人",many:"￥0.00",img:require("../../assets/1.jpg")},
		
     ]
 }
 },
 methods:{
 }
}

</script>
<style scoped>
    .lsuo{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
            margin-top: 1.55rem;
    }
    .lsuo li{
        width: 3.43rem;
        height: 4.66rem;
        display: flex;
        flex-direction: column;
    }
    .lsuo img{
        width: 100%;
        height: 80%;
        border-radius: 0.1rem;
    }
    .sese{
        line-height: 0.6rem;
    }
    .se{
		color: #c1a25f;
        line-height: 0.2rem;
	}
</style>
