<template>
  <div id="app">
    <router-view></router-view>
    <footbar></footbar>
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
