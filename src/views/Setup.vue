<template>
    <div>
        <h5>设置</h5>   <div class="gray"></div>
        <mt-cell title="关于乐村淘" is-link class="titleleft">

  <!-- <i class="iconfont  leftzuo">&#xe63d;</i> -->
</mt-cell>
 <mt-button type="danger" size="large" class="btn">登录</mt-button>
        <backbtn></backbtn>

    </div>
</template>
<script>
import backbtn from '@/components/backbtn'
export default {
  components: {
    backbtn
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
  background:wheat;
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
