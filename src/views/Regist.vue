<template>
  <div>
    <h5>注册</h5>
    <ul class="lo">
      <router-link to="/login" tag="li" activeClass="active">乐村淘账户登录</router-link>
      <router-link to="/regist" tag="li" activeClass="active" class="red">免费注册</router-link>
    </ul>
    <mt-field
      placeholder="注册用户名"
      @click="handleClick()"
      maxlength="11"
      v-model="username"
      ref="username"
      @blur="changeName(username)"
    ></mt-field>
    <mt-field  placeholder="注册手机号" type="number"  maxlength="11" ref="inputphone" v-model="phonenumber" @blur="setPhonenumber(phonenumber)">
    </mt-field>
    <mt-field
      placeholder="设置登录密码"
      type="password"
      v-model="password"
      ref="pass"
      @blur="setPassword(password)"
    ></mt-field>
    <mt-field
      placeholder="确认登录密码"
      type="password"
      v-model="affirmpass"
      ref="affirm"
      @blur="affirmPassword(affirmpass)"
    ></mt-field>
    <div class="zhanwei"></div>
    <mt-button type="danger" size="large" class="btn" @click="zhuceBtn()">注册</mt-button>
    <backbtn></backbtn>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Button, Toast } from 'mint-ui'
import backbtn from '@/components/backbtn'
import Axios from 'axios'
Vue.component(Field.name, Field)
Vue.component(Button.name, Button)
export default {
  components: {
    backbtn
  },
  data () {
    return {
      username: '',
      password: '',
      affirmpass: '',
      phonenumber: ''
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
        this.$refs.username.focus()
      } else {
        console.log(name)
      }
    },
    // 密码
    setPassword (password) {
      if (password === '' || password === undefined || password === null) {
        // 密码为空
        this.$refs.pass.focus()
      } else {
        console.log(password)
      }
    },
    // 确认密码
    affirmPassword (affirmpass) {
      if (affirmpass === '' || affirmpass === undefined || affirmpass === null) {
        // 密码为空
        this.$refs.affirm.focus()
      } else {
        console.log(affirmpass)
      }
    },
    // 手机号
    setPhonenumber (phone) {
      if (phone === '' || phone === undefined || phone === null) {
        // 密码为空
        this.$refs.inputphone.focus()
      } else {
        console.log(phone)
      }
    },
    // 注册
    zhuceBtn () {
      if (this.$refs.username.value === '') {
        Toast({
          message: '用户名不能为空！'
        })
      } else if (this.$refs.inputphone.value === '') {
        Toast({
          message: '手机号不能为空！'
        })
      } else if (this.$refs.pass.value === '') {
        Toast({
          message: '密码不能为空！'
        })
      } else if (this.$refs.pass.value === this.$refs.affirm.value) {
        console.log(this.$refs.pass.value)
        console.log(this.$refs.affirm.value)
        this.username = this.$refs.username.value
        this.phonenumber = this.$refs.inputphone.value
        this.affirmpass = this.$refs.affirm.value
        Axios.post('/user/regist', {
          username: this.username,
          password: this.affirmpass,
          telephone: this.phonenumber
        }).then(res => {
          // console.log(res.data)
          if (res.data.code === 1) {
            Toast({
              message: res.data.msg
            })
            this.$router.push('/login')
          } else if (res.data.code === 0) {
            Toast({
              message: res.data.msg
            })
          }
        })
      } else {
        Toast({
          message: '您输入的两次密码不符！'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.yanzheng {
  // text-align: center;
  // float: left;
  margin-left: 10px;
}
.zhanwei {
  height: 20px;
}
.lo {
  display: flex;
  border: 1px solid red;

  li {
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
}
h5 {
  height: 68px;
  line-height: 68px;
  font-size: 20px;
  text-align: center;
}
.red {
  background: red;
  color: white;
}
.btn {
  margin-top: 20px;
}
p {
  font-size: 12px;
  margin-left: 10px;
  opacity: 0.5;
}
</style>
