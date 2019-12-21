<template>
  <div>
    <ul>
      <router-link to="/lecun" tag="li" activeClass="foot">乐村</router-link>
      <router-link to="/Category" tag="li" activeClass="foot">分类</router-link>
      <router-link to="/Cart" tag="li" activeClass="foot">购物车</router-link>
      <router-link to="/Center" tag="li" activeClass="foot">我的</router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: white;
    display: flex;
    justify-content: space-around;
    line-height: 50px;
    font-size: 16px;
}
.foot{
    color: red
}
</style>
