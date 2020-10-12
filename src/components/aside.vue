<template>
  <div v-show="isShowAside" class="aside">
    <div class="hideBtn" @click="isShowAside = false"></div>
    <div class="userInfo">
      <img alt="头像" :src="detail.avatar" />
      <p>{{ detail.slogan }}</p>
    </div>
    <div class="searchBox">搜索盒子</div>
    <div class="musicComponent">音乐盒子</div>
    <nav>
      <div>页面</div>
      <span>首页</span>
      <span>时间轴</span>
      <span>友链</span>
      <span>关于</span>
    </nav>
    <div class="category">
      <div>分类</div>
      <span>生活</span>
      <span>技术</span>
      <span>记录</span>
    </div>
    <div class="friendLinks">
      <div>友链</div>
      <span>首页</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  props: {
    info: {
      type: Object,
    },
  },
  data() {
    return {
      // 是否展示侧边栏
      isShowAside: true,
    }
  },
  computed: {
    // 传入的侧边栏信息
    detail() {
      return Object.assign({}, this.info)
    },
  },
  created() {},
}
</script>

<style lang="scss" scoped>
.aside {
  position: fixed;
  top: 0;
  bottom: 0;
  padding: 0 10px;
  background: #333;
  color: #ccc;
  overflow: hidden;
  width: 230px;
  height: 100%;
  z-index: 99;
  transition: all 0.3s;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  text-align: center;
  .hideBtn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background: aqua;
    border-radius: 50%;
  }
  .userInfo {
    margin-top: 50px;
    color: #ccc;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    p {
      font-size: 12px;
    }
  }
  .userInfo,
  .searchBox,
  .musicComponent,
  nav,
  .category,
  .friendLinks {
    width: 100%;
    height: 120px;
  }
}
</style>
