<template>
  <div class="box">
    <div class="title">
      <img src="data:image/png;base64,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" alt="">
      <h2>购物车</h2>
      <p>编辑全部</p>
    </div>
    <div class="content">
      <div class="trade">
        <div class="input">
          <input type="checkbox" @change="state()">
          <div class="circle" v-if="istrue" style="background: orange;">√</div>
        </div>
        <h3>全选</h3>
      </div>
      <ul>
        <li v-for="data in dataList" :key="data.cartId">
          <div class="input">
            <input type="checkbox" @change="state()">
            <div class="circle" v-if="istrue" style="background: orange;">√</div>
          </div>
          <img :src="data.goodsimg" alt="商品图片">
          <div class="goodsitem">
            <div class="goodstitle">{{data.goodsname}}</div>
            <div class="price">现价：{{data.goodsprice}}</div>
          </div>
          <div class="cart">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="sumprice">
        <div class="sum">
          <span>合计：<em>￥0.00</em></span>
          <span>不含运费</span>
        </div>
        <span>去结算(0)</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    },
    data () {
      return {
        istrue: false,
        dataList: []
      }
    },
    mounted () {
      Axios.get(`/cart/select?userId=${localStorage.getItem('token')}`).then(res => {
        this.dataList = res.data.data
      })
    },
    methods: {
      state () {
        this.istrue = !this.istrue
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box{
    width: 100%;
    overflow: hidden;
    .input{
      box-sizing: border-box;
      float: left;
      width: 1.25rem;
      height: 1.25rem;
      border: 0.0625rem solid gray;
      border-radius: 50%;
      position: relative;
      margin-right: 0.625rem;
      input{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 5;
      }
      .circle{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        border-radius: 50%;
        text-align: center;
      }
    }
    .title{
      height: 3.125rem;
      width: 100%;
      border-bottom: 0.0625rem solid gray;
      img{
        height: 40%;
        float: left;
        margin-top: 0.9375rem;
      }
      h2{
        box-sizing: border-box;
        padding-left: 15%;
        width: 70%;
        float: left;
        line-height: 3.125rem;
        text-align: center;
      }
      p{
        float: left;
        width: 20%;
        line-height: 3.125rem;
        text-align: right;
      }
    }
    .content{
      width: 100%;
      .trade{
        box-sizing: border-box;
        width: 100%;
        height: 2.5rem;
        padding-top: 0.625rem;
        margin-left: 0.625rem;
      }
      ul{
        width: 100%;
        li{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 0 0.625rem;
          position: relative;
          border-bottom: 0.0625rem solid gray;
          padding-bottom: 0.3125rem;
          margin-bottom: 0.3125rem;
          &>img{
            width: 25%;
            align-self: center;
            margin-right: 0.625rem;
            margin-left: 2rem;
          }
          .input{
            // align-self: center;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
          }
          .goodsitem{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .goodstitle{
              width: 40%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-top: 0.625rem;
            }
            .price{
              margin-bottom: 2.5rem;
            }
          }
          .cart{
            position: absolute;
            right: 1rem;
            bottom: 1rem;
            margin-bottom: 0.625rem;
            display: flex;
            flex-direction: row;
            span{
              display: block;
              width: 1.875rem;
              height: 1.875rem;
              background: rgb(220,220,220);
              text-align: center;
              line-height: 1.875rem;
              border-left: 0.0625rem solid white;
            }
          }
        }
      }
    }
    .footer{
      position: fixed;
      bottom: 3.125rem;
      width: 100%;
      height: 3.125rem;
      display: flex;
      flex-direction: row;
      border: 0.0625rem solid gray;
      border-left: none;
      border-right: none;
      .sumprice{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        height: 3.125rem;
        .sum{
          width: 75%;
          height: 3.125rem;
          text-align: right;
          align-self: center;
          span{
            display: block;
            margin-right: 0.625rem;
            &:nth-child(1){
              margin-top: 0.3125rem;
              em{
                color: firebrick;
              }
            }
            &:nth-child(2){
              color: gray;
            }
          }
        }
        &>span{
          position: absolute;
          width: 25%;
          height: 100%;
          text-align: center;
          line-height: 3.125rem;
          background: #fb0a84;
          color: white;
          bottom: 0;
          right: 0;
        }
      }
    }
  }
</style>
