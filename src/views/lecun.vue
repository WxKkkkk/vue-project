<template>
    <div class="box" v-if="bannarlist.length">
      <citybtn :istop="istop" :class="istop? 'top' : ''"></citybtn>
      <swiper :key="bannarlist.length" :banner="{
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }" ref="banner" class="bannerlist" swipername="bannerlist">
        <div class="swiper-slide" v-for="data in bannarlist" :key="data.adv_id">
          <img :src="data.adv_image" alt="" v-lazy="data.adv_image">
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
            <dt><img :src="data.cate_image" alt="" v-lazy="data.cate_image"></dt>
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
          <div class="swiper-slide" v-for="data in lejilist" :key="data.goods_id"  @click="godetail(data.goods_id)">
            <dl>
              <dt><img :src="data.goods_image" alt="" v-lazy="data.goods_image"></dt>
              <dd>
                <p class="lejiname">{{data.goods_name}}</p>
                <p class="lejiprice">￥{{data.goods_price}}</p>
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
          <div class="swiper-slide" v-for="data in featurelist" :key="data.goods_id" @click="godetail(data.goods_id)">
            <dl >
              <dt><img :src="data.goods_image" alt="" v-lazy="data.goods_image"></dt>
              <dd>
                <p class="lejiname">{{data.goods_name}}</p>
                <p class="lejiprice">￥{{data.goods_price}}</p>
              </dd>
            </dl>
          </div>
          <div class="swiper-slide all">
            <p>查看全部</p>
          </div>
        </swiper>
      </div>
      <div class="category" ref="cate">
        <swiper :banner="{
        loop: false,
        pagination: {},
        slidesPerView: 5,
        spaceBetween: 20,
        freeMode: true
        }" class="categoryy" swipername="categoryy" :key="category.length" >
          <div class="swiper-slide" v-for="data in category" :key="data.gc_id">
            <a :href="'#'+ data.gc_id">{{data.cate_name}}</a>
          </div>
        </swiper>
      </div>
      <div class="categoods" v-for="data in categoods" :key="data.cate_info.gc_id">
        <p class="catename" :id="data.cate_info.gc_id">{{data.cate_info.cate_name}}</p>
        <ul class="categood">
          <li v-for="item in data.goods_list" :key="item.goods_id" @click="godetail(item.goods_id,item.goods_commonid)">
            <img :src="item.goods_image" alt="" v-lazy="item.goods_image"/>
            <p class="goodsname">{{ item.goods_name }}</p>
            <p class="goodsprice">￥{{ item.goods_price }}</p>
            <p class="goodsnum">已售{{ item.goods_salenum }}件</p>
          </li>
        </ul>
      </div>
      <goodslist></goodslist>
      <gotop></gotop>
      <router-view></router-view>
    </div>
</template>

<script>
import Axios from 'axios'
import citybtn from '@/components/citybtn'
import swiper from '@/components/swiper'
import goodslist from '@/components/goodslist'
import gotop from '@/components/GoTop'
import { Indicator } from 'mint-ui'
export default {
  data () {
    return {
      bannarlist: [],
      catelist: [],
      lejilist: [],
      featurelist: [],
      category: [],
      categoods: [],
      istop: false,
      isshow: false
    }
  },
  mounted () {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    Axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1576846125808&act=index&op=index&key=', `province_id=${localStorage.getItem('proviceId')}&city_id=${localStorage.getItem('cityId')}&qiang_zhi_geng_xin=`).then(res => {
      // console.log(res.data.datas.adv)
      this.bannarlist = res.data.datas.adv
      this.catelist = res.data.datas.platform.list
      this.lejilist = res.data.datas.le6ji.recommend_goods
      this.featurelist = res.data.datas.feature.recommend_goods
      this.category = res.data.datas.category
      this.categoods = res.data.datas.category_goods
      // console.log(this.categoods, 111)
      Indicator.close()
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
      if ((document.documentElement.scrollTop || document.body.scrollTop) >= this.$refs.banner.$el.offsetHeight) {
        this.istop = true
      } else {
        this.istop = false
      }
      // if (document.documentElement.scrollTop >= this.$refs.cate.$el.offsetTop) {
      //   this.iscate = true
      // } else {
      //   this.iscate = false
      // }
    },
    godetail (id, commonid) {
      this.$router.push(`/detail/${id}`)
      localStorage.setItem('commonid', commonid)
    }
  },
  beforeDestroy () {
    window.onscroll = null
  },
    beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    if (localStorage.getItem('proviceId')) {
      next()
    } else {
      next('/province')
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  background: #f0f0f0;
  overflow-y: hidden;
}
.leji{
  width: 100%;
  img{
    width: 100%;
  }
  .lejiname{
    font-size: 12px;
  }
  .lejiprice{
    text-align: center;
  }
}
.feature{
  width: 100%;
  img{
    width: 100%;
  }
    .lejiname{
    font-size: 12px;
  }
  .lejiprice{
    text-align: center;
  }
}
.categood {
  li {
    margin-left: 1%;
    margin-right: 1%;
    width: 48%;
    float: left;
    margin-bottom: 5px;
    background: white;
    img {
      width: 100%;
    }
    .goodsname {
      margin-left: 5px;
      // width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .goodsprice {
      margin-left: 5px;
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
.catename{
  margin: 10px 0;
  padding-left: 5px;
  font-size: 12px;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.category{
  // overflow: hidden;
  clear: both;
  position: relative;
}
.cate{
  position: fixed;
  top: 40px;
}
.categoryy{
  height: 40px;
  width: 100%;
  background: white;
  margin-top: 10px;
  // padding-left: 5px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  a{
  color: rgb(51,51,51);

  }
}
</style>
