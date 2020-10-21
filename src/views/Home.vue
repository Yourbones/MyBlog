<template>
  <div class="home">
    <Banner :imgUrl="imgUrl" :text="text"></Banner>
    <Aside :info="asideInfo"></Aside>
    <!-- <main>
      <article>
        <div>
          <img src="" alt="文章主图" />
        </div>
        <div class="synopsis"></div>
        <footer>
          <span>
            <span class="tag"></span>
            <span class="comments"></span>
            <span class="reads"></span>
          </span>
          <span class="updateTime"></span>
        </footer>
      </article>
    </main> -->
  </div>
</template>

<script>
import Aside from '../components/aside'
import Banner from '../components/banner'

export default {
  name: 'Home',
  data() {
    return {
      asideInfo: {},
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/10556447-ee3798731e94278d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
      text: '我爱我所爱的人',
    }
  },
  components: {
    Aside,
    Banner,
  },
  created() {
    this.getAsideInfo()
  },
  methods: {
    getAsideInfo() {
      this.$http.get('http://192.168.137.12:3000/mock/45/blog/getAsideInfo').then(res => {
        if (res.data.rc === 0) {
          const data = res.data.data

          this.asideInfo = data || {}
        } else {
          alert(res.data.statusText)
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: rgb(247, 247, 247);
}
</style>
