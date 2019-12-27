<template>
  <div class="SearchPrepare">
    <div class="top">
      <img class="cancel" @click="returnlast()" src="../../public/images/cancel.jpg" />

      <div class="searchs">
        <div class="toSearch">
          <input @focus="input()" @blur="noinput()" type="text" placeholder="输入商品名称" />
          <span @click="changeToSearch()">{{ toSearch }}</span>
          <img @click="changeToSearch()" src="../../public/images/downarrow.jpg" />
          <img v-if="cancelbuttonExist" src="../../public/images/cancel.jpg" />
        </div>

        <ul v-if="toSearchListExist" class="toSearchList">
          <li @click="changeSearchToGoods()">
            <img src="../../public/images/shoppingbag.jpg" />
            <span>商品</span>
          </li>
          <li @click="changeSearchToShops()">
            <img src="../../public/images/shop.jpg" />
            <span>店铺</span>
          </li>
        </ul>
      </div>

      <span @click="search()">搜索</span>
    </div>

    <ul class="hot">
      <div>
        <span class="hottext">Hot</span>
        <span class="hottextChinese">热门搜索</span>
      </div>
      <li v-for="name in this.$store.state.HotSearchList" :key="name" @click="searchHotOrHistory(name)">{{ name }}</li>
    </ul>

    <ul class="history">
      <div>
        <span>搜索历史</span>
        <span @click="$store.commit('clearAll')">清空</span>
        <img @click="$store.commit('clearAll')" src="../../public/images/clearall.jpg" />
      </div>
      <li v-for="name in this.$store.state.HistorySearchList" :key="name" @click="searchHotOrHistory(name)">{{ name }}</li>
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
      toSearch: '商品',
      cancelbuttonExist: false,
      toSearchListExist: false,
      searchText: ''
    }
  },
  methods: {
    input () {
      this.cancelbuttonExist = true
    },
    noinput () {
      this.cancelbuttonExist = false
    },
    changeToSearch () {
      if (this.toSearchListExist) {
        this.toSearchListExist = false
      } else {
        this.toSearchListExist = true
      }
    },
    changeSearchToGoods () {
      this.toSearch = '商品'
      this.toSearchListExist = false
    },
    changeSearchToShops () {
      this.toSearch = '店铺'
      this.toSearchListExist = false
    },
    returnlast () {
      window.history.go(-1)
    },
    search () {
      this.searchText = document.querySelector('.SearchPrepare .toSearch input').value
      if (this.searchText === '' || this.searchText === undefined) {
      } else {
        this.$store.commit('addHistory', this.searchText)
        localStorage.setItem('ifSearch', '1')
        localStorage.setItem('keyword', this.searchText)
        this.$router.push({ name: 'CategoryDetails' })
      }
    },
    searchHotOrHistory (name) {
      this.$store.commit('addHistory', name)
      this.searchText = name
      localStorage.setItem('ifSearch', '1')
      localStorage.setItem('keyword', this.searchText)
      this.$router.push({ name: 'CategoryDetails' })
    }
  }
}
</script>

<style>
.SearchPrepare {
  height: 100%;
  width: 100%;
  text-align: center;
}
.SearchPrepare .top {
  width: 90%;
  height: 2rem;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 1rem;
}
.SearchPrepare .top > span {
  margin-top: 0.3rem;
  font-size: 1rem;
  float: right;
}
.SearchPrepare .top .cancel {
  height: 1.2rem;
  width: 1.2rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  float: left;
}
.SearchPrepare .top .searchs {
  height: 2rem;
  width: 70%;
  margin-left: 1.5rem;
  float: left;
  position: relative;
}
.SearchPrepare .top .searchs .toSearch {
  width: 100%;
  height: 100%;
  position: relative;
}
.SearchPrepare .top .searchs .toSearch input {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 1rem;
  padding-left: 30%;
  background-color: rgb(239, 239, 239);
  left: 0;
  z-index: 1;
}
.SearchPrepare .top .searchs .toSearch span {
  position: absolute;
  left: 0.6rem;
  top: 0.4rem;
  margin-top: 0;
  z-index: 2;
}
.SearchPrepare .top .searchs .toSearch img:nth-of-type(1) {
  position: absolute;
  left: 2.7rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  z-index: 2;
  padding-right: 0.2rem;
  border-right: 0.05rem rgb(217, 217, 217) solid;
}
.SearchPrepare .top .searchs .toSearch img:nth-of-type(2) {
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  z-index: 2;
}
.SearchPrepare .top .searchs .toSearchList {
  position: absolute;
  width: 7rem;
  box-sizing: border-box;
  padding: 0.2rem;
  background-color: rgb(64, 64, 64);
  z-index: 3;
  top: 2.5rem;
  left: 0.5rem;
}
.SearchPrepare .top .searchs .toSearchList li {
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  text-align: center;
  overflow: hidden;
}
.SearchPrepare .top .searchs .toSearchList li:nth-of-type(1) {
  border-bottom: 0.2rem white solid;
}
.SearchPrepare .top .searchs .toSearchList li img {
  width: 1rem;
  height: 1rem;
  float: left;
  margin-right: 0.5rem;
}
.SearchPrepare .top .searchs .toSearchList li span {
  float: left;
  color: white;
  font-size: 1rem;
  margin-left: 1.5rem;
}
.SearchPrepare .hot {
  width: 90%;
  overflow: hidden;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
}
.SearchPrepare .hot div {
  width: 100%;
  float: left;
}
.SearchPrepare .hot div span {
  float: left;
}
.SearchPrepare .hot .hottext {
  color: red;
  font-size: 1rem;
}
.SearchPrepare .hot .hottextChinese {
  font-size: 1rem;
}
.SearchPrepare .hot li {
  height: 2rem;
  line-height: 2rem;
  border: 1px rgb(206, 206, 206) solid;
  border-radius: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  float: left;
}
.SearchPrepare .history {
  width: 100%;
  margin-top: 1rem;
  text-align: center;
  overflow: hidden;
}
.SearchPrepare .history div {
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
  border-bottom: 0.1rem rgb(239, 239, 239) solid;
  height: 2rem;
}
.SearchPrepare .history div span:nth-of-type(1) {
  color: grey;
  font-size: 1rem;
  float: left;
}
.SearchPrepare .history img {
  height: 1rem;
  width: 1rem;
  margin-top: 0.2rem;
  float: right;
}
.SearchPrepare .history div span:nth-of-type(2) {
  color: grey;
  font-size: 1rem;
  float: right;
}
.SearchPrepare .history li {
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
  height: 2rem;
  line-height: 2rem;
  border-bottom: 0.1rem rgb(239, 239, 239) solid;
  text-align: left;
}
</style>
