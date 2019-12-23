<template>
  <div class="Category">
    <ul>
      <li class="" v-for="name in $store.state.CategoryList" :key="name.gc_id" :id="name.gc_id" @click="getCategorySmallList(name.gc_id);onclick($event)">{{ name.gc_name }}</li>
    </ul>
    <div id="Smalllist">
      <div v-for="n in $store.state.CategorySmallList" :key="n.gc_id" :id="n.gc_id">
        <img :src="n.cate_img" />
        <span>{{ n.gc_name }}</span>
      </div>
    </div>
  </div>

</template>

<script>
// console.log(this)
export default {
  data () {
    return {}
  },
  methods: {
    getCategorySmallList (id) {
      //   if (localStorage.getItem('CategorySmallList')) {
      //     ;
      //   } else {
      this.$store.dispatch('getCategorySmallList', id)
      // localStorage.setItem('CategorySmallList', this.$store.state.CategorySmallList)
      //   }
    },
    onclick (e) {
      let list = document.querySelectorAll('.Category li')
      for (let a = 0; a < list.length; a++) {
        if (list[a].className === 'onclickList') {
          list[a].classList.remove('onclickList')
        }
      }
      e.target.classList.add('onclickList')
    }
  },
  beforeCreate () {
    // if (localStorage.getItem('CategoryList')) {
    //   ;
    // } else {
    this.$store.dispatch('getCategoryList')
    // localStorage.setItem('CategoryList', this.$store.state.CategoryList)
    // }
  },
  mounted () {
    let a = document.querySelector('.Category li:nth-of-type(1)')
    a.classList.add('onclickList')
    this.$store.dispatch('getCategorySmallList', a.getAttribute('key'))
  }
}
</script>

<style>
.Category {
  position: relative;
  height: 100%;
  width: 100%;
}
.Category ul {
  position: absolute;
  left: 0;
  width: 5rem;
  height: 100%;
}
.Category li {
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background-color: rgb(236,236,236);
}
#Smalllist {
  width: 17rem;
  position: absolute;
  right: 0;
}
#Smalllist div{
  height: 5%;
  width: 33%;
  text-align: center;
  float: left;
}
#Smalllist img{
  width: 100%;
}
#Smalllist span{
  display: inline-block;
  height: 1rem;
  line-height: 1rem;
  width: 100%;
}
.onclickList{
  background-color: white;
  color: red;
}
</style>
