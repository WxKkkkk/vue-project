<template>
    <div v-if="detailimg.length" class="box">
      <backbtn></backbtn>
      <swiper :banner="{}" class="detailimg" swipername="detailimg">
        <div class="detail swiper-slide" v-for="(data,index) in detailimg" :key="index">
          <img :src="data.goods_image" alt="">
        </div>
      </swiper>
      <div class="detaildata">
        <p class="detailName">{{detailinfo.goods_name}}</p>
        <p class="detailJingle">{{detailinfo.goods_jingle}}</p>
        <p class="detailPrice">￥{{detailinfo.goods_price}}<span>{{detailinfo.goods_marketprice}}</span></p>
        <p class="detailFare">运费{{detailinfo.fare_title}}</p>
      </div>
      <div class="detailNum">
        <p>请选择数量</p>
      </div>
      <div v-html="detailbody" class="detailbody"></div>
      <div class="detailfoot">
        <p>加入购物车</p>
        <p>立即购买</p>
      </div>
    </div>
</template>
<script>
import backbtn from '@/components/backbtn'
import Axios from 'axios'
import swiper from '@/components/swiper'
export default {
  components: {
    backbtn,
    swiper
  },
  data () {
    return {
      goodsId: this.$route.params.goodsid,
      commonId: localStorage.getItem('commonid'),
      detailimg: [],
      detailinfo: {},
      commonindex: '',
      detailbody: ''
    }
  },
  mounted () {
    this.$store.state.isprovince = false
    Axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577158264562&act=mobile_goods_detail&op=getGoodsInfo', `city_id=${localStorage.getItem('cityId')}&province_id=${localStorage.getItem('proviceId')}&goods_id=${this.goodsId}&key=`).then(res => {
      // console.log(res.data)
      this.detailimg = res.data.datas.img_list
      this.detailinfo = res.data.datas.goods_info
      this.commonindex = this.detailinfo.goods_commonid

      // console.log(this.detailinfo)
    })
  },
  created () {
    Axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577166508140&act=mobile_goods_detail&op=getDetailData', `common_id=${this.commonId}&goods_id=${this.goodsId}&key=`).then(res => {
      // console.log(res.data.datas.goodsDetail)
      this.detailbody = res.data.datas.goodsDetail.goods_body
    })
  },
  beforeDestroy () {
    this.$store.state.isprovince = true
  }
}
</script>

<style lang="scss" scoped>
.box{
  background: #f0f0f0;
  .detaildata{
    padding-left: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: white;
    .detailName{
      font-size: 18px;
      color: #252525;
    }
    .detailJingle{
      margin-top: 3px;
      font-size: 12px;
      color: #808080;
    }
    .detailPrice{
      margin-top: 8px;
      font-size: 24px;
      color: #ff4b4b;
      span{
        font-size: 12px;
        color: #808080;
        margin-left: 6px;
        text-decoration: line-through;
      }
    }
    .detailFare{
      margin-top: 8px;
      color: #808080;
      font-size: 12px;
    }
  }
  .detailNum{
    margin: 10px 0;
    height: 40px;
    background: white;
    padding-left: 5px;
    p{
      line-height: 40px;
      color: #808080;
      font-size: 15px;
    }
  }
  .detailbody{
    width: 100%;
  }
  .detailbody /deep/ img{
    width: 100%;
  }
  .detailbody /deep/ #yao_jian_ju_img{
    display: none;
  }
  .detailfoot{
    width: 100%;
    height: 50px;
    background: red;
    position: fixed;
    bottom: 0;
    z-index: 100;
    color: white;
    display: flex;
    justify-content: space-around;
    p{
      width: 50%;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      &:first-of-type{
        background: #ff9c00;
      }
      &:last-of-type{
        background: #f64750;
      }
    }
  }
}

</style>
