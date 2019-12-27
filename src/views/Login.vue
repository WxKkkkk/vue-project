<template>
    <div>
        <h5>登录</h5>
       <ul>
            <router-link to="/login" tag="li" activeClass="active" class="red">乐村淘账户登录</router-link>
            <router-link to="/regist" tag="li" activeClass="active">免费注册</router-link>
        </ul>
            <mt-field  placeholder="输入用户名" maxlength="11" class="titleleft" v-model="test1"  ref="input1" @blur="changeName(test1)"></mt-field>
            <mt-field  placeholder="请输入密码" type="password" class="titleleft" v-model="test2" ref="input2" @blur="changeName1(test2)"></mt-field>
            <mt-button type="danger" size="large" class="btn" @click="loginBtn()">登录</mt-button>
            <router-link to="/Retphone">  <mt-button type="default" size="large" class="btn">找回密码</mt-button></router-link>
        <backbtn></backbtn>
    </div>
</template>

<script>

import Vue from 'vue'
import { Field, Button, Toast } from 'mint-ui'
import backbtn from '@/components/backbtn'
import Axios from 'axios'

Vue.component(Button.name, Button)
Vue.component(Field.name, Field)
export default {
  components: {
    backbtn
  },
  data () {
    return {
      test1: '',
      test2: ''
    }
  },
  mounted () {
    this.$store.state.isprovince = false
  },
  beforeDestroy () {
    this.$store.state.isprovince = true
  },
  methods: {
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
      console.log(this.test1)
      console.log(this.test2)
      Axios.post('/user/login', {
        username: this.test1,
        password: this.test2
      }).then(res => {
          console.log(res.data)
        if (res.data.code === 1) {
          console.log(res.data.msg[0].id)
          localStorage.setItem('token', JSON.stringify({ id: res.data.msg[0].id, name: res.data.msg[0].name }))
          this.$router.push('/lecun')
        } else if (res.data.code === 2) {
          Toast({
            message: '没有此用户名'
          })
        } else if (res.data.code === 0) {
          Toast({
            message: res.data.msg
          })
        }
      })
      // Axios.post('/cart/login')
      // if (this.test3 === '') {
      //   this.$message.error('请输入验证码')
      // } else {
      //   this.$router.push('/Center')
      //   this.$message({
      //     message: '恭喜你，登陆成功！',
      //     type: 'success'
      //   })
      // }
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
     height: 55px;
     line-height: 55px;
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
