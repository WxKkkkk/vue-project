<template>
    <div>
       <mt-navbar  v-model="selected">
         <mt-tab-item v-for="name in this.$store.state.CategoryList" :key="name.gc_id" :id="name.gc_id" @click="getCategorySmallList(name.gc_id)">{{name.gc_name}}</mt-tab-item>
       </mt-navbar>

       <!-- tab-container -->
       <mt-tab-container v-model="selected">
         <mt-tab-container-item v-for="name in this.$store.state.CategoryList" :key="name.gc_id" :id="name.gc_id">
           <mt-cell v-for="n in this.$store.state.CategorySmallList" :title="n.gc_name" :key="n.gc_id" />
         </mt-tab-container-item>
       </mt-tab-container>
    </div>
</template>

<script>
export default {

  data () {
    return {
      selected: null
    }
  },
  methods: {
    getCategorySmallList (id) {
      this.$store.dispatch('getCategorySmallList', id)
    }
  },
  beforeCreate () {
    this.$store.dispatch('getCategoryList')
  }
}
</script>
