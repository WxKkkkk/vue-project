<template>
  <div>
    <ul>
      <router-link to="/lecun" tag="li" activeClass="foot"><i class="iconfont">&#xe63d;</i><span>乐村</span></router-link>
      <router-link to="/Category" tag="li" activeClass="foot"><i class="iconfont">&#xe61c;
</i><span>分类</span></router-link>
      <router-link to="/Cart" tag="li" activeClass="foot"><i class="iconfont">&#xe512;</i><span>购物车</span></router-link>
      <router-link to="/Center" tag="li" activeClass="foot"><i class="iconfont">&#xe628;</i><span>我的</span></router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3.125rem;
    background: white;
    display: flex;
    justify-content: space-around;
    font-size: 0.75rem;
    z-index: 101;
    li{
      width: 25%;
      text-align: center;
      i,span{
        display: block;
      }
      i{
        margin-top: 0.375rem;
      }
      span{
        margin-top: 0.1875rem;
      }
    }
}
.foot{
    color: red
}
</style>
