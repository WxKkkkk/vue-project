<template>
  <div>
    <h5>注册</h5>
     <ul class="lo">
            <router-link to="/login" tag="li" activeClass="active" >乐村淘账户登录</router-link>
            <router-link to="/regist" tag="li" activeClass="active" class="red">免费注册</router-link>
        </ul>

      <mt-field  placeholder="注册手机号" type="tel" >

        </mt-field>
      <mt-field  placeholder="填写邮箱" type="text" >

        </mt-field>
      <mt-field  placeholder="设置登录密码(8-20字母数字组合)" type="password">

        </mt-field>
      <mt-field  placeholder="确认密码" type="password" >

        </mt-field>
      <p>短信验证功能正在维护</p>
      <mt-button type="danger" size="large" class="btn">注册</mt-button>
       <backbtn></backbtn>

      <!-- <mt-field label="验证码" v-model="captcha">
  <img src="../assets/100x100.png" height="45px" width="100px">
</mt-field> -->

  </div>

</template>

<script>

import Vue from 'vue'
import { Field } from 'mint-ui'
import backbtn from '@/components/backbtn'
Vue.component(Field.name, Field)
export default {
  components: {
    backbtn
  }
}
</script>

<style lang="scss" scoped>
  .lo{
        display: flex;
        border: 1px solid red;

        li{
            flex: 1;
            text-align: center;
            height: 40px;
            line-height: 40px;
        }
    }
   h5{
     height: 68px;
     line-height: 68px;
     font-size: 20px;
     text-align: center;
   }
   .red{
     background: red;
     color: white;

   }
   .btn{
     margin-top: 20px;
   }
   p{
     font-size: 12px;
     margin-left: 10px;
     opacity: 0.5;
   }
</style>
