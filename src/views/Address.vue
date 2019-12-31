<template>
  <div>
    <div class="header">
      <backbtn></backbtn>
      <p>地址管理<span @click="addaddress()">新增地址</span></p>
    </div>
    <div class="container">
      <div class="address">
        谷歌里E栋
      </div>
      <span>设为默认</span>
    </div>
  </div>
</template>

<script>
  import backbtn from '@/components/backbtn.vue'
  import Axios from 'axios'
  export default {
    data () {
      return {

      }
    },
    mounted () {
      Axios.get(`/user/selectaddress?uid=${JSON.parse(localStorage.getItem('token')).id}`).then(res => {
        console.log(res.data)
      })
    },
    components: {
      backbtn
    }
  }
</script>

<style lang="scss" scoped>
  .header{
    width: 100%;
    height: 3.75rem;
    line-height: 3.75rem;
    text-align: center;
    border-bottom: 0.0625rem solid gray;
    p{
      box-sizing: border-box;
      font-size: 1rem;
      text-align: center;
      span{
        display: inline-block;
        height: 3.75rem;
        float: right;
        margin-right: 0.625rem;
      }
    }
  }
  .container{
    width: 100%;
    height: 3.75rem;
    line-height: 3.75rem;
    .address{
      box-sizing: border-box;
      padding-left: 1.25rem;
      float: left;
    }
    span{
      float: right;
      margin-right: 0.625rem;
    }
  }
</style>
