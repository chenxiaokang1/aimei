<template>
  <div >
    <van-nav-bar title="品牌介绍"  left-arrow @click-left="reruen"></van-nav-bar>
    <div class="content">
       <img src="../../assets/brand.png" alt>
    <div>
      艾美整形美容是雅加达最早的专业整形美容机构，属印尼三鼎集团的分支医疗机构，艾美的前身是印尼康美整形。艾美自成立以来，始终坚持以品质树品牌的办院宗旨，视手术质量为生命线。<br><br>
      郑州艾美整形美容医院是经过河南省卫生厅行政部门批准的专科整形美容医院，医院采用专利技术，打造和谐精致的美容和妙曼的形体，医院还定期邀约明星御用抗衰老大师以及御用整形大师为求美者做整形设计。<br><br>
      郑州艾美整形美容医院的设备和美容材料上有着严苛的标准，始终都把安全放在第一位，该院八成以上的整形设备都是从国外进口的，拥有多种从国外引进的高端医疗器械及设备。<br><br>
      艾美使命：塑造精致女人，打造精致女性。<br><br>
      艾美精神：简单，听话，照做，执行。<br><br>
      艾美作风：信守承诺，没有借口，绝对服从，永不言败。<br><br>
      艾美理念：<br><br>
      1.经营理念：让每一位员工都能实现财务自由是我们的发展动力。<br><br>
      2.生存理念：让每一位顾客满意是我们生存的唯一法则。<br><br>
      3.设计理念：自然、和谐、高贵、大方、私人订制方案。<br><br>
      4.手术理念：让每一个手术都能成为艺术，谨与术前，精与术中，慎于术后。<br><br>
      艾美价值观<br><br>
      1.客户观：尊重客户，一切以客户利益为上。<br><br>
      2.服务观：专业、诚信、贴心，用爱做服务。<br><br>
      3.生存观：客户的事情就是我们的事，再小的事也是关系艾美生存的事。<br><br>
      艾美立场<br><br>
      1.绝不私自调整项目价格给我的上帝。<br><br>
      2.绝不拉帮结派破坏团队和谐绝不传播负面情绪或思想。<br><br>
    </div>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 返回
    reruen(){
        this.$router.back(-1)
    },
  }
};
</script>
<style scoped>
img {
  width: 4.8rem;
  display: block;
  margin: 0.5rem auto;
}
.content{
    padding: .3rem .4rem;
    font-size: .25rem;
    color: #666;
    line-height: .4rem;
}
</style>
