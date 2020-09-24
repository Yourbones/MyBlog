<template>
  <div class="footer">
    <p>Copyright 许啊切</p>
    <p class="copyright">©️2018 - 2019 | 浙ICP备18035124号-1</p>
  </div>
</template>

<script>
export default {
  name: 'foot',
}
</script>

<style scoped lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 15px;
  line-height: 24px;
  padding: 25px 0;
  color: black;
  .copyright {
    margin-top: 0;
  }
}
</style>
