<template>
  <div class="box">
    <backbtn></backbtn>
    <div class="head">
      <dl>
        <dt>收货人：{{name}}</dt>
        <dd>收货地址：{{position}}</dd>
        <span @click="editsite()">去设置</span>
      </dl>
    </div>
    <ul class="goodslist">
      <li v-for="data in goods" :key="data.cartId">
        <img :src="data.goodsimg" alt="" />
        <p>名称：{{data.goodsname}}</p>
        <p>数量：{{data.goodsnumber}}</p>
        <p>总价：{{parseFloat(data.goodsnumber * data.goodsprice).toFixed(2)}}</p>
      </li>
    </ul>
    <div class="foot">
      <p @click="code===0 ? null : gopayment()" :class="code===0 ? 'nopay' : 'pay'">去支付</p>

      <p>
        合计：
        <span>￥{{total}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import backbtn from '@/components/backbtn'
  import Axios from 'axios'
  export default {
    data () {
      return {
        name: JSON.parse(localStorage.getItem('token')).name,
        position: '',
        code: Number,
        goods: []
      }
    },
    mounted () {
      Axios.post('/order/site', {
        uid: JSON.parse(localStorage.getItem('token')).id
      }).then(res => {
        if (res.data.code === 0) {
          this.position = res.data.msg
          this.code = 0
        } else {
          this.position = localStorage.getItem('provice') + localStorage.getItem('city') + res.data.data
          this.code = 1
        }
      })
      this.$store.state.isprovince = false
      this.goods = this.$store.state.orderList
    },
    computed: {
      total () {
        var total = 0
        for (var i of this.goods) {
          total += i.goodsprice * i.goodsnumber
        }
        return parseFloat(total).toFixed(2)
      }
    },
    methods: {
      editsite () {
        this.$router.push('/address')
      }
    },
    components: {
      backbtn
    },
    beforeDestroy () {
      this.$store.state.isprovince = true
    }
  }
</script>

<style lang="scss" scoped>
.pay{
  background: red;
}
.nopay{
  background: gray;
}
.head {
  width: 100%;
  height: 7rem;
  background: #f0f0f0;
  font-size: 1rem;
  margin-bottom: 1rem;
  dl {
    padding-top: 1.5rem;
    padding-left: 3.75rem;
    dt {
      font-size: 1.3rem;
      color: #333;
      margin-bottom: 0.5rem;
    }
    dd {
      font-size: 1rem;
      color: #333;
      float: left;
    }
    span{
      display: inline-block;
      width: 5rem;
      height: 1.875rem;
      line-height: 1.875rem;
      background: gold;
      border-radius: 1.25rem;
      text-align: center;
      transform: translateY(-15%);
      margin-left: 0.5rem;
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
      margin-right: 0.625rem;
    }
    p:nth-of-type(1){
      width: 70%;
      height: 1.25rem;
      line-height: 1.25rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.625rem;
    }
    p:nth-of-type(2){
      width: 70%;
      height: 1.25rem;
      line-height: 1.25rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.625rem;
    }
    p:nth-of-type(3){
      width: 70%;
      height: 1.25rem;
      line-height: 1.25rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
      float: right;
      color: white;
      font-size: 1rem;
    }
  }
}
</style>
