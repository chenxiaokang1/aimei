<template>

    <div class="content">
    <van-nav-bar title="爱心"  left-arrow @click-left="reruen"></van-nav-bar>

        <div class="head">
            <div class="head_img">
                <img src="../../assets/no_login.png" alt="">
            </div>
            <div class="name">
                    提出个未来
            </div>
            <div class="level">
                <img src="../../assets/leave.png" alt=""> <span>级别：30级</span> 
            </div>
            <div class="time">
                    加入时间：2018-09-14 10:19:45
            </div>  
        </div>
        <div class="show_box">
            <div class="show_item">
                <p>0</p>
                <p>我的爱心值</p>
            </div>
            <div class="show_item">
                <p>0</p>
                <p>已抵扣的爱心值</p>
            </div>
            <div class="show_item" @click="goto_view('giveLove')">
                <img src="../../assets/bl.png" alt="">
                <p>爱心值转让</p>
            </div>
            <div class="show_item" @click="goto_view('loveOrder')">
                 <img src="../../assets/bx.png" alt="">
                <p>爱心值订单（2）</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods:{
      // 返回
    reruen(){
        this.$router.back(-1)
    },
      goto_view(url){
         this.$router.push({  //核心语句
         path:"/"+url  //跳转的路径
       
      })
    }
  }
}

</script>
<style scoped>
    .content{
        
    }
    .head{
        width:7rem;
        height: 3rem;
        margin: .3rem auto;
        border-radius: .1rem;
        /* padding: .3rem 0; */
        background: url('../../assets/head.png') no-repeat;
        background-size: 100% 100%; 
        padding: .2rem;
        color: #FFF;
        text-align: center;
    }
    .head_img{
        width: 1rem;
        height: 1rem;
        margin: 0 auto;
        
    }
    .head_img img{
        width: 1rem;
        height: 1rem;
        
    }
    .name{
        padding: .1rem;
    }
    .level{
        width: 2rem;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .level img{
        width: .4rem;
        height: .4rem;
        margin-right: .1rem
    }
    .time{
        padding: .1rem;
    }
    .show_box{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        margin: .3rem 0;
    }
    .show_item{
        width: 50%; 
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #FFF;
        height: 1.5rem;
        padding-top: .25rem;
        border: 0.01rem solid #f5f5f5;
    }
    .show_item p{
        line-height: .4rem;

    }
    .show_item img{
        width: .6rem;
        height: .6rem;
        background: #c1a25f;
        border-radius: 50%;
        padding: .1rem
    }
</style>
