<template>
  <div class="center">
      <!-- Center -->
      <div class="head">
    <img class="img" src="https://m.lecuntao.com/resource/images/per/bg_gerenzhongxinbeijing.png?lv=eedef2e054" alt="">
    <img class="headimg" src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/member_avatar_2x.png" alt="" @click="usercenter">
    <p>{{name}}</p>
    </div>
    <!-- <router-link to="/Setup">  <i class="iconfont topshang" >&#xe63d;</i></router-link> -->
    <mt-cell  title="我的集单" is-link class="titleleft">
      <!-- <i class="iconfont  leftzuo">&#xe63d;</i> -->
    <!-- <span>icon 是图片</span> -->
    </mt-cell>
    <!-- <ul style="border-bottom:none">
      <router-link to="#" tag="li" activeClass="foot"><i class="iconfont">&#xe63d;</i><span>待付款</span></router-link>
      <router-link to="#" tag="li" activeClass="foot"><i class="iconfont">&#xe63d;</i><span>待发货</span></router-link>
      <router-link to="#" tag="li" activeClass="foot"><i class="iconfont">&#xe63d;</i><span>待收货</span></router-link>
      <router-link to="#" tag="li" activeClass="foot"><i class="iconfont">&#xe63d;</i><span>退款退货</span></router-link>
    </ul> -->
    <div class="gray"></div>
    <mt-cell title="收货地址" is-link class="titleleft" @click.native="goaddress()">
      <!-- <i class="iconfont  leftzuo">&#xe63d;</i> -->
      <span>管理地址信息</span>
    </mt-cell>
    <mt-cell title="卡券包" is-link class="titleleft">
      <!-- <i class="iconfont  leftzuo">&#xe63d;</i> -->
      <span>红包</span>
    </mt-cell>
    <div class="gray"></div>
    <mt-cell title="账户余额  " is-link class="titleleft">
      <!-- <i class="iconfont  leftzuo">&#xe63d;</i> -->
      <!-- <span>icon 是图片</span> -->
    </mt-cell>
    <mt-cell title="支付密码" is-link class="titleleft">
      <!-- <i class="iconfont  leftzuo">&#xe63d;</i> -->
      <!-- <span>icon 是图片</span> -->
    </mt-cell>
    <div class="gray"></div>
    <mt-cell title="联系电话" is-link class="titleleft">
      <!-- <i class="iconfont  leftzuo">&#xe63d;</i> -->
      <span>400-088-0692</span>
    </mt-cell>
    <div class="gray"></div>
    <mt-button type="danger" size="large" @click="logout">注销</mt-button>
  </div>
</template>

<script>

// <router-link to="/path"><button>跳转</button></router-link>

export default {
  data () {
    return {
      name: JSON.parse(localStorage.getItem('token')).name
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
    usercenter () {
      this.$router.push('/usercenter')
    },
    goaddress () {
      this.$router.push('/address')
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
.head{
  position: relative;
  p{
    position: absolute;
    top:160px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
  }
}
.center{
  overflow-x: hidden;
}
.gray{
  background:wheat;
  height: 10px;
  width: 100%;
}

.titleleft{
  // width: 500px;
  padding-left: 10px;
  position: relative;
}
  .leftzuo{
    position: absolute;
    left: 10px;
  }
  .img{
    // height: 44px;
    width: 100%;
    position: relative;
  }
  .topshang{
    position: relative;
    top: -200px;
    left: 360px;
  }
  .headimg{
    height: 100px;
    // border: 1px solid red;
    border-radius: 50%;
    position: absolute;
    left: 50% ;
    top: 0;
    margin-top: 3.5rem;
    margin-left: -2.7rem;
  }
  ul{
    // position: fixed;
    // bottom: 0;
    width: 100%;
    height: 3.125rem;
    background: white;
    display: flex;
    justify-content: space-around;
    font-size: 0.75rem;
    li{
      width: 25%;
      text-align: center;
      i,span{
        display: block;
      }
      i{
        margin-top: 0.375rem;
      }
      span{
        margin-top: 0.1875rem;
      }
    }
}
</style>
