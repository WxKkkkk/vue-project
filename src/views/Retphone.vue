<template>
    <div>
        <h5>找回密码</h5>
         <mt-field  placeholder="请输入手机号码" class="titleleft" type="number"></mt-field>

 <mt-button type="danger" size="large" class="btn">下一步</mt-button>
        <backbtn></backbtn>

    </div>
</template>
<script>
import backbtn from '@/components/backbtn'
export default {
  components: {
    backbtn
  }
}
</script>
<style lang="scss" scoped>
h5{
     height: 68px;
     line-height: 68px;
     font-size: 20px;
     text-align: center;
   }
   .btn{
       margin-top: 20px;
   }

</style>
