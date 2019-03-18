<template>
 <div class="suo">
     <ul class="lsuo">
         <router-link to="/gou" tag="li" v-for="(item, i) in amsg" :key="i"><img :src="item.img"><span class="sese">{{item.ren}}</span><span class="se">{{item.many}}</span></router-link>
     </ul>
 </div>
</template>

<script>
export default {
 data () {
 return {
     amsg:[
         {ren:"艾美联合创始人",many:"￥0.00",img:require("../../assets/shou_37.png")},
		 {ren:"艾美总裁",many:"￥0.00",img:require("../../assets/shou_39.png")},
		 {ren:"艾美合伙人",many:"￥0.00",img:require("../../assets/shou_44.png")},
		 {ren:"形象代言人",many:"￥0.00",img:require("../../assets/shou_45.png")},
		 
		
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
