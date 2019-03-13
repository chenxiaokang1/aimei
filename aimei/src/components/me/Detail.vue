<template>
 <div>
     <header>
     <van-nav-bar
        title="整形医生"
        left-text="返回"
        
        left-arrow
        @click-left="onClickLeft"
        />
    </header>
       <div class="xq">
           <div class="xq2">
           <img src="../../assets/3.jpg">
           </div>
           <ul class="xq3">
               <li v-for="(item,i) in tuo" :key="i"><h2>{{item.name}}</h2><p>职务：{{item.work}}</p><p>擅长项目：{{item.mu}}</p><p>时间：{{item.time}}</p><a href="tel:400">联系他</a></li>
           </ul>
           
       </div>
       <p class="xq4">医师介绍</p>
       <ul class="work">
           <li v-for="(item,i) in nag" :key="i">{{item}}</li>
       </ul>
 </div>
</template>

<script>
export default {
 data () {
 return {
     tuo:[
         {name:"李忠才",work:"医师",mu:"眼部无痕开大术五度隆鼻术",time:'2013至今'}
     ],
     nag:[
         "诶人hi购房我偶然间合同我奇偶人头",
         "诶人hi购房我偶然间合同我奇偶人头",
         "诶人hi购房我偶然间合同我奇偶人头",
         "诶人hi购房我偶然间合同我奇偶人头",
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
.xq{
    width: 7.10rem;
    height: 3.42rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin-top: 0.3rem;
}
.xq2{
    width: 3rem;
    height: 3.42rem;
}
.xq2 img{
    width: 100%;
    height: 100%;
    border-radius:0.2rem;
}
.xq3{
    width: 3.72rem;
}
.xq3 h2{
    font-size: 0.2rem;
    margin:  0.1rem 0;
}
.xq3 p{
    margin: 0.1rem 0;
}
.xq4{
    width: 1rem;
    border-bottom: 0.01rem solid #c1a25f;
    margin: 0.2rem auto;
}
.xq3 a{
    width: 1.84rem;
    height: 0.66rem;
    display: block;
    text-align: center;
    line-height: 0.66rem;
    background: #c1a25f;
    border-radius: 0.2rem;
    margin-top: 0.7rem;
    margin-left: 0.5rem;
}
.work{
    width: 7.10rem;
    margin: 0 auto;
}
.work li{
    margin: 0.02rem 0;
}
</style>
