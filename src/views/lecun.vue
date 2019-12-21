<template>
    <div>
        111
    </div>
</template>

<script>
import Axios from 'axios'
export default {
  mounted () {
    Axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1576846125808&act=index&op=index&key=', 'Accept-Encoding: gzip, deflate, br').then(res => {
      console.log(res.data)
    })
  }
}
</script>
