<template>
  <transition>
    <div v-if="isShowAside" class="aside ignore">
      <svg class="icon hideBtn" aria-hidden="true" @click="isShowAside = false">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <div class="userInfo">
        <div class="avatar">
          <img alt="" :src="detail.avatar" />
        </div>
        <div>{{ detail.slogan }}</div>
        <div class="others">
          <a href="https://github.com/Yourbones">
            <svg class="icon " aria-hidden="true">
              <use xlink:href="#icon-github"></use>
            </svg>
          </a>
          <a href="https://juejin.im/user/2612095359923470">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shequ"></use>
            </svg>
          </a>
        </div>
      </div>
      <!-- <div class="searchBox">搜索盒子</div> -->
      <!-- <div class="musicComponent">音乐盒子</div> -->
      <nav>
        <div class="title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-diqiu"></use>
          </svg>
          <span>页面</span>
        </div>
        <ul class="page">
          <li>
            <a href="/index">首页</a>
          </li>
          <li>
            <a href="/timeline">时间轴</a>
          </li>
          <li>
            <a href="/friends">友链</a>
          </li>
          <li>
            <a href="/about">关于</a>
          </li>
        </ul>
      </nav>
      <nav class="category">
        <div class="title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-leimupinleifenleileibie"></use>
          </svg>
          <span>分类</span>
        </div>
        <ul class="tag">
          <li>
            <a href="">生活</a>
          </li>
          <li>
            <a href="">技术</a>
          </li>
          <li>
            <a href="">记录</a>
          </li>
        </ul>
      </nav>
      <!-- <div class="friendLinks">
      <div>友链</div>
      <span>首页</span>
    </div> -->
    </div>
  </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.aside.ignore {
  position: fixed;
  top: 0;
  bottom: 0;
  padding: 0 10px;
  background: #333;
  color: #ccc;
  overflow: hidden;
  width: 260px;
  height: 100%;
  z-index: 99;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  text-align: center;
  .hideBtn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .userInfo {
    width: 100%;
    margin-top: 50px;
    color: #ccc;
    text-align: center;
    div {
      margin-top: 20px;
      font-size: 14px;
    }
    .avatar {
      width: 100%;
      height: 80px;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    .others {
      a {
        margin-right: 10px;
      }
    }
  }
  nav {
    width: 100%;
    padding: 20px 0;
    color: #cecece;
    .title {
      span {
        margin-left: 8px;
      }
    }
    ul {
      width: 80%;
      margin: 10px auto;
      li {
        display: inline-block;
        padding-bottom: 6px;
        margin-right: 10px;
        border-bottom: 1px solid #6f6d6d;
        list-style: none;
        a {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
  .category {
    padding-top: 0;
  }
}
</style>
