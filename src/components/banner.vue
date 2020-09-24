<template>
  <div class="banner">
    <p class="motto">{{ motto }}</p>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: ['motto', 'bannerImg'],
  data() {
    return {
      img: require('../../static/banner.jpg'),
    }
  },
}
</script>

<style scoped lang="scss">
.banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 900px;
  background: url('../../static/banner.jpg') no-repeat center center;
  background-size: cover;
  .motto {
    position: relative;
    top: 40%;
    margin: 0 auto;
    font-size: 50px;
    font-weight: bold;
    color: #fff;
  }
}
</style>
