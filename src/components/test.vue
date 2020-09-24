<template>
  <div class="wrapper">
    <div>{{ text }}</div>
    <button @click.stop="text = 'dududu'">改吧</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '测试一下吧',
    }
  },
  beforeCreate() {
    console.log('我是子组件beforeCreate')
  },
  created() {
    console.log('我是子组件created')
  },
  beforeMount() {
    console.log('我是子组件beforeMount')
  },
  mounted() {
    console.log('我是子组件mounted')
  },
  beforeUpdate() {
    console.log('我是子组件beforeUpdate')
  },
  updated() {
    console.log('我是子组件updated')
  },
  beforeDestroy() {
    console.log('我是子组件beforeDestory')
  },
  destroyed() {
    console.log('我是子组件destoryed')
  },
}
</script>
