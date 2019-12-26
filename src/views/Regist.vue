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
      v-model="test1"
      ref="input1"
      @blur="changeName(test1)"
    ></mt-field>
    <mt-field
      placeholder="设置登录密码(8-20字母数字组合)"
      type="password"
      v-model="test2"
      ref="input2"
      @blur="changeName1(test2)"
    ></mt-field>
    <div class="zhanwei"></div>
    <mt-button type="danger" size="large" class="btn" @click="zhuceBtn()">注册</mt-button>
    <backbtn></backbtn>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Button } from 'mint-ui'
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
      test1: '',
      test2: ''
    }
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
    zhuceBtn () {
      this.test1 = this.$refs.input1.value
      this.test2 = this.$refs.input2.value
      Axios.post('/cart/regist', {
        username: this.test1,
        password: this.test2
      }).then(res => {
        console.log(res.data)
      })
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
