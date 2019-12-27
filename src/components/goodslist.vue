<template>
  <div class="goods">
    <p class="re">热销列表</p>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="true"
    >
      <li
        v-for="data in datalist"
        :key="data.goods_id"
        @click="godetail(data.goods_id,data.goods_commonid)"
      >
        <img :src="data.goods_image" alt />
        <p class="goodsname">{{ data.goods_name }}</p>
        <p class="goodsprice">{{ data.goods_price }}元</p>
        <p class="goodsnum">已售{{ data.goods_salenum }}件</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  data () {
    return {
      datalist: [],
      cityId: localStorage.getItem('cityId'),
      number: 1,
      loading: false,
      total: 0
    }
  },
  mounted () {
    Axios.post(
      '/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577089826653&act=goods&op=goodsRecom_new',
      `provinc=${localStorage.getItem('proviceId')}&city=${
        this.cityId
      }&page=1&pageSize=10`
    ).then(res => {
      this.datalist = res.data.datas.list
      // console.log(this.datalist)
    })
  },
  methods: {
    loadMore () {
      // console.log(222222222222)
      this.number++
      this.loading = true
      // console.log(this.datalist.length, this.total, 1)
      if (this.number === this.total) {
        return
      }
      Axios.post(
        '/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577089826653&act=goods&op=goodsRecom_new',
        `provinc=${localStorage.getItem('proviceId')}&city=${
          this.cityId
        }&page=${this.number}&pageSize=10`
      ).then(res => {
        this.datalist = [...this.datalist, ...res.data.datas.list]
        this.total = res.data.datas.page_count
        this.loading = false
        // console.log(this.datalist)
      })
    },
    godetail (id, commonid) {
      this.$router.push(`/detail/${id}`)
      localStorage.setItem('commonid', commonid)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods {
  .re {
    margin: 10px 0;
    padding-left: 5px;
    font-size: 12px;
  }
  li {
    margin-left: 1%;
    margin-right: 1%;
    width: 48%;
    float: left;
    margin-bottom: 10px;
    background: white;
    img {
      width: 100%;
    }
    .goodsname {
      // width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .goodsprice {
      color: rgb(242, 48, 48);
      font-size: 18px;
      float: left;
    }
    .goodsnum {
      float: right;
      color: rgb(153, 153, 153);
      margin-top: 3px;
    }
  }
}
</style>
