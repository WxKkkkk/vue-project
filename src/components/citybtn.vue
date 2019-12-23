<template>
  <div class="indexhead">
    <div class="citybtn" @click="cityview">
      <p>
        {{cityname}}
        <span>&gt;</span>
      </p>
    </div>
    <div class="search">
      <input type="text" placeholder="输入搜索内容" />
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            cityname: localStorage.getItem('city')
        }
    },
    methods: {
        cityview () {
            this.$router.push('/province')
        }
    }
}
</script>

<style lang="scss" scoped>
.indexhead {
  height: 40px;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
//   background: red;
  z-index: 100;
  .citybtn {
    box-sizing: border-box;
    // flex: 1;
    font-size: 16px;
    line-height: 40px;
    color: white;
    p {
      padding-left: 10px;
      span {
        margin-left: 10px;
      }
    }
  }
  .search {
    margin-left: 10px;
    flex: 3;
    margin-top: 5px;
    margin-right: 10px;
    input {
      height: 30px;
      border: none;
      width: 100%;
      border-radius: 15px;
      font-size: 15px;
      box-sizing: border-box;
      padding-left: 15px;
    }
  }
}
.top{
  background: red;
}
</style>
