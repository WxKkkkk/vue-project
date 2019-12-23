<template>
  <div id="app">
    <router-view></router-view>
    <footbar v-if="$store.state.isprovince"></footbar>
  </div>
</template>
<script>
import footbar from '@/components/footBar'
export default {
  components: {
    footbar
  }
}
</script>

<style lang="scss">

</style>
