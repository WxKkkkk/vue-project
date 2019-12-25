<template>
    <div>
        <div class="backbtn" @click="backbtn">
            &lt;
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    backbtn () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.backbtn{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: rgba($color: #000000, $alpha: 0.4);
    line-height: 30px;
    text-align: center;
    color: white;
    font-size: 15px;
    position: fixed;
    top:10px;
    left: 10px;
    z-index: 155;
}
</style>
