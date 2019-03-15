<template>
 <div class="c-tp">
  
     <van-nav-bar
        title="编辑资料"
        left-text="返回"
        
        left-arrow
        @click-left="onClickLeft"
        />
    
    <section>
      
      <van-cell-group>
        <van-field
          v-model="username"
          
          clearable
          label="姓名"
          
          
          placeholder="请输入姓名"
          
          />
          <!-- <van-field
          v-model="nan"
          type="text"
          label="性别"
          placeholder="请输入性别"
          
          /> -->
          <van-field
        type
        label="性别："
        placeholder="请选择性别 >"
        :value="sex_value"
        @click="choose_sex()"
        readonly
      />
          <van-field
          v-model="password"
          type="password"
          label="密码:"
          placeholder="请输入密码"
          
          />
         <van-field
          v-model="tell"
          type="tell"
          label="手机:"
          placeholder="请输入手机"
          
          />
         <van-field
          v-model="nana"
          type="number"
          label="微信:"
          placeholder="请输入微信（非必填）"
          
          />
          <van-field
          v-model="nanb"
          type="text"
          label="邮箱:"
          placeholder="请输入邮箱（非必填）"
          
          />
          <van-field
          v-model="nanc"
          type="text"
          label="公司:"
          placeholder="请输入公司名称（非必填）"
          
          />

          <van-field
            type
            label="职位："
            placeholder="请选择职位 >"
            :value="job_value"
            @click="choose_job()"
            readonly
          />
          <van-field
         
          type="text"
          label="省市区:"
          placeholder="请选择省市区（非必选）"
          @click="show2"
          :value="area_data"
          readonly
          />
          
         <van-field
          v-model="nanf"
          type="text"
          label="详细地址:"
          placeholder="请输入详细地址（非必填）"
          
          />
        </van-cell-group>
        
        <div class="rz-picter">
          <p>超级名片头像（非必填）</p>
          <img :src="avatar" class="img-avatar">
          <input type="file" name="avatar" id="uppic" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)" ref="avatarInput" class="uppic" > 
        </div>
         <van-popup v-model="show" position="bottom" :overlay="true">
           <van-area :area-list="areaList"  @confirm="eee" @cancel="cc"/>
         </van-popup>
         <van-popup v-model="show1" position="bottom" :overlay="true" >
           <!-- <van-area :area-list="areaList" :columns-num="2"/> -->
           <van-area :columns-num="1" :area-list="areaList"  @confirm="wan" @cancel="guan" />         </van-popup>

           <van-actionsheet v-model="show6" :actions="actions" @select="onSelect"/>
           <van-actionsheet v-model="job_show" :actions="job_actions" @select="job_onSelect"/>
        <button class="cun" @click="top()">保存</button>
        
    </section>

 </div>
</template>

<script>
  import address from '../../libs/area.js'
export default {
  
 data () {
 return {
   areaList:address,
   
    show: false,
    show1: false,
    show6: false,
    avatar: require('../../assets/1.jpg'),
     username:'',
     password:'',
     nan:'',
     tell:'',
     nana:'',
     nanb:'',
     nanc:'',
     nand:'',
     nane:'',
     nanf:'',
    area_data:'',
    areada:'',

    show6: false,
      sex_value: "",
      actions: [
        {
          name: "男"
        },
        {
          name: "女"
        }
      ],
      job_show: false,
      job_value: "",
      job_actions: [
        {
          name: "董事长"
        },
        {
          name: "ceo"
        }
      ],

 }
 },
 methods:{
   show2(){
     this.show=true
   },
   show3(){
     this.show1=true
   },
   changeImage(e) {
        var file = e.target.files[0]
        var reader = new FileReader()
        var that = this
        reader.readAsDataURL(file)
        reader.onload = function(e) {
          that.avatar = this.result
        }
      },
     onClickLeft() {
      
      this.$router.go(-1)
    },
    onRead(file) {
      console.log(file)
    },
    top(){
      this.$router.push('/super')
    },
     cancel(){
       this.show=true
     },
     eee(value){
       console.log(value)
       this.area_data=value[0].name +value[1].name +value[2].name 
       this.show=false
     },
     cc(){
        this.show=false
     },
     guan(){
        this.show1=false
     },
     wan(value){
       console.log(value)
       this.areada=value[0].name
       this.show1=false
     },
     choose_sex() {
      this.show6 = true;
    },
     onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show6 = false;
      this.sex_value = item.name;
    },
    choose_job() {
      this.job_show = true;
    },
    // 选择职位弹出层
    job_onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.job_show = false;
      this.job_value = item.name;
    },
    

 
 }
}

</script>
<style>
.rz-picter{
  display: flex;
  flex-direction: column;
  border-bottom: 0.01rem solid #f5f5f5;
  background: white;
  height: 2rem;
}
.rz-picter p{
  width: 41%;
  margin-top: 1rem;
}
.uppic {
   height: 1.5rem;
   width: 2rem;
   margin-left: 5rem;
   opacity: 0;
   z-index: 99999;
   position: absolute;
 }
 .img-avatar {
   position: absolute;
   left: 5rem;
   width: 26%;
   height: 11%;
 }
 .cun{
       width: 50%;
    height: 0.6rem;
    background: #c1a25f;
    border-radius: 0.1rem;
    margin: 0.4rem 0 0 2rem;
 }
 .van-field__control {
    text-align: right !important;
}
.c-tp{
  display: flex;
    height: 100%;
    flex-direction: column;
}
section{
  flex: 1;
    overflow: auto;
}
</style>
