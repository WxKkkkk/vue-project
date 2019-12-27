<template>
  <div class="Category">
    <div class="CategorySearch">
      <input type="text" placeholder="输入商品名称" @click="toSearchPrepare()" />
      <span @click="returnlast()">取消</span>
    </div>
    <ul>
      <li
        :class="ind === index ? 'onclickList' : ''"
        v-for="(name, index) in $store.state.CategoryList"
        :key="name.gc_id"
        :id="name.gc_id"
        @click="
          getCategorySmallList(name.gc_id);
          onclick($event, index);
        "
      >
        {{ name.gc_name }}
      </li>
    </ul>
    <div id="Smalllist">
      <div v-for="n in $store.state.CategorySmallList" :key="n.gc_id" :id="n.gc_id" @click="toCategoryDetails($event,n)" :ref='n.gc_id' :name="n.gc_name">
        <img :src="n.cate_img" />
        <span>{{ n.gc_name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ind: 0
    }
  },
  methods: {
    getCategorySmallList (id) {
      this.$store.dispatch('getCategorySmallList', id)
    },
    onclick (e, index) {
      this.ind = index
    },
    toCategoryDetails (e, n) {
      localStorage.setItem('gcId', n.gc_id)
      localStorage.setItem('ifSearch', '0')
      this.$router.push({ name: 'CategoryDetails', params: { gcName: n.gc_name } })
    },
    toSearchPrepare () {
      this.$router.push({ name: 'SearchPrepare' })
    },
    returnlast () {
      window.history.go(-1)
    }
  },
  created () {
    this.$store.dispatch('getCategoryList')
  },
  mounted () {}
}
</script>

<style>
.Category {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: white;
}
.CategorySearch {
  top: 0;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 0.1rem rgb(223, 223, 223) solid;
}
.CategorySearch input {
  height: 1.5rem;
  width: 70%;
  background-color: rgb(239, 239, 239);
  border-radius: 1rem;
  padding-left: 5%;
  margin-left: 5%;
  margin-top: 3%;
  border: none;
  float: left;
}
.CategorySearch span {
  float: right;
  margin-right: 7%;
}
.Category ul {
  float: left;
  height: 100%;
  width: 5rem;
  overflow: hidden;
}
.Category li {
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background-color: rgb(236, 236, 236);
}
.Category #Smalllist {
  width: 18rem;
  float: right;
  overflow: hidden;
}
.Category #Smalllist div {
  height: 5%;
  width: 33%;
  text-align: center;
  float: left;
}
.Category #Smalllist img {
  width: 100%;
}
.Category #Smalllist span {
  display: inline-block;
  height: 1rem;
  line-height: 1rem;
  width: 100%;
}
.Category .onclickList {
  background-color: white;
  color: red;
}
</style>
