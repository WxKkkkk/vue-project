<template>
  <div>
    城市
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    Axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577072434837&act=Address&op=get_region', 'region=city_name&parent_id=340').then(res => {
      console.log(res.data)
    })
  }
}
</script>

<style>
</style>
