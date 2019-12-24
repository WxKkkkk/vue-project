<template>
    <div>
        <h5>设置</h5>   <div class="gray"></div>
       <router-link to="#"> <mt-cell title="关于乐村淘" is-link class="titleleft" @click="handleClick()">

 <!-- <i class="iconfont  leftzuo">&#xe63d;</i>  -->
</mt-cell></router-link>
 <router-link to="/Login"><mt-button type="danger" size="large" class="btn">退出登录</mt-button></router-link>
        <backbtn></backbtn>

    </div>
</template>
<script>
import backbtn from '@/components/backbtn'
export default {
  components: {
    backbtn
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      console.log(111)
      // window.location.href = 'http://www.baidu.com';
    }
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
   .gray{
  background:gray;
  height: 5px;
  width: 100%;
}
body,html{
    background: gray;
    height: 500px;
}
.btn{
    margin-top: 20px;
}
</style>
