<template>
  <div class="SearchPrepare">
    <div class="top">
      <img class="cancel" src="../../public/images/cancel.jpg">

      <div class="searchs">

        <div class="toSearch">
          <input type="text" placeholder="输入商品名称">
          <span>{{toSearch}}</span>
          <img src="../../public/images/downarrow.jpg">
          <img src="../../public/images/cancel.jpg">
        </div>

        <ul class="toSearchList">
          <li>
            <img src="../../public/images/shoppingbag.jpg">
            <span>商品</span>
          </li>
          <li>
            <img src="../../public/images/shop.jpg">
            <span>店铺</span>
          </li>
        </ul>

      </div>

      <span>搜索</span>
    </div>

    <ul class="hot">
      <div>
        <span class="hottext">Hot</span>
        <span class="hottextChinese">热门搜索</span>
      </div>
      <li v-for="name in this.$store.state.HotSearchList" :key="name">{{name}}</li>
    </ul>

    <ul class="history">
      <div>
        <span>搜索历史</span>
        <img src="../../public/images/clearall.jpg">
        <span>清空</span>
      </div>
      <li></li>
    </ul>

  </div>
</template>

<script>
  export default {
    created () {
      this.$store.dispatch('getHotSearchList')
    },
    data () {
      return {
        toSearch: '商店'
      }
    }
  }
</script>

<style>
  .SearchPrepare{
    height: 100%;
    width: 100%;
  }
  .SearchPrepare .top{
    width: 100%;
    height: 4rem;
    padding: 0.5rem;
    overflow: hidden;
  }
  .SearchPrepare .top .cancel{
    height: 0.5rem;
    width: 0.5rem;
    float: left;
  }
  .SearchPrepare .top .searchs{
    height: 3rem;
    width: 60%;
  }
  .SearchPrepare .top .searchs .toSearch{
    width: 100%;
    height: 100%;
    line-height: 3rem;
  }
  .SearchPrepare .top .searchs .toSearch input{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
    padding-left: 30%;
    background-color: rgb(239,239,239);
  }
  .SearchPrepare .top .searchs .toSearch span{
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    float: left;
  }
  .SearchPrepare .top .searchs .toSearch img:nth-of-type(1){
    float: left;
    width: 1rem;
    height: 1rem;
  }
  .SearchPrepare .top .searchs .toSearch img:nth-of-type(2){
    float: right;
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
  }
  .SearchPrepare .top .searchs .toSearchList{
    width: 5rem;]
    box-sizing: border-box;
    padding: 1rem;
    background-color: rgb(64,64,64);
    display: none;
  }
  .SearchPrepare .top .searchs .toSearchList li{
    width: 100%;
    box-sizing: border-box;
    height: 3rem;
    padding: 2rem;
    line-height: 3rem;
    text-align: center;
  }
  .SearchPrepare .top .searchs .toSearchList li img{
   float: left;
   margin-right: 0.5rem;
  }
  .SearchPrepare .top .searchs .toSearchList li span{
   float: left;
  }
  .SearchPrepare .hot{
    width: 100%;
    overflow: hidden;
    padding: 1rem;
  }
  .SearchPrepare .hot div{
    width: 100%;
    float: left;
  }
  .SearchPrepare .hot .hottext{
    color: red;
    font-size: 0.8rem;
  }
  .SearchPrepare .hot .hottextChinese{
    font-size: 1rem;
  }
  .SearchPrepare .hot li{
    height: 3rem;
    line-height: 3rem;
    border: 1px rgb(206,206,206) solid;
    border-radius: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    float: left;
  }
</style>
