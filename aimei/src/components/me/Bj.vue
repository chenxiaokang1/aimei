<template>
 <div>
   <header>
     <van-nav-bar
        title="编辑资料"
        left-text="返回"
        
        left-arrow
        @click-left="onClickLeft"
        />
    </header>
    <section>
      
      <van-cell-group>
        <van-field
          v-model="username"
          
          clearable
          label="用户名"
          
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />
          <van-field
          v-model="nan"
          type="text"
          label="性别"
          placeholder="请输入性别"
          
        />
        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          
        />
         <van-field
          v-model="tell"
          type="tell"
          label="手机"
          placeholder="请输入手机"
          
        />
         <van-field
          v-model="nana"
          type="text"
          label="微信"
          placeholder="请输入微信"
          
        />
         <van-field
          v-model="nanb"
          type="text"
          label="邮箱"
          placeholder="请输入邮箱"
          
        />
</van-cell-group>
    </section>

 </div>
</template>

<script>

export default {
 data () {
 return {
     username:'',
     password:'',
     nan:'',

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
</style>
