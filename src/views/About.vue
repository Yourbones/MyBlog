<template>
  <div class="about">
    <h1>{{ text }}</h1>
    <button @click="$router.push('/login')">点击</button>
    <Test></Test>
  </div>
</template>

<script>
import Test from '@/components/test'

export default {
  data() {
    return {
      text: '这是关于页面',
    }
  },
  components: {
    Test,
  },
  beforeCreate() {
    console.log('我是父组件beforeCreate')
  },
  created() {
    console.log('我是父组件created')
  },
  beforeMount() {
    console.log('我是父组件beforeMount')
  },
  mounted() {
    console.log('我是父组件mounted')
  },
  beforeUpdate() {
    console.log('我是父组件beforeUpdate')
  },
  updated() {
    console.log('我是父组件updated')
  },
  beforeDestroy() {
    console.log('我是父组件beforeDestory')
  },
  destroyed() {
    console.log('我是父组件destoryed')
  },
}
</script>
