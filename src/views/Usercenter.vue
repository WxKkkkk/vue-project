<template>
  <div>
    <div class="head">个人中心</div>
    <backbtn></backbtn>
    <mt-cell title="用户名" is-link>
      <span>12313213</span>
    </mt-cell>
    <mt-cell title="绑定手机号" is-link>
      <span>13213213123</span>
    </mt-cell>
    <mt-cell title="登录密码" is-link>
      <span>修改密码</span>
    </mt-cell>
  </div>
</template>

<script>
import backbtn from '@/components/backbtn'
export default {
  components: {
    backbtn
  },
  mounted () {
    this.$store.state.isprovince = false
  },
  beforeDestroy () {
    this.$store.state.isprovince = true
  }
}
</script>

<style lang="scss" scoped>
.head {
  width: 100%;
  height: 50px;
  background: white;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
}
</style>
