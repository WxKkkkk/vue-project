<template>
  <div>
    <header>
      <img src="data:image/png;base64,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" @click="back()" alt="">
      <h2>选择所在城市</h2>
    </header>
    <div class="content">
      <div class="city" v-for="data in dataList" :key="data.city_id" @click="pushCity(data.city_id,data.city_name)">{{data.city_name}}</div>
    </div>
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
    this.$store.state.isprovince = false
    Axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577072434837&act=Address&op=get_region', `region=city_name&parent_id=${this.$store.state.provinceid}`).then(res => {
      // console.log(res.data)
      this.dataList = res.data.datas
    })
  },
  beforeDestroy () {
    this.$store.state.isprovince = true
  },
  methods: {
    back () {
      history.back()
    },
    pushCity (id, name) {
      this.$store.state.cityname = name
      localStorage.setItem('cityId', id)
      localStorage.setItem('city', name)
      this.$router.push('/lecun')
    }
  }
}
</script>

<style lang="scss" scoped>
  header{
    width: 100%;
    height: 2.5rem;
    img{
      height: 50%;
      float: left;
      vertical-align: middle;
      margin-top: 0.625rem;
      margin-left: 0.625rem;
    }
    h2{
      text-align: center;
      line-height: 2.5rem;
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
  .content{
    width: 100%;
    .city{
      height: 2.5rem;
      line-height: 2.5rem;
      box-sizing: border-box;
      padding-left: 0.625rem;
      border-top: 0.0625rem solid rgb(220,220,220);
    }
  }
</style>
