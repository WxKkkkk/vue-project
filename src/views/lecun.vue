<template>
    <div class="box" v-if="bannarlist.length">
      <citybtn :istop="istop" :class="istop? 'top' : ''"></citybtn>
      <swiper :key="bannarlist.length" :banner="{
        loop: false,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }" ref="banner" class="bannerlist" swipername="bannerlist">
        <div class="swiper-slide" v-for="data in bannarlist" :key="data.adv_id">
          <img :src="data.adv_image" alt="">
        </div>
      </swiper>
      <swiper :banner="{
      loop: false,
      pagination: {},
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true
      }" class="catelist" swipername="catelist" :key="catelist.length">
        <div class="swiper-slide" v-for="data in catelist" :key="data.cate_type">
          <dl>
            <dt><img :src="data.cate_image" alt=""></dt>
            <dd>{{data.cate_name}}</dd>
          </dl>
        </div>
      </swiper>
      <div class="leji">
        <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/index/lct_wap_llj.jpg?date=20191223" alt="">
        <swiper :banner="{
              loop: false,
              pagination: {},
              slidesPerView: 4,
              spaceBetween: 0,
              freeMode: true
              }" class="lejilist" swipername="lejilist" :key="lejilist.length">
          <div class="swiper-slide" v-for="data in lejilist" :key="data.goods_id">
            <dl>
              <dt><img :src="data.goods_image" alt=""></dt>
              <dd>
                <p class="lejiname">{{data.goods_name}}</p>
                <p class="lejiprice">{{data.goods_price}}</p>
              </dd>
            </dl>
          </div>
          <div class="swiper-slide all">
            <p>查看全部</p>
          </div>
        </swiper>
      </div>
      <div class="feature">
        <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/index/lct_wap_tsg.jpg?date=20191223" alt="">
        <swiper :banner="{
              loop: false,
              pagination: {},
              slidesPerView: 4,
              spaceBetween: 0,
              freeMode: true
              }" class="featurelist" swipername="featurelist" :key="featurelist.length">
          <div class="swiper-slide" v-for="data in featurelist" :key="data.goods_id">
            <dl>
              <dt><img :src="data.goods_image" alt=""></dt>
              <dd>
                <p class="lejiname">{{data.goods_name}}</p>
                <p class="lejiprice">{{data.goods_price}}</p>
              </dd>
            </dl>
          </div>
          <div class="swiper-slide all">
            <p>查看全部</p>
          </div>
        </swiper>
      </div>
      <div class="category">
        <swiper :banner="{
        loop: false,
        pagination: {},
        slidesPerView: 5,
        spaceBetween: 20,
        freeMode: true
        }" class="category" swipername="category" :key="category.length">
          <div class="swiper-slide" v-for="data in category" :key="data.gc_id">
            {{data.cate_name}}

          </div>
        </swiper>
      </div>
      <goodslist></goodslist>
      <gotop></gotop>
    </div>
</template>

<script>
import Axios from 'axios'
import citybtn from '@/components/citybtn'
import swiper from '@/components/swiper'
import goodslist from '@/components/goodslist'
import gotop from '@/components/GoTop'
export default {
  data () {
    return {
      bannarlist: [],
      catelist: [],
      lejilist: [],
      featurelist: [],
      category: [],
      istop: false,
      isshow: false
    }
  },
  mounted () {
    Axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1576846125808&act=index&op=index&key=', `province_id=${localStorage.getItem('proviceId')}&city_id=${localStorage.getItem('cityId')}&qiang_zhi_geng_xin=`).then(res => {
      // console.log(res.data.datas.adv)
      this.bannarlist = res.data.datas.adv
      this.catelist = res.data.datas.platform.list
      this.lejilist = res.data.datas.le6ji.recommend_goods
      this.featurelist = res.data.datas.feature.recommend_goods
      this.category = res.data.datas.category
      console.log(this.lejilist, 111)
    })
    window.onscroll = this.scrolltop
  },
  components: {
    citybtn,
    swiper,
    goodslist,
    gotop
  },
  methods: {
    scrolltop () {
      // console.log(this.$refs.banner.$el.offsetHeight)
      if (document.documentElement.scrollTop >= this.$refs.banner.$el.offsetHeight) {
        this.istop = true
      } else {
        this.istop = false
      }
    }
  },
  beforeDestroy () {
    window.onscroll = null
  }
}
</script>

<style lang="scss" scoped>
.box{
  background: #f0f0f0;
}
.leji{
  width: 100%;
  img{
    width: 100%;
  }
}
.feature{
  width: 100%;
  img{
    width: 100%;
  }
}
</style>
