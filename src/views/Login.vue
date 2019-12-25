<template>
    <div>
        <h5>登录</h5>
       <ul>
            <router-link to="/login" tag="li" activeClass="active" class="red">乐村淘账户登录</router-link>
            <router-link to="/regist" tag="li" activeClass="active">免费注册</router-link>
        </ul>

            <mt-field  placeholder="输入手机号用户名" maxlength="11" class="titleleft" v-model="test1" οnkeyup="value=value.replace(/[^0-9.]/g,'') " ref="input1" @blur="changeName(test1)"></mt-field>
            <mt-field  placeholder="请输入密码" type="password" class="titleleft" v-model="test2" ref="input2" @blur="changeName1(test2)"></mt-field>
            <mt-field  placeholder="请输入验证码" type="password" class="titleleft" v-model="test3" ref="input3"></mt-field>
            <mt-button @click="handleClick()" class="yanzheng" > {{codeText}} </mt-button>
            <mt-button type="danger" size="large" class="btn" @click="loginBtn()">登录</mt-button>
            <router-link to="/Retphone">  <mt-button type="default" size="large" class="btn">找回密码</mt-button></router-link>
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
  },
  data () {
    return {
      test1: '',
      test2: '',
      test3: '',
      codeText: '获取验证码'
    }
  },
  methods: {
    // 获取验证码
    handleClick () {
      let reg = /^1[0345789][0-9]{9}$/
      if (this.test1 === '' || this.test2 === '') {
        // 验证
        this.$message({
          message: '手机号密码不能为空！',
          type: 'warning'
        })
      } else if (!reg.test(this.test1)) {
        this.$message.error('请输入正确的手机号')
      } else {
        this.timer()
        console.log(this.test1)
      }
    },
    timer () {
      // 验证码倒计时
      let num = 60
      let that = this
      that.codeText = num + '秒后重新发送'
      let time = setInterval(function () {
        if (num === 0) {
          clearInterval(time)
          time = null
          that.codeText = '重发验证码'
        } else {
          num--
          that.codeText = num + '秒后重新发送'
        }
      }, 1000)
    },
    // 用户名
    changeName (userName) {
      let name = userName
      if (name === '' || name === undefined || name === null) {
        // 用户名为空时
        this.$refs.input1.focus()
      } else {
        console.log(name)
      }
    },
    // 密码
    changeName1 (pass) {
      if (pass === '' || pass === undefined || pass === null) {
        // 密码为空
        this.$refs.input2.focus()
      } else {
        console.log(pass)
      }
    },
    loginBtn () {
      this.test1 = this.$refs.input1.value
      this.test2 = this.$refs.input2.value
      this.test3 = this.$refs.input3.value
      if (this.test3 === '') {
        this.$message.error('请输入验证码')
      } else {
        this.$router.push('/Center')
        this.$message({
          message: '恭喜你，登陆成功！',
          type: 'success'
        })
        console.log(this.test1)
        console.log(this.test2)
        console.log(this.test3)
      }
    }

  }
}

</script>
<style lang="scss" scoped>
.yanzheng{
  margin-left: 10px;
}

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
