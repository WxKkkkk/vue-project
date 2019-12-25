<template>
  <div class="CategoryDetail">
    <div class="top">
      <div class="title">
        <img src="../../public/images/leftarrow.jpg" @click="returnlecun()" />
        <span>{{ $route.params.gcName ? $route.params.gcName : '干货' }}</span>
      </div>
      <div class="button">
        <span :class="ind === 0 ? 'select' : ''" @click="change_All()">全部</span>
        <span :class="ind === 1 ? 'select' : ''" @click="change_SalesFirst()">销量优先</span>
        <div @click="change_Prime()">
          <span id="prise" :class="ind === 2 ? 'select' : ''">价格</span>
          <div class="arrows">
            <div :class="selectarrow === 1 ? 'arrow uparrow uparrowselected' : 'arrow uparrow'"></div>
            <div :class="selectarrow === 0 ? 'arrow downarrow downarrowselected' : 'arrow downarrow'"></div>
          </div>
        </div>
        <span :class="ind === 3 ? 'select' : ''" @click="change_Popular()">人气</span>
      </div>
    </div>
    <ul v-infinite-scroll="categoryDetailLoadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <li class="CategoryDetailList" v-for="name in $store.state.CategoryDetailList" :key="name.goods_id" @click="toDetails($event, name)">
        <img :src="name.goods_image" />
        <span class="goodsTitle">{{ name.goods_name }}</span>
        <div class="sale">
          <img src="../../public/images/money.jpg" />
          <span class="price">{{ name.goods_price }}</span>
          <span class="salenum">{{ name.goods_salenum }}人付款</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created () {
    this.provinc = localStorage.getItem('proviceId') ? localStorage.getItem('proviceId') : 110
    this.city = localStorage.getItem('cityId') ? localStorage.getItem('cityId') : 110100000000
    this.gcId = localStorage.getItem('gcId') ? localStorage.getItem('gcId') : 1096
    this.$store.dispatch('getCategoryDetailList', [this.provinc, this.city, this.page, this.sorted, this.sequence, this.gcId, this.request])
    this.page = 0
  },
  data () {
    return {
      page: 1,
      sorted: 4,
      sequence: 0,
      provinc: null,
      city: null,
      gcId: null,
      ind: 0,
      selectarrow: 2,
      request: 0
    }
  },
  methods: {
    change_All () {
      this.ind = 0
      this.sorted = 4
      this.sequence = 0
      this.selectarrow = 2
      this.page = 1
      this.request = 0
      this.$store.dispatch('getCategoryDetailList', [this.provinc, this.city, this.page, this.sorted, this.sequence, this.gcId, this.request])
      localStorage.setItem('gcId', this.gcId)
    },
    change_SalesFirst () {
      this.ind = 1
      this.sorted = 1
      this.sequence = 0
      this.selectarrow = 2
      this.page = 1
      this.request = 0
      this.$store.dispatch('getCategoryDetailList', [this.provinc, this.city, this.page, this.sorted, this.sequence, this.gcId, this.request])
      localStorage.setItem('gcId', this.gcId)
    },
    change_Prime () {
      this.ind = 2
      this.sorted = 3
      this.page = 1
      this.request = 0
      if (this.sequence === 0) {
        this.sequence = 1
        this.selectarrow = 1
      } else {
        this.sequence = 0
        this.selectarrow = 0
      }
      this.$store.dispatch('getCategoryDetailList', [this.provinc, this.city, this.page, this.sorted, this.sequence, this.gcId, this.request])
      localStorage.setItem('gcId', this.gcId)
    },
    change_Popular () {
      this.ind = 3
      this.sorted = 2
      this.sequence = 0
      this.selectarrow = 2
      this.page = 1
      this.request = 0
      this.$store.dispatch('getCategoryDetailList', [this.provinc, this.city, this.page, this.sorted, this.sequence, this.gcId, this.request])
      localStorage.setItem('gcId', this.gcId)
    },

    categoryDetailLoadMore () {
        ++this.page
        this.request = 1
        if (this.page > this.$store.state.CategoryDetailpages) {
        } else {
          this.$store.dispatch('getCategoryDetailList', [this.provinc, this.city, this.page, this.sorted, this.sequence, this.gcId, this.request])
        }
        localStorage.setItem('gcId', this.gcId)
    },

    toDetails (e, name) {
      localStorage.setItem('commonid', name.goods_commonid)
      this.$router.push('/detail/' + name.goods_id)
    },
    returnlecun () {
      this.$router.push('/lecun')
    }
  }
}
</script>

<style>
#prise {
  float: left;
}
.CategoryDetail {
  position: relative;
  height: 100%;
  width: 100%;
}
.CategoryDetail .top {
  position: fixed;
  top: 0;
  width: 100%;
  height: 6rem;
  background-color: white;
  z-index: 100;
}
.CategoryDetail .title {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  position: relative;
}
.CategoryDetail .title img {
  width: 1.7rem;
  height: 1.7rem;
  position: absolute;
  left: 1rem;
  top: 60%;
  transform: translateY(-50%);
}
.CategoryDetail .title span {
  font-size: 1.3rem;
}
.CategoryDetail .button {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.CategoryDetail .button .arrows {
  width: 0.6rem;
  height: 100%;
  float: left;
  margin-left: 0.2rem;
}
.CategoryDetail .button .arrow {
  width: 0;
  height: 0;
  border: 0.3rem transparent solid;
}
.CategoryDetail .button .uparrow {
  border-bottom: 0.3rem grey solid;
  margin-top: 0.7rem;
}
.CategoryDetail .button .uparrowselected {
  border-bottom-color: red;
}
.CategoryDetail .button .downarrow {
  border-top: 0.3rem grey solid;
  margin-top: 0.3rem;
}
.CategoryDetail .button .downarrowselected {
  border-top-color: red;
}
.CategoryDetail ul {
  overflow: hidden;
  background-color: rgb(236, 236, 236);
  width: 100%;
  margin-top: 6rem;
  margin-bottom: 0;
}
.CategoryDetail li {
  background-color: white;
  margin-top: 0.2rem;
  margin-left: 1%;
  margin-right: 1%;
  width: 48%;
  float: left;
  text-align: center;
}
.CategoryDetail .CategoryDetailList > img {
  width: 100%;
  height: 10rem;
}
.CategoryDetail .CategoryDetailList .goodsTitle {
  display: inline-block;
  width: 90%;
  height: 1rem;
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
  text-align: left;
}
.CategoryDetail .CategoryDetailList .sale {
  margin-top: 0.1rem;
  width: 90%;
  overflow: hidden;
  height: 2rem;
  line-height: 2rem;
}
.CategoryDetail .sale img {
  height: 0.8rem;
  width: 0.8rem;
  float: left;
  margin-left: 0.5rem;
  margin-top: 10%;
  transform: translateY(-50%);
}
.CategoryDetail .sale .price {
  float: left;
  font-size: 1rem;
  margin-left: 0.2rem;
  color: red;
}
.CategoryDetail .sale .salenum {
  float: right;
  font-size: 0.7rem;
  color: grey;
}
.top .button .select {
  color: red;
}
</style>
