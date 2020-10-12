<template>
  <div class="banner">
    <img :src="imgUrl" alt="头图" />
    <div class="banner-title">
      <h1>{{ text }}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    imgUrl: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 65vh;
  }
  .banner-title {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #fff;
    h1 {
      margin-bottom: 20px;
    }
  }
}
</style>
