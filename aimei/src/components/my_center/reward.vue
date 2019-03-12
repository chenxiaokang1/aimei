<template>
<div>
    <div class="cont_box">
        <div class="box-top">
            <p>提现金额：</p>
            <p><input type="text">元</p>
        </div>
        <div class="box-tbot">
            可提现金额： 100 元
        </div>
    </div>
    <div class="but">

        确认提现
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
  }
}

</script>
<style scoped>
        .box-top{
            
            align-items: center;
            display: flex;
            justify-content: space-between;
            padding-bottom: .2rem;
            border-bottom: 0.01rem solid #f3f3f3;
        }
    .cont_box{
        padding: .2rem .3rem;
        width: 7.1rem;
        height: 1.5rem;
        background: #FFF;
        border-radius: .2rem;
        margin: .2rem auto;
    }
    .box-top input{
        text-align: right;
        font-size: .3rem;
        padding-right: .3rem;
    }
    .box-tbot{
        color: #999;
        padding-top: .2rem;
        text-align: right;
    }
    .but{
        font-size: .23rem;
        color: #FFF;
        width: 4.2rem;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        background: #c1a25f;
        border-radius: .2rem;
        margin: .5rem auto;
    }
</style>
