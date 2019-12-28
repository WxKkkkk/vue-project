<template>
  <div class="box">
    <div class="head">
      <dl>
        <dt>收货人：{{name}}</dt>
        <dd>收货地址：{{position}}</dd>
      </dl>
    </div>
    <ul class="goodslist">
      <li>
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2019/06/20/723_06143897389323496_360.jpg"
          alt
        />
        <p>小天鹅</p>
        <p>￥699.00</p>
        <p>x 1</p>
      </li>
      <li>
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2019/06/20/723_06143897389323496_360.jpg"
          alt
        />
        <p>小天鹅</p>
        <p>￥699.00</p>
        <p>x 1</p>
      </li>
      <li>
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2019/06/20/723_06143897389323496_360.jpg"
          alt
        />
        <p>小天鹅</p>
        <p>￥699.00</p>
        <p>x 1</p>
      </li>
    </ul>
    <div class="foot">
      <p>提交订单</p>

      <p>
        合计：
        <span>￥900</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: JSON.parse(localStorage.getItem('token')).name,
      position: localStorage.getItem('provice') + localStorage.getItem('city')
    }
  },
  mounted () {
    this.$store.state.isprovince = false
  },
  beforeDestroy () {
    this.$store.state.isprovince = true
  }
}
</script>

<style lang="scss" scoped>
// .box{
//     background: #f0f0f0;
// }
.head {
  width: 100%;
  height: 7rem;
  background: #f0f0f0;
  font-size: 1rem;
  margin-bottom: 1rem;
  dl {
    padding-top: 1.5rem;
    padding-left: 2rem;
    dt {
      font-size: 1.3rem;
      color: #333;
      margin-bottom: 0.5rem;
    }
    dd {
      font-size: 1rem;
      color: #333;
    }
  }
}
.goodslist {
  li {
    height: 5rem;
    width: 96%;
    margin: 0.5rem 2%;
    background: #f0f0f0;
    img {
      width: 4.8rem;
      height: 4.8rem;
      float: left;
      margin-top: 0.1rem;
      margin-left: 0.1rem;
    }
  }
}
.foot {
  width: 100%;
  height: 3rem;
  background: white;
  position: fixed;
  bottom: 0;
  p {
    &:last-of-type {
      float: right;
      text-align: right;
      line-height: 3rem;
      margin-right: 1rem;
      font-size: 1rem;
      span {
        color: red;
      }
    }
    &:first-of-type {
      line-height: 3rem;
      text-align: center;
      width: 30%;
      height: 3rem;
      background: red;
      float: right;
      color: white;
      font-size: 1rem;
    }
  }
}
</style>
