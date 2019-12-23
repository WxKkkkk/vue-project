<template>
    <div class="goods">
        <dl>
            <dt>
                <img src="https://img.lecuntao.com/data/upload/shop/store/goods/706/2018/03/22/706_05750564835517748_360.jpg" alt="">
            </dt>
            <dd>
                <p class="goodsname">【乐六集】【家电惠农补贴】 43英寸高清智能WIFI网络安卓平板LED液晶电视机 43寸 10000台 电话：4008123456</p>
                <p class="goodsprice">1498.00</p>
                <p class="goodsnum">已售3142件</p>
            </dd>
        </dl>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      cityId: localStorage.getItem('city_id')
    }
  },
  mounted () {
    Axios.post('https://mobileway.lecuntao.com/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577089826653&act=goods&op=goodsRecom_new', `provinc=140&city=140100000000&page=1&pageSize=10`)
  }
}
</script>

<style lang="scss" scoped>
.goods{
    dl{
        width: 50%;
        float: left;
        dt{
            img{
                width: 100%;
            }
        }
        dd{
            .goodsname{
                // width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .goodsprice{
                color: rgb(242,48,48);
                font-size: 18px;
                float: left;
            }
            .goodsnum{
                float: right;
                color:rgb(153,153,153);
                margin-top: 3px;

            }
        }
    }
}
</style>
