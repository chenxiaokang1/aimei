<template>
 <div class="suo">
     <ul class="lsuo">
         <router-link to="/gou" tag="li" v-for="(item, i) in amsg" :key="i"><img :src="item.img"><p class="sese">{{item.ren}}</p><span class="se">{{item.many}}</span></router-link>
     </ul>
 </div>
</template>

<script>
export default {
 data () {
 return {
     amsg:[
         {ren:"【韩式半永久妆】韩式半永久 韩   式纹眉 美瞳线 清秀眉目",many:"￥599.00",img:require("../../assets/xing_06.png")},
		 {ren:"【皮肤】郑州艾美整形赋活抗衰   美白针 祛黄除黑 养肝排毒 不...",many:"￥3800.00",img:require("../../assets/xing_10.png")},
		 {ren:"【激光去眼袋】郑州祛眼袋无痕祛眼袋 祛除眼周皱纹 轻...",many:"￥1580.00",img:require("../../assets/shou_37.png")},
		 {ren:"【眼部】郑州艾美眼综合双眼皮  +开内眼角+开外眼角+眼睑下至",many:"￥2980.00",img:require("../../assets/shou_39.png")},
		 {ren:"【自体脂肪填充】郑州自体脂肪   丰全脸 丰出饱满面相 脸型盈...",many:"￥8800.00",img:require("../../assets/shou_44.png")},
         {ren:"【吸脂】360°水动力吸脂 祛除人   体多余脂肪 瘦身 摆脱水...",many:"￥380.00",img:require("../../assets/shou_45.png")},
         {ren:"【玻尿酸填充面颊】打造出面部   自然美肌 塑造属于你的个性...",many:"￥509.00",img:require("../../assets/shou_50.png")},
		 {ren:"【玻尿酸填充面颊】打造出面部   自然美肌 塑造属于你的个性...",many:"￥599.00",img:require("../../assets/shou_52.png")},
        
		
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
            margin-bottom: 1.55rem;
    }
    .lsuo li{
        width: 3.43rem;
        height: 4.66rem;
        display: flex;
        flex-direction: column;
        margin-top: 0.3rem;
        margin-bottom: 0.8rem;
    }
    .lsuo img{
        width: 100%;
        height: 80%;
        border-radius: 0.1rem;
    }
    .sese{
       margin-top: 0.2rem;
    }
    .se{
		color: #c1a25f;
        line-height: 0.2rem;
        margin-top: 0.1rem;
	}
</style>
