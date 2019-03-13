<template>
 <div class="conetent">
     <img class="ewm" src="../../assets/hbewm.png" alt="">
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
.conetent{
    width: 100%;
    height: 100%;
    background: url('../../assets/hb.png') no-repeat ;
    background-size: 100% 100%;
}
.ewm{
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 50%;
    top: 5rem;
    transform: translateX(-50%)
}
</style>
