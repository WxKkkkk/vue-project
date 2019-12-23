<template>
    <div>
        <h5>登录</h5>
       <ul>
            <router-link to="/login" tag="li" activeClass="active" class="red">乐村淘账户登录</router-link>
            <router-link to="/regist" tag="li" activeClass="active">免费注册</router-link>
        </ul>
       <br>
  <mt-field  placeholder="输入手机号用户名" ><i class="iconfont">&#xe627;</i></mt-field>
  <mt-field  placeholder="请输入密码" type="password" ><i class="iconfont">&#xe627;</i></mt-field>
  <mt-button type="danger" size="large" class="btn">登录</mt-button>
  <mt-button type="default" size="large" class="btn">找回密码</mt-button>
        <backbtn></backbtn>
    </div>
</template>

<script>

import Vue from 'vue'
import { Field, Button } from 'mint-ui'

import backbtn from '@/components/backbtn'

Vue.component(Button.name, Button)
Vue.component(Field.name, Field)
export default {
  components: {
    backbtn
  }
}
</script>
<style lang="scss" scoped>

  ul{
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
</style>
