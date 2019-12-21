<template>
  <div>
    <header>
      <img src="" alt="">
      <h2>选择所在地区</h2>
    </header>
    <div class="location">
      当前定位：
    </div>
    <div class="getcity">
      <img src="" alt="">
      点击定位当前位置
    </div>
    <div class="select">
      <span>请选择</span>省份/城市
    </div>
    <div class="content">
      <div class="province"></div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {

    }
  },
  mounted () {
    Axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1576917366401&act=Address&op=get_region', 'region=province_name').then(res => {
      console.log(res.data)
    })
  }
}
</script>

<style>
</style>
