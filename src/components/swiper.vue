<template>
  <div class="swiper-container wxk">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  props: ['banner', 'swipername'],
  mounted () {
    // console.log(this.swipername)
    var defaultProps = {
      // loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    }
    new Swiper(`.${this.swipername ? this.swipername : 'wxk'}`, { ...defaultProps, ...this.banner })
    // console.log(this.swipername)
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  // height: 200px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.catelist{
  height: 80px;
  padding-top: 20px;
  background: white;
  dl{
    dt{
      display: flex;
      justify-content: center;
      img{
        width: 40px;
        height: 40px;
      }
    }
    dd{
    text-align: center;
  }
  }
}
.lejilist{
  height: 190px;
  .swiper-slide{
    width: 30%;
    background: white;
  }
  dl{
    margin-top: 20px;
  }
  dd{
    margin-top: 10px;
    .lejiname{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .lejiprice{
      margin-top: 10px;
      color: red;
    }
  }
  .all{
    text-align: center;
    line-height: 190px;
  }
}
.featurelist{
  height: 190px;
  .swiper-slide{
    width: 30%;
    background: white;
  }
  dl{
    margin-top: 20px;
  }
  dd{
    margin-top: 10px;
    .lejiname{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .lejiprice{
      margin-top: 10px;
      color: red;
    }
  }
  .all{
    text-align: center;
    line-height: 190px;
  }
}
</style>
